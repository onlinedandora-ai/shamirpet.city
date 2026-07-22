import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';
export type DarkColorPreset = 'midnight' | 'violet' | 'gold' | 'emerald';

interface ThemeContextType {
  theme: Theme;
  darkPreset: DarkColorPreset;
  setTheme: (theme: Theme) => void;
  setDarkPreset: (preset: DarkColorPreset) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('shamirpet_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [darkPreset, setDarkPresetState] = useState<DarkColorPreset>(() => {
    const savedPreset = localStorage.getItem('shamirpet_dark_preset') as DarkColorPreset;
    return savedPreset || 'midnight';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-dark-color', darkPreset);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('shamirpet_theme', theme);
    localStorage.setItem('shamirpet_dark_preset', darkPreset);
  }, [theme, darkPreset]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const setDarkPreset = (preset: DarkColorPreset) => {
    setDarkPresetState(preset);
    if (theme !== 'dark') {
      setThemeState('dark');
    }
  };

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, darkPreset, setTheme, setDarkPreset, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
