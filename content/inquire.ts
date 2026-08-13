export const inquireContent = {
  page: {
    eyebrow: "Book / Inquire",
    title: "Tell us about your event.",
    subtitle:
      "Fill out the form below and we'll get back to you within 24 hours to discuss your event.",
  },
  eventTypes: [
    { value: "", label: "Select an event type" },
    { value: "wedding", label: "Wedding" },
    { value: "bridal-shower", label: "Bridal Shower" },
    { value: "private", label: "Private Event" },
    { value: "corporate", label: "Corporate Event" },
    { value: "brand-activation", label: "Brand Activation" },
    { value: "other", label: "Other" },
  ],
} as const;
