import React, { useState } from 'react';
import { MessageCircle, Phone, X, Send } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* WhatsApp chat popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                Cling Info Tech Desk
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            Need immediate advice on your web, mobile, AI, or ERP project? Chat directly with our
            engineering team on WhatsApp.
          </p>

          <a
            href="https://wa.me/918264469132?text=Hello%20Cling%20Info%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 8264469132)</span>
          </a>
        </div>
      )}

      {/* Main trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400 active:scale-95"
        aria-label="Direct WhatsApp Contact"
        title="Chat with Cling Info Tech"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};
