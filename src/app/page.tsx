'use client';

import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { TheGroup } from '../components/TheGroup';
import { SisterConcerns } from '../components/SisterConcerns';
import { HowWeWork } from '../components/HowWeWork';
import { Leadership } from '../components/Leadership';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import type { Language } from '../content/site';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('en');

  // Load language preference from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('gmm_site_lang') as Language;
    if (saved === 'en' || saved === 'bn') {
      setLanguage(saved);
    }
  }, []);

  const handleLanguageToggle = () => {
    const nextLang: Language = language === 'en' ? 'bn' : 'en';
    setLanguage(nextLang);
    localStorage.setItem('gmm_site_lang', nextLang);
  };

  return (
    <div
      className={`min-h-screen bg-concrete text-steel ${
        language === 'bn' ? 'font-bengali' : 'font-sans'
      }`}
    >
      {/* Sticky Solid Navigation */}
      <Navigation
        language={language}
        onLanguageToggle={handleLanguageToggle}
      />

      {/* Centered 90rem Layout Container with Padding-Inline clamp(20px, 5vw, 64px) */}
      <div className="max-w-layout mx-auto px-layout">
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {/* Section 1: Hero */}
          <Hero language={language} />

          {/* Section 2: The Group */}
          <TheGroup language={language} />

          {/* Section 3: Our Sister Concerns */}
          <SisterConcerns language={language} />

          {/* Section 4: How We Work */}
          <HowWeWork language={language} />

          {/* Section 5: Leadership */}
          <Leadership language={language} />

          {/* Section 6: Contact */}
          <Contact language={language} />
        </main>

        {/* Footer */}
        <Footer language={language} />
      </div>
    </div>
  );
}
