import React from 'react';
import type { Language } from '../types/content';
import { uiText, newsroomDispatches } from '../data/translations';
import { Newspaper, Calendar, ArrowUpRight } from 'lucide-react';

interface NewsroomProps {
  language: Language;
}

export const Newsroom: React.FC<NewsroomProps> = ({ language }) => {
  const t = uiText[language].newsSection;

  return (
    <section id="news" className="py-20 lg:py-24 bg-white border-b hairline-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border hairline-border bg-gmm-pearl text-gmm-flame text-[10px] font-bold uppercase tracking-widest mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gmm-charcoal tracking-tight">
              {t.title}
            </h2>
          </div>
          <span className="text-xs font-mono text-gmm-muted">
            Official Dispatches & Regulatory Filings
          </span>
        </div>

        {/* Dispatch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsroomDispatches.map((news, idx) => (
            <article
              key={idx}
              className="p-6 rounded-sm border hairline-border bg-gmm-pearl/50 hover:bg-white hover:border-gmm-flame/40 transition-all duration-300 shadow-subtle flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white border hairline-border text-gmm-flame font-semibold">
                    {news.category[language]}
                  </span>
                  <span className="text-[11px] font-mono text-gmm-muted flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gmm-charcoal group-hover:text-gmm-flame transition-colors duration-200 mb-3 leading-snug">
                  {news.title[language]}
                </h3>

                <p className="text-xs text-gmm-muted leading-relaxed line-clamp-3 mb-6">
                  {news.excerpt[language]}
                </p>
              </div>

              <div className="pt-4 border-t hairline-border flex items-center justify-between text-xs font-semibold text-gmm-charcoal group-hover:text-gmm-flame transition-colors">
                <span className="text-[11px] uppercase tracking-wider">{t.readMore}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
