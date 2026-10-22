import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

export const PricingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-surface overflow-hidden">
      {/* HERO SECTION */}
      <section className="w-full bg-[#171717] text-on-surface pt-8 md:pt-12 pb-16 md:pb-24 text-center relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 space-y-6 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mx-auto">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-sm text-xs text-on-surface uppercase tracking-widest font-semibold">Transparent Scopes · No Hidden Fees</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="font-headline-lg text-4xl md:text-6xl text-white font-extrabold tracking-tight">
              Creative Packages Built for <span className="text-primary-container">Growth &amp; Scaling.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body-lg text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              Choose a single test batch or establish a monthly creative engine with guaranteed turnarounds and full perpetual ad usage rights.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PRICING CARDS SECTION */}
      <section className="w-full bg-surface-dim py-28">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <ScrollReveal>
              <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high shadow-lg flex flex-col justify-between space-y-8 h-full transition-transform hover:-translate-y-2">
                <div className="space-y-4">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">Normal Package</span>
                  <h3 className="font-headline-md text-2xl font-bold text-white">Starter Package</h3>
                  <p className="font-body-md text-sm text-secondary">Ideal for brands testing creator-led UGC for the first time or validating new product offerings.</p>
                  <div className="pt-4 border-t border-surface-container-highest">
                    <span className="font-headline-sm text-3xl text-white font-bold">$150</span>
                    <p className="font-body-sm text-xs text-on-surface-variant">Generating 5 videos</p>
                  </div>
                  <ul className="space-y-3 font-body-sm text-sm text-secondary pt-2">
                    <li className="flex items-center gap-2">✓ 5 Distinct UGC Videos</li>
                    <li className="flex items-center gap-2">✓ Matched Human Creators</li>
                    <li className="flex items-center gap-2">✓ Hook Variations</li>
                    <li className="flex items-center gap-2">✓ 9:16 Vertical Master Formats</li>
                    <li className="flex items-center gap-2">✓ 12-Month Paid Ad Usage Rights</li>
                  </ul>
                </div>
                <Link to="/contact" className="w-full py-3.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-white text-center font-headline-sm text-sm font-semibold transition-colors">
                  Get Normal Package ($150)
                </Link>
              </div>
            </ScrollReveal>

            {/* Growth */}
            <ScrollReveal delay={100}>
              <div className="p-8 rounded-xl bg-surface-container border-2 border-primary-container shadow-[0_0_32px_rgba(201,241,93,0.15)] flex flex-col justify-between space-y-8 relative h-full transition-transform hover:-translate-y-2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-container text-black font-label-sm text-[11px] font-bold uppercase tracking-wider">
                  Full Campaign
                </div>
                <div className="space-y-4 pt-2">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-primary-container font-bold">Campaign Scope</span>
                  <h3 className="font-headline-md text-2xl font-bold text-white">Campaign Package</h3>
                  <p className="font-body-md text-sm text-secondary">Complete full campaign production designed for active ad accounts and scaling.</p>
                  <div className="pt-4 border-t border-surface-container-highest">
                    <span className="font-headline-sm text-3xl text-white font-bold">$1,000</span>
                    <p className="font-body-sm text-xs text-on-surface-variant">Full campaign production</p>
                  </div>
                  <ul className="space-y-3 font-body-sm text-sm text-white pt-2">
                    <li className="flex items-center gap-2">✓ Full Campaign Generation</li>
                    <li className="flex items-center gap-2">✓ Multiple Vetted Creators</li>
                    <li className="flex items-center gap-2">✓ Hook &amp; CTA Iterations</li>
                    <li className="flex items-center gap-2">✓ Native Captions &amp; Resizes</li>
                    <li className="flex items-center gap-2">✓ Full Perpetual Ad Usage Rights</li>
                    <li className="flex items-center gap-2">✓ Raw Footage B-Roll Handoff</li>
                  </ul>
                </div>
                <Link to="/contact" className="w-full py-4 rounded-full bg-primary-container hover:bg-white hover:text-black text-black text-center font-headline-sm text-sm font-bold tracking-tight uppercase shadow-md transition-all">
                  Choose Campaign ($1,000)
                </Link>
              </div>
            </ScrollReveal>

            {/* Performance Batch */}
            <ScrollReveal delay={200}>
              <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high shadow-lg flex flex-col justify-between space-y-8 h-full transition-transform hover:-translate-y-2">
                <div className="space-y-4">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">High Volume Engine</span>
                  <h3 className="font-headline-md text-2xl font-bold text-white">Performance Batch</h3>
                  <p className="font-body-md text-sm text-secondary">For established omnichannel brands requiring reliable high-velocity creative volume each month.</p>
                  <div className="pt-4 border-t border-surface-container-highest">
                    <span className="font-headline-sm text-3xl text-white font-bold">Custom Scope</span>
                    <p className="font-body-sm text-xs text-on-surface-variant">15+ to 40+ deliverables / monthly cadence</p>
                  </div>
                  <ul className="space-y-3 font-body-sm text-sm text-secondary pt-2">
                    <li className="flex items-center gap-2">✓ 15+ Custom Master Videos</li>
                    <li className="flex items-center gap-2">✓ Dedicated Creative Director &amp; Strategist</li>
                    <li className="flex items-center gap-2">✓ Ongoing Multi-Creator Roster Access</li>
                    <li className="flex items-center gap-2">✓ Modular Asset Matrix (Hooks, Body, Outros)</li>
                    <li className="flex items-center gap-2">✓ Priority 7-10 Day Turnarounds</li>
                  </ul>
                </div>
                <Link to="/contact" className="w-full py-3.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-white text-center font-headline-sm text-sm font-semibold transition-colors">
                  Contact for Custom Scope
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
