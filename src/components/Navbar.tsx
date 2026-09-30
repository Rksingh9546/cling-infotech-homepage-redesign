import React, { useState, useEffect } from 'react';
import { ClingLogo } from './ClingLogo';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ArrowRight, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenProjectModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjectModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'AI & Innovation', href: '#ai-innovation' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Global', href: '#global-presence' },
    { label: 'Why Cling', href: '#why-cling' },
    { label: 'About', href: '#story' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single element brand mark */}
          <a
            href="#"
            className="flex items-center gap-2 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
            aria-label="Cling Info Tech Homepage"
          >
            <ClingLogo className="h-9" />
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 transition-colors hover:text-slate-950 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-rose-600 after:to-blue-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Theme toggle + Start a Project CTA) */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            <a
              href="tel:+918264469132"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Call Cling Info Tech"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
              <span>+91 8264469132</span>
            </a>

            <button
              onClick={onOpenProjectModal}
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide text-white bg-linear-to-r from-rose-600 via-rose-500 to-blue-600 hover:from-rose-700 hover:to-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-slate-950/98 border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200 backdrop-blur-xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-700 dark:text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a
                href="tel:+918264469132"
                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <PhoneCall className="w-4 h-4 text-rose-600" />
                <span>+91 8264469132 (Direct line)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full text-center py-3 text-sm font-semibold text-white bg-linear-to-r from-rose-600 to-blue-600 rounded-lg shadow-sm"
              >
                Start a Project
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
