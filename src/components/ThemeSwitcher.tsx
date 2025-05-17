
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-24 right-4 z-50">
      <ToggleGroup type="single" value={theme} onValueChange={(value) => value && setTheme(value as any)}>
        <ToggleGroupItem value="morning" aria-label="Morning theme" className="bg-orange-100 text-orange-600 data-[state=on]:bg-orange-200">
          <Sunrise className="h-5 w-5" />
        </ToggleGroupItem>
        
        <ToggleGroupItem value="day" aria-label="Day theme" className="bg-blue-100 text-blue-600 data-[state=on]:bg-blue-200">
          <Sun className="h-5 w-5" />
        </ToggleGroupItem>
        
        <ToggleGroupItem value="evening" aria-label="Evening theme" className="bg-purple-100 text-purple-600 data-[state=on]:bg-purple-200">
          <Sunset className="h-5 w-5" />
        </ToggleGroupItem>
        
        <ToggleGroupItem value="night" aria-label="Night theme" className="bg-indigo-100 text-indigo-600 data-[state=on]:bg-indigo-200">
          <Moon className="h-5 w-5" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ThemeSwitcher;
