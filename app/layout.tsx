import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';

export const metadata: Metadata = {
  title: 'DS ? Design System Demo',
  description: 'Minimal design system demo powered by Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <div className="brand">DS</div>
            <nav className="nav">
              <a href="/" className="nav-link">Home</a>
              <a href="#components" className="nav-link">Components</a>
              <a href="#theme" className="nav-link">Theme</a>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        <main className="container main-content">{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <span>? {new Date().getFullYear()} DS Demo</span>
            <a className="footer-link" href="https://vercel.com" target="_blank" rel="noreferrer">Powered by Vercel</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
