"use client";

import { useState } from "react";
import { inquirySchema, type InquiryFormData } from "@/lib/validation/inquiry";
import { inquireContent } from "@/content/inquire";

// Public by design — Web3Forms requires client-side submission on the free
// plan and explicitly states the access key is safe to ship in client code.
// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment (see .env.example).
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type FormErrors = Partial<Record<keyof InquiryFormData, string>>;

/** Get today's date in YYYY-MM-DD format (local time, not UTC) */
function getTodayISO(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function InquiryForm() {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const result = inquirySchema.safeParse(formData);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: FormErrors = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof InquiryFormData;
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    });
    setErrors(fieldErrors);
    return false;
  };

  /** Move keyboard focus to the first field with an error */
  const focusFirstError = (fieldErrors: FormErrors) => {
    const firstField = Object.keys(fieldErrors)[0];
    if (firstField) {
      const el = document.querySelector<HTMLElement>(`[name="${firstField}"]`);
      el?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.website) {
      setStatus("success");
      return;
    }

    if (!validateForm()) {
      // Validate again to get the field map for focus management
      const result = inquirySchema.safeParse(formData);
      if (!result.success) {
        const fieldErrors: FormErrors = {};
        result.error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof InquiryFormData;
          if (!fieldErrors[field]) fieldErrors[field] = issue.message;
        });
        focusFirstError(fieldErrors);
      }
      return;
    }

    setStatus("submitting");

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        setStatus("error");
        setErrorMessage(
          "Inquiry system not configured. Please email us directly at hello@heirloomscents.com."
        );
        return;
      }

      // Submit directly to Web3Forms from the browser. The free plan only
      // accepts client-side calls (server-side proxying returns 403) — this
      // is Web3Forms' intended integration and the key is public by design.
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Inquiry — ${formData.name} (${formData.eventType})`,
        from_name: "Heirloom Scents Website",
        botcheck: formData.website || "",
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        eventType: formData.eventType,
        eventDate: formData.eventDate || "",
        guestCount: formData.guestCount || "",
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (response.ok && result?.success) {
        setStatus("success");
        return;
      }

      setStatus("error");
      setErrorMessage(result?.message || "Something went wrong. Please try again later.");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="form__success">
        <h3 style={{ marginTop: 0, marginBottom: "var(--space-2)" }}>Thank you!</h3>
        <p style={{ margin: 0 }}>
          Your inquiry has been received. We&apos;ll get back to you within 24 hours to
          discuss your event.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <div className="form__honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {/* Name */}
      <div className="form__field">
        <label htmlFor="name" className="form__label">
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form__input ${errors.name ? "form__input--error" : ""}`}
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name && (
          <p id="name-error" className="form__error">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="form__field">
        <label htmlFor="email" className="form__label">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form__input ${errors.email ? "form__input--error" : ""}`}
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email && (
          <p id="email-error" className="form__error">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="form__field">
        <label htmlFor="phone" className="form__label">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={`form__input ${errors.phone ? "form__input--error" : ""}`}
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="form__error">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Event Type */}
      <div className="form__field">
        <label htmlFor="eventType" className="form__label">
          Event Type *
        </label>
        <select
          id="eventType"
          name="eventType"
          className={`form__select ${errors.eventType ? "form__select--error" : ""}`}
          value={formData.eventType}
          onChange={handleChange}
          aria-invalid={errors.eventType ? true : undefined}
          aria-describedby={errors.eventType ? "eventType-error" : undefined}
          required
        >
          {inquireContent.eventTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.eventType && (
          <p id="eventType-error" className="form__error">
            {errors.eventType}
          </p>
        )}
      </div>

      {/* Date */}
      <div className="form__field">
        <label htmlFor="eventDate" className="form__label">
          Event date
        </label>
        <input
          id="eventDate"
          name="eventDate"
          type="date"
          className={`form__input form__input--date ${errors.eventDate ? "form__input--error" : ""}`}
          value={formData.eventDate}
          onChange={handleChange}
          min={getTodayISO()}
          aria-invalid={errors.eventDate ? true : undefined}
          aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
        />
        {errors.eventDate && (
          <p id="eventDate-error" className="form__error">
            {errors.eventDate}
          </p>
        )}
      </div>

      {/* Guest Count */}
      <div className="form__field">
        <label htmlFor="guestCount" className="form__label">
          Approx. guests
        </label>
        <input
          id="guestCount"
          name="guestCount"
          type="number"
          min="1"
          max="10000"
          inputMode="numeric"
          className={`form__input ${errors.guestCount ? "form__input--error" : ""}`}
          value={formData.guestCount}
          onChange={handleChange}
          aria-invalid={errors.guestCount ? true : undefined}
          aria-describedby={errors.guestCount ? "guestCount-error" : undefined}
        />
        {errors.guestCount && (
          <p id="guestCount-error" className="form__error">
            {errors.guestCount}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="form__field form__field--full">
        <label htmlFor="message" className="form__label">
          Tell us about your event *
        </label>
        <textarea
          id="message"
          name="message"
          className={`form__textarea ${errors.message ? "form__textarea--error" : ""}`}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
          rows={5}
        />
        {errors.message && (
          <p id="message-error" className="form__error">
            {errors.message}
          </p>
        )}
      </div>

      {/* Error State */}
      {status === "error" && (
        <div className="form__error-box form__field--full" role="alert">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <div className="form__submit-row">
        <span className="form-note">
          We&apos;ll respond within 24 hours. No spam, ever.
        </span>
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send inquiry →"}
        </button>
      </div>
    </form>
  );
}
