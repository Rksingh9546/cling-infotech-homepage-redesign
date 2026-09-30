import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/companyData';
import { Bot, Globe, Smartphone, Database, Megaphone, Code, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':
        return <Bot className="w-5 h-5" />;
      case 'web-dev':
        return <Globe className="w-5 h-5" />;
      case 'mobile-dev':
        return <Smartphone className="w-5 h-5" />;
      case 'erp-solutions':
        return <Database className="w-5 h-5" />;
      case 'digital-marketing':
        return <Megaphone className="w-5 h-5" />;
      case 'custom-software':
        return <Code className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
              Capabilities & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight text-balance">
              End-to-End Engineering For High-Impact Digital Products
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
              We never use generic pre-designed templates. Every web application, enterprise ERP,
              mobile solution, and AI model is custom-architected for your exact business requirements.
            </p>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400 shrink-0">
            <span>6 Specialized Core Practices</span>
          </div>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 hover:border-rose-500/40 dark:hover:border-blue-500/40 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Top Row: Index and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500">
                    0{idx + 1}.
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-linear-to-br group-hover:from-rose-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Subtitle / Short Description */}
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Highlighted bullets */}
                <ul className="mt-5 space-y-2">
                  {service.features.slice(0, 3).map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-xs font-medium text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  Inquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Selected Service */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close service modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  {activeModalService.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                {activeModalService.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeModalService.fullDesc}
              </p>

              {/* Core Features */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.features.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
                  Production Deliverables
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeModalService.deliverables.map((del) => (
                    <span
                      key={del}
                      className="px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 font-medium"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
                  Preferred Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-mono">
                  {activeModalService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectService(title);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-linear-to-r from-rose-600 to-blue-600 hover:from-rose-700 hover:to-blue-700 rounded-lg shadow-sm"
                >
                  Start Project for this Service
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
