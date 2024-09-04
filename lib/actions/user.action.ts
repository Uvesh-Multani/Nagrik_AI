"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

export async function createUser(user: any) {
  try {
    const db = await connect();  // Ensure database connection
    const newUser = await User.create(user);  // Create a new user in the database
    return newUser;
  } catch (error) {
    console.error("Error creating user in MongoDB:", error);
    throw error;  // Re-throw the error to handle it in the webhook
  }
}
