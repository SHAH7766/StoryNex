import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoModal } from '../components/VideoModal';
import { ScrollReveal } from '../components/ScrollReveal';

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    creator: string;
    platform: string;
    description: string;
    imageUrl?: string;
  } | null>(null);

  const handleOpenVideo = (title: string, creator: string, platform: string, description: string, imageUrl: string) => {
    setSelectedVideo({ title, creator, platform, description, imageUrl });
    setModalOpen(true);
  };

  const projects = [
    {
      id: '1',
      title: 'Lumina Dew Drops — 3-Second Texture Hook',
      category: 'beauty',
      platform: 'Meta Advantage+',
      duration: '0:24',
      creator: '@elena.skin · London, UK',
      tag: 'Sensory Close-up',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1tXlt9mcmdgwX6UfGXkLNJ_UsfImmRao_Js8dhfRF6N2lQ5-gt-YWZt2mnV5_-wfKGtE3tW1J977sVAjQsTxpiHbXHMw-3Xwkcy0vNVCCaacUgt-mtiLoNnW9dJmO-cKRfCerowffX0KMeb0jFtZ4F4XU9jzKyWf7hc9GM5xocr58TKMe-3oyTdLWB7pY_7y7MrJ_K8mcQ4ebNfD-93B84C-nepSw5bhRrHA70BiGc-CSRDBtccOrLw',
      desc: '3.8x ROAS benchmark on cold prospecting audience with high sensory focus on formula dropper clarity.'
    },
    {
      id: '2',
      title: 'Aura Matte Mineral SPF — Zero White Cast Proof',
      category: 'beauty paid',
      platform: 'TikTok Spark Ad',
      duration: '0:31',
      creator: '@amara.glow · Atlanta, US',
      tag: 'Problem & Solution',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSghbC2LPgS3lBbVp8JpiXH9Bp_guWaqGfsDhe7NrPkB-DXyUqc2WPS3g92SVauIM76fMooPsvb58xPbBz2rYiXkD1O_gH8kWaZiHe57YSO3YZ_wuet5L089s2GbdPVPFiypkDPZpw4HXgsoMExflp9i8VP_0xBH6ekjGjiUTY75dxF3JXLSc1I3D1Hun8w0d-lr7FA5rBWpBTSEwZpsalzKf7vGlXuF6eP3ElPlLhf_f9CXLxquzpmw',
      desc: 'Direct demonstration addressing deep skin tone SPF hesitation. Over 450k organic views and viral comment engagement.'
    },
    {
      id: '3',
      title: 'Minimalist Linen Jacket — 5 Outfit Capsule',
      category: 'fashion',
      platform: 'Instagram Reels',
      duration: '0:38',
      creator: '@sophia.atelier · Berlin, DE',
      tag: 'Try-On Reel',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC12byA1qdrKNy6ghSKfOMEX0geVjiovIfuzU-T7R7wJq4JY3FXpGodk1aP0IwIXA5IMSz-_FOYcJ7i2R9Lk87F22_JGepREakxUjfpDRAGfA3PssRVV8lDpLD-A8nBEpAfNFo-LbxvsPpfBczBMX5Dg8lrdDTmy6408JaAqMjBT3rUj-a-x6PpOqerYvSiZB4FrKx3kU87uj-hUdZao-_G_H--FBtwC9bJjMpnFeHGDa_dz-PBXHBMpQ',
      desc: 'High-end aesthetic transition styling reel for sustainable European apparel brand.'
    },
    {
      id: '4',
      title: 'Ergonomic Hydration Flask — Morning Running Ritual',
      category: 'lifestyle',
      platform: 'TikTok Organic & Paid',
      duration: '0:29',
      creator: '@hannah.moves · Vancouver, CA',
      tag: 'Lifestyle In-Situ',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGBd2DVPztmFLHHEDY0ddp1LUrs1iTeeHvoutk9ndrvvkykgWpxfotII-tx6b8vl181D9bQCSCqIPoNFyNwUIqseO6eLrEd9qMZ5r5F83UOzVxKuQq_IM0aVAYTjHAgVOEtJcaFEcIDtxbR9vhQ4MOxvMk0qunFCX7HP0KtYerdpoF-f2a73RYE-Ps2uOoO2TrV2TeI0IJBGM8XSrwltqiuWiXHEmb_TqqLiO_rJmPJKlMKBExl5dhsg',
      desc: 'Seamless day-in-the-life integration highlighting temperature retention and leakproof design.'
    },
    {
      id: '5',
      title: 'ANC Studio Wireless Earbuds — Minimalist Desk Setup',
      category: 'tech unboxing',
      platform: 'YouTube Shorts',
      duration: '0:32',
      creator: '@kai.tech · Seattle, US',
      tag: 'ASMR Unboxing',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8Jo22pquiUvIZvUD-fGhJIYyedEABvSH0oi9J-asCUFI1r1IjI3cId9qVN5QbEr7xV_KTQi155FxS9EbDrhNkfevnabMPhHxuJY3AaeFZo9tH5pAarc9VTjMWUnGzE8-_DhtNOvgsrRxM7JyAkpK0quaGB007e0Cd8dqoEFFIwajeweLC-pR579xcjQq51ehN6a7PGcbjBBmjD7ADVZGRAbYNMQiSpfAuB9chrdDnSCmIvpmDa4NPzQ',
      desc: 'Tactile unboxing experience featuring high-fidelity sound isolation cues and clean magnetic packaging presentation.'
    },
    {
      id: '6',
      title: 'Cold Brew Extraction System — Morning Ritual',
      category: 'home',
      platform: 'Ecommerce PDP & Ads',
      duration: '0:35',
      creator: '@clara.brews · Manchester, UK',
      tag: 'Home Kitchen Ritual',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqBIoRItwGULyCJ7eKecZHhtZrzAA6qk8b5zyJ6C9S2V1dK-0NPmptnS1BLOR9z248KfW6pTSLjIgkI3HMmKGuJ9o5E_YW-Z92F-tr7s4VCZ6AcaHdSRfT_kAJ491su3Zp40z4-6qKNNIfVvgq0huRv-1_hnBE_BMXNOY-P_SeN6x_uFjTj9cx-Cv_bshE9ytUE_Pt6RV6kOzjZJ9YB2h5R6AKXSPUUeWosPnUeku1eLms6lwf-GCadQ',
      desc: 'Borosilicate glass brewing walkthrough with satisfying oat milk pour and smooth flavor breakdown.'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <div className="flex flex-col w-full bg-surface overflow-hidden">
      {/* HERO SECTION */}
      <section className="w-full bg-surface pt-8 md:pt-12 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-primary-container/10 blur-[130px] rounded-full pointer-events-none animate-pulse"></div>
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
              <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold">Featured Creator Work · 100% Real Human UGC</span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <ScrollReveal className="lg:col-span-8 space-y-4">
              <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight">
                Real Creators. Real Products. <span className="text-primary-container">Creative That Feels Human.</span>
              </h1>
              <p className="font-body-lg text-lg text-secondary max-w-2xl leading-relaxed">
                Explore creator-led videos engineered for rapid product discovery, narrative resonance, social retention, and scalable paid performance across Meta, TikTok, and YouTube.
              </p>
            </ScrollReveal>
            <ScrollReveal className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end lg:items-end" delay={200}>
              <a href="#portfolio-grid" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-on-primary-fixed font-headline-sm text-[15px] font-bold tracking-tight uppercase shadow-[0_0_28px_rgba(201,241,93,0.22)] hover:bg-white hover:text-surface transition-all">
                <span>Explore Library</span>
                <span className="material-symbols-outlined text-[18px]">south</span>
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-surface-container-high text-on-surface hover:text-white font-label-lg text-sm transition-colors">
                <span className="material-symbols-outlined text-primary-container text-[18px]">assignment</span>
                <span>Start a Brief</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-20 z-40 w-full bg-surface/90 backdrop-blur-xl py-3 shadow-md">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 py-1 min-w-max">
            {[
              { id: 'all', label: 'All Work (6)' },
              { id: 'beauty', label: 'Beauty & Skincare' },
              { id: 'tech', label: 'Tech & Gadgets' },
              { id: 'fashion', label: 'Fashion & Apparel' },
              { id: 'lifestyle', label: 'Lifestyle & Wellness' },
              { id: 'home', label: 'Home & Kitchen' },
              { id: 'paid', label: 'Paid Social Ads' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full font-label-sm text-xs uppercase font-bold tracking-wider transition-all duration-150 ${
                  activeFilter === f.id
                    ? 'bg-primary-container text-on-primary-fixed shadow-[0_0_16px_rgba(201,241,93,0.25)]'
                    : 'bg-surface-container-high text-secondary hover:text-white hover:bg-surface-container-highest'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PORTFOLIO GRID */}
      <section id="portfolio-grid" className="w-full bg-surface-dim py-20 md:py-28">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-primary-container font-semibold">PRODUCTION ARCHIVE</span>
                <h2 className="font-headline-md text-2xl md:text-3xl text-white font-bold tracking-tight mt-1">High-Impact Human Creatives</h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, i) => (
              <ScrollReveal key={p.id} delay={(i % 3) * 100}>
                <div
                  onClick={() => handleOpenVideo(p.title, p.creator, p.platform, p.desc, p.img)}
                  className="group flex flex-col rounded-xl overflow-hidden bg-surface-container-low shadow-md transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-surface-container">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${p.img}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/20 to-transparent opacity-90"></div>
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-high/90 backdrop-blur-md text-primary font-label-sm text-[10px] uppercase font-bold tracking-wider">{p.platform}</span>
                      <span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/80 text-primary-container font-label-sm text-[10px] font-mono tracking-tight">{p.duration}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-surface-dim/80 backdrop-blur-md flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-surface transition-all duration-200 shadow-lg scale-90 group-hover:scale-100">
                        <span className="material-symbols-outlined text-[24px]">play_arrow</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold text-[10px]">SN</span>
                        <span className="font-label-sm text-xs text-secondary font-medium">{p.creator}</span>
                      </div>
                      <h3 className="font-headline-sm text-base text-white font-bold leading-snug group-hover:text-primary-container transition-colors">{p.title}</h3>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-label-sm text-[11px] uppercase tracking-wide text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded">{p.tag}</span>
                        <span className="font-label-sm text-[10px] font-mono text-secondary">9:16 REEL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} videoData={selectedVideo} />
    </div>
  );
};
