"use client";

import { useState } from "react";

/** Minimal gold line icons for the four ritual steps (mirrors the home page). */
const STEP_ICONS = [
  // 01 Choose your notes — a single leaf
  <path
    key="notes"
    d="M12 3c4.5 0 7.5 3 7.5 7.5S16.5 18 12 18 4.5 15 4.5 10.5 7.5 3 12 3zM12 18v3"
  />,
  // 02 Create your blend — a mixing flask
  <path key="blend" d="M9 3h6M10 3v3h4V3M7.5 6h9M9 6l-2 6a5 5 0 0 0 10 0l-2-6" />,
  // 03 Bottle your fragrance — a perfume bottle
  <path key="bottle" d="M10 2h4v2h2v5a6 6 0 0 1-8 0V4h2V2zM10 9h4" />,
  // 04 Take the memory home — a keepsake heart
  <path
    key="keepsake"
    d="M12 20S5 15.5 5 11a3.5 3.5 0 0 1 7-1 3.5 3.5 0 0 1 7 1c0 4.5-7 9-7 9z"
  />,
];

interface RitualStep {
  number: string;
  title: string;
  description: string;
}

interface RitualWalkthroughProps {
  steps: readonly RitualStep[];
}

export function RitualWalkthrough({ steps }: RitualWalkthroughProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  return (
    <div className="ritual-walkthrough">
      <div className="ritual-walkthrough__steps" aria-label="Ritual steps">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={step.number}
              type="button"
              aria-pressed={isActive}
              className={`ritual-step-btn${isActive ? " ritual-step-btn--active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="ritual-step-btn__num" aria-hidden="true">
                {step.number}
              </span>
              <span className="ritual-step-btn__title">{step.title}</span>
            </button>
          );
        })}
      </div>

      <div className="ritual-walkthrough__panel" aria-live="polite" key={active.number}>
        <span className="ritual-walkthrough__num" aria-hidden="true">
          {active.number}
        </span>
        <span className="ritual-walkthrough__medallion" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {STEP_ICONS[activeIndex]}
          </svg>
        </span>
        <h3 className="ritual-walkthrough__title">{active.title}</h3>
        <p className="ritual-walkthrough__text">{active.description}</p>
      </div>
    </div>
  );
}
