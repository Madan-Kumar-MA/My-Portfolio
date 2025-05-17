
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'morning' | 'day' | 'evening' | 'night';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('day');
  
  // Initialize theme based on time of day when site loads
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 10) {
      setTheme('morning');
    } else if (hour >= 10 && hour < 17) {
      setTheme('day');
    } else if (hour >= 17 && hour < 20) {
      setTheme('evening');
    } else {
      setTheme('night');
    }
  }, []);

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
