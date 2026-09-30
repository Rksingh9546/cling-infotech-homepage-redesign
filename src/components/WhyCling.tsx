import React, { useState } from 'react';
import { WHY_CLING_POINTS, JOURNEY_MILESTONES } from '../data/companyData';
import { CheckCircle2, Award, Zap, Shield, HeartHandshake, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyCling: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'values' | 'journey'>('values');

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Layers className="w-5 h-5 text-rose-500" />;
      case 1:
        return <Zap className="w-5 h-5 text-blue-500" />;
      case 2:
        return <Award className="w-5 h-5 text-emerald-500" />;
      case 3:
        return <HeartHandshake className="w-5 h-5 text-amber-500" />;
      case 4:
        return <Shield className="w-5 h-5 text-indigo-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="why-cling" className="py-24 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
              The Cling Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight text-balance">
              Why Forward-Thinking Enterprises Partner With Us
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              We bridge visionary ideas with rigorous engineering. No templates, no inflated vanity
              metrics — just reliable, high-performance software systems.
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('values')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'values'
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Core Value Pillars
            </button>
            <button
              onClick={() => setActiveTab('journey')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'journey'
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Our Dynamic Journey
            </button>
          </div>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === 'values' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CLING_POINTS.map((point, idx) => (
              <motion.div
                key={point.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      {point.number}.
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                      {getPillarIcon(idx)}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-blue-400 transition-colors">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified Standard at Cling</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Dynamic Journey Timeline */
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 p-8 sm:p-12 shadow-xs">
            <div className="max-w-3xl mb-8">
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                A Journey As Dynamic As Us
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                From our foundational launch in 2019 to an internationally recognized technology
                powerhouse serving hundreds of global customers.
              </p>
            </div>

            <div className="relative border-l-2 border-rose-500/30 dark:border-blue-500/30 ml-4 sm:ml-6 space-y-10 py-2">
              {JOURNEY_MILESTONES.map((item, idx) => (
                <div key={item.year} className="relative pl-6 sm:pl-8 group">
                  {/* Timeline Node */}
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-rose-500 dark:border-blue-400 group-hover:scale-125 transition-transform" />

                  <div className="flex items-center gap-3">
                    <span className="text-base font-extrabold font-mono text-rose-600 dark:text-rose-400">
                      {item.year}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
