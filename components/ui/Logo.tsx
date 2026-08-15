import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  /** Show the image logo instead of text */
  variant?: "text" | "image";
  /** Size preset */
  size?: "sm" | "md" | "lg";
  /** Show the HS monogram mark beside the wordmark (false = wordmark only) */
  showMark?: boolean;
  /** "stacked" = SCENTS below Heirloom; "horizontal" = side by side (golden ratio) */
  layout?: "stacked" | "horizontal";
  /** Additional class names */
  className?: string;
}

/**
 * Lockup proportions — monogram (px) and wordmark font-size (px).
 * Keep the mark and wordmark in a ~2:1 ratio (golden-ish harmony).
 */
const lockupSizes = {
  sm: { mark: 44, wordmark: 20 },
  md: { mark: 58, wordmark: 26 },
  lg: { mark: 72, wordmark: 32 },
} as const;

export function Logo({
  variant = "text",
  size = "md",
  showMark = true,
  layout = "stacked",
  className = "",
}: LogoProps) {
  // Wordmark — edit the brand text here. Monogram lives in public/logo.svg.
  // "Heirloom" is set in Amoresa (script, only the H capital); "SCENTS" is
  // set in Mon Nicolette Grande (all caps).
  const scriptSize = lockupSizes[size].wordmark * 1.24;

  // Horizontal lockup with golden-ratio proportions: SCENTS = Heirloom / 1.618
  // (0.618 x script size), and the gap between them = 0.618 x SCENTS size.
  // Stacked lockup: "SCENTS" below "Heirloom" starting at the midpoint of the
  // word (the r/l junction), top-aligned to the lower ending of the H.
  const wordmark =
    layout === "horizontal" ? (
      <span
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          gap: lockupSizes[size].wordmark * 0.47,
          fontWeight: 400,
          color: "var(--color-cream)",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-script)",
            fontSize: scriptSize,
            lineHeight: 0.95,
            letterSpacing: "0.01em",
          }}
        >
          Heirloom
        </span>
        <span
          style={{
            fontFamily: "var(--font-monogram)",
            fontSize: lockupSizes[size].wordmark * 0.766,
            lineHeight: 1,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
          }}
        >
          Scents
        </span>
      </span>
    ) : (
      <span
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          fontWeight: 400,
          color: "var(--color-cream)",
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-script)",
            fontSize: scriptSize,
            lineHeight: 0.95,
            letterSpacing: "0.01em",
          }}
        >
          Heirloom
        </span>
        <span
          style={{
            fontFamily: "var(--font-monogram)",
            fontSize: lockupSizes[size].wordmark * 0.6,
            lineHeight: 1,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            marginLeft: "50%",
            /* SCENTS top aligns with the lower ending of the H: Amoresa's ink
               sits ~0.508em below the line box, so offset = 0.508 x 1.24 x wordmark */
            marginTop: lockupSizes[size].wordmark * 0.63,
            whiteSpace: "nowrap",
          }}
        >
          Scents
        </span>
      </span>
    );

  if (variant === "image") {
    return (
      <Link
        href="/"
        className={className}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          textDecoration: "none",
        }}
      >
        {/* To change the monogram, replace public/logo.svg */}
        {showMark && (
          <Image
            src="/logo.svg"
            alt=""
            width={lockupSizes[size].mark}
            /* logo.svg is 273×309 — keep its native ratio instead of a square crop */
            height={Math.round((lockupSizes[size].mark * 309) / 273)}
            priority
          />
        )}
        {wordmark}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={className}
      style={{
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "0.03em",
        color: "var(--color-cream)",
        textDecoration: "none",
        fontSize: lockupSizes[size].wordmark * 1.2,
      }}
    >
      {wordmark}
    </Link>
  );
}
