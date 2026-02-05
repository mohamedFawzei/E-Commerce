import * as z from "zod";

export const loginschema = z.object({
  email: z
    .email({ message: "Enter a valid email address" })
    .min(1, { message: "Enter your email" }),

  password: z
    .string()
    .nonempty({ message: "Enter Correct password" })
    .min(8, { message: "Password must be at least 8 characters" }),
});
