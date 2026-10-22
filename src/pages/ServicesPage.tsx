import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-surface overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-surface text-on-surface px-6 md:px-8 lg:px-16 pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none animate-pulse"></div>
        <div className="max-w-[1360px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <ScrollReveal className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span>Comprehensive UGC Capabilities · Creative Strategy &amp; Production</span>
              </div>
              <h1 className="font-headline-lg text-4xl lg:text-6xl text-white tracking-tight leading-[1.05] font-extrabold">
                UGC Production Built Around Your Brand.
              </h1>
              <p className="font-body-lg text-base lg:text-lg text-secondary max-w-2xl pt-2">
                From initial concept architecture and scripted hooks to vetted creator matching, in-house editing, and format optimization — we handle end-to-end UGC that delivers genuine commercial return.
              </p>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-4 flex flex-col justify-end space-y-4" delay={200}>
              <div className="p-6 rounded-xl bg-surface-container-low shadow-xl">
                <div className="flex items-center justify-between pb-4 mb-4 bg-surface-container-lowest/60 p-3 rounded-lg">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant">Production Velocity</span>
                  <span className="font-counter-editorial text-lg text-primary-container font-bold">7-10 Days</span>
                </div>
                <p className="font-body-sm text-xs text-secondary">
                  Direct-to-consumer &amp; enterprise video delivery calibrated for high-volume paid performance engines.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="bg-surface-dim text-on-surface px-6 md:px-8 lg:px-16 py-28">
        <div className="max-w-[1360px] mx-auto w-full space-y-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-bold">Capabilities Catalog</div>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-white font-extrabold">Full-Funnel Human Video Formats</h2>
              </div>
              <p className="font-body-md text-sm md:text-base text-secondary max-w-md">
                Engineered for algorithmic resonance and direct-response conversions across TikTok, Meta Advantage+, Reels, and YouTube Shorts.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Service 1 */}
            <ScrollReveal className="lg:col-span-7">
              <div className="rounded-xl bg-surface-container-low p-8 flex flex-col justify-between shadow-lg h-full transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="font-counter-editorial text-2xl text-on-surface-variant font-black">01</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary-container font-label-sm text-xs uppercase tracking-wider">High ROAS Hero</span>
                </div>
                <div className="space-y-3 my-6">
                  <h3 className="font-headline-md text-2xl text-white font-bold">UGC Paid Video Ads</h3>
                  <p className="font-body-md text-sm text-secondary leading-relaxed">
                    High-converting direct response video ad units configured specifically for Meta, TikTok, and YouTube Shorts. Incorporates thumb-stopping 3-second visual hooks, rapid sensory pacing, and strict platform-safe zone compliance.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-container-high flex items-center justify-between">
                  <span className="font-body-sm text-xs text-secondary">Deliverable: 1 Base + 3 Hooks + 2 CTAs</span>
                  <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-surface-container-high hover:bg-primary-container text-white hover:text-black font-label-lg text-xs font-semibold transition-all">
                    Request Service →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 2 */}
            <ScrollReveal className="lg:col-span-5" delay={150}>
              <div className="rounded-xl bg-surface-container-low p-8 flex flex-col justify-between shadow-lg h-full transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="font-counter-editorial text-2xl text-on-surface-variant font-black">02</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-xs uppercase tracking-wider">Solution Focus</span>
                </div>
                <div className="space-y-3 my-6">
                  <h3 className="font-headline-md text-2xl text-white font-bold">Product Demonstrations</h3>
                  <p className="font-body-md text-sm text-secondary leading-relaxed">
                    Tactile, high-definition close-up demonstrations that de-risk the checkout journey. Features macro product textures, smooth application sequences, and step-by-step problem resolution.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-container-high flex items-center justify-between">
                  <span className="font-body-sm text-xs text-secondary">Deliverable: 9:16 &amp; 16:9 B-Roll</span>
                  <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-surface-container-high hover:bg-primary-container text-white hover:text-black font-label-lg text-xs font-semibold transition-all">
                    Request Service →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal className="lg:col-span-5">
              <div className="rounded-xl bg-surface-container-low p-8 flex flex-col justify-between shadow-lg h-full transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="font-counter-editorial text-2xl text-on-surface-variant font-black">03</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-xs uppercase tracking-wider">Top of Funnel</span>
                </div>
                <div className="space-y-3 my-6">
                  <h3 className="font-headline-md text-2xl text-white font-bold">Unboxing &amp; First Impressions</h3>
                  <p className="font-body-md text-sm text-secondary leading-relaxed">
                    Capture genuine emotional reactions and ASMR packaging audio as creators unbox and experience your product for the first time.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-container-high flex items-center justify-between">
                  <span className="font-body-sm text-xs text-secondary">Deliverable: High Sensory Audio</span>
                  <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-surface-container-high hover:bg-primary-container text-white hover:text-black font-label-lg text-xs font-semibold transition-all">
                    Request Service →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 4 */}
            <ScrollReveal className="lg:col-span-7" delay={150}>
              <div className="rounded-xl bg-surface-container-low p-8 flex flex-col justify-between shadow-lg h-full transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="font-counter-editorial text-2xl text-on-surface-variant font-black">04</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-xs uppercase tracking-wider">Social Proof</span>
                </div>
                <div className="space-y-3 my-6">
                  <h3 className="font-headline-md text-2xl text-white font-bold">Testimonials &amp; Founder Stories</h3>
                  <p className="font-body-md text-sm text-secondary leading-relaxed">
                    Relatable consumer reviews overcoming common purchasing objections through conversational direct-to-camera storytelling. Ideal for retargeting and bottom-of-funnel conversion.
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-container-high flex items-center justify-between">
                  <span className="font-body-sm text-xs text-secondary">Deliverable: Objection-Handling Batches</span>
                  <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-surface-container-high hover:bg-primary-container text-white hover:text-black font-label-lg text-xs font-semibold transition-all">
                    Request Service →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
