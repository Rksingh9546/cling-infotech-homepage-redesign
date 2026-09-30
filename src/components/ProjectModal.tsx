import React, { useState } from 'react';
import { X, Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    defaultService || 'Custom Software Development'
  );
  const [timeline, setTimeline] = useState<string>('Rapid MVP (4-6 Weeks)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    'AI & Machine Learning',
    'Web Development',
    'Mobile App Development',
    'ERP Solutions',
    'Digital Marketing',
    'Custom Software Development',
  ];

  const timelines = [
    'Rapid MVP (4-6 Weeks)',
    'Full Product (2-3 Months)',
    'Enterprise Dedicated Squad',
    'Discovery & Consultation Only',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setDetails('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                Project Discovery Initiated!
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold">{name}</span>. An engineering director will
                review your requirements for <span className="font-semibold text-rose-600 dark:text-rose-400">{selectedService}</span> and contact you at {email} within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-8 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-xl hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start Your Project</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">
                  Tell Us About Your Vision
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Receive an architectural feasibility assessment and transparent milestone estimate.
                </p>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                  1. Select Target Service Area
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {services.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setSelectedService(srv)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedService === srv
                          ? 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 font-semibold shadow-2xs'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                  2. Anticipated Delivery Timeline
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {timelines.map((tl) => (
                    <button
                      type="button"
                      key={tl}
                      onClick={() => setTimeline(tl)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        timeline === tl
                          ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200 font-semibold shadow-2xs'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {tl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                  3. Your Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp Number (with country code)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                />
                <textarea
                  rows={3}
                  required
                  placeholder="Briefly describe what you'd like to build..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 text-sm font-semibold text-white bg-linear-to-r from-rose-600 via-rose-500 to-blue-600 hover:from-rose-700 hover:to-blue-700 rounded-xl shadow-md transition-all disabled:opacity-50 inline-flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Processing Discovery...</span>
                ) : (
                  <>
                    <span>Submit & Request Tech Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center text-[10px] text-slate-400">
                Direct consultation with Cling Info Tech leadership · Mutual NDA guaranteed
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
