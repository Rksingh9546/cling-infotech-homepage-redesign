import React, { useState } from 'react';
import { GLOBAL_PRESENCE_DATA, GlobalLocation } from '../data/companyData';
import { Globe, MapPin, Building2, Users } from 'lucide-react';
import { motion } from 'motion/react';

export const GlobalPresence: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<GlobalLocation>(GLOBAL_PRESENCE_DATA[0]);

  return (
    <section id="global-presence" className="py-24 relative scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            <Globe className="w-4 h-4 text-blue-500" />
            <span>International Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight text-balance">
            Expanding Across Diverse Global Markets & Cultures
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            From our primary headquarters and innovation centers in India to enterprise clients
            across North America, Europe, the Middle East, and Asia Pacific.
          </p>
        </div>

        {/* Interactive World Visualizer Container */}
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 overflow-hidden shadow-2xl">
          {/* Subtle World Map Grid Background SVG */}
          <div className="relative w-full aspect-2/1 sm:aspect-21/9 min-h-[320px] rounded-2xl bg-slate-950/80 border border-slate-800/80 overflow-hidden flex items-center justify-center">
            {/* World Map vector contour representation */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full opacity-30 pointer-events-none fill-slate-700"
            >
              {/* Simplified world continent contours */}
              {/* North America */}
              <path d="M 120,80 Q 220,70 260,110 Q 300,160 270,220 Q 230,240 210,210 Q 180,240 160,200 Q 120,180 100,130 Z" />
              {/* South America */}
              <path d="M 270,260 Q 320,280 340,330 Q 330,420 290,460 Q 260,440 250,380 Q 250,320 270,260 Z" />
              {/* Europe */}
              <path d="M 450,90 Q 520,80 540,130 Q 520,170 470,180 Q 430,160 450,90 Z" />
              {/* Africa */}
              <path d="M 470,190 Q 550,190 570,260 Q 580,360 520,420 Q 460,370 450,290 Q 450,230 470,190 Z" />
              {/* Asia */}
              <path d="M 550,90 Q 750,70 820,140 Q 840,240 760,270 Q 700,280 660,230 Q 600,200 550,160 Z" />
              {/* Australia */}
              <path d="M 800,340 Q 890,330 900,400 Q 850,440 800,410 Q 770,380 800,340 Z" />
              {/* Connecting flight lines */}
              <path
                d="M 680,240 Q 450,150 220,175"
                fill="none"
                stroke="url(#flightGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-60"
              />
              <path
                d="M 680,240 Q 640,200 610,215"
                fill="none"
                stroke="url(#flightGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-60"
              />
              <path
                d="M 680,240 Q 750,300 860,380"
                fill="none"
                stroke="url(#flightGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-60"
              />
              <defs>
                <linearGradient id="flightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DC2626" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
            </svg>

            {/* Interactive Pins on the World Map */}
            {GLOBAL_PRESENCE_DATA.map((loc) => {
              const isSelected = selectedCountry.country === loc.country;
              return (
                <button
                  key={loc.country}
                  onClick={() => setSelectedCountry(loc)}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group focus-visible:outline-hidden z-20`}
                  title={`${loc.country} - ${loc.clientCount}`}
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    {isSelected && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 transition-all ${
                        isSelected
                          ? 'bg-rose-500 border-white scale-125'
                          : 'bg-blue-500 border-slate-900 group-hover:scale-125 group-hover:bg-rose-400'
                      }`}
                    />
                  </span>
                </button>
              );
            })}

            {/* Floating Info Overlay for Current Selected Country */}
            <motion.div
              key={selectedCountry.country}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-slate-900/95 border border-slate-700/80 rounded-xl p-4 backdrop-blur-md shadow-xl text-left"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xl" role="img" aria-label={selectedCountry.country}>
                    {selectedCountry.flag}
                  </span>
                  <span className="font-bold text-sm text-white">{selectedCountry.country}</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-rose-400">
                  {selectedCountry.clientCount}
                </span>
              </div>
              <div className="text-xs text-slate-300 mb-1">{selectedCountry.region}</div>
              <p className="text-[11px] text-slate-400 leading-tight">{selectedCountry.keyWork}</p>
            </motion.div>
          </div>

          {/* 12 Country Quick-Select Grid */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
              <span>All 12 Global Presence Markets</span>
              <span className="text-slate-500 text-[11px]">Click country to highlight</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {GLOBAL_PRESENCE_DATA.map((loc) => {
                const active = selectedCountry.country === loc.country;
                return (
                  <button
                    key={loc.country}
                    onClick={() => setSelectedCountry(loc)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                      active
                        ? 'bg-rose-500/10 border-rose-500/60 text-white'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <span className="text-lg" role="img" aria-label={loc.country}>
                      {loc.flag}
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-semibold truncate">{loc.country}</div>
                      <div className="text-[10px] text-slate-400 truncate">{loc.clientCount}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
