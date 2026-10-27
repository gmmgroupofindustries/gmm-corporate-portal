import React from 'react';
import type { Language } from '../types/content';
import { uiText, governancePillars } from '../data/translations';
import { ShieldCheck, Layers, HeartHandshake, Leaf, Quote } from 'lucide-react';

interface GovernanceProps {
  language: Language;
}

export const Governance: React.FC<GovernanceProps> = ({ language }) => {
  const t = uiText[language].governanceSection;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-gmm-flame" />;
      case 'Layers': return <Layers className="w-5 h-5 text-gmm-flame" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-gmm-flame" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-gmm-flame" />;
      default: return <ShieldCheck className="w-5 h-5 text-gmm-flame" />;
    }
  };

  return (
    <section id="governance" className="py-20 lg:py-28 bg-gmm-pearl border-b hairline-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border hairline-border bg-white text-gmm-flame text-[10px] font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gmm-charcoal tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-gmm-muted leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* 4 Governance & Stewardship Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {governancePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border hairline-border p-6 rounded-sm shadow-subtle hover:border-gmm-flame/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-sm bg-gmm-flame/[0.05] border hairline-border inline-block mb-4">
                  {getIcon(pillar.icon)}
                </div>
                <h3 className="text-base font-bold text-gmm-charcoal mb-2.5">
                  {pillar.title[language]}
                </h3>
                <p className="text-xs text-gmm-muted leading-relaxed">
                  {pillar.description[language]}
                </p>
              </div>
              <div className="pt-4 border-t hairline-border mt-6 text-[10px] font-mono text-gmm-muted uppercase">
                Pillar 0{idx + 1} • Compliance Certified
              </div>
            </div>
          ))}
        </div>

        {/* Boardroom Dispatch Statement (Chairman's Quote) */}
        <div className="bg-gmm-obsidian text-white rounded-sm p-8 sm:p-12 relative overflow-hidden shadow-elevated border hairline-border-dark">
          {/* Subtle Flame Gradient Corner Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gmm-flame/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-2 text-gmm-amber font-mono text-xs uppercase tracking-widest mb-6">
              <Quote className="w-5 h-5 text-gmm-flame" />
              <span>{t.chairmansDispatchTitle}</span>
            </div>

            <blockquote className="text-lg sm:text-2xl font-medium tracking-tight text-white/95 leading-relaxed mb-8 italic">
              {t.chairmansQuote}
            </blockquote>

            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  {t.chairmansSign}
                </p>
                <p className="text-[11px] text-white/60 font-mono">
                  GMM Corporate Headquarters, Dhaka
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                <span>Fiduciary Code</span>
                <span>•</span>
                <span>Est. 1988</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
