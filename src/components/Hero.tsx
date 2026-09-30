import React from 'react';
import { ArrowRight, Code2, ShieldCheck, Sparkles, Terminal, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenProjectModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Soft Ambient Light Gradients (Cling Red & Blue Accents) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-rose-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 blur-2xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Context kicker: clean unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-4">
              <span>Next-Gen IT Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Enterprise Delivery</span>
              <span aria-hidden="true">·</span>
              <span>Global Presence</span>
            </div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] max-w-2xl text-balance"
            >
              Turning Ideas Into{' '}
              <span className="bg-linear-to-r from-rose-600 via-rose-500 to-blue-600 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl"
            >
              We provide end-to-end IT solutions — from custom software development and mobile
              applications to AI/ML, ERP and digital marketing.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenProjectModal}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-linear-to-r from-rose-600 via-rose-500 to-blue-600 hover:from-rose-700 hover:to-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-[0.99]"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Social Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Zero-Template Policy
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Enterprise AI & ERP
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Full Codebase Ownership
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Technology Visual & Interactive Elements (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-rose-500/20 via-slate-200/50 dark:via-slate-800/50 to-blue-500/20 shadow-xl dark:shadow-2xl">
                <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-4/3">
                  <img
                    src="/images/hero_team_visual_1790691557424.jpg"
                    alt="Cling Info Tech engineering team collaborating on advanced digital solutions"
                    className="w-full h-full object-cover object-center filter saturate-[1.05] contrast-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Scrim for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Bottom Title */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold tracking-wide">Cling Innovation Lab</span>
                    </div>
                    <span className="text-slate-300 font-mono text-[11px]">Noida · Pune · Global</span>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphic Card 1: Real-time Deployment */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 p-3.5 rounded-xl shadow-lg flex items-center gap-3 max-w-[240px]"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Codebase Shipped
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                    32,387,122+ Lines
                  </div>
                </div>
              </motion.div>

              {/* Floating Glassmorphic Card 2: AI & Architecture Metric */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 p-3.5 rounded-xl shadow-lg flex items-center gap-3 max-w-[210px]"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    Enterprise SLA
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    99.98% High Availability
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
