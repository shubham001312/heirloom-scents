import Link from "next/link";

interface LinkCtaProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function LinkCta({ children, href, className = "", onClick }: LinkCtaProps) {
  const baseClass = `link-cta ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={baseClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
}
