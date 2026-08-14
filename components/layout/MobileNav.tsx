"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

const MENU_BUTTON_ID = "nav-menu-button";

export function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const previouslyFocused = useRef<Element | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    // Remember what had focus before the menu opened
    previouslyFocused.current = document.activeElement;

    // Move focus into the dropdown (Android-style: straight to the items)
    firstLinkRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore focus to the element that opened the menu. Fall back to the
      // menu button by id — some browsers don't focus buttons on click.
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
      aria-modal="false"
      aria-label="Navigation menu"
    >
      <nav className="mobile-nav__links" aria-label="Mobile navigation">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              href={link.href}
              className={`mobile-nav__link${isActive ? " mobile-nav__link--active" : ""}`}
              aria-current={isActive ? "page" : undefined}
              onClick={onClose}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export { MENU_BUTTON_ID };
