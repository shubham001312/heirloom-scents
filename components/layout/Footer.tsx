import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/inquire", label: "Inquire" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          {/* Written brand name only (no monogram mark) — the wordmark IS the brand */}
          <Logo
            variant="image"
            size="lg"
            showMark={false}
            layout="horizontal"
            className="footer__brand"
          />
          <p className="footer__blurb">
            Luxury perfume experiences
            <br />
            Made to be remembered.
          </p>
        </div>

        <div>
          <h4 className="footer__heading">Navigate</h4>
          <div className="footer__links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="footer__heading">Connect</h4>
          <div className="footer__links">
            <a href="mailto:hello@heirloomscents.com">hello@heirloomscents.com</a>
            <a
              href="https://www.instagram.com/heirloomscents/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <span>Dallas–Fort Worth, TX</span>
          </div>
        </div>

        <div>
          <h4 className="footer__heading">Inquire</h4>
          <p className="footer__blurb">
            Perfume bars for weddings, showers, and private events.
          </p>
          <Link href="/inquire" className="footer__cta">
            Start your inquiry →
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Heirloom Scents. All rights reserved.</span>
      </div>
    </footer>
  );
}
