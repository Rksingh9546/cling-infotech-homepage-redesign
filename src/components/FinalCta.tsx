import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle } from 'lucide-react';

interface FinalCtaProps {
  onOpenProjectModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenProjectModal }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
      {/* Soft gradient accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-linear-to-r from-rose-600/20 via-blue-600/20 to-purple-600/20 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready For Acceleration</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight text-balance">
          Have an idea?{' '}
          <span className="bg-linear-to-r from-rose-500 via-rose-400 to-blue-400 bg-clip-text text-transparent">
            Let's build it.
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From concept architecture and rapid MVP development to enterprise-scale AI, ERP
          integration, and dedicated squads.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenProjectModal}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-linear-to-r from-rose-600 via-rose-500 to-blue-600 hover:from-rose-700 hover:to-blue-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="tel:+918264469132"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors"
          >
            <span>Schedule Discovery Call</span>
          </a>
        </div>

        {/* Adjacency proof points */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed 24-Hour Technical Assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-rose-400" />
            <span>Zero-Template Engineered Code</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span>Complete Intellectual Property Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
};
