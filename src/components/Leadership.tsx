import React from 'react';
import { StraightRibbon } from './Ribbon';
import { siteContent, Language } from '../content/site';

interface LeadershipProps {
  language: Language;
}

export const Leadership: React.FC<LeadershipProps> = ({ language }) => {
  const content = siteContent[language].leadership;

  return (
    <section
      id="leadership"
      className="relative py-section border-t border-steel/10"
      aria-labelledby="leadership-heading"
    >
      {/* Continuous Straight Ribbon */}
      <StraightRibbon />

      <div className="pl-[calc(var(--rb)+clamp(1.5rem,3vw,3rem))] pr-4 max-w-content">
        
        {/* Section Heading */}
        <h2
          id="leadership-heading"
          className="text-steel font-normal text-xs uppercase tracking-wider text-slate mb-10 tablet:mb-14"
        >
          {content.title}
        </h2>

        {/* Chairman's Message */}
        <div className="mb-16 tablet:mb-24">
          <p className="text-steel font-light text-[clamp(1.375rem,2.6vw,2.5rem)] leading-snug tracking-[-0.01em] [text-wrap:balance] max-w-[55ch] mb-6">
            {content.chairmanMessage}
          </p>

          <p className="text-steel font-medium text-base">
            {content.chairmanName}
          </p>
          <p className="text-slate font-normal text-sm">
            {content.chairmanTitle}
          </p>
        </div>

        {/* Plain list of directors and management (name, role). No photos. */}
        <div className="space-y-6 pt-8 border-t border-steel/10 max-w-xl">
          {content.directors.map((member, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 tablet:grid-cols-[14rem_1fr] gap-1 tablet:gap-6 items-baseline"
            >
              <span className="text-steel font-medium text-base">
                {member.name}
              </span>
              <span className="text-slate font-normal text-sm">
                {member.role}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

