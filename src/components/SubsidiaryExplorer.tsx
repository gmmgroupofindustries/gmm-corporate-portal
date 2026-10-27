import React, { useState } from 'react';
import type { Subsidiary, Language } from '../types/content';
import { uiText, subsidiariesData } from '../data/translations';
import { Building2, ArrowUpRight, Gauge, Calendar, Filter } from 'lucide-react';

interface SubsidiaryExplorerProps {
  language: Language;
  onSelectSubsidiary: (sub: Subsidiary) => void;
}

export const SubsidiaryExplorer: React.FC<SubsidiaryExplorerProps> = ({
  language,
  onSelectSubsidiary
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = uiText[language].subsidiarySection;

  const categories = [
    { id: 'all', label: t.allTab },
    { id: 'manufacturing', label: t.manufacturingTab },
    { id: 'energy', label: t.energyTab },
    { id: 'logistics', label: t.logisticsTab },
    { id: 'materials', label: t.materialsTab },
  ];

  const filteredSubsidiaries = activeCategory === 'all'
    ? subsidiariesData
    : subsidiariesData.filter((sub) => sub.category === activeCategory);

  return (
    <section id="subsidiaries" className="py-20 lg:py-28 bg-white border-b hairline-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border hairline-border bg-gmm-canvas text-gmm-flame text-[10px] font-bold uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gmm-charcoal tracking-tight mb-3">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-gmm-muted leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gmm-muted">
            <Filter className="w-3.5 h-3.5 text-gmm-flame" />
            <span>Showing {filteredSubsidiaries.length} of {subsidiariesData.length} operating entities</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b hairline-border">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gmm-charcoal text-white shadow-sm'
                  : 'bg-gmm-pearl border hairline-border text-gmm-charcoal/70 hover:border-gmm-flame/40 hover:text-gmm-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Architectural Bento Grid of Subsidiaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubsidiaries.map((sub) => (
            <div
              key={sub.id}
              onClick={() => onSelectSubsidiary(sub)}
              className="bg-gmm-pearl hover:bg-white border hairline-border hover:border-gmm-flame/40 p-6 sm:p-7 rounded-sm shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle top indicator hover effect */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-gmm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Sector & Inception Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-white border hairline-border text-gmm-flame font-semibold rounded-sm">
                    {sub.categoryLabel[language]}
                  </span>
                  <span className="text-[11px] font-mono text-gmm-muted flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {sub.year}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gmm-charcoal group-hover:text-gmm-flame transition-colors duration-200 mb-2.5">
                  {sub.name[language]}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-gmm-muted leading-relaxed mb-6 line-clamp-3">
                  {sub.tagline[language]}
                </p>
              </div>

              <div>
                {/* Operating Scale Metric */}
                <div className="pt-4 border-t hairline-border mb-4 bg-white/50 p-3 rounded-sm">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-gmm-muted mb-1">
                    <Gauge className="w-3 h-3 text-gmm-flame" />
                    <span>{t.capacityLabel}</span>
                  </div>
                  <p className="text-xs font-bold text-gmm-charcoal">
                    {sub.capacity[language]}
                  </p>
                </div>

                {/* Action Link Footer */}
                <div className="flex items-center justify-between pt-2 text-xs font-semibold text-gmm-charcoal group-hover:text-gmm-flame transition-colors">
                  <span className="text-[11px] uppercase tracking-wider">{t.viewDetails}</span>
                  <div className="p-1 rounded-sm bg-white border hairline-border group-hover:border-gmm-flame/30 group-hover:bg-gmm-flame group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
