import { Brightness4Icon, Brightness7Icon } from './icons';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Dark mode' : 'Light mode'}
    >
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${theme}`}>
          {theme === 'light' ? (
            <Brightness7Icon size={16} />
          ) : (
            <Brightness4Icon size={16} />
          )}
        </span>
      </span>
    </button>
  );
}
