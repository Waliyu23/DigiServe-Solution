import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  serviceType: z.string().trim().optional(),
  website: z.string().trim().optional(),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
