import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';


// Définir les types pour le contexte
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Créer le contexte avec une valeur par défaut `undefined` (on vérifiera son existence dans le hook)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Définir le type des props du provider
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState<string>(savedTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
