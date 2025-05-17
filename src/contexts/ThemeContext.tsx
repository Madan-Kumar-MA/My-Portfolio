
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'morning' | 'day' | 'evening' | 'night';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('day');
  const [previousTheme, setPreviousTheme] = useState<ThemeType>('day');
  
  // Initialize theme based on time of day when site loads
  useEffect(() => {
    const hour = new Date().getHours();
    let initialTheme: ThemeType;
    if (hour >= 5 && hour < 10) {
      initialTheme = 'morning';
    } else if (hour >= 10 && hour < 17) {
      initialTheme = 'day';
    } else if (hour >= 17 && hour < 20) {
      initialTheme = 'evening';
    } else {
      initialTheme = 'night';
    }
    setTheme(initialTheme);
    setPreviousTheme(initialTheme);
  }, []);

  // Add smooth transition effect when theme changes
  useEffect(() => {
    if (theme !== previousTheme) {
      // Add transition class to body
      document.body.classList.add('theme-transition');
      
      // After transition completes, remove the transition class
      const transitionEndHandler = () => {
        document.body.classList.remove('theme-transition');
      };
      
      document.body.addEventListener('transitionend', transitionEndHandler);
      
      return () => {
        document.body.removeEventListener('transitionend', transitionEndHandler);
      };
    }
    
    setPreviousTheme(theme);
  }, [theme, previousTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
