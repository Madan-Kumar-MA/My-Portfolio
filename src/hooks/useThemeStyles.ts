
import { useTheme } from '../contexts/ThemeContext';

export const useThemeStyles = () => {
  const { theme } = useTheme();
  
  const getThemeClasses = (sectionName?: string) => {
    const baseStyle = 'section transition-all duration-1000 ';
    
    switch(theme) {
      case 'morning':
        return baseStyle + 'bg-orange-50/30 backdrop-blur-sm';
      case 'day':
        return baseStyle + 'bg-blue-50/30 backdrop-blur-sm';
      case 'evening':
        return baseStyle + 'bg-purple-100/30 backdrop-blur-sm';
      case 'night':
      default:
        return baseStyle + 'bg-indigo-950/70 backdrop-blur-sm';
    }
  };

  const getTextColor = () => {
    switch(theme) {
      case 'morning':
        return 'text-gray-800';
      case 'day':
        return 'text-gray-900';
      case 'evening':
        return 'text-gray-100';
      case 'night':
      default:
        return 'text-white';
    }
  };

  const getSectionBg = (index: number) => {
    return index % 2 === 0 ? 
      (theme === 'night' ? 'bg-indigo-950/70' : theme === 'evening' ? 'bg-purple-900/40' : theme === 'day' ? 'bg-blue-600/20' : 'bg-orange-600/20') :
      (theme === 'night' ? 'bg-black/40' : theme === 'evening' ? 'bg-purple-800/30' : theme === 'day' ? 'bg-blue-500/10' : 'bg-orange-500/10');
  };

  return {
    getThemeClasses,
    getTextColor,
    getSectionBg,
    theme
  };
};

export default useThemeStyles;
