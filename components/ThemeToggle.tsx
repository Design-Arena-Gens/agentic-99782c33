"use client";

import React, { useEffect, useState } from 'react';

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('ds-theme');
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme());

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    window.localStorage.setItem('ds-theme', theme);
  }, [theme]);

  return (
    <div className="theme-toggle">
      <span>{theme === 'dark' ? 'Dark' : 'Light'} mode</span>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
        {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </div>
  );
};
