import React from 'react';
import { StraightRibbon, ConcernRowRibbon } from './Ribbon';
import { siteContent, Language } from '../content/site';

interface SisterConcernsProps {
  language: Language;
}

export const SisterConcerns: React.FC<SisterConcernsProps> = ({ language }) => {
  const content = siteContent[language].concerns;

  return (
    <section
      id="concerns"
      className="relative border-t border-steel/10"
      aria-labelledby="concerns-heading"
    >
      {/* Straight piece above the first row, spanning the section top padding */}
      <div className="relative pt-section">
        <StraightRibbon />
        <div className="pl-[calc(var(--rb)+clamp(1.5rem,3vw,3rem))] pr-4 max-w-content">
          <h2
            id="concerns-heading"
            className="text-steel font-normal text-xs uppercase tracking-wider text-slate"
          >
            {content.title}
          </h2>
        </div>
      </div>

      {/* 6 Sister Concern Rows (Even number so ribbon returns to left edge) */}
      <div className="relative mt-8">
        {content.items.map((concern, idx) => (
          <div
            key={concern.id}
            className="concern-row relative min-h-[var(--concern-row-min-h)] flex flex-col justify-center py-10 tablet:py-12 border-b border-steel/10 last:border-b-0"
          >
            {/* The Ribbon Fold for this row */}
            <ConcernRowRibbon rowIndex={idx} />

            {/* Row Content Column: Indented past the diagonal rail on tablet/desktop */}
            <div className="pl-[calc(var(--rb)+clamp(1.5rem,3vw,3rem))] tablet:pl-[calc((var(--concern-row-min-h)/1.19)+var(--rb)+clamp(1.5rem,3vw,3.5rem))] pr-4 max-w-content">
              
              {/* Sector Tag */}
              <p className="text-slate font-normal text-xs mb-2">
                {concern.sector}
              </p>

              {/* Company Name */}
              <h3 className="text-steel font-medium text-[clamp(1.75rem,4.2vw,3.5rem)] leading-[1.08] tracking-[-0.015em] mb-4 [text-wrap:balance]">
                {concern.name}
              </h3>

              {/* Two-Sentence Description */}
              <p className="text-slate font-normal text-[clamp(1rem,0.94rem+0.25vw,1.125rem)] leading-relaxed max-w-[60ch] mb-4">
                {concern.description}
              </p>

              {/* Meta + Underlined Link */}
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
                <span className="text-slate font-normal">
                  {concern.meta}
                </span>

                <a
                  href={concern.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-steel font-normal focus-visible:outline-rust"
                >
                  {content.visitWebsite}
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Straight piece below the last row, spanning the section bottom padding */}
      <div className="relative pb-section">
        <StraightRibbon />
      </div>
    </section>
  );
};
