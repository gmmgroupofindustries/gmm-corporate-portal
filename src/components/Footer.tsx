import React from 'react';
import { GmmLogo } from './GmmLogo';
import { StraightRibbon } from './Ribbon';
import { siteContent, Language } from '../content/site';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = siteContent[language].footer;

  return (
    <footer
      className="relative py-section border-t border-steel/10 mt-16"
      role="contentinfo"
    >
      {/* Straight Ribbon terminating at the full logo */}
      <StraightRibbon className="h-16" />

      <div className="pl-[calc(var(--rb)+clamp(1.5rem,3vw,3rem))] pr-4 max-w-content">
        
        {/* Full Logo where ribbon terminates */}
        <div className="mb-8">
          <GmmLogo className="h-8 tablet:h-10 w-auto" />
        </div>

        {/* Copyright Line */}
        <p className="text-slate font-normal text-xs leading-relaxed max-w-[60ch]">
          {content.copyright}
        </p>

      </div>
    </footer>
  );
};
