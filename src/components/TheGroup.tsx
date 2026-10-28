import React from 'react';
import { StraightRibbon } from './Ribbon';
import { siteContent, Language } from '../content/site';

interface TheGroupProps {
  language: Language;
}

export const TheGroup: React.FC<TheGroupProps> = ({ language }) => {
  const content = siteContent[language].group;
  const sectionTitle = siteContent[language].nav.links.group;

  return (
    <section
      id="group"
      className="relative py-section border-t border-steel/10"
      aria-labelledby="group-heading"
    >
      {/* Continuous Straight Ribbon */}
      <StraightRibbon />

      <div className="pl-[calc(var(--rb)+clamp(1.5rem,3vw,3rem))] pr-4 max-w-content">
        
        {/* Section Heading */}
        <h2
          id="group-heading"
          className="text-steel font-normal text-xs uppercase tracking-wider text-slate mb-8"
        >
          {sectionTitle}
        </h2>

        {/* One large light statement paragraph */}
        <p className="text-steel font-light text-[clamp(1.375rem,2.6vw,2.5rem)] leading-snug tracking-[-0.01em] [text-wrap:balance] max-w-[55ch] mb-16 tablet:mb-24">
          {content.statement}
        </p>

        {/* Five Milestones: Plain space and type separating, no cards or lines */}
        <div className="space-y-10 tablet:space-y-14">
          {content.milestones.map((m, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 tablet:grid-cols-[6rem_1fr] gap-2 tablet:gap-8 items-baseline"
            >
              <span className="text-steel font-medium text-base tablet:text-lg">
                {m.year}
              </span>
              <p className="text-slate font-normal text-[clamp(1rem,0.94rem+0.25vw,1.125rem)] leading-relaxed max-w-[60ch]">
                {m.event}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
