"use server";

import { createClient } from "@/lib/supabase/server";

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || typeof email !== "string") {
    return { success: false, message: "Please provide a valid email address." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim() });

    if (error) {
      if (error.code === "23505") {
        // Unique constraint violation
        return {
          success: false,
          message: "This email is already on the waitlist!",
        };
      }
      console.error("Waitlist insert error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
      };
    }

    return {
      success: true,
      message: "You're on the list! We'll be in touch soon.",
    };
  } catch (err) {
    console.error("Waitlist error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
