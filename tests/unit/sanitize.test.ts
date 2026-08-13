import { describe, it, expect } from "vitest";
import {
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  escapeHtml,
} from "@/lib/security/sanitize";

describe("sanitizeString", () => {
  it("trims leading and trailing whitespace", () => {
    expect(sanitizeString("  hello  ")).toBe("hello");
  });

  it("normalizes internal whitespace", () => {
    expect(sanitizeString("hello   world")).toBe("hello world");
  });

  it("handles empty string", () => {
    expect(sanitizeString("")).toBe("");
  });
});

describe("sanitizeEmail", () => {
  it("lowercases email", () => {
    expect(sanitizeEmail("Jane@Example.COM")).toBe("jane@example.com");
  });

  it("trims whitespace", () => {
    expect(sanitizeEmail("  jane@example.com  ")).toBe("jane@example.com");
  });

  it("removes trailing dots", () => {
    expect(sanitizeEmail("jane@example.com.")).toBe("jane@example.com");
  });
});

describe("sanitizePhone", () => {
  it("keeps valid phone characters", () => {
    expect(sanitizePhone("+1 (555) 123-4567")).toBe("+1 (555) 123-4567");
  });

  it("removes letters", () => {
    expect(sanitizePhone("+1 abc 123")).toBe("+1  123");
  });

  it("handles empty string", () => {
    expect(sanitizePhone("")).toBe("");
  });
});

describe("escapeHtml", () => {
  it("escapes HTML tags", () => {
    expect(escapeHtml("<script>alert(1)</script>")).toBe(
      "&lt;script&gt;alert(1)&lt;/script&gt;"
    );
  });

  it("escapes attribute-breaking characters", () => {
    expect(escapeHtml('" onmouseover="alert(1)')).toBe(
      "&quot; onmouseover=&quot;alert(1)"
    );
  });

  it("escapes ampersands and quotes", () => {
    expect(escapeHtml(`Tom & Jerry's "diner"`)).toBe(
      "Tom &amp; Jerry&#39;s &quot;diner&quot;"
    );
  });

  it("leaves plain text unchanged", () => {
    expect(escapeHtml("Hello, world")).toBe("Hello, world");
  });
});
