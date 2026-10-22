import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    website: '',
    package: 'growth',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-surface overflow-hidden">
      {/* HERO SECTION */}
      <section className="w-full bg-[#171717] text-on-surface pt-8 md:pt-12 pb-16 md:pb-24 text-center relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 space-y-6 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mx-auto">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-sm text-xs text-on-surface uppercase tracking-widest font-semibold">Q2 Creator Roster Open · Response Within 24 Hours</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-headline-lg text-4xl md:text-6xl text-white font-extrabold tracking-tight">
              Start Your <span className="text-primary-container">UGC Campaign.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body-lg text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              Tell us about your brand and video goals. We'll assemble a matched creator shortlist and custom strategy within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <div className="pt-2 flex items-center justify-center gap-2 text-sm text-secondary">
              <span>Direct inquiries:</span>
              <a href="mailto:josephmichael0084@gmail.com" className="text-primary-container font-semibold hover:underline">josephmichael0084@gmail.com</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="brief-form" className="w-full bg-surface-dim py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal>
            <div className="p-8 md:p-12 rounded-2xl bg-surface-container border border-surface-container-high shadow-2xl">
              {formSubmitted ? (
                <div className="text-center py-16 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-primary-container text-black flex items-center justify-center mx-auto shadow-[0_0_24px_rgba(201,241,93,0.4)]">
                    <span className="material-symbols-outlined text-[32px]">check</span>
                  </div>
                  <h3 className="font-headline-md text-2xl md:text-3xl text-white font-bold">Brief Successfully Submitted!</h3>
                  <p className="font-body-lg text-secondary max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name || 'Partner'}</span>. Our strategy lead will review your brand at <span className="text-white font-semibold">{formData.brand || 'your brand'}</span> and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-8 py-3 rounded-full bg-surface-container-high text-white hover:bg-surface-bright font-label-sm text-xs uppercase tracking-wider font-bold transition-all"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs text-secondary uppercase tracking-wider font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full h-12 px-4 rounded-lg bg-surface-dim border border-surface-container-high text-white placeholder-secondary/50 focus:border-primary-container focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs text-secondary uppercase tracking-wider font-semibold">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@yourbrand.com"
                        className="w-full h-12 px-4 rounded-lg bg-surface-dim border border-surface-container-high text-white placeholder-secondary/50 focus:border-primary-container focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs text-secondary uppercase tracking-wider font-semibold">Brand / Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.brand}
                        onChange={e => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="Lumina Skincare"
                        className="w-full h-12 px-4 rounded-lg bg-surface-dim border border-surface-container-high text-white placeholder-secondary/50 focus:border-primary-container focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs text-secondary uppercase tracking-wider font-semibold">Website or Store URL</label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={e => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourbrand.com"
                        className="w-full h-12 px-4 rounded-lg bg-surface-dim border border-surface-container-high text-white placeholder-secondary/50 focus:border-primary-container focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-sm text-xs text-secondary uppercase tracking-wider font-semibold">Preferred Package / Scope</label>
                    <select
                      value={formData.package}
                      onChange={e => setFormData({ ...formData, package: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-surface-dim border border-surface-container-high text-white focus:border-primary-container focus:outline-none transition-colors"
                    >
                      <option value="starter">Normal Package — 5 Videos ($150)</option>
                      <option value="campaign">Campaign Package — Full Campaign ($1,000)</option>
                      <option value="performance">Performance Batch (Custom Scope)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-sm text-xs text-secondary uppercase tracking-wider font-semibold">Campaign Goals &amp; Product Notes</label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your product, target audience, and current ad channels..."
                      className="w-full p-4 rounded-lg bg-surface-dim border border-surface-container-high text-white placeholder-secondary/50 focus:border-primary-container focus:outline-none transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-primary-container text-on-primary-fixed font-headline-sm text-base font-bold tracking-tight uppercase shadow-[0_0_32px_rgba(201,241,93,0.3)] hover:bg-white hover:text-black transition-all"
                  >
                    Submit Project Brief
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
