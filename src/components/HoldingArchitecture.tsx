import React from 'react';
import type { Language } from '../types/content';
import { uiText } from '../data/translations';
import { Network, CheckCircle2, Shield, Layers, ArrowRight } from 'lucide-react';

interface HoldingArchitectureProps {
  language: Language;
}

export const HoldingArchitecture: React.FC<HoldingArchitectureProps> = ({ language }) => {
  const t = uiText[language].structureSection;

  return (
    <section id="structure" className="py-20 lg:py-28 bg-gmm-pearl border-b hairline-border relative overflow-hidden">
      
      {/* Background Subtle Wireframe Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border hairline-border bg-white text-gmm-flame text-[10px] font-bold uppercase tracking-widest mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gmm-charcoal tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-gmm-muted leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Dual Pillar Architecture Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: Parent Group Sovereign Mandate */}
          <div className="bg-white border hairline-border rounded-sm p-8 sm:p-10 shadow-subtle relative flex flex-col justify-between group hover:border-gmm-flame/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gmm" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gmm-flame flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Apex Holding Body
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-sm bg-gmm-flame/[0.06] text-gmm-flame font-semibold">
                  GMM Group Level
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gmm-charcoal mb-4">
                {t.parentRoleTitle}
              </h3>

              <p className="text-xs sm:text-sm text-gmm-muted mb-8 leading-relaxed">
                {language === 'en'
                  ? 'The central sovereign executive office maintaining fiduciary solvency, statutory accountability, macro-investment discipline, and global banking syndication.'
                  : 'কেন্দ্রীয় মূল হোল্ডিং অফিস—যা সামগ্রিক মূলধন বরাদ্দ, গ্রুপের আর্থিক স্বচ্ছতা, বিনিয়োগ শৃঙ্খলা এবং ব্যাংকিং অংশীদারিত্ব নিশ্চিত করে।'}
              </p>

              <div className="space-y-4">
                {t.parentRoles.map((role, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gmm-flame flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gmm-charcoal/90 font-medium">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t hairline-border flex items-center justify-between text-xs text-gmm-muted font-mono">
              <span>Corporate Fiduciary Standard</span>
              <span className="text-gmm-charcoal font-bold">Consolidated Oversight</span>
            </div>
          </div>

          {/* Card 2: Sister / Daughter Companies Operating Autonomy */}
          <div className="bg-white border hairline-border rounded-sm p-8 sm:p-10 shadow-subtle relative flex flex-col justify-between group hover:border-gmm-charcoal/30 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gmm-charcoal" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gmm-charcoal flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Autonomous Subsidiaries
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-sm bg-gmm-canvas text-gmm-charcoal font-semibold">
                  8 Operating Units
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gmm-charcoal mb-4">
                {t.daughterRoleTitle}
              </h3>

              <p className="text-xs sm:text-sm text-gmm-muted mb-8 leading-relaxed">
                {language === 'en'
                  ? 'Each sister company operates with dedicated technical managing directors and specialized domain engineers empowered for precision production and execution.'
                  : 'প্রতিটি সহযোগী প্রতিষ্ঠান নিজস্ব বিশেষজ্ঞ প্রকৌশলী ও কারখানা দল নিয়ে স্বাধীনভাবে সেরা উৎপাদন ও গ্রাহক সেবা পরিচালনা করে।'}
              </p>

              <div className="space-y-4">
                {t.daughterRoles.map((role, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gmm-charcoal flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gmm-charcoal/90 font-medium">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t hairline-border flex items-center justify-between text-xs text-gmm-muted font-mono">
              <span>Domain Execution Standard</span>
              <span className="text-gmm-charcoal font-bold">100% Operational Focus</span>
            </div>
          </div>

        </div>

        {/* Structural Flow Diagram Pill */}
        <div className="mt-12 p-4 rounded-sm bg-white border hairline-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-gmm-charcoal">
              {language === 'en' ? 'Sovereign Holding Integration' : 'কেন্দ্রীয় হোল্ডিং ও সহযোগী সমন্বয়'}:
            </span>
            <span className="text-gmm-muted">
              {language === 'en' ? 'Central Fiduciary Umbrella' : 'সেন্ট্রাল ক্যাপিটাল ও গভর্নেন্স ছাতা'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gmm-muted font-mono text-[11px]">
            <span>Capital Allocation</span>
            <ArrowRight className="w-3.5 h-3.5 text-gmm-flame" />
            <span>Industrial Manufacturing</span>
            <ArrowRight className="w-3.5 h-3.5 text-gmm-flame" />
            <span>Global Market Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
};
