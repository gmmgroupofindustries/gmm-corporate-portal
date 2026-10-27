import React from 'react';
import type { Language } from '../types/content';
import { metricsData } from '../data/translations';

interface MetricsProps {
  language: Language;
}

export const Metrics: React.FC<MetricsProps> = ({ language }) => {
  return (
    <section className="bg-white border-b hairline-border py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x hairline-border">
          {metricsData.map((metric, idx) => (
            <div
              key={metric.id}
              className={`py-6 sm:py-0 ${
                idx === 0
                  ? 'sm:pr-8'
                  : idx === metricsData.length - 1
                  ? 'sm:pl-8'
                  : 'sm:px-8'
              } flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gmm-charcoal tracking-tight group-hover:text-gmm-flame transition-colors duration-300">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="text-xs uppercase font-mono tracking-widest text-gmm-flame font-semibold">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-gmm-charcoal tracking-tight mb-1">
                  {metric.label[language]}
                </h4>
                <p className="text-xs text-gmm-muted leading-relaxed">
                  {metric.subtext[language]}
                </p>
              </div>
              <div className="w-8 h-0.5 bg-gmm-hairline group-hover:bg-gmm-flame group-hover:w-16 transition-all duration-300 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
