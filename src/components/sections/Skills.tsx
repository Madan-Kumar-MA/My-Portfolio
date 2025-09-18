
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  iconUrl: string;
}

const Skills: React.FC<{ scrollPosition: number }> = ({ scrollPosition }) => {
  const { theme } = useTheme();
  
  const skills: Skill[] = [
    { name: "Machine Learning", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ];

  const getThemeClasses = () => {
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

  return (
    <section id="skills" className={getThemeClasses()}>
      <div 
        className="container mx-auto px-4"
        style={{
          transform: `translateY(${scrollPosition * 0.02}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold font-display mb-12 text-center ${getTextColor()}`}>
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className={getTextColor()}>
            <h3 className="text-2xl font-semibold font-display mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 bg-white/5 dark:bg-white/5">
                  <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8 object-contain" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className={`text-2xl font-semibold font-display mb-6 ${getTextColor()}`}>Other Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Interests</h4>
                  <p className="text-sm opacity-80">
                    Coding, Problem Solving, Learning new technologies
                  </p>
                </CardContent>
              </Card>
              <Card className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Sports</h4>
                  <p className="text-sm opacity-80">
                    Badminton, Cricket, Volleyball, Table tennis
                  </p>
                </CardContent>
              </Card>
              <Card className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Hobbies</h4>
                  <p className="text-sm opacity-80">
                    Sketching, Story writing
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
