import React from 'react';

interface ClingLogoProps {
  className?: string;
  showTagline?: boolean;
}

export const ClingLogo: React.FC<ClingLogoProps> = ({
  className = 'h-9',
  showTagline = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
  src="/images/logo.jpg"
  alt="Cling Info Tech"
  className="h-10 w-auto object-contain"
      />

      {showTagline && (
        <span className="hidden sm:inline-block text-xs border-l border-slate-300 dark:border-slate-700 pl-2.5 text-slate-500 dark:text-slate-400 font-medium">
          Digital Reality
        </span>
      )}
    </div>
  );
};
