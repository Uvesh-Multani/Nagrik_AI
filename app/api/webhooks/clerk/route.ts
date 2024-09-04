import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { createUser } from "@/lib/actions/user.action";

// Ensure WEBHOOK_SECRET is set
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
if (!WEBHOOK_SECRET) {
  throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
}

// Create a new Svix instance with your secret
const wh = new Webhook(WEBHOOK_SECRET);

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Error: Missing svix headers");
    return new Response("Error occurred -- missing svix headers", { status: 400 });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  console.log("Webhook Payload:", payload);

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
        const response = await fetch(`https://api.clerk.dev/v1/users/${user.clerkId}`, {
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

        if (!response.ok) {
          console.error("Failed to update Clerk metadata:", response.statusText);
        }
      }

      return NextResponse.json({ message: "New user created", user: newUser });
    } catch (error) {
      console.error("Error creating user or updating metadata:", error);
      return new Response("Error occurred while processing user creation", { status: 500 });
    }
  }

  console.log(`Unhandled webhook with ID: ${evt.data.id} and type: ${eventType}`);
  return new Response("", { status: 200 });
}