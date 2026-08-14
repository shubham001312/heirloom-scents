import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";

export const metadata: Metadata = {
  title: "Book / Inquire",
  description:
    "Inquire about booking Heirloom Scents for your wedding, bridal shower, or private event in the Dallas–Fort Worth area.",
  openGraph: {
    title: "Book / Inquire | Heirloom Scents",
    description:
      "Tell us about your celebration and book the Heirloom Scents perfume bar for a wedding, bridal shower, or private event.",
  },
  twitter: {
    title: "Book / Inquire | Heirloom Scents",
    description:
      "Tell us about your celebration and book the Heirloom Scents perfume bar for a wedding, bridal shower, or private event.",
  },
};

export default function InquirePage() {
  return (
    <main id="main-content" className="inquiry-wrap">
      {/* Maroon intro panel */}
      <section className="inquiry-intro fade-in-up">
        <div className="kicker">Begin the conversation</div>
        <h1>
          Let&rsquo;s create a scent
          <br />
          <em>they&rsquo;ll never forget.</em>
        </h1>
        <p>
          Tell us a little about your celebration and we&rsquo;ll shape the experience
          around it.
        </p>
        <div className="contact-details">
          <div>
            <span>Email</span>
            hello@heirloomscents.com
          </div>
          <div>
            <span>Based in</span>
            Dallas–Fort Worth, TX
          </div>
          <div>
            <span>Response</span>
            Within 24 hours
          </div>
        </div>
      </section>

      {/* Form panel */}
      <section className="form-panel fade-in-up">
        <div className="kicker">Your inquiry</div>
        <h2>Tell us about your event.</h2>
        <p>
          We&rsquo;ll be in touch to discuss the details, the guest experience, and next steps.
        </p>
        <InquiryForm />
      </section>
    </main>
  );
}
