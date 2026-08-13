"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

const MENU_BUTTON_ID = "nav-menu-button";

export function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Remember what had focus before the dialog opened
    previouslyFocused.current = document.activeElement;

    // Move focus into the dialog
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Trap Tab within the dialog
      if (e.key === "Tab") {
        const dialog = document.querySelector<HTMLElement>(".mobile-nav");
        if (!dialog) return;
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      // Restore focus to the element that opened the dialog. Fall back to the
      // menu button by id — some browsers (e.g. Safari) don't focus buttons
      // on mouse click, so the captured element may be the body.
      const restoreTarget =
        previouslyFocused.current ?? document.getElementById(MENU_BUTTON_ID);
      if (restoreTarget instanceof HTMLElement) {
        restoreTarget.focus();
      }
    };
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-nav"
      className="mobile-nav"
      data-open={isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="mobile-nav__header">
        <Logo variant="image" size="md" />
        <button
          ref={closeButtonRef}
          className="mobile-nav__close"
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav className="mobile-nav__links" aria-label="Mobile navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-nav__link"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export { MENU_BUTTON_ID };
