import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Please enter your name")
    .max(120, "Name is too long"),
  email: z
    .string()
    .min(1, "Please enter your email")
    .email("That doesn't look like a valid email"),
  phone: z
    .string()
    .max(40, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(120, "Company name is too long")
    .optional()
    .or(z.literal("")),
  service: z.enum([
    "agents",
    "consulting",
    "custom",
    "training",
    "unsure",
  ]),
  message: z
    .string()
    .min(10, "Please share a few details (at least 10 characters)")
    .max(4000, "Message is too long"),
  // Honeypot — bots tend to fill this in.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const serviceOptions: Array<{
  value: ContactFormValues["service"];
  label: string;
}> = [
  { value: "agents", label: "Specialized AI Agents" },
  { value: "consulting", label: "AI Consulting" },
  { value: "custom", label: "Custom AI Development" },
  { value: "training", label: "AI Training & Workshops" },
  { value: "unsure", label: "Not sure yet" },
];
