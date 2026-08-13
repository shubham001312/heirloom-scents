import { describe, it, expect } from "vitest";
import { inquirySchema } from "@/lib/validation/inquiry";

describe("inquirySchema", () => {
  const validData = {
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 555 123 4567",
    eventType: "wedding",
    eventDate: "2027-06-15",
    guestCount: "100",
    message: "We'd love to book a perfume bar for our wedding reception.",
    website: "",
  };

  it("accepts valid data", () => {
    const result = inquirySchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("requires name", () => {
    const result = inquirySchema.safeParse({ ...validData, name: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain("name");
    }
  });

  it("rejects whitespace-only name", () => {
    const result = inquirySchema.safeParse({ ...validData, name: "   " });
    expect(result.success).toBe(false);
  });

  it("rejects whitespace-only message", () => {
    const result = inquirySchema.safeParse({ ...validData, message: "   " });
    expect(result.success).toBe(false);
  });

  it("requires valid email", () => {
    const result = inquirySchema.safeParse({ ...validData, email: "not-an-email" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain("email");
    }
  });

  it("requires eventType", () => {
    const result = inquirySchema.safeParse({ ...validData, eventType: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid eventType", () => {
    const result = inquirySchema.safeParse({ ...validData, eventType: "invalid" });
    expect(result.success).toBe(false);
  });

  it("requires message", () => {
    const result = inquirySchema.safeParse({ ...validData, message: "" });
    expect(result.success).toBe(false);
  });

  it("trims whitespace from name", () => {
    const result = inquirySchema.safeParse({ ...validData, name: "  Jane  " });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("Jane");
    }
  });

  it("lowercases email", () => {
    const result = inquirySchema.safeParse({ ...validData, email: "JANE@EXAMPLE.COM" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("jane@example.com");
    }
  });

  it("allows optional fields to be empty", () => {
    const result = inquirySchema.safeParse({
      ...validData,
      phone: "",
      eventDate: "",
      guestCount: "",
    });
    expect(result.success).toBe(true);
  });

  it("allows missing optional fields", () => {
    const required = {
      name: validData.name,
      email: validData.email,
      eventType: validData.eventType,
      message: validData.message,
      website: validData.website,
    };
    const result = inquirySchema.safeParse(required);
    expect(result.success).toBe(true);
  });

  it("rejects guest count over 10000", () => {
    const result = inquirySchema.safeParse({ ...validData, guestCount: "10001" });
    expect(result.success).toBe(false);
  });

  it("rejects message over 2000 characters", () => {
    const result = inquirySchema.safeParse({
      ...validData,
      message: "x".repeat(2001),
    });
    expect(result.success).toBe(false);
  });

  it("rejects name over 100 characters", () => {
    const result = inquirySchema.safeParse({
      ...validData,
      name: "x".repeat(101),
    });
    expect(result.success).toBe(false);
  });

  it("rejects honeypot filled (bot detection)", () => {
    const result = inquirySchema.safeParse({
      ...validData,
      website: "http://spam-bot.com",
    });
    expect(result.success).toBe(false);
  });
});
