import { useState } from 'react';
import type { Language, Subsidiary } from './types/content';
import { subsidiariesData } from './data/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { HoldingArchitecture } from './components/HoldingArchitecture';
import { SubsidiaryExplorer } from './components/SubsidiaryExplorer';
import { SubsidiaryModal } from './components/SubsidiaryModal';
import { Governance } from './components/Governance';
import { Newsroom } from './components/Newsroom';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('gmm_portal_lang');
    return saved === 'bn' ? 'bn' : 'en';
  });

  const [selectedSubsidiary, setSelectedSubsidiary] = useState<Subsidiary | null>(null);
  const [inquiryConcern, setInquiryConcern] = useState<string>('');

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('gmm_portal_lang', lang);
  };

  const handleSelectSubsidiaryById = (id: string) => {
    const sub = subsidiariesData.find((s) => s.id === id);
    if (sub) {
      setSelectedSubsidiary(sub);
    }
  };

  const handleInquireFromModal = (concernName: string) => {
    setInquiryConcern(concernName);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    const subEl = document.getElementById('subsidiaries');
    subEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-gmm-pearl text-gmm-charcoal selection:bg-gmm-flame selection:text-white ${
      language === 'bn' ? 'font-bengali' : 'font-sans'
    }`}>
      {/* Sovereign Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        onSelectSubsidiary={handleSelectSubsidiaryById}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          language={language}
          onExploreClick={handleExploreClick}
        />

        {/* Institutional Scale Metrics */}
        <Metrics language={language} />

        {/* Parent-Subsidiary Sovereign Model */}
        <HoldingArchitecture language={language} />

        {/* Interactive Subsidiary Ecosystem */}
        <SubsidiaryExplorer
          language={language}
          onSelectSubsidiary={(sub) => setSelectedSubsidiary(sub)}
        />

        {/* Corporate Governance & ESG */}
        <Governance language={language} />

        {/* Official Dispatches & Media */}
        <Newsroom language={language} />

        {/* Holding Headquarters & Inquiries */}
        <ContactSection
          key={inquiryConcern}
          language={language}
          preselectedConcern={inquiryConcern}
        />
      </main>

      {/* Obsidian Dark Footer */}
      <Footer
        language={language}
        onSelectSubsidiary={handleSelectSubsidiaryById}
      />

      {/* Subsidiary Dossier Modal */}
      <SubsidiaryModal
        subsidiary={selectedSubsidiary}
        language={language}
        onClose={() => setSelectedSubsidiary(null)}
        onInquire={handleInquireFromModal}
      />
    </div>
  );
}

export default App;
