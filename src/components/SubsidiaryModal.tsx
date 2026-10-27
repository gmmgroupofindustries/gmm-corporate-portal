import React from 'react';
import type { Subsidiary, Language } from '../types/content';
import { X, Award, MapPin, Users, Gauge, CheckCircle, ExternalLink } from 'lucide-react';

interface SubsidiaryModalProps {
  subsidiary: Subsidiary | null;
  language: Language;
  onClose: () => void;
  onInquire: (subsidiaryName: string) => void;
}

export const SubsidiaryModal: React.FC<SubsidiaryModalProps> = ({
  subsidiary,
  language,
  onClose,
  onInquire
}) => {
  if (!subsidiary) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gmm-obsidian/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white border hairline-border rounded-sm shadow-2xl max-w-3xl w-full p-6 sm:p-8 z-10 my-8 overflow-hidden">
        
        {/* Top Flame Indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gmm" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b hairline-border">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-sm bg-gmm-flame/[0.08] text-gmm-flame text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <span>{subsidiary.categoryLabel[language]}</span>
              <span>•</span>
              <span>Est. {subsidiary.year}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gmm-charcoal">
              {subsidiary.name[language]}
            </h3>
            <p className="text-xs sm:text-sm text-gmm-muted mt-1 max-w-xl">
              {subsidiary.tagline[language]}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm border hairline-border hover:bg-gmm-canvas text-gmm-muted hover:text-gmm-charcoal transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          
          {/* Key Stat Strips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-gmm-canvas/70 p-4 rounded-sm border hairline-border">
            <div className="flex items-center gap-2.5">
              <Gauge className="w-4 h-4 text-gmm-flame flex-shrink-0" />
              <div>
                <p className="text-[10px] text-gmm-muted uppercase font-mono">
                  {language === 'en' ? 'Rated Capacity' : 'উৎপাদন সক্ষমতা'}
                </p>
                <p className="text-xs font-bold text-gmm-charcoal">
                  {subsidiary.capacity[language]}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-gmm-flame flex-shrink-0" />
              <div>
                <p className="text-[10px] text-gmm-muted uppercase font-mono">
                  {language === 'en' ? 'Direct Workforce' : 'কর্মী পরিবার'}
                </p>
                <p className="text-xs font-bold text-gmm-charcoal">
                  {subsidiary.headcount}
                </p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-gmm-flame flex-shrink-0" />
              <div>
                <p className="text-[10px] text-gmm-muted uppercase font-mono">
                  {language === 'en' ? 'Registered Facility' : 'কারখানা এলাকা'}
                </p>
                <p className="text-xs font-bold text-gmm-charcoal truncate">
                  {subsidiary.headquarters[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gmm-charcoal mb-2 font-mono">
              {language === 'en' ? 'Operational Mandate & Infrastructure' : 'পরিচালন বিবরণী ও অবকাঠামো'}
            </h4>
            <p className="text-xs sm:text-sm text-gmm-muted leading-relaxed">
              {subsidiary.description[language]}
            </p>
          </div>

          {/* Core Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gmm-charcoal mb-3 font-mono">
              {language === 'en' ? 'Technical Capabilities & Engineering Scope' : 'কারিগরি সক্ষমতা ও বিশেষায়িত সেবা'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {subsidiary.capabilities[language].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-sm border hairline-border bg-white text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-gmm-flame flex-shrink-0" />
                  <span className="text-gmm-charcoal font-medium">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ISO Certifications Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gmm-charcoal mb-2 font-mono flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-gmm-flame" />
              {language === 'en' ? 'Statutory Standards & Certifications' : 'আইএসও মানদণ্ড ও আন্তর্জাতিক সনদ'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {subsidiary.isoCertifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-sm bg-white border hairline-border text-[11px] font-mono font-semibold text-gmm-charcoal"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t hairline-border flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] text-gmm-muted font-mono">
            {language === 'en' ? 'Under Sovereign GMM Governance' : 'জিএমএম কেন্দ্রীয় সুশাসনের অধীন'}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border hairline-border text-xs font-semibold text-gmm-charcoal hover:bg-gmm-canvas rounded-sm transition-colors"
            >
              {language === 'en' ? 'Close' : 'বন্ধ করুন'}
            </button>

            <button
              onClick={() => {
                onInquire(subsidiary.name[language]);
                onClose();
              }}
              className="px-5 py-2 bg-gmm-charcoal hover:bg-gmm-flame text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5"
            >
              <span>{language === 'en' ? 'Inquire With Concern' : 'যোগাযোগ করুন'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
