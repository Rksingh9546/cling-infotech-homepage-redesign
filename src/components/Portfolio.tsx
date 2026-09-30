import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioItem } from '../data/companyData';
import { ExternalLink, ArrowRight, X, CheckCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioProps {
  onOpenProjectModal: (projectName?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenProjectModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Web & E-Commerce', 'Custom Software', 'AI & Machine Learning', 'ERP Solutions'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 relative scroll-mt-16 bg-slate-50/70 dark:bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
              Proven Delivery & Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight text-balance">
              Featured Case Studies & Deployed Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Explore concrete engineering milestones delivered for global founders, healthcare providers,
              and enterprise organizations.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill compliant segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-16/9 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Unboxed Metadata on Top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-rose-400 drop-shadow-sm">
                    {project.client}
                  </span>
                  <span className="text-slate-300 text-[11px] drop-shadow-sm font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Impact Statement on bottom of image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-medium text-slate-100 drop-shadow-xs line-clamp-1">
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Quantitative Rigor Metrics Grid */}
                  <div className="mt-5 grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-left">
                        <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {tIdx < 2 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">
                {activeProject.category} · {activeProject.client}
              </div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                {activeProject.title}
              </h3>

              <div className="mt-4 rounded-xl overflow-hidden aspect-16/9 bg-slate-950">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2">
                  Project Overview & Scope
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
                  Quantified Production Outcomes
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeProject.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-xl font-extrabold text-rose-600 dark:text-rose-400 font-mono tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-2">
                  Engineered Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {activeProject.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex gap-2 text-xs font-mono text-slate-500">
                  {activeProject.tags.join(' · ')}
                </div>
                <button
                  onClick={() => {
                    const title = activeProject.title;
                    setActiveProject(null);
                    onOpenProjectModal(`Similar to ${title}`);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-linear-to-r from-rose-600 to-blue-600 rounded-lg hover:from-rose-700 hover:to-blue-700 shadow-sm"
                >
                  Build a Similar System
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
