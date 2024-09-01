import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { createUser, updateUserEmail } from "@/lib/actions/user.action";

// Ensure WEBHOOK_SECRET is set
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
if (!WEBHOOK_SECRET) {
  throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
}

// Create a new Svix instance with your secret
const wh = new Webhook(WEBHOOK_SECRET);

export async function POST(req: Request) {
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Error: Missing svix headers");
    return new Response("Error occurred -- no svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred during verification", { status: 400 });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

    const email = email_addresses ? email_addresses[0].email_address : "unknown@example.com";
    const user = {
      clerkId: id,
      email: email,
      username: username || "unknown",
      firstName: first_name || "",
      lastName: last_name || "",
      photo: image_url || "",
    };

    try {
      console.log("Creating user in MongoDB:", user);
      const newUser = await createUser(user);

      if (newUser) {
        await fetch(`https://api.clerk.dev/v1/users/${user.clerkId}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            publicMetadata: {
              userId: newUser._id,
            },
          }),
        });
      }

      return NextResponse.json({ message: "New user created", user: newUser });
    } catch (error) {
      console.error("Error creating user or updating metadata:", error);
      return new Response("Error occurred while processing user creation", { status: 500 });
    }
  }

  if (eventType === "email.created") {
    const { user_id, to_email_address } = evt.data;

    if (!user_id || !to_email_address) {
      console.error("Error: Missing user_id or to_email_address");
      return new Response("Error occurred -- missing user details", { status: 400 });
    }

    try {
      const updatedUser = await updateUserEmail(user_id, to_email_address);
      return NextResponse.json({ message: "User email updated", user: updatedUser });
    } catch (error) {
      console.error("Error updating user email:", error);
      return new Response("Error occurred while updating user email", { status: 500 });
    }
  }

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}
