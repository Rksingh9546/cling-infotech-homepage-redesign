import React, { useState } from 'react';
import { INNOVATION_PILLARS } from '../data/companyData';
import { Eye, Box, Cpu, Sparkles, Play, ShieldAlert, CheckCircle, Radio } from 'lucide-react';
import { motion } from 'motion/react';

export const AiInnovation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | '3d' | 'automation'>('vision');
  const [isSimulating, setIsSimulating] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'suspicious' | 'tracking'>('all');

  return (
    <section
      id="ai-innovation"
      className="py-24 bg-slate-950 text-white relative overflow-hidden scroll-mt-16"
    >
      {/* Background glow effects */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-rose-600/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse text-rose-500" />
            <span>Applied Intelligence & Emerging Tech</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
            Next-Generation AI, Computer Vision & Immersive 3D Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Beyond standard software, we engineer autonomous surveillance vision models,
            intelligent workflow automation, and photorealistic 3D virtual reality showcases that
            elevate enterprise capability.
          </p>
        </div>

        {/* Interactive Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          {/* Left Column: Interactive Visualizer Frame (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono text-slate-300">
                  {activeTab === 'vision' && 'LIVE AI SURVEILLANCE FEED // CAMERA_04'}
                  {activeTab === '3d' && '3D VR HALL SHOWCASE // SAMSUNG GALAXY'}
                  {activeTab === 'automation' && 'AUTONOMOUS WORKFLOW // ENTERPRISE BOT'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  {isSimulating ? 'Pause Stream' : 'Resume Stream'}
                </button>
              </div>
            </div>

            {/* Visualizer Canvas */}
            <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
              {activeTab === 'vision' && (
                <>
                  <img
                    src="/images/ai_vision_telemetry_1790691571467.jpg"
                    alt="AI Computer Vision and Anomaly Detection Model"
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Grid Scrim */}
                  <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />

                  {/* Dynamic Bounding Box Overlay for Suspicious Activity */}
                  {(activeFilter === 'all' || activeFilter === 'suspicious') && (
                    <motion.div
                      animate={
                        isSimulating
                          ? {
                              x: [0, 8, -4, 0],
                              y: [0, -6, 4, 0],
                            }
                          : {}
                      }
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                      className="absolute top-[28%] left-[34%] w-[38%] h-[44%] border-2 border-rose-500 rounded-md bg-rose-500/10 pointer-events-none flex flex-col justify-between p-1.5"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono bg-rose-950/80 px-1.5 py-0.5 rounded text-rose-200 w-fit">
                        <ShieldAlert className="w-3 h-3 mr-1 text-rose-400 inline" />
                        <span>SUSPICIOUS_ACTIVITY // 98.4%</span>
                      </div>
                      <div className="text-[9px] font-mono text-rose-300 self-end bg-black/60 px-1 rounded">
                        ANOMALY_TAG: UNATTENDED_PACK
                      </div>
                    </motion.div>
                  )}

                  {/* Dynamic Bounding Box 2: Object Tracking */}
                  {(activeFilter === 'all' || activeFilter === 'tracking') && (
                    <motion.div
                      animate={
                        isSimulating
                          ? {
                              x: [0, -6, 6, 0],
                              y: [0, 4, -4, 0],
                            }
                          : {}
                      }
                      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                      className="absolute top-[22%] right-[10%] w-[22%] h-[50%] border-2 border-blue-400 rounded-md bg-blue-500/10 pointer-events-none flex flex-col justify-between p-1.5"
                    >
                      <div className="flex items-center gap-1 text-[10px] font-mono bg-blue-950/80 px-1.5 py-0.5 rounded text-blue-200 w-fit">
                        <CheckCircle className="w-3 h-3 text-blue-400" />
                        <span>PERSON_TRACK // 99.1%</span>
                      </div>
                      <div className="text-[9px] font-mono text-blue-300 bg-black/60 px-1 rounded self-start">
                        ID: 0482_SECURE
                      </div>
                    </motion.div>
                  )}

                  {/* Corner Telemetry Indicators */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-slate-900/90 border border-slate-700/60 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300">
                    <span className="text-emerald-400">FPS: 60.0</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-blue-400">LATENCY: 38ms</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-rose-400">AI MODEL: YOLOv8_CUSTOM</span>
                  </div>
                </>
              )}

              {activeTab === '3d' && (
                <div className="w-full h-full flex flex-col items-center justify-center relative p-8 text-center bg-radial from-slate-800 to-slate-950">
                  <Box className="w-16 h-16 text-blue-400 animate-pulse mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">
                    Samsung Galaxy VR Hall & 3D Brand Experiences
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md">
                    Photorealistic 3D animation, interactive spatial web showrooms, and 4K
                    commercial product render suites developed by Cling Info Tech.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Play className="w-3.5 h-3.5" />
                    <span>Real-time WebGL & Three.js 60FPS Pipeline</span>
                  </div>
                </div>
              )}

              {activeTab === 'automation' && (
                <div className="w-full h-full flex flex-col justify-center p-6 bg-slate-900 font-mono text-xs">
                  <div className="text-slate-400 mb-2">
                    // Autonomous Enterprise RPA & Event Stream
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-emerald-400">
                        [SUCCESS] ERP Inventory Sync: 1,420 SKUs reconciled
                      </span>
                      <span className="text-slate-500">0.12s</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-blue-400">
                        [PROCESS] Deep video anomaly telemetry dispatched to security desk
                      </span>
                      <span className="text-slate-500">0.04s</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-rose-400">
                        [AUTOMATION] Biometric clock-in synchronized with payroll gateway
                      </span>
                      <span className="text-slate-500">0.28s</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Filter buttons */}
            {activeTab === 'vision' && (
              <div className="flex items-center gap-2 pt-1 text-xs">
                <span className="text-slate-400 mr-2">Detection Overlays:</span>
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeFilter === 'all'
                      ? 'bg-rose-600 text-white font-medium'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  All Overlays
                </button>
                <button
                  onClick={() => setActiveFilter('suspicious')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeFilter === 'suspicious'
                      ? 'bg-rose-600 text-white font-medium'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  Suspicious Activity
                </button>
                <button
                  onClick={() => setActiveFilter('tracking')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    activeFilter === 'tracking'
                      ? 'bg-blue-600 text-white font-medium'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  Tracking Only
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Tab Selector & Case Context (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white mb-2">Live Technology Demonstrators</h3>

            {/* Tab 1 */}
            <div
              onClick={() => setActiveTab('vision')}
              className={`p-4 rounded-xl cursor-pointer transition-all border ${
                activeTab === 'vision'
                  ? 'bg-slate-800 border-rose-500/80 shadow-md'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm text-white flex items-center gap-2">
                  <Eye className="w-4 h-4 text-rose-500" />
                  AI Surveillance Model
                </span>
                <span className="text-[11px] font-mono text-rose-400">Deployed</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Proprietary surveillance computer vision model that automatically identifies
                suspicious activity, object left-behind, and restricted perimeter breach in real-time
                video.
              </p>
            </div>

            {/* Tab 2 */}
            <div
              onClick={() => setActiveTab('3d')}
              className={`p-4 rounded-xl cursor-pointer transition-all border ${
                activeTab === '3d'
                  ? 'bg-slate-800 border-blue-500/80 shadow-md'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm text-white flex items-center gap-2">
                  <Box className="w-4 h-4 text-blue-400" />
                  3D Animation & VR Experiences
                </span>
                <span className="text-[11px] font-mono text-blue-400">Immersive</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Dynamic 3D brand animations, product visualizers, and virtual showroom environments
                like the Samsung Galaxy VR Hall advertisement showcase.
              </p>
            </div>

            {/* Tab 3 */}
            <div
              onClick={() => setActiveTab('automation')}
              className={`p-4 rounded-xl cursor-pointer transition-all border ${
                activeTab === 'automation'
                  ? 'bg-slate-800 border-emerald-500/80 shadow-md'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  Intelligent Enterprise Automation
                </span>
                <span className="text-[11px] font-mono text-emerald-400">Real-Time</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Autonomous workflow engines that bridge ERP backends, inventory databases, and
                customer engagement channels with zero-latency synchronization.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INNOVATION_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-semibold text-rose-400 mb-2">
                  {pillar.badge}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-white font-mono">{pillar.stat}</span>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
