import React from 'react';
import { StraightRibbon } from './Ribbon';
import { siteContent, Language } from '../content/site';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = siteContent[language].hero;

  return (
    <section
      className="relative min-h-[clamp(30rem,100svh,56rem)] flex flex-col justify-center py-section"
      aria-label="Introduction"
    >
      {/* Straight Ribbon Rail on Left Edge with Initial Load Animation */}
      <StraightRibbon isInitialLoad={true} />

      {/* Hero Content Column */}
      <div className="pl-[calc(var(--rb)+clamp(1.5rem,3vw,3rem))] pr-4 max-w-content">
        
        {/* H1 Headline: Indented on second line from 720px (tablet) */}
        <h1
          className="text-steel font-normal tracking-[-0.02em] leading-[1.02] text-[clamp(2.5rem,min(7vw,13svh),6.5rem)] [text-wrap:balance] mb-8"
        >
          <span className="block anim-headline-1 font-light">
            {content.headlineLine1}
          </span>
          <span className="block tablet:pl-[clamp(2rem,5vw,4.5rem)] anim-headline-2 font-light">
            {content.headlineLine2}
          </span>
        </h1>

        {/* Two-sentence descriptive paragraph. Nothing else. */}
        <p className="text-slate font-normal text-[clamp(1rem,0.94rem+0.25vw,1.125rem)] leading-relaxed max-w-[60ch] anim-hero-body">
          {content.paragraph}
        </p>

      </div>
    </section>
  );
};
