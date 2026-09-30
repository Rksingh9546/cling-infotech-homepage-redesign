import React from 'react';

interface ClingLogoProps {
  className?: string;
  showTagline?: boolean;
}

export const ClingLogo: React.FC<ClingLogoProps> = ({ className = 'h-9', showTagline = false }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Authentic Cling Glyphs SVG */}
      <svg
        viewBox="0 0 160 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="Cling Info Tech Logo"
      >
        <g id="cling-mark">
          {/* Outer Crimson C shape */}
          <path
            d="M 32 8 C 16 8 8 16 8 26 C 8 36 16 44 32 44 C 36 44 39 43 42 41"
            stroke="#DC2626"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Inner Connector Bar (representing the "Cling" bracket/connector) */}
          <line
            x1="20"
            y1="26"
            x2="38"
            y2="26"
            stroke="#DC2626"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Upper node */}
          <circle cx="21" cy="20" r="3.5" fill="#DC2626" />
          <circle cx="21" cy="32" r="3.5" fill="#DC2626" />
          <circle cx="37" cy="20" r="3.5" fill="#DC2626" />
          <circle cx="37" cy="32" r="3.5" fill="#DC2626" />
        </g>

        {/* Wordmark "ling" */}
        <text
          x="50"
          y="35"
          fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
          fontSize="31"
          fontWeight="700"
          letterSpacing="-0.03em"
          className="fill-slate-900 dark:fill-white transition-colors duration-200"
        >
          ling
        </text>

        {/* Info Tech text */}
        <text
          x="108"
          y="23"
          fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.08em"
          className="fill-blue-600 dark:fill-blue-400 uppercase"
        >
          Info Tech
        </text>
        <circle cx="103" cy="20" r="2" fill="#DC2626" />
      </svg>

      {showTagline && (
        <span className="hidden sm:inline-block text-xs border-l border-slate-300 dark:border-slate-700 pl-2.5 text-slate-500 dark:text-slate-400 font-medium">
          Digital Reality
        </span>
      )}
    </div>
  );
};
