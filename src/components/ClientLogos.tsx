import React from 'react';
import { CLIENT_LOGOS } from '../data/companyData';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Trusted by 350+ Global Enterprises & High-Growth Innovators
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs hover:border-rose-500/40 dark:hover:border-blue-500/40 transition-colors group text-center"
            >
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-blue-400 transition-colors truncate w-full">
                {client.name}
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate w-full mt-0.5">
                {client.sector}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
