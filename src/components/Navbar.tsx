import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#171717]/85 backdrop-blur-xl border-b border-[#262626]">
      <div className="h-20 max-w-[1360px] mx-auto px-6 md:px-8 lg:px-16 flex items-center justify-between gap-4">
        {/* Logo & Regional Badge */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-black font-headline-sm font-black text-lg shadow-[0_0_16px_rgba(201,241,93,0.3)]">
              S
            </div>
            <span className="font-headline-sm text-lg tracking-tight text-white uppercase font-bold">
              Storynex
            </span>
          </Link>
          <span className="hidden xl:inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high border border-[#2a2a2a] text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider">
            US · UK · CA · EU
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 font-label-lg text-sm transition-colors duration-200 ${
                  active
                    ? 'text-white font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary-container after:scale-x-100'
                    : 'text-on-surface-variant hover:text-white after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-transparent after:scale-x-0 hover:after:scale-x-100 hover:after:bg-primary-container after:transition-transform'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary-container text-on-primary-fixed font-headline-sm text-sm font-bold tracking-tight uppercase shadow-[0_0_24px_rgba(201,241,93,0.25)] hover:bg-white hover:text-[#171717] hover:-translate-y-0.5 transition-all duration-200"
          >
            Start a Project
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-xs shadow-sm">
            US
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-white"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#171717] border-b border-[#262626] px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-base font-semibold ${
                isActive(link.path) ? 'text-primary-container' : 'text-secondary hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-surface-container-high">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-full bg-primary-container text-on-primary-fixed font-bold uppercase tracking-wider text-sm"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
