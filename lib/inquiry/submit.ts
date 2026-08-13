import type { InquiryFormData } from "@/lib/validation/inquiry";
import {
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  escapeHtml,
} from "@/lib/security/sanitize";

export interface SubmissionResult {
  success: boolean;
  message: string;
}

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
const INQUIRY_EMAIL = process.env.INQUIRY_EMAIL || "hello@heirloomscents.com";

/** Format event type for display */
function formatEventType(type: string): string {
  const types: Record<string, string> = {
    wedding: "Wedding",
    "bridal-shower": "Bridal Shower",
    private: "Private Event",
    corporate: "Corporate Event",
    "brand-activation": "Brand Activation",
    other: "Other",
  };
  return types[type] || type;
}

/** Format date for display */
function formatDate(dateStr?: string): string {
  if (!dateStr) return "Not specified";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/**
 * Submit inquiry via Web3Forms
 * Uses URL-encoded form data (Web3Forms standard format)
 */
export async function submitInquiry(data: InquiryFormData): Promise<SubmissionResult> {
  if (!WEB3FORMS_ACCESS_KEY) {
    console.error("[Inquiry] WEB3FORMS_ACCESS_KEY not configured");
    return {
      success: false,
      message: "Inquiry system not configured. Please email us directly.",
    };
  }

  // Sanitize inputs
  const sanitized = {
    name: sanitizeString(data.name),
    email: sanitizeEmail(data.email),
    phone: data.phone ? sanitizePhone(data.phone) : "",
    eventType: data.eventType,
    eventDate: data.eventDate || "",
    guestCount: data.guestCount || "",
    message: sanitizeString(data.message),
  };

  // Escape every user-supplied value before interpolation into the HTML email
  const esc = {
    name: escapeHtml(sanitized.name),
    email: escapeHtml(sanitized.email),
    phone: escapeHtml(sanitized.phone),
    eventType: escapeHtml(formatEventType(sanitized.eventType)),
    eventDate: escapeHtml(formatDate(sanitized.eventDate)),
    guestCount: escapeHtml(sanitized.guestCount),
    message: escapeHtml(sanitized.message),
    firstName: escapeHtml(sanitized.name.split(" ")[0]),
  };

  const submittedAt = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  // Build email HTML
  const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,sans-serif;background-color:#f7f1e6;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="background-color:#3A090E;padding:30px;text-align:center;border-radius:4px 4px 0 0;">
      <h1 style="color:#F7F2EA;font-family:Georgia,serif;font-style:italic;font-size:24px;margin:0;">Heirloom Scents</h1>
      <p style="color:#A8875F;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:8px 0 0;">New Inquiry Received</p>
    </div>
    <div style="background-color:#fff;padding:30px;border:1px solid #d8cbbb;border-top:none;">
      <div style="background-color:#F7F2EA;padding:16px;border-radius:4px;margin-bottom:24px;">
        <p style="margin:0;font-size:12px;color:#6c6259;text-transform:uppercase;letter-spacing:0.1em;">Submitted</p>
        <p style="margin:4px 0 0;font-size:14px;color:#171412;font-weight:600;">${escapeHtml(submittedAt)}</p>
      </div>
      <h2 style="font-size:14px;color:#3A090E;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid #d8cbbb;padding-bottom:8px;margin:0 0 16px;">Contact Details</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="padding:8px 0;font-size:13px;color:#6c6259;width:120px;">Name</td><td style="padding:8px 0;font-size:14px;color:#171412;font-weight:500;">${esc.name}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#6c6259;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${esc.email}" style="color:#A8875F;text-decoration:none;">${esc.email}</a></td></tr>
        ${sanitized.phone ? `<tr><td style="padding:8px 0;font-size:13px;color:#6c6259;">Phone</td><td style="padding:8px 0;font-size:14px;"><a href="tel:${esc.phone}" style="color:#A8875F;text-decoration:none;">${esc.phone}</a></td></tr>` : ""}
      </table>
      <h2 style="font-size:14px;color:#3A090E;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid #d8cbbb;padding-bottom:8px;margin:0 0 16px;">Event Details</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="padding:8px 0;font-size:13px;color:#6c6259;width:120px;">Event Type</td><td style="padding:8px 0;font-size:14px;color:#171412;font-weight:500;">${esc.eventType}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#6c6259;">Event Date</td><td style="padding:8px 0;font-size:14px;">${esc.eventDate}</td></tr>
        <tr><td style="padding:8px 0;font-size:13px;color:#6c6259;">Guest Count</td><td style="padding:8px 0;font-size:14px;">${esc.guestCount || "Not specified"}</td></tr>
      </table>
      <h2 style="font-size:14px;color:#3A090E;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid #d8cbbb;padding-bottom:8px;margin:0 0 16px;">Message</h2>
      <div style="background-color:#F7F2EA;padding:16px;border-radius:4px;margin-bottom:24px;">
        <p style="margin:0;font-size:14px;color:#171412;line-height:1.6;white-space:pre-wrap;">${esc.message}</p>
      </div>
      <div style="text-align:center;margin:24px 0;">
        <a href="mailto:${esc.email}?subject=Re: Your Heirloom Scents Inquiry" style="display:inline-block;background-color:#A8875F;color:#3A090E;padding:12px 32px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;border-radius:2px;">Reply to ${esc.firstName}</a>
      </div>
    </div>
    <div style="background-color:#260509;padding:20px;text-align:center;border-radius:0 0 4px 4px;">
      <p style="margin:0;font-size:11px;color:rgba(247,242,234,0.6);">Heirloom Scents — Luxury Perfume Bar · Dallas–Fort Worth</p>
    </div>
  </div>
</body>
</html>`;

  try {
    // Send as URL-encoded form data (Web3Forms standard)
    const formData = new URLSearchParams();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append(
      "subject",
      `New Inquiry — ${sanitized.name} (${formatEventType(sanitized.eventType)})`
    );
    formData.append("from_name", "Heirloom Scents Website");
    formData.append("to", INQUIRY_EMAIL);
    formData.append("replyto", sanitized.email);
    formData.append("name", sanitized.name);
    formData.append("email", sanitized.email);
    formData.append("phone", sanitized.phone);
    formData.append("eventType", formatEventType(sanitized.eventType));
    formData.append("eventDate", formatDate(sanitized.eventDate));
    formData.append("guestCount", sanitized.guestCount);
    formData.append("message", sanitized.message);
    formData.append("html", emailHtml);
    formData.append("botcheck", data.website || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: "Your inquiry has been received. We'll get back to you within 24 hours.",
      };
    }

    console.error("[Inquiry] Web3Forms error:", result);
    return {
      success: false,
      message: result.message || "Failed to send. Please try again.",
    };
  } catch (error) {
    console.error("[Inquiry] Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}
