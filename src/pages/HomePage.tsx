import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoModal } from '../components/VideoModal';
import { ScrollReveal } from '../components/ScrollReveal';

export const HomePage: React.FC = () => {
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

  return (
    <div className="flex flex-col w-full bg-surface overflow-hidden">
      {/* SECTION A: HERO */}
      <section className="w-full bg-[#171717] text-on-surface pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden relative">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-surface-container-high mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#c9f15d] animate-ping"></span>
              <span className="font-label-sm text-xs text-on-surface uppercase tracking-widest font-semibold">
                STORYNEX UGC CREATIVE STUDIO · BUILT FOR MODERN BRANDS
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy & Actions */}
            <ScrollReveal className="lg:col-span-6 space-y-6">
              <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-tight">
                Real Creators.<br />
                <span className="text-secondary">Authentic Stories.</span><br />
                <span className="text-primary-container underline decoration-primary-container/40 underline-offset-8">
                  Content That Connects.
                </span>
              </h1>
              <p className="font-body-lg text-lg text-secondary max-w-xl leading-relaxed">
                We help ambitious brands turn real human creativity into scroll-stopping UGC videos engineered specifically for TikTok, Meta Advantage+, YouTube Shorts, and ecommerce storefronts.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary-container text-on-primary-fixed font-headline-sm text-[15px] font-bold tracking-tight uppercase shadow-[0_0_28px_rgba(201,241,93,0.3)] hover:bg-white hover:text-[#171717] hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
                >
                  Start Your Project
                  <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-transparent border border-surface-container-highest text-white font-headline-sm text-[15px] font-semibold tracking-tight hover:border-primary-container hover:bg-surface-container transition-all duration-300"
                >
                  Explore Our Work
                  <span className="material-symbols-outlined ml-2 text-[18px] text-primary-container">play_circle</span>
                </Link>
              </div>

              {/* Quick Trust Prooflets */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-label-sm text-xs text-on-surface-variant uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span> 100% Real Creators</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span> 10-14 Day Delivery</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span> Full Usage Rights</span>
              </div>
            </ScrollReveal>

            {/* Right Column: Video Showcase Masonry */}
            <ScrollReveal className="lg:col-span-6 grid grid-cols-2 gap-4" delay={200}>
              {/* Frame 1 */}
              <div className="space-y-4 -translate-y-4">
                <div
                  onClick={() => handleOpenVideo('Dewy Hydration Routine', '@elena.glows · London, UK', 'Skincare · 9:16', 'High conversion TikTok spark ad focusing on morning skincare texture.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1RwbcOhN7TU-qEM9yg3y-jnTCJMwdIpjE8s_dOwXaaFlV2PT905PtceL8Wd0EIw2_OnZLfzAnCKMBXC6excdbFUNF-meAysr34b1dA9Bb8u-w37Qmcw7tx2T4SM9MwBZvztgkDto6R73em3RVAo0Z0XTrWnCLf9Js3_vXhKIcZmLrcms1ROuix2dWqBxD2jmXN4dSZKqYqxIM1ftAX4-bgZqL1L8p4-3L9MfHxT2u2RQcKwLCZyFbQQ')}
                  className="group relative rounded-xl overflow-hidden bg-surface-container border border-surface-container-high shadow-xl aspect-[9/16] cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1RwbcOhN7TU-qEM9yg3y-jnTCJMwdIpjE8s_dOwXaaFlV2PT905PtceL8Wd0EIw2_OnZLfzAnCKMBXC6excdbFUNF-meAysr34b1dA9Bb8u-w37Qmcw7tx2T4SM9MwBZvztgkDto6R73em3RVAo0Z0XTrWnCLf9Js3_vXhKIcZmLrcms1ROuix2dWqBxD2jmXN4dSZKqYqxIM1ftAX4-bgZqL1L8p4-3L9MfHxT2u2RQcKwLCZyFbQQ')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-label-sm text-[10px] uppercase font-bold tracking-wider">Skincare · 9:16</span>
                    <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"><span className="material-symbols-outlined text-[14px]">volume_up</span></span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-primary-container/60 flex items-center justify-center text-primary-container group-hover:scale-110 group-hover:bg-primary-container group-hover:text-black transition-all duration-300">
                      <span className="material-symbols-outlined text-[24px]">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center justify-between text-white mb-1">
                      <span className="font-headline-sm text-sm font-semibold truncate">Dewy Hydration Routine</span>
                      <span className="font-label-sm text-[11px] text-primary-container font-bold">0:28s</span>
                    </div>
                    <p className="font-body-sm text-[11px] text-secondary truncate">@elena.glows · London, UK</p>
                  </div>
                </div>

                {/* Frame 3 */}
                <div
                  onClick={() => handleOpenVideo('ANC Wireless Studio', 'Austin, US', 'Meta Advantage+ Cut', 'Immersive tech unboxing and sound test.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_HVqYRoxV0HANsPAG4rohZBmhmktihQ-PdASTwzrAzwDu63JUWEp_GfowmECqHrI8QLMtywM-o-p-Sv5Keua2U5pv9C0_PpLyf_5gtFQ2EuI91jwii6M7524-Bh43LyBn_3BUzCgWOsgfs2y2AeL90rNHxE9kyg0LdPGCSWKsce0ld8DgRuiRXnM7yBlIIXUJ-jYqu4QDziauC8ZJJHQYB_aIENRnRsVz8ixsf7FMvHvYsIdaUlAg6w')}
                  className="group relative rounded-xl overflow-hidden bg-surface-container border border-surface-container-high shadow-xl aspect-[9/16] cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_HVqYRoxV0HANsPAG4rohZBmhmktihQ-PdASTwzrAzwDu63JUWEp_GfowmECqHrI8QLMtywM-o-p-Sv5Keua2U5pv9C0_PpLyf_5gtFQ2EuI91jwii6M7524-Bh43LyBn_3BUzCgWOsgfs2y2AeL90rNHxE9kyg0LdPGCSWKsce0ld8DgRuiRXnM7yBlIIXUJ-jYqu4QDziauC8ZJJHQYB_aIENRnRsVz8ixsf7FMvHvYsIdaUlAg6w')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-label-sm text-[10px] uppercase font-bold tracking-wider">Unboxing Experience</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary-container group-hover:text-black transition-all duration-300">
                      <span className="material-symbols-outlined text-[24px]">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center justify-between text-white mb-1">
                      <span className="font-headline-sm text-sm font-semibold truncate">ANC Wireless Studio</span>
                      <span className="font-label-sm text-[11px] text-primary-container font-bold">0:32s</span>
                    </div>
                    <p className="font-body-sm text-[11px] text-secondary truncate">Meta Advantage+ Cut · Austin, US</p>
                  </div>
                </div>
              </div>

              {/* Frame 2 & 4 */}
              <div className="space-y-4 translate-y-6">
                <div
                  onClick={() => handleOpenVideo('Problem-Agitation Hook', '@marcus.builds · Toronto, CA', 'TikTok Ad Hook', 'High retention direct-to-camera productivity device hook.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlwSGoJUlbyxclVTD7gzTR8D6NyWeNGem-NkBNN0ultTk_g_o8ZWtXhqv7TGDmArBdnBGZOnWgE1aQjAvz2x25NX4q5uq8c2ekCbGes28hc39EmXiWi5t57beZpmIwdWt_32GpG4cgRGP_ESeTnOTABeOfrtYCKyG7bqH2Z_vMuth4G995llaw2-fJzTZssJ7D9w4cBbLe5htndI-qENavD74wUZ9Ft7IWJ4nZBQY7IOcqhGpRxvO2Dg')}
                  className="group relative rounded-xl overflow-hidden bg-surface-container border border-surface-container-high shadow-xl aspect-[9/16] cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlwSGoJUlbyxclVTD7gzTR8D6NyWeNGem-NkBNN0ultTk_g_o8ZWtXhqv7TGDmArBdnBGZOnWgE1aQjAvz2x25NX4q5uq8c2ekCbGes28hc39EmXiWi5t57beZpmIwdWt_32GpG4cgRGP_ESeTnOTABeOfrtYCKyG7bqH2Z_vMuth4G995llaw2-fJzTZssJ7D9w4cBbLe5htndI-qENavD74wUZ9Ft7IWJ4nZBQY7IOcqhGpRxvO2Dg')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-primary-container text-black font-label-sm text-[10px] uppercase font-bold tracking-wider">TikTok Ad Hook · 0:24s</span>
                    <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-primary-container/60 flex items-center justify-center text-primary-container group-hover:scale-110 group-hover:bg-primary-container group-hover:text-black transition-all duration-300">
                      <span className="material-symbols-outlined text-[24px]">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="font-headline-sm text-sm font-semibold text-white truncate">Problem-Agitation Hook</p>
                    <p className="font-body-sm text-[11px] text-secondary truncate">@marcus.builds · Toronto, CA</p>
                  </div>
                </div>

                <div
                  onClick={() => handleOpenVideo('Spring Capsule Wardrobe', '@sophia.atelier · Berlin, DE', 'Meta Paid Social', 'Editorial fashion try-on reel in urban loft.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5fSY3kNhr5wl9cgLz_CqKdiwoZMBHdMwmhZ9-1rpY3GyASEogzFYkto_E22UNwsAnSH7Lj3pd5P6C2XBGNDjnILy_3PXtfAGJthgkhlrJ94xKL9cz-oD7CESo5kerOUtMrKL1jrQ41u4Ms3sWav4LupntZOlnDZagQfdp7p9HwU7hQ85e8HhuBMUltGsT-oGk6RasLeFP1_4FzdM9cXfhCYze-bzjpj5O1QD270w354qN9pmusSM-Lg')}
                  className="group relative rounded-xl overflow-hidden bg-surface-container border border-surface-container-high shadow-xl aspect-[9/16] cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5fSY3kNhr5wl9cgLz_CqKdiwoZMBHdMwmhZ9-1rpY3GyASEogzFYkto_E22UNwsAnSH7Lj3pd5P6C2XBGNDjnILy_3PXtfAGJthgkhlrJ94xKL9cz-oD7CESo5kerOUtMrKL1jrQ41u4Ms3sWav4LupntZOlnDZagQfdp7p9HwU7hQ85e8HhuBMUltGsT-oGk6RasLeFP1_4FzdM9cXfhCYze-bzjpj5O1QD270w354qN9pmusSM-Lg')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-label-sm text-[10px] uppercase font-bold tracking-wider">Meta Paid Social</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary-container group-hover:text-black transition-all duration-300">
                      <span className="material-symbols-outlined text-[24px]">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center justify-between text-white mb-1">
                      <span className="font-headline-sm text-sm font-semibold truncate">Spring Capsule Wardrobe</span>
                      <span className="font-label-sm text-[11px] text-primary-container font-bold">0:34s</span>
                    </div>
                    <p className="font-body-sm text-[11px] text-secondary truncate">@sophia.atelier · Berlin, DE</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION B: TRUST AND POSITIONING */}
      <section className="w-full bg-[#F7F5EF] text-[#171717] py-20 md:py-28 border-y border-[#E5E2D9]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-2">
                <span className="font-label-sm text-xs text-[#737373] uppercase tracking-widest font-bold">Cross-Channel Precision</span>
                <h2 className="font-headline-md text-3xl font-bold tracking-tight text-[#171717] max-w-xl">
                  Creative Content for Brands Ready to Stand Out.
                </h2>
              </div>
              <p className="font-body-md text-base text-[#525252] max-w-md">
                Platform-engineered assets designed specifically for the algorithmic requirements and viewer psychology of modern feed environments.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-wrap items-center gap-3 pb-12 border-b border-[#E5E2D9]">
              {['TikTok Ads', 'Instagram Reels', 'Meta Advantage+', 'YouTube Shorts', 'Ecommerce PDP Videos'].map((platform, i) => (
                <div key={i} className="px-5 py-2.5 rounded-full bg-white border border-[#E5E2D9] font-label-lg text-sm font-semibold text-[#171717] flex items-center gap-2 shadow-sm hover:scale-105 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-[#171717]"></span>
                  {platform}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
            {[
              { num: "100%", title: "Real Human Talent", desc: "Strict zero-AI policy. Every video is created by real consumers in genuine homes, offices, and studios." },
              { num: "4 Regions", title: "Global Creator Roster", desc: "Active creator bases across the United States, United Kingdom, Canada, and European Union." },
              { num: "9:16 & 1:1", title: "Platform-Native Ratios", desc: "Master deliveries formatted with safe zones for UI text overlays, profile buttons, and caption bars." },
              { num: "10-14 D", title: "Script-to-Delivery", desc: "Agile turnaround with managed creator shipping, structured review rounds, and final ad-ready delivery." }
            ].map((m, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-6 rounded-xl bg-white border border-[#E5E2D9] shadow-sm space-y-2 hover:-translate-y-1 transition-transform">
                  <span className="font-headline-md text-3xl font-extrabold text-[#171717]">{m.num}</span>
                  <h3 className="font-label-lg text-base font-bold text-[#171717]">{m.title}</h3>
                  <p className="font-body-sm text-sm text-[#666666] leading-relaxed">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: FEATURED VIDEO PORTFOLIO */}
      <section className="w-full bg-[#171717] text-on-surface py-28">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-surface-container-high pb-8">
              <div>
                <span className="font-label-sm text-xs text-primary-container uppercase tracking-widest font-bold">01 / WORK</span>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-white font-extrabold tracking-tight mt-2">
                  Made to Feel Real. Designed to Make an Impact.
                </h2>
              </div>
              <p className="font-body-md text-base text-secondary max-w-md">
                A selection of our recent creator-led performance campaigns across direct-to-consumer skincare, tech hardware, lifestyle, and fashion.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dewy Hydration Serum — First Impression",
                category: "Skincare Routine",
                tag: "9:16 Vertical · TikTok Spark Ad",
                creator: "@chloe.skincare (London, UK)",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrJk-Ub8pYUvo62UX1TGpVvh2aoe5K6u05PIqIBrGIVpbtyJMtw2_1DZMKWz-cMsi5whyjV7xyC0UQA6VPQHAxKUEyb5eukpuUz5FHllIdJ1Qm_yPE9EywIWk-0pW9eMQJK3GoiX3tagQFh3Xg8fHG8EBWG5yTiuM8tyAiqzPJrrkEwvrjIPb82bAf-OCk66YoTetrWsatANxoU7afCh-OXIUu-JyoSBxAnQfPeu23S53OpOa13lPwCQ"
              },
              {
                title: "Mineral SPF Breakdown — Zero Cast Test",
                category: "Product Demo",
                tag: "9:16 Vertical · Meta Advantage+",
                creator: "@amara.glow (Atlanta, US)",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSghbC2LPgS3lBbVp8JpiXH9Bp_guWaqGfsDhe7NrPkB-DXyUqc2WPS3g92SVauIM76fMooPsvb58xPbBz2rYiXkD1O_gH8kWaZiHe57YSO3YZ_wuet5L089s2GbdPVPFiypkDPZpw4HXgsoMExflp9i8VP_0xBH6ekjGjiUTY75dxF3JXLSc1I3D1Hun8w0d-lr7FA5rBWpBTSEwZpsalzKf7vGlXuF6eP3ElPlLhf_f9CXLxquzpmw"
              },
              {
                title: "Capsule Wardrobe — 5 Outfits, 1 Jacket",
                category: "Fashion Try-On",
                tag: "9:16 Vertical · Instagram Reels",
                creator: "@leo.threads (Berlin, DE)",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC12byA1qdrKNy6ghSKfOMEX0geVjiovIfuzU-T7R7wJq4JY3FXpGodk1aP0IwIXA5IMSz-_FOYcJ7i2R9Lk87F22_JGepREakxUjfpDRAGfA3PssRVV8lDpLD-A8nBEpAfNFo-LbxvsPpfBczBMX5Dg8lrdDTmy6408JaAqMjBT3rUj-a-x6PpOqerYvSiZB4FrKx3kU87uj-hUdZao-_G_H--FBtwC9bJjMpnFeHGDa_dz-PBXHBMpQ"
              },
              {
                title: "Smart Ergonomic Hydration — Daily Habit",
                category: "Lifestyle UGC",
                tag: "9:16 Vertical · TikTok Organic & Paid",
                creator: "@hannah.moves (Vancouver, CA)",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGBd2DVPztmFLHHEDY0ddp1LUrs1iTeeHvoutk9ndrvvkykgWpxfotII-tx6b8vl181D9bQCSCqIPoNFyNwUIqseO6eLrEd9qMZ5r5F83UOzVxKuQq_IM0aVAYTjHAgVOEtJcaFEcIDtxbR9vhQ4MOxvMk0qunFCX7HP0KtYerdpoF-f2a73RYE-Ps2uOoO2TrV2TeI0IJBGM8XSrwltqiuWiXHEmb_TqqLiO_rJmPJKlMKBExl5dhsg"
              },
              {
                title: "ANC Wireless Studio — Minimalist Desk Setup",
                category: "Tech Unboxing",
                tag: "9:16 Vertical · YouTube Shorts",
                creator: "@kai.tech (Seattle, US)",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Jo22pquiUvIZvUD-fGhJIYyedEABvSH0oi9J-asCUFI1r1IjI3cId9qVN5QbEr7xV_KTQi155FxS9EbDrhNkfevnabMPhHxuJY3AaeFZo9tH5pAarc9VTjMWUnGzE8-_DhtNOvgsrRxM7JyAkpK0quaGB007e0Cd8dqoEFFIwajeweLC-pR579xcjQq51ehN6a7PGcbjBBmjD7ADVZGRAbYNMQiSpfAuB9chrdDnSCmIvpmDa4NPzQ"
              },
              {
                title: "Precision Cold Brew System — Morning Ritual",
                category: "Home & Kitchen",
                tag: "9:16 Vertical · Ecommerce PDP & Ads",
                creator: "@clara.brews (Manchester, UK)",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqBIoRItwGULyCJ7eKecZHhtZrzAA6qk8b5zyJ6C9S2V1dK-0NPmptnS1BLOR9z248KfW6pTSLjIgkI3HMmKGuJ9o5E_YW-Z92F-tr7s4VCZ6AcaHdSRfT_kAJ491su3Zp40z4-6qKNNIfVvgq0huRv-1_hnBE_BMXNOY-P_SeN6x_uFjTj9cx-Cv_bshE9ytUE_Pt6RV6kOzjZJ9YB2h5R6AKXSPUUeWosPnUeku1eLms6lwf-GCadQ"
              }
            ].map((p, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 100}>
                <div
                  onClick={() => handleOpenVideo(p.title, p.creator, p.category, 'Optimized for high retention and proven ROAS performance across channels.', p.img)}
                  className="group flex flex-col space-y-3 cursor-pointer"
                >
                  <div className="relative rounded-xl overflow-hidden bg-surface-container border border-surface-container-high aspect-[9/16] shadow-lg transition-transform duration-300 hover:-translate-y-2">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${p.img}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white font-label-sm text-[11px] uppercase tracking-wider font-semibold">{p.category}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-primary-container flex items-center justify-center text-primary-container group-hover:scale-110 group-hover:bg-primary-container group-hover:text-black transition-all duration-300">
                        <span className="material-symbols-outlined text-[28px]">play_arrow</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-primary-container font-label-sm text-[10px] uppercase font-bold tracking-wider mb-2">{p.tag}</span>
                      <h3 className="font-headline-sm text-base text-white font-bold">{p.title}</h3>
                      <p className="font-body-sm text-xs text-secondary mt-1">Creator: {p.creator}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-16 pt-12 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="font-body-md text-secondary">
                Need custom aspect ratios or native localization? We produce 9:16, 1:1, and 16:9 deliverables.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high hover:bg-white hover:text-black text-white font-headline-sm text-sm font-semibold transition-all duration-300"
              >
                <span>View All Projects in Archive</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION D: SERVICES OVERVIEW */}
      <section className="w-full bg-[#F7F5EF] text-[#171717] py-28 border-y border-[#E5E2D9]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
          <ScrollReveal>
            <div className="mb-16">
              <span className="font-label-sm text-xs text-[#737373] uppercase tracking-widest font-bold">02 / EXPERTISE</span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#171717] font-extrabold tracking-tight mt-2">
                Everything Your Brand Needs to Create Better Content.
              </h2>
              <p className="font-body-lg text-lg text-[#525252] max-w-2xl mt-4">
                A dedicated creative production partner handling every step: creative strategy, creator casting, scripted hooks, filming logistics, post-production, and final deliveries.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "UGC Video Ads", category: "Performance Paid Social", desc: "High-converting, creator-led short-form advertisements engineered for 3-second hook retention and lower customer acquisition costs." },
              { title: "Product Demonstrations", category: "Problem & Solution", desc: "Clear, authentic walkthroughs that showcase product benefits, textures, usability, and real transformations without feeling like an infomercial." },
              { title: "Unboxing Videos", category: "Unfiltered Reactions", desc: "Capture the palpable excitement of receiving, unboxing, and testing your product for the first time with high-fidelity sensory audio." },
              { title: "Testimonials & Stories", category: "Social Proof & Reviews", desc: "Relatable consumer-style review videos sharing authentic experiences, objections overcome, and emotional reasons to buy." },
              { title: "Lifestyle & In-Situ Content", category: "Organic Integration", desc: "Show your product woven naturally into real everyday routines, authentic aesthetic living spaces, kitchens, gyms, and urban environments." },
              { title: "Scriptwriting & Hook Iterations", category: "Creative Testing Engine", desc: "Strategic creative frameworks delivering multiple hook intros, pacing tests, and call-to-actions to multiply your creative testing bandwidth." }
            ].map((s, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 100}>
                <div className="p-8 rounded-xl bg-white border border-[#E5E2D9] shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-[#171717] text-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">movie</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-xs uppercase tracking-wider text-[#737373] font-bold">{s.category}</span>
                      <h3 className="font-headline-sm text-xl font-bold text-[#171717] mt-1">{s.title}</h3>
                    </div>
                    <p className="font-body-md text-sm text-[#525252] leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-[#F0ECE1] mt-6">
                    <Link to="/services" className="font-label-lg text-sm font-bold text-[#171717] hover:text-[#546d00] inline-flex items-center gap-1 group">
                      Explore Service <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: WHY WORK WITH US */}
      <section className="w-full bg-[#171717] text-on-surface py-28 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <ScrollReveal className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="font-label-sm text-xs text-primary-container uppercase tracking-widest font-bold">The Human Creative Standard</span>
                <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Real People. Thoughtful Creative. A Better Production Experience.
                </h2>
                <p className="font-body-lg text-base text-secondary pt-2">
                  Consumers reject polished corporate advertising and spot synthetic AI gimmicks instantly. Storynex was built to deliver verifiable real human authenticity at scale.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary-container text-black flex items-center justify-center font-bold text-xs">✓</span>
                    <h4 className="font-headline-sm text-base text-white font-bold">Strict Anti-AI Human Policy</h4>
                  </div>
                  <p className="font-body-sm text-sm text-secondary">Zero deepfakes or synthetic avatar clones. 100% genuine creators with nuanced physical reactions and genuine emotion.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary-container text-black flex items-center justify-center font-bold text-xs">✓</span>
                    <h4 className="font-headline-sm text-base text-white font-bold">Audience-Aligned Casting</h4>
                  </div>
                  <p className="font-body-sm text-sm text-secondary">We hand-match creators from the US, UK, Canada, and EU who authentically mirror your ideal buyer demographic.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-5" delay={200}>
              <div className="relative rounded-2xl overflow-hidden bg-surface-container border border-surface-container-high shadow-2xl p-6 transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqhaEqPDtUaXwUw7UADqTB4PL8MiK23idUS9_Xu71It3ysXSW6aEtDZr4cYkOcWev9yyCJ8j_sikhur4A1LTosKSUix0mmzGoVYdEYzuezHv_o-A0pVF9F_snAqoXGQmIPtLzexJfqiZmea9RQvoWt_K1OtVQr_fID4_zZVSxmyV45xYCl6hvlTaNn_7UEgIfIeVjRREO9A3EwleXgxEzVT38lH5fhrhXVu-htW4s1nNGx2vCLbPEcMA')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-primary-container/40">
                      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                      <span className="font-label-sm text-xs text-white font-semibold">PRODUCTION DISCIPLINE</span>
                    </div>
                    <h3 className="font-headline-sm text-lg text-white font-bold">Real Environments. Authentic Lighting. Zero AI Artifice.</h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION F: OUR PROCESS */}
      <section className="w-full bg-[#F7F5EF] text-[#171717] py-28 border-y border-[#E5E2D9]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
          <ScrollReveal>
            <div className="mb-16">
              <span className="font-label-sm text-xs text-[#737373] uppercase tracking-widest font-bold">03 / METHOD</span>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-[#171717] font-extrabold tracking-tight mt-2">
                From Brief to High-Converting Video in 5 Clear Steps.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: "01", title: "Discover", desc: "We review your product, past ad wins, target personas, and specific campaign goals.", time: "Day 1 — Onboarding", dark: false },
              { num: "02", title: "Plan", desc: "Our strategists build hook matrices, script frameworks, and select matched creator candidates.", time: "Days 2-4 — Strategy", dark: false },
              { num: "03", title: "Create", desc: "Products ship to creators. Filming takes place in real environments with directed briefs.", time: "Days 5-9 — Production", dark: false },
              { num: "04", title: "Refine", desc: "In-house editing: native social captions, dynamic cuts, color grade, and review rounds.", time: "Days 10-12 — Post", dark: false },
              { num: "05", title: "Deliver", desc: "Ad-ready master files, multiple hook variations, and raw footage ready to launch.", time: "Day 14 — Launch", dark: true }
            ].map((st, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`p-6 rounded-xl border shadow-sm flex flex-col justify-between space-y-4 h-full transition-transform hover:-translate-y-1 ${st.dark ? 'bg-[#171717] text-white border-transparent' : 'bg-white border-[#E5E2D9]'}`}>
                  <div className="space-y-2">
                    <span className={`font-counter-editorial text-2xl font-extrabold ${st.dark ? 'text-primary-container' : 'text-[#737373]'}`}>{st.num}</span>
                    <h3 className="font-headline-sm text-lg font-bold">{st.title}</h3>
                    <p className={`font-body-sm text-sm ${st.dark ? 'text-secondary' : 'text-[#525252]'}`}>{st.desc}</p>
                  </div>
                  <span className={`font-label-sm text-[11px] uppercase tracking-wider font-semibold ${st.dark ? 'text-primary-container' : 'text-[#737373]'}`}>{st.time}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G: PACKAGE PREVIEW */}
      <section className="w-full bg-[#171717] text-on-surface py-28">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="font-label-sm text-xs text-primary-container uppercase tracking-widest font-bold">Transparent Creative Scopes</span>
              <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Find the Right Creative Package for Your Brand.
              </h2>
              <p className="font-body-lg text-base text-secondary">
                No vague retainers or hidden surprise fees. Structured creative packages built for testing, scaling, or ongoing creative refresh.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <ScrollReveal>
              <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high shadow-lg flex flex-col justify-between space-y-8 h-full transition-transform hover:-translate-y-2">
                <div className="space-y-4">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">Normal Package</span>
                  <h3 className="font-headline-md text-2xl font-bold text-white">Starter Package</h3>
                  <p className="font-body-md text-sm text-secondary">Ideal for brands testing creator-led UGC for the first time or validating new product offerings.</p>
                  <div className="pt-4 border-t border-surface-container-highest">
                    <span className="font-headline-sm text-2xl text-white font-bold">$150</span>
                    <p className="font-body-sm text-xs text-on-surface-variant">Generating 5 videos</p>
                  </div>
                  <ul className="space-y-2.5 font-body-sm text-sm text-secondary pt-2">
                    <li className="flex items-center gap-2">✓ 5 Distinct UGC Videos</li>
                    <li className="flex items-center gap-2">✓ Matched Human Creators</li>
                    <li className="flex items-center gap-2">✓ Hook Variations</li>
                    <li className="flex items-center gap-2">✓ 9:16 Vertical Master Formats</li>
                  </ul>
                </div>
                <Link to="/contact" className="w-full py-3 rounded-full bg-surface-container-high hover:bg-surface-bright text-white text-center font-headline-sm text-sm font-semibold transition-colors">
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
                    <span className="font-headline-sm text-2xl text-white font-bold">$1,000</span>
                    <p className="font-body-sm text-xs text-on-surface-variant">Full campaign production</p>
                  </div>
                  <ul className="space-y-2.5 font-body-sm text-sm text-white pt-2">
                    <li className="flex items-center gap-2">✓ Full Campaign Generation</li>
                    <li className="flex items-center gap-2">✓ Multiple Vetted Creators</li>
                    <li className="flex items-center gap-2">✓ Hook &amp; CTA Iterations</li>
                    <li className="flex items-center gap-2">✓ Full Perpetual Ad Usage Rights</li>
                  </ul>
                </div>
                <Link to="/contact" className="w-full py-3.5 rounded-full bg-primary-container hover:bg-white hover:text-black text-black text-center font-headline-sm text-sm font-bold tracking-tight uppercase shadow-md transition-all">
                  Choose Campaign ($1,000)
                </Link>
              </div>
            </ScrollReveal>

            {/* Performance */}
            <ScrollReveal delay={200}>
              <div className="p-8 rounded-xl bg-surface-container border border-surface-container-high shadow-lg flex flex-col justify-between space-y-8 h-full transition-transform hover:-translate-y-2">
                <div className="space-y-4">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">High Volume Engine</span>
                  <h3 className="font-headline-md text-2xl font-bold text-white">Performance Batch</h3>
                  <p className="font-body-md text-sm text-secondary">For established omnichannel brands requiring reliable high-velocity creative volume each month.</p>
                  <div className="pt-4 border-t border-surface-container-highest">
                    <span className="font-headline-sm text-2xl text-white font-bold">Custom Scope</span>
                    <p className="font-body-sm text-xs text-on-surface-variant">15+ to 40+ deliverables / monthly cadence</p>
                  </div>
                  <ul className="space-y-2.5 font-body-sm text-sm text-secondary pt-2">
                    <li className="flex items-center gap-2">✓ 15+ Custom Master Videos</li>
                    <li className="flex items-center gap-2">✓ Dedicated Creative Director</li>
                    <li className="flex items-center gap-2">✓ Ongoing Multi-Creator Roster Access</li>
                    <li className="flex items-center gap-2">✓ Priority 7-10 Day Turnarounds</li>
                  </ul>
                </div>
                <Link to="/pricing" className="w-full py-3 rounded-full bg-surface-container-high hover:bg-surface-bright text-white text-center font-headline-sm text-sm font-semibold transition-colors">
                  View All Pricing Details
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION H: TESTIMONIALS */}
      <section className="w-full bg-[#F7F5EF] text-[#171717] py-28 border-y border-[#E5E2D9]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="font-label-sm text-xs text-[#737373] uppercase tracking-widest font-bold">Verified Production Feedback</span>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-[#171717] font-extrabold tracking-tight mt-2">
                  Trusted by Modern Growth Brands.
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-8 rounded-xl bg-white border border-[#E5E2D9] shadow-sm space-y-6 flex flex-col justify-between h-full transition-transform hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#273500]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="font-headline-sm text-lg font-semibold text-[#171717] leading-relaxed">
                    "Storynex’s creators delivered natural, high-converting hooks that outperformed our expensive studio shoots within 48 hours of going live on Meta Advantage+."
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                  <div>
                    <p className="font-label-lg text-sm font-bold text-[#171717]">DTC Skincare Founder</p>
                    <p className="font-body-sm text-xs text-[#737373]">London, United Kingdom · High-Growth Beauty Brand</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#F7F5EF] text-[#273500] font-label-sm text-[10px] font-bold uppercase tracking-wider border border-[#E5E2D9]">Verified DTC Client</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="p-8 rounded-xl bg-white border border-[#E5E2D9] shadow-sm space-y-6 flex flex-col justify-between h-full transition-transform hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#273500]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="font-headline-sm text-lg font-semibold text-[#171717] leading-relaxed">
                    "The difference is they don't just find creators—they write hooks that actually stop thumbs. Our creative fatigue dropped by over 40% after shifting our monthly batch to Storynex."
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                  <div>
                    <p className="font-label-lg text-sm font-bold text-[#171717]">Ecommerce Growth Director</p>
                    <p className="font-body-sm text-xs text-[#737373]">New York, United States · Omnichannel Consumer Tech</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#F7F5EF] text-[#273500] font-label-sm text-[10px] font-bold uppercase tracking-wider border border-[#E5E2D9]">Verified Growth Lead</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION I: FINAL CTA */}
      <section className="w-full bg-[#171717] text-on-surface py-28 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16 relative z-10">
          <ScrollReveal>
            <div className="rounded-2xl bg-surface-container border border-surface-container-high p-12 md:p-20 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <h2 className="font-headline-lg text-3xl md:text-5xl text-white font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
                Your Next Great Creative Starts Here.
              </h2>
              <p className="font-body-lg text-lg text-secondary max-w-xl mx-auto leading-relaxed">
                Tell us about your brand, your audience, and the content you want to create. We'll assemble a matched creator shortlist and custom strategy within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link to="/contact" className="px-9 py-4 rounded-full bg-primary-container text-on-primary-fixed font-headline-sm text-base font-bold tracking-tight uppercase shadow-[0_0_32px_rgba(201,241,93,0.35)] hover:bg-white hover:text-[#171717] transition-all">
                  Start a Project
                </Link>
                <Link to="/portfolio" className="px-8 py-4 rounded-full bg-transparent border border-surface-container-highest text-white font-headline-sm text-base font-semibold tracking-tight hover:border-white transition-all">
                  Browse All Video Work
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} videoData={selectedVideo} />
    </div>
  );
};
