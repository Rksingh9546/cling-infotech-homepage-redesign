import React from 'react';
import { LEADERSHIP_TEAM } from '../data/companyData';
import { Target, Compass, Sparkles, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const StoryAndLeadership: React.FC = () => {
  return (
    <section id="story" className="py-24 relative scroll-mt-16 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
              Our Identity & Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight text-balance">
              Innovations At Its Best, Is What We Believe In
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We are a company delivering multifarious IT services — from enterprise ERPs and bespoke
              software to advanced mobile applications and applied AI. We understand not only our
              customers deeply, but also the technology landscape at large.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Vision Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To deliver premier digital engineering, bespoke architecture, and marketing
                solutions to clients worldwide, fostering profitable online growth through
                technological excellence, dynamic innovation, and steadfast commitment.
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To stay at the bleeding edge of the digital environment by continuously empowering
                our personnel, refining agile engineering processes, and embracing cutting-edge
                AI/ML methodologies to deliver reliable value to businesses aiming to outpace competition.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
              Executive Guidance
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              Meet Our Leadership Team
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Experienced technology leaders guiding engineering discipline, operational scale, and
              long-term client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {LEADERSHIP_TEAM.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-2xs hover:shadow-lg transition-all text-center flex flex-col items-center"
              >
                {/* Avatar Icon */}
                <div className="w-16 h-16 rounded-full bg-linear-to-tr from-rose-500 to-blue-600 p-0.5 mb-4 shadow-sm">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-200 font-bold text-lg">
                    {leader.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-950 dark:text-white">
                  {leader.name}
                </h4>
                <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 mt-1">
                  {leader.role}
                </div>
                <div className="mt-3 text-xs font-mono text-slate-400 dark:text-slate-500">
                  {leader.focus}
                </div>

                <p className="mt-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 w-full">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
