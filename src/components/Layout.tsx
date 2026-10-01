import { Outlet } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="brand-name">TANG TECH &amp; ENGINEERING LTD</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
