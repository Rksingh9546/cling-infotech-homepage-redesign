import React, { useState } from 'react';
import { COMPANY_OFFICES } from '../data/companyData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Custom Software Development',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeOfficeTab, setActiveOfficeTab] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-16 bg-white dark:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Real Office Locations & Direct Contacts (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
                Let's Discuss Your Next Strategic Initiative
              </h2>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect directly with our engineering and architecture leadership. We respond within
                24 business hours with an initial technical assessment and NDA.
              </p>

              {/* Direct channels */}
              <div className="mt-8 space-y-4">
                <a
                  href="tel:+918264469132"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-rose-500/40 dark:hover:border-blue-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      Direct Phone
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-blue-400 transition-colors">
                      +91 8264469132
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@clinginfotech.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-rose-500/40 dark:hover:border-blue-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      Inquiries & RFPs
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-blue-400 transition-colors">
                      info@clinginfotech.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      Response SLA
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">
                      Within 24 Hours · Dedicated Tech Consultation
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Selector Tabs */}
              <div className="mt-8">
                <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Development Centers
                </div>
                <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg mb-3">
                  {COMPANY_OFFICES.map((off, idx) => (
                    <button
                      key={off.city}
                      onClick={() => setActiveOfficeTab(idx)}
                      className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors ${
                        activeOfficeTab === idx
                          ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-2xs font-semibold'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                      }`}
                    >
                      {off.city.split(' ')[0]}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 text-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {COMPANY_OFFICES[activeOfficeTab].city}
                    </span>
                    <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400 font-semibold">
                      {COMPANY_OFFICES[activeOfficeTab].badge}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {COMPANY_OFFICES[activeOfficeTab].address}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400">
              Cling Info Tech Works Private Limited · Registered in India
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-sm relative">
              {isSubmitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{formData.fullName || 'Partner'}</span>. Our
                    engineering directors will review your requirements for{' '}
                    <span className="font-semibold text-rose-600 dark:text-rose-400">
                      {formData.service}
                    </span>{' '}
                    and reach out via {formData.email || 'email'} within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Custom Software Development',
                        message: '',
                      });
                    }}
                    className="mt-6 px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Initiate Project Discovery
                    </h3>
                    <span className="text-[11px] text-slate-400">* Required Fields</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Enterprise Ltd."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Target Capability / Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden transition-all"
                    >
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Web Development">Web Development & Custom Portals</option>
                      <option value="Mobile App Development">Mobile App Development (iOS/Android)</option>
                      <option value="ERP Solutions">ERP Solutions & Operations</option>
                      <option value="Digital Marketing">Digital Marketing & Growth</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your timeline, goals, existing architecture, or specific problem statement..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-linear-to-r from-rose-600 via-rose-500 to-blue-600 hover:from-rose-700 hover:to-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Specifications...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                    We execute mutual Non-Disclosure Agreements (NDAs) prior to detailed code audits.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
