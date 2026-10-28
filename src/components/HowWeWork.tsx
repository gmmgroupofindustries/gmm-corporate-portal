import React from 'react';
import { StraightRibbon } from './Ribbon';
import { siteContent, Language } from '../content/site';

interface HowWeWorkProps {
  language: Language;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ language }) => {
  const content = siteContent[language].howWeWork;

  return (
    <section
      id="how-we-work"
      className="relative py-section border-t border-steel/10"
      aria-labelledby="how-we-work-heading"
    >
      {/* Continuous Straight Ribbon */}
      <StraightRibbon />

      <div className="pl-[calc(var(--rb)+clamp(1.5rem,3vw,3rem))] pr-4 max-w-content">
        
        {/* Section Heading */}
        <h2
          id="how-we-work-heading"
          className="text-steel font-normal text-xs uppercase tracking-wider text-slate mb-12 tablet:mb-16"
        >
          {content.title}
        </h2>

        {/* Three short statements stepping outward from 720px */}
        <div className="space-y-12 tablet:space-y-16">
          
          {/* Statement 1 (Baseline) */}
          <div className="tablet:pl-0">
            <p className="text-steel font-light text-[clamp(1.375rem,2.6vw,2.5rem)] leading-snug tracking-[-0.01em] [text-wrap:balance] max-w-[50ch]">
              {content.statements[0]}
            </p>
          </div>

          {/* Statement 2 (Step 1) */}
          <div className="tablet:pl-[clamp(2rem,5vw,4.5rem)]">
            <p className="text-steel font-light text-[clamp(1.375rem,2.6vw,2.5rem)] leading-snug tracking-[-0.01em] [text-wrap:balance] max-w-[50ch]">
              {content.statements[1]}
            </p>
          </div>

          {/* Statement 3 (Step 2) */}
          <div className="tablet:pl-[clamp(4rem,10vw,9rem)]">
            <p className="text-steel font-light text-[clamp(1.375rem,2.6vw,2.5rem)] leading-snug tracking-[-0.01em] [text-wrap:balance] max-w-[50ch]">
              {content.statements[2]}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

