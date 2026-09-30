import React, { useState } from 'react';
import { ClingLogo } from './ClingLogo';
import { MapPin, Phone, Mail, ArrowUp, X, Shield, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <ClingLogo className="h-9" />
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
              Cling Info Tech Works Private Limited delivers end-to-end custom software engineering,
              enterprise ERP integrations, and applied artificial intelligence solutions for global businesses.
            </p>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  HQ: 130-132, Wave Galleria, Wave City, NH-24, Noida, UP - 201015
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a href="tel:+918264469132" className="hover:text-white transition-colors">
                  +91 8264469132
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:info@clinginfotech.com" className="hover:text-white transition-colors">
                  info@clinginfotech.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <div className="font-bold text-white text-sm uppercase tracking-wider mb-4 font-mono">
              Services
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  ERP Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Software Development
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Innovation & Tech */}
          <div>
            <div className="font-bold text-white text-sm uppercase tracking-wider mb-4 font-mono">
              Innovation
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#ai-innovation" className="hover:text-white transition-colors">
                  AI Surveillance Model
                </a>
              </li>
              <li>
                <a href="#ai-innovation" className="hover:text-white transition-colors">
                  3D Animation & VR Hall
                </a>
              </li>
              <li>
                <a href="#ai-innovation" className="hover:text-white transition-colors">
                  Computer Vision Analytics
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Case Studies & Portfolios
                </a>
              </li>
              <li>
                <a href="#global-presence" className="hover:text-white transition-colors">
                  Global Footprint
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Leadership Team
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Legal */}
          <div>
            <div className="font-bold text-white text-sm uppercase tracking-wider mb-4 font-mono">
              Company
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  About Our Story
                </a>
              </li>
              <li>
                <a href="#why-cling" className="hover:text-white transition-colors">
                  Why Cling Info Tech
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('cancellation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cancellation & Refund Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-xs">
            Copyright © Cling Infotech All Rights Reserved · Cling Info Tech Works Private Limited
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal('privacy')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setLegalModal('cancellation')}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Refunds
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 text-slate-300 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === 'privacy' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Privacy Policy</h3>
                <p className="text-xs text-slate-300 leading-relaxed space-y-3">
                  Cling Info Tech Works Private Limited is committed to protecting client confidential data,
                  intellectual property, and proprietary codebases. All client communication and code repositories
                  are protected under mutual Non-Disclosure Agreements (NDAs). We never sell or share client
                  contact details with third parties.
                </p>
              </div>
            )}

            {legalModal === 'terms' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Terms and Conditions</h3>
                <p className="text-xs text-slate-300 leading-relaxed space-y-3">
                  Services rendered by Cling Info Tech Works Private Limited are governed by individual Statement of
                  Work (SOW) agreements signed prior to project kick-off. Complete intellectual property and source code
                  rights are transferred to the client upon milestone settlement.
                </p>
              </div>
            )}

            {legalModal === 'cancellation' && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Cancellation & Refund Policy</h3>
                <p className="text-xs text-slate-300 leading-relaxed space-y-3">
                  Milestone cancellations must be submitted in writing with 14 business days notice. Work completed
                  and verified up to the date of cancellation will be invoiced on a pro-rata basis as per agreed hourly
                  or sprint deliverables.
                </p>
              </div>
            )}

            <button
              onClick={() => setLegalModal(null)}
              className="mt-6 w-full py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg"
            >
              Close Document
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
