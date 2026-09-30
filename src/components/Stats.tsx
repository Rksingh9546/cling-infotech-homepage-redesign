import React from 'react';
import { COMPANY_STATS } from '../data/companyData';
import { motion } from 'motion/react';

export const Stats: React.FC = () => {
  return (
    <section className="relative py-14 border-y border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {COMPANY_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col relative group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono tabular-nums">
                <span className="bg-linear-to-r from-slate-950 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent group-hover:from-rose-600 group-hover:to-blue-600 transition-all duration-300">
                  {stat.value}
                </span>
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
