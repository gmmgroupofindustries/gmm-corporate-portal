import React, { useState, useEffect } from 'react';
import type { Language } from '../types/content';
import { uiText, subsidiariesData } from '../data/translations';
import { Globe, ChevronDown, Building2, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onSelectSubsidiary: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onSelectSubsidiary
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubsidiaryMenuOpen, setIsSubsidiaryMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = uiText[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    onLanguageChange(language === 'en' ? 'bn' : 'en');
  };

  const navLinks = [
    { href: '#overview', label: t.nav.overview },
    { href: '#structure', label: t.nav.structure },
    { href: '#subsidiaries', label: t.nav.subsidiaries },
    { href: '#governance', label: t.nav.governance },
    { href: '#news', label: t.nav.news },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gmm-pearl/95 backdrop-blur-md shadow-sm border-b hairline-border py-3'
          : 'bg-gmm-pearl/80 backdrop-blur-sm border-b hairline-border py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Corporate Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="h-9 sm:h-10 flex items-center">
              <img
                src="/gmm-logo.svg"
                alt="GMM Group Logo"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l hairline-border pl-3">
              <span className="text-xs font-bold tracking-wider text-gmm-charcoal uppercase">
                GMM Group of Industries
              </span>
              <span className="text-[10px] tracking-widest text-gmm-muted uppercase font-mono">
                {language === 'en' ? 'Sovereign Holding Entity' : 'প্যারেন্ট হোল্ডিং কর্পোরেশন'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wide text-gmm-charcoal/80 hover:text-gmm-flame transition-colors duration-200 py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gmm transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Controls: Subsidiary Selector & Language Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Quick Subsidiary Directory Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsSubsidiaryMenuOpen(!isSubsidiaryMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gmm-charcoal border hairline-border rounded-sm hover:border-gmm-flame/40 hover:bg-gmm-flame/[0.02] transition-all duration-200"
              >
                <Building2 className="w-3.5 h-3.5 text-gmm-flame" />
                <span>{t.nav.quickPortal}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-gmm-muted transition-transform duration-200 ${isSubsidiaryMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSubsidiaryMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsSubsidiaryMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-80 bg-white border hairline-border shadow-elevated rounded-sm py-2 z-50">
                    <div className="px-3 py-2 border-b hairline-border mb-1">
                      <p className="text-[11px] font-semibold text-gmm-charcoal uppercase tracking-wider">
                        {language === 'en' ? 'Operating Subsidiaries' : 'সহযোগী প্রতিষ্ঠানসমূহ'}
                      </p>
                      <p className="text-[10px] text-gmm-muted">
                        {language === 'en' ? 'Direct entity dossiers' : 'নির্দিষ্ট প্রতিষ্ঠানের বিবরণী'}
                      </p>
                    </div>
                    <div className="max-h-72 overflow-y-auto">
                      {subsidiariesData.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            onSelectSubsidiary(sub.id);
                            setIsSubsidiaryMenuOpen(false);
                            const element = document.getElementById('subsidiaries');
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gmm-canvas flex items-center justify-between group transition-colors"
                        >
                          <div>
                            <p className="text-xs font-medium text-gmm-charcoal group-hover:text-gmm-flame transition-colors">
                              {sub.name[language]}
                            </p>
                            <span className="text-[10px] text-gmm-muted">
                              {sub.categoryLabel[language]}
                            </span>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 text-gmm-muted opacity-0 group-hover:opacity-100 group-hover:text-gmm-flame transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border hairline-border text-xs font-medium bg-white hover:border-gmm-flame/40 text-gmm-charcoal transition-all shadow-subtle group"
              title={language === 'en' ? 'Switch to Bangla' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-gmm-flame group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-mono text-[11px] font-semibold">
                {language === 'en' ? 'বাংলা' : 'EN'}
              </span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-sm border hairline-border text-gmm-charcoal hover:text-gmm-flame"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Slide-down Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t hairline-border bg-white p-4 shadow-elevated rounded-sm">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-gmm-charcoal hover:text-gmm-flame py-1"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t hairline-border mt-2">
                <p className="text-xs font-bold text-gmm-muted uppercase tracking-wider mb-2">
                  {t.nav.quickPortal}
                </p>
                <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                  {subsidiariesData.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => {
                        onSelectSubsidiary(sub.id);
                        setIsMobileMenuOpen(false);
                        const element = document.getElementById('subsidiaries');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-left text-xs text-gmm-charcoal hover:text-gmm-flame py-1 flex items-center justify-between"
                    >
                      <span className="truncate">{sub.name[language]}</span>
                      <ArrowUpRight className="w-3 h-3 text-gmm-muted" />
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};
