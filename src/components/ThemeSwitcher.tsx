import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeSwitcher: React.FC<{ className?: string; showLabel?: boolean }> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 shadow-sm cursor-pointer ${className}`}
      title={`Current mode: ${theme === 'dark' ? 'Moon (Night)' : 'Sun (Day)'}. Click to switch.`}
      aria-label="Toggle theme"
    >
      <span className="relative flex items-center justify-center w-5 h-5">
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-amber-400 animate-fade-in" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 animate-fade-in" />
        )}
      </span>
      {showLabel && (
        <span className="text-xs font-bold uppercase tracking-wider">
          {theme === 'dark' ? 'Moon Mode' : 'Sun Mode'}
        </span>
      )}
    </button>
  );
};
