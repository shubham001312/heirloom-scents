interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  /** Heading level — use "h1" for the page's primary heading */
  level?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = "",
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;
  return (
    <div
      className={`${centered ? "text-center" : ""} ${className}`}
      style={{ marginBottom: "var(--space-10)" }}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className="display" style={{ fontSize: "var(--text-3xl)", marginTop: 0 }}>
        {title}
      </Heading>
      {subtitle && (
        <p
          style={{
            maxWidth: "560px",
            margin: centered ? "var(--space-4) auto 0" : "var(--space-4) 0 0",
            color: "var(--color-text-muted)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
