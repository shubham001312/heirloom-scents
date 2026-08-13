import { z } from "zod";

export const inquirySchema = z.object({
  // Note: In Zod 4, string transforms (trim/lowercase) run AFTER validation
  // checks, so trim must come BEFORE min/max to reject whitespace-only input.
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or less"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(20, "Phone must be 20 characters or less")
    .optional()
    .or(z.literal("")),
  eventType: z
    .string()
    .trim()
    .min(1, "Please select an event type")
    .refine(
      (val) =>
        [
          "wedding",
          "bridal-shower",
          "private",
          "corporate",
          "brand-activation",
          "other",
        ].includes(val),
      "Please select a valid event type"
    ),
  eventDate: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((val) => {
      if (!val || val === "") return true;
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Event date cannot be in the past"),
  guestCount: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((val) => {
      if (!val || val === "") return true;
      const num = parseInt(val, 10);
      return !isNaN(num) && num > 0 && num <= 10000;
    }, "Guest count must be between 1 and 10,000"),
  message: z
    .string()
    .trim()
    .min(1, "Please tell us about your event")
    .max(2000, "Message must be 2000 characters or less"),
  // Honeypot field — must be empty
  website: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
