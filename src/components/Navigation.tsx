import React, { useState, useEffect, useRef } from 'react';
import { GmmLogo } from './GmmLogo';
import { siteContent, Language } from '../content/site';

interface NavigationProps {
  language: Language;
  onLanguageToggle: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  language,
  onLanguageToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const content = siteContent[language].nav;
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and trap focus when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navLinks = [
    { href: '#group', label: content.links.group },
    { href: '#concerns', label: content.links.concerns },
    { href: '#how-we-work', label: content.links.howWeWork },
    { href: '#leadership', label: content.links.leadership },
    { href: '#contact', label: content.links.contact },
  ];

  return (
    <>
      {/* WCAG AA Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-steel focus:text-concrete focus:font-medium"
      >
        {content.skipToContent}
      </a>

      {/* Main Sticky Navigation Bar */}
      <header className="site-nav sticky top-0 left-0 right-0 z-40 bg-concrete border-b border-steel/10 transition-colors">
        <div className="max-w-layout mx-auto px-layout h-[var(--nav-h)] flex items-center justify-between">
          
          {/* Logo Anchor */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-rust"
            aria-label="GMM Group of Industries — Home"
          >
            <div className="h-6 tablet:h-8 flex items-center">
              <GmmLogo className="h-full w-auto" />
            </div>
            <span className="hidden min-[360px]:inline text-steel font-medium text-sm tablet:text-base tracking-normal">
              {content.groupTitle}
            </span>
          </a>

          {/* Desktop Inline Links (1024px+) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden desktop:flex items-center gap-8 text-sm font-normal text-slate"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-steel hover:text-steel relative py-1 focus-visible:outline-rust transition-colors text-link"
              >
                {link.label}
              </a>
            ))}

            {/* Language Switch Button (Desktop) */}
            <button
              type="button"
              onClick={onLanguageToggle}
              className="min-h-[44px] min-w-[44px] px-3 py-1.5 text-xs text-steel font-medium border border-steel/20 hover:border-rust transition-colors focus-visible:outline-rust"
              aria-label={`Switch language to ${content.switchLangLabel}`}
            >
              {content.switchLangLabel}
            </button>
          </nav>

          {/* Mobile Right Controls (< 1024px) */}
          <div className="desktop:hidden flex items-center gap-2">
            
            {/* Language Switch Button (Mobile) */}
            <button
              type="button"
              onClick={onLanguageToggle}
              className="min-h-[44px] min-w-[44px] px-2.5 py-1.5 text-xs text-steel font-medium border border-steel/20 hover:border-rust transition-colors focus-visible:outline-rust"
              aria-label={`Switch language to ${content.switchLangLabel}`}
            >
              {content.switchLangLabel}
            </button>

            {/* 44px+ Mobile Menu Trigger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="min-h-[44px] min-w-[44px] px-3.5 py-2 text-sm text-steel font-medium border border-steel/20 hover:border-rust transition-colors focus-visible:outline-rust"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-overlay"
            >
              {content.menuButton}
            </button>
          </div>

        </div>
      </header>

      {/* Full-screen Focus-Trapped Mobile Overlay (< 1024px) */}
      {isOpen && (
        <div
          id="mobile-navigation-overlay"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 bg-concrete flex flex-col justify-between p-6 tablet:p-12 overflow-y-auto safe-area-inset"
        >
          {/* Header Inside Overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-steel/10">
            <div className="flex items-center gap-3">
              <GmmLogo className="h-6 w-auto" />
              <span className="text-steel font-medium text-sm">
                {content.groupTitle}
              </span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="min-h-[44px] min-w-[44px] px-4 py-2 text-sm text-steel font-medium border border-steel/20 hover:border-rust transition-colors focus-visible:outline-rust"
            >
              {content.closeMenu}
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="my-auto py-12 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl tablet:text-3xl font-light text-steel hover:text-rust transition-colors py-2 focus-visible:outline-rust text-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Overlay Footer */}
          <div className="pt-6 border-t border-steel/10 flex items-center justify-between text-xs text-slate">
            <span>GMM Group of Industries</span>
            <button
              type="button"
              onClick={() => {
                onLanguageToggle();
                setIsOpen(false);
              }}
              className="min-h-[44px] px-3 py-1.5 text-steel font-medium border border-steel/20 text-link"
            >
              {content.switchLangLabel}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
