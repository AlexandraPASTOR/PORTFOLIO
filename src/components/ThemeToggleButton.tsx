import { useTheme } from '../context/ThemeContext.js';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn text-[var(--color-secondary)] flex items-center justify-center mt-2"
    aria-label='Changer de thème'>
     {theme === 'light' ? (
        <>
          <Moon className="w-5 h-5" />
        </>
      ) : (
        <>
          <Sun className="w-5 h-5" />
        </>
      )}
    </button>
  );
};
