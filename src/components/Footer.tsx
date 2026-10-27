import React from 'react';
import type { Language } from '../types/content';
import { uiText, subsidiariesData } from '../data/translations';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  language: Language;
  onSelectSubsidiary: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onSelectSubsidiary }) => {
  const t = uiText[language].footer;

  return (
    <footer className="bg-gmm-obsidian text-white/90 border-t hairline-border-dark pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Subsidiary Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Identity & Holding Notice */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-9 flex items-center bg-white p-1 rounded-sm">
                <img
                  src="/gmm-logo.svg"
                  alt="GMM Group Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  GMM Group of Industries
                </p>
                <p className="text-[10px] font-mono text-white/50 uppercase">
                  Apex Parent Holding Entity
                </p>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              {t.holdingNotice}
            </p>

            <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 pt-2">
              <ShieldCheck className="w-4 h-4 text-gmm-flame" />
              <span>Incorporated under the Companies Act 1994</span>
            </div>
          </div>

          {/* Col 2: Subsidiary Directory (8 sister companies) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gmm-amber">
              {t.subsidiaryList}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {subsidiariesData.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => {
                    onSelectSubsidiary(sub.id);
                    const el = document.getElementById('subsidiaries');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-white/70 hover:text-gmm-flame transition-colors py-1 flex items-center justify-between group"
                >
                  <span className="truncate pr-2">{sub.name[language]}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Institutional Links & Secretariat */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gmm-amber">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#overview" className="hover:text-gmm-flame transition-colors">
                  {language === 'en' ? 'Executive Overview' : 'নির্বাহী পরিচিতি'}
                </a>
              </li>
              <li>
                <a href="#structure" className="hover:text-gmm-flame transition-colors">
                  {language === 'en' ? 'Holding Governance Framework' : 'হোল্ডিং সুশাসন কাঠামো'}
                </a>
              </li>
              <li>
                <a href="#subsidiaries" className="hover:text-gmm-flame transition-colors">
                  {language === 'en' ? 'Sister Enterprises Directory' : 'সহযোগী প্রতিষ্ঠান ডিরেক্টরি'}
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-gmm-flame transition-colors">
                  {language === 'en' ? 'ESG & Boardroom Ethics' : 'ইএসজি ও বোর্ডরুম মূল্যবোধ'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gmm-flame transition-colors">
                  {language === 'en' ? 'Central Secretariat' : 'কেন্দ্রীয় সচিবালয়'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Statutory Disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-6">
            <span>ISO 9001:2015 Group Certified</span>
            <span>•</span>
            <span>Statutory Disclosure 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
