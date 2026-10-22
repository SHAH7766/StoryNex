import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#131313] border-t border-[#262626] pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#262626]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-black font-black">
                S
              </div>
              <span className="font-headline-sm text-lg font-bold tracking-tight text-white uppercase">
                Storynex
              </span>
            </div>
            <p className="font-body-md text-secondary max-w-sm leading-relaxed">
              Connecting international ecommerce and DTC brands with verified real human creators. Scroll-stopping UGC video ads and authentic social content.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-[#2a2a2a]">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider">
                  Creator Network Live: Q2 Roster Open
                </span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-white font-bold">Explore</h4>
            <ul className="space-y-2.5 font-body-sm text-sm">
              <li><Link to="/" className="text-secondary hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-secondary hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="text-secondary hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-secondary hover:text-white transition-colors">Packages</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-white font-bold">Company</h4>
            <ul className="space-y-2.5 font-body-sm text-sm">
              <li><Link to="/about" className="text-secondary hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-secondary hover:text-white transition-colors">Creator Network</Link></li>
              <li><Link to="/about" className="text-secondary hover:text-white transition-colors">Production Ethics</Link></li>
              <li><Link to="/contact" className="text-secondary hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Pricing & Brief */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-white font-bold">Pricing & Brief</h4>
            <ul className="space-y-2.5 font-body-sm text-sm">
              <li><Link to="/pricing" className="text-secondary hover:text-white transition-colors">Starter Package</Link></li>
              <li><Link to="/pricing" className="text-secondary hover:text-white transition-colors">Growth Package</Link></li>
              <li><Link to="/contact" className="text-secondary hover:text-white transition-colors">Custom Scope</Link></li>
              <li><Link to="/contact" className="text-secondary hover:text-white transition-colors">Submit Brief</Link></li>
            </ul>
          </div>

          {/* Global Desk */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-white font-bold">Global Desk</h4>
            <p className="font-body-sm text-sm text-secondary break-all">inquiries@storynex.studio</p>
            <p className="font-body-sm text-xs text-primary-container break-all">josephmichael0084@gmail.com</p>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              New York · London<br />Berlin · Sydney
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p className="uppercase tracking-wider">© 2026 STORYNEX HUMAN UGC STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 uppercase tracking-wider">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link to="/about" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>·</span>
            <Link to="/about" className="hover:text-white transition-colors">Creator Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
