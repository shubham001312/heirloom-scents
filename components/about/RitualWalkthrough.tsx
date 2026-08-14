"use client";

import { useState } from "react";

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
        <h3 className="ritual-walkthrough__title">{active.title}</h3>
        <p className="ritual-walkthrough__text">{active.description}</p>
      </div>
    </div>
  );
}
