"use client";

import { useState } from "react";
import Image from "next/image";

export interface Scent {
  slug: string;
  title: string;
  notes: string;
  image: string;
  imageAlt: string;
  education: string;
}

export function ScentCard({ scent }: { scent: Scent }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      id={scent.slug}
      className={`scent${expanded ? " scent--expanded" : ""}`}
    >
      <Image
        src={scent.image}
        alt={scent.imageAlt}
        width={400}
        height={280}
        sizes="(max-width: 768px) 90vw, 250px"
      />
      <h3>{scent.title}</h3>
      <p>{scent.notes}</p>

      {expanded && (
        <div className="scent__detail">
          <p className="scent-education">{scent.education}</p>
          <a className="btn btn-outline scent__cta" href={`/inquire?scent=${scent.slug}`}>
            Inquire about {scent.title}
          </a>
        </div>
      )}

      <button
        type="button"
        className="scent__toggle"
        aria-expanded={expanded}
        aria-controls={`${scent.slug}-detail`}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Close" : "Discover"}
        <span aria-hidden="true">{expanded ? "−" : "→"}</span>
      </button>
    </article>
  );
}
