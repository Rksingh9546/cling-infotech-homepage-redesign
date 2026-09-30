import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/companyData';
import { Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS_DATA.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS_DATA.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="testimonials" className="py-24 relative scroll-mt-16 bg-white dark:bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
              Client Endorsements
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight text-balance">
              Heartfelt Accounts From Our Valued Patrons
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Direct, unedited feedback from the founders and executives who rely on Cling Info Tech
              for mission-critical digital systems.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Testimonials Grid (Desktop) and Interactive Carousel (Tablet/Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative ${
                idx === currentIndex ? 'ring-2 ring-rose-500/30 dark:ring-blue-500/30' : ''
              }`}
            >
              <div>
                <Quote className="w-8 h-8 text-rose-500/40 dark:text-blue-500/40 mb-4" />
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-rose-500 to-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950 dark:text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <span title="Verified Client">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} · <span className="font-medium text-slate-700 dark:text-slate-300">{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
