import { ThemeContextProps } from '@/contants/types';
import React, { createContext,  useState, ReactNode } from 'react';

// Define the interface for the theme context properties
// Create the context with an initial value of undefined
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Create a provider component that wraps your app and provides the theme context
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light'); // State to manage the current theme

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

