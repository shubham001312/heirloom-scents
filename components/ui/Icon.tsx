/**
 * Shared line-icon set — one consistent stroke weight (1.25), round caps and
 * joins, drawn on a 24×24 grid so every icon reads as part of one family.
 * Kept deliberately minimal: each mark is a single, precise silhouette.
 */
export const ICON_PATHS = {
  /** 01 — Choose your notes: a single drop of fragrance */
  notes:
    "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
  /** 02 — Create your blend: two notes meeting, blended into one */
  blend:
    "M8.5 17.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zM15.5 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z",
  /** 03 — Bottle your fragrance: a clean perfume flacon with a label */
  bottle:
    "M10.2 3h3.6v2h1.8v5a6.5 6.5 0 0 1-7.2 0V5h1.8V3zM10.5 13.2h3",
  /** 04 — Take the memory home: a keepsake heart */
  memory:
    "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
} as const;

export type IconName = keyof typeof ICON_PATHS;

/** Ordered to match the 01–04 ritual steps (home + about share the sequence). */
export const RITUAL_STEP_ICONS: readonly IconName[] = [
  "notes",
  "blend",
  "bottle",
  "memory",
];

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}
