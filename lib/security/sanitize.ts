/**
 * Input sanitization utilities
 * Use after validation — these normalize acceptable input, not replace validation
 */

/** Trim whitespace and normalize internal spaces */
export function sanitizeString(input: string): string {
  return input.trim().replace(/\s+/g, " ");
}

/** Normalize email: lowercase, trim, remove trailing dots */
export function sanitizeEmail(input: string): string {
  return input.trim().toLowerCase().replace(/\.+$/, "");
}

/** Sanitize phone: keep only digits, spaces, dashes, parens, plus */
export function sanitizePhone(input: string): string {
  return input.replace(/[^0-9\s\-+()]/g, "").trim();
}

/**
 * HTML-escape a string for safe interpolation into HTML (email templates, etc.)
 * Prevents HTML/attribute injection from user-supplied content.
 */
export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}
