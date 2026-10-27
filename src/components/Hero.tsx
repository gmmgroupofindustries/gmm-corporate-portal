import React from 'react';
import type { Language } from '../types/content';
import { uiText } from '../data/translations';
import { ArrowDownRight, FileText, ChevronRight, ShieldCheck, Factory, Ship, Zap } from 'lucide-react';

interface HeroProps {
  language: Language;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onExploreClick }) => {
  const t = uiText[language];

  return (
    <section id="overview" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden bg-gradient-soft border-b hairline-border">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{
        backgroundImage: `linear-gradient(#0F141C 1px, transparent 1px), linear-gradient(90deg, #0F141C 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Subtle radial ambient ember glow */}
      <div className="absolute -top-40 right-0 w-[550px] h-[550px] bg-gmm-flame/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Parent Conglomerate Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border hairline-border bg-white/80 backdrop-blur-sm shadow-subtle mb-8">
          <span className="w-2 h-2 rounded-full bg-gmm-flame animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-gmm-charcoal">
            {t.hero.badge}
          </span>
          <span className="text-gmm-muted text-[10px]">|</span>
          <span className="text-[10px] font-mono text-gmm-muted uppercase">
            Est. 1988
          </span>
        </div>

        {/* Hero Title & Sovereign Proposition */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gmm-charcoal tracking-tight leading-[1.1] mb-6">
            <span>{t.hero.tagline}</span>{' '}
            <span className="text-gradient-gmm block sm:inline">
              {t.hero.subtagline}
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gmm-muted font-normal leading-relaxed max-w-3xl mb-10">
            {t.hero.description}
          </p>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gmm-charcoal hover:bg-gmm-flame text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 shadow-sm group"
            >
              <span>{t.hero.exploreBtn}</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border hairline-border bg-white hover:border-gmm-flame/40 text-gmm-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 shadow-subtle group"
            >
              <FileText className="w-4 h-4 text-gmm-flame" />
              <span>{t.hero.contactBtn}</span>
              <ChevronRight className="w-3.5 h-3.5 text-gmm-muted group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Operating Pillars Minimalist Strip */}
        <div className="mt-16 pt-10 border-t hairline-border grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-white border hairline-border shadow-subtle text-gmm-flame">
              <Factory className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-gmm-charcoal">Heavy Fabrication</p>
              <p className="text-[11px] text-gmm-muted">Metallurgy & Precision</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-white border hairline-border shadow-subtle text-gmm-flame">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-gmm-charcoal">Energy & EPC</p>
              <p className="text-[11px] text-gmm-muted">Grid Substations & Marine</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-white border hairline-border shadow-subtle text-gmm-flame">
              <Ship className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-gmm-charcoal">Maritime Fleet</p>
              <p className="text-[11px] text-gmm-muted">Bulk Shipping & ICD</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-white border hairline-border shadow-subtle text-gmm-flame">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-gmm-charcoal">Statutory Audit</p>
              <p className="text-[11px] text-gmm-muted">Fiduciary Governance</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
