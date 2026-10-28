import React from 'react';
import { StraightRibbon } from './Ribbon';
import { siteContent, Language } from '../content/site';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const content = siteContent[language].contact;

  return (
    <section
      id="contact"
      className="relative py-section border-t border-steel/10"
      aria-labelledby="contact-heading"
    >
      {/* Continuous Straight Ribbon */}
      <StraightRibbon />

      <div className="pl-[calc(var(--rb)+clamp(1.5rem,3vw,3rem))] pr-4 max-w-content">
        
        {/* Section Heading */}
        <h2
          id="contact-heading"
          className="text-steel font-normal text-xs uppercase tracking-wider text-slate mb-10 tablet:mb-14"
        >
          {content.title}
        </h2>

        {/* Large Fluid Primary Email with overflow-wrap: anywhere */}
        <div className="mb-14 tablet:mb-20">
          <a
            href={`mailto:${content.primaryEmail}`}
            className="text-link text-steel font-light text-[clamp(1.75rem,4.2vw,3.5rem)] leading-none tracking-[-0.015em] [overflow-wrap:anywhere] inline-block focus-visible:outline-rust"
          >
            {content.primaryEmail}
          </a>
        </div>

        {/* Secondary Contact Grid: minmax(0, 1fr) */}
        <div className="grid grid-cols-1 tablet:grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-10 tablet:gap-14 pt-8 border-t border-steel/10">
          
          {/* Departmental Emails */}
          <div className="space-y-6">
            <div>
              <p className="text-slate font-normal text-xs mb-1">
                {content.businessLabel}
              </p>
              <a
                href={`mailto:${content.businessEmail}`}
                className="text-link text-steel font-normal text-base focus-visible:outline-rust"
              >
                {content.businessEmail}
              </a>
            </div>

            <div>
              <p className="text-slate font-normal text-xs mb-1">
                {content.careersLabel}
              </p>
              <a
                href={`mailto:${content.careersEmail}`}
                className="text-link text-steel font-normal text-base focus-visible:outline-rust"
              >
                {content.careersEmail}
              </a>
            </div>

            <div>
              <p className="text-slate font-normal text-xs mb-1">
                {content.mediaLabel}
              </p>
              <a
                href={`mailto:${content.mediaEmail}`}
                className="text-link text-steel font-normal text-base focus-visible:outline-rust"
              >
                {content.mediaEmail}
              </a>
            </div>
          </div>

          {/* Physical Address & Telephone */}
          <div className="space-y-6">
            <div>
              <p className="text-slate font-normal text-xs mb-1">
                {content.addressLabel}
              </p>
              <p className="text-steel font-normal text-base leading-relaxed max-w-[34ch]">
                {content.address}
              </p>
            </div>

            <div>
              <p className="text-slate font-normal text-xs mb-1">
                {content.phoneLabel}
              </p>
              <a
                href={`tel:${content.phone.replace(/[^0-9+]/g, '')}`}
                className="text-link text-steel font-normal text-base focus-visible:outline-rust"
              >
                {content.phone}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
