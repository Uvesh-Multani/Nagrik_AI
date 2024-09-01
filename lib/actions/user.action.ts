"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

// Type for user input
interface UserInput {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}

// Create a new user
export async function createUser(user: UserInput) {
  try {
    // Connect to the database
    await connect();

    // Create a new user in the database
    const newUser = await User.create({
      data: {
        clerkId: user.clerkId,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        photo: user.photo,
      }
    });

    // Return the newly created user
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    // Log and throw the error
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}

// Update user email if necessary
export async function updateUserEmail(clerkId: string, email: string) {
  try {
    await connect();
    const updatedUser = await User.findOneAndUpdate(
      { clerkId },
      { email },
      { new: true }
    );
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.error("Error updating user email:", error);
    throw new Error("Failed to update user email");
  }
}
