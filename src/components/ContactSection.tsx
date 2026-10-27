import React, { useState } from 'react';
import type { Language } from '../types/content';
import { uiText, subsidiariesData } from '../data/translations';
import { MapPin, Phone, Mail, Building, Send, CheckCircle2, Shield } from 'lucide-react';

interface ContactSectionProps {
  language: Language;
  preselectedConcern?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  preselectedConcern
}) => {
  const [selectedConcern, setSelectedConcern] = useState(preselectedConcern || '');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: ''
  });

  const t = uiText[language].contactSection;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', organization: '', email: '', message: '' });
      setSelectedConcern('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gmm-pearl border-b hairline-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border hairline-border bg-white text-gmm-flame text-[10px] font-bold uppercase tracking-widest mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gmm-charcoal tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-gmm-muted leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Official Headquarter Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border hairline-border p-7 rounded-sm shadow-subtle space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-gmm-flame/[0.06] text-gmm-flame border hairline-border flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gmm-charcoal font-mono mb-1">
                    {t.hqAddressLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-gmm-muted leading-relaxed">
                    {t.hqAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t hairline-border">
                <div className="p-2.5 rounded-sm bg-gmm-flame/[0.06] text-gmm-flame border hairline-border flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gmm-charcoal font-mono mb-1">
                    {t.phoneLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-gmm-muted font-mono">
                    {t.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t hairline-border">
                <div className="p-2.5 rounded-sm bg-gmm-flame/[0.06] text-gmm-flame border hairline-border flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gmm-charcoal font-mono mb-1">
                    {t.emailLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-gmm-flame font-mono font-medium">
                    {t.email}
                  </p>
                </div>
              </div>

            </div>

            {/* Fiduciary Assurance Pill */}
            <div className="p-5 rounded-sm bg-white border hairline-border shadow-subtle flex items-center gap-3.5">
              <Shield className="w-5 h-5 text-gmm-flame flex-shrink-0" />
              <p className="text-xs text-gmm-muted leading-relaxed">
                {language === 'en'
                  ? 'All institutional inquiries are logged in the Central Corporate Secretariat registry and acknowledged within 24 business hours.'
                  : 'সকল প্রাতিষ্ঠানিক বার্তা ও প্রস্তাবনা কেন্দ্রীয় সেক্রেটারিয়েট রেজিস্টারে নথিভুক্ত হয় এবং ২৪ কর্মঘণ্টার মধ্যে প্রাপ্তিস্বীকার প্রদান করা হয়।'}
              </p>
            </div>

          </div>

          {/* Right Column: Institutional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border hairline-border p-8 sm:p-10 rounded-sm shadow-subtle relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gmm" />

              <h3 className="text-lg font-bold text-gmm-charcoal mb-6">
                {t.formTitle}
              </h3>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-sm flex items-center gap-3 text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-medium">
                    {t.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gmm-charcoal mb-1.5">
                        {t.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm border hairline-border text-xs text-gmm-charcoal focus:border-gmm-flame focus:outline-none transition-colors"
                        placeholder="e.g. Managing Director / Partner"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gmm-charcoal mb-1.5">
                        {t.orgLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm border hairline-border text-xs text-gmm-charcoal focus:border-gmm-flame focus:outline-none transition-colors"
                        placeholder="e.g. Global Infra Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gmm-charcoal mb-1.5">
                        Official Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm border hairline-border text-xs text-gmm-charcoal focus:border-gmm-flame focus:outline-none transition-colors"
                        placeholder="executive@institution.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gmm-charcoal mb-1.5">
                        {t.concernLabel}
                      </label>
                      <select
                        value={selectedConcern}
                        onChange={(e) => setSelectedConcern(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-sm border hairline-border text-xs text-gmm-charcoal bg-white focus:border-gmm-flame focus:outline-none transition-colors"
                      >
                        <option value="">{t.allConcernsOption}</option>
                        {subsidiariesData.map((sub) => (
                          <option key={sub.id} value={sub.name[language]}>
                            {sub.name[language]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gmm-charcoal mb-1.5">
                      {t.messageLabel} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm border hairline-border text-xs text-gmm-charcoal focus:border-gmm-flame focus:outline-none transition-colors"
                      placeholder={language === 'en' ? 'State your communication intent or institutional requirement...' : 'আপনার প্রাতিষ্ঠানিক প্রস্তাবনা বা বার্তা বিস্তারিত লিখুন...'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gmm-charcoal hover:bg-gmm-flame text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 shadow-sm"
                  >
                    <span>{t.submitBtn}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
