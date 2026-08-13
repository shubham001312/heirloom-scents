interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return <Component className={`container ${className}`.trim()}>{children}</Component>;
}
