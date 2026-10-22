import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-surface overflow-hidden">
      {/* HERO SECTION */}
      <section className="w-full bg-[#171717] text-on-surface pt-8 md:pt-12 pb-16 md:pb-24 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16 relative z-10 space-y-6">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-sm text-xs text-on-surface uppercase tracking-widest font-semibold">About Storynex · Global UGC Production Studio</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-headline-lg text-4xl md:text-6xl text-white font-extrabold tracking-tight max-w-4xl">
              Built to Eliminate Artificial Noise and Deliver <span className="text-primary-container">Real Human Trust.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body-lg text-lg text-secondary max-w-2xl leading-relaxed">
              Storynex was founded on a singular core belief: modern consumers crave genuine human connection, not polished corporate commercials or synthetic AI avatars.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="w-full bg-[#F7F5EF] text-[#171717] py-28 border-y border-[#E5E2D9]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16 space-y-16">
          <ScrollReveal>
            <div className="max-w-xl">
              <span className="font-label-sm text-xs text-[#737373] uppercase tracking-widest font-bold">Our Philosophy</span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#171717] font-extrabold mt-2">Zero AI Policy &amp; Rigorous Creator Standards</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="p-8 rounded-xl bg-white border border-[#E5E2D9] shadow-sm space-y-4 h-full transition-transform hover:-translate-y-1">
                <span className="font-counter-editorial text-2xl font-black text-[#737373]">01</span>
                <h3 className="font-headline-sm text-xl font-bold text-[#171717]">100% Real Humans</h3>
                <p className="font-body-md text-sm text-[#525252] leading-relaxed">
                  Every creator in our roster undergoes strict vetting for genuine audio quality, physical authenticity, and proven storytelling competence. No deepfakes, ever.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="p-8 rounded-xl bg-white border border-[#E5E2D9] shadow-sm space-y-4 h-full transition-transform hover:-translate-y-1">
                <span className="font-counter-editorial text-2xl font-black text-[#737373]">02</span>
                <h3 className="font-headline-sm text-xl font-bold text-[#171717]">4 Global Hubs</h3>
                <p className="font-body-md text-sm text-[#525252] leading-relaxed">
                  Active production desks across the United States, United Kingdom, Canada, and European Union ensuring localized accents, culture, and compliance.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="p-8 rounded-xl bg-white border border-[#E5E2D9] shadow-sm space-y-4 h-full transition-transform hover:-translate-y-1">
                <span className="font-counter-editorial text-2xl font-black text-[#737373]">03</span>
                <h3 className="font-headline-sm text-xl font-bold text-[#171717]">Managed Transparency</h3>
                <p className="font-body-md text-sm text-[#525252] leading-relaxed">
                  Clear perpetual ad licensing, structured review rounds, and rapid 10-14 day turnarounds with zero hidden retainers or royalty surprises.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#171717] text-on-surface py-24 text-center">
        <ScrollReveal>
          <div className="max-w-[1360px] mx-auto px-6 space-y-6">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-white font-bold">Ready to Partner With Storynex?</h2>
            <p className="font-body-lg text-secondary max-w-xl mx-auto">Let's build high-performing UGC video assets tailored specifically for your brand.</p>
            <Link to="/contact" className="inline-block px-8 py-3.5 rounded-full bg-primary-container text-on-primary-fixed font-bold uppercase text-sm tracking-wider shadow-lg hover:bg-white hover:text-black transition-all">
              Start Your Brief
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
