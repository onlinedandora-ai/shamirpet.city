import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Sparkles, Palette } from 'lucide-react';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-2">
      {/* Type A: Sleek Pill Switcher */}
      <button
        onClick={toggleTheme}
        className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 shadow-sm cursor-pointer group"
        title={`Current: ${theme} mode. Click to toggle.`}
        aria-label="Toggle dark mode"
      >
        <span className="relative flex items-center justify-center w-5 h-5">
          {theme === 'dark' ? (
            <Moon className="w-4 h-4 text-amber-400 transform group-hover:rotate-12 transition-transform duration-300" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500 transform group-hover:rotate-45 transition-transform duration-300" />
          )}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">
          {theme}
        </span>
      </button>

      {/* Type B: Glassmorphic Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
        title="Theme Options & Styling Mode"
        aria-label="Theme menu"
      >
        <Palette className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-11 w-48 p-2 rounded-xl glass-panel shadow-2xl z-50 animate-fade-in border border-slate-200 dark:border-slate-800">
          <div className="text-[11px] font-bold uppercase tracking-wider px-2 py-1 text-slate-400 border-b border-slate-200 dark:border-slate-800 mb-1">
            Choose Theme
          </div>

          <button
            onClick={() => { setTheme('light'); setIsOpen(false); }}
            className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              theme === 'light'
                ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Sun className="w-4 h-4 text-amber-500" />
            <span>Light Mode</span>
          </button>

          <button
            onClick={() => { setTheme('dark'); setIsOpen(false); }}
            className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              theme === 'dark'
                ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Moon className="w-4 h-4 text-amber-400" />
            <span>Dark Mode</span>
          </button>

          <div className="pt-2 mt-1 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 px-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-teal-500" />
            <span>Live theme synced</span>
          </div>
        </div>
      )}
    </div>
  );
};
