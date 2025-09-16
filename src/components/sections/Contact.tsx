
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, GraduationCap, Github, Linkedin, FileDown } from 'lucide-react';

const Contact: React.FC<{ scrollPosition: number }> = ({ scrollPosition }) => {
  const { theme } = useTheme();

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
  
  const getButtonStyle = () => {
    switch(theme) {
      case 'morning':
        return 'border-2 border-orange-500 text-orange-600 hover:bg-orange-500/20 shadow-lg shadow-orange-500/20';
      case 'day':
        return 'border-2 border-blue-500 text-blue-600 hover:bg-blue-500/20 shadow-lg shadow-blue-500/20';
      case 'evening':
        return 'border-2 border-purple-400 text-white hover:bg-purple-400/20 shadow-lg shadow-purple-400/20';
      case 'night':
      default:
        return 'border-2 border-indigo-400 text-white hover:bg-indigo-400/20 shadow-lg shadow-indigo-600/20';
    }
  };

  const getIconColor = () => {
    switch(theme) {
      case 'morning':
        return 'text-orange-600';
      case 'day':
        return 'text-blue-600';
      case 'evening':
        return 'text-purple-300';
      case 'night':
      default:
        return 'text-purple-400';
    }
  };

  return (
    <section id="contact" className={getThemeClasses()}>
      <div 
        className="container mx-auto px-4"
        style={{
          transform: `translateY(${scrollPosition * 0.01}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold font-display mb-12 text-center ${getTextColor()}`}>
          Get In <span className="text-gradient">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-semibold font-display mb-6 ${getTextColor()}`}>
                  Let's Connect
                </h3>
                <p className={`mb-8 ${getTextColor()} opacity-80`}>
                  I'm always interested in new opportunities and exciting projects. 
                  Feel free to reach out if you'd like to collaborate or discuss innovative ideas!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className={`flex items-center space-x-4 ${getTextColor()}`}>
                  <Mail className={`h-6 w-6 ${getIconColor()}`} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="opacity-80">Available on request</p>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 ${getTextColor()}`}>
                  <MapPin className={`h-6 w-6 ${getIconColor()}`} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="opacity-80">Bengaluru, Karnataka</p>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-4 ${getTextColor()}`}>
                  <GraduationCap className={`h-6 w-6 ${getIconColor()}`} />
                  <div>
                    <p className="font-medium">Institution</p>
                    <p className="opacity-80">RNS Institute Of Technology</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild 
                    className={`${getButtonStyle()} transition-all duration-300 transform hover:scale-105`}
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild 
                    className={`${getButtonStyle()} transition-all duration-300 transform hover:scale-105`}
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className={`${getButtonStyle()} transition-all duration-300 transform hover:scale-105 w-full`}
                >
                  <a href="/Madan_Kumar_Resume.pdf" download="Madan_Kumar_Resume.pdf">
                    <FileDown className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium ${getTextColor()} mb-1`}>
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className={`w-full p-3 border ${theme === 'night' ? 'bg-indigo-950/30 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/30 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/10 border-blue-300/30' : 'bg-orange-600/10 border-orange-300/30'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${getTextColor()}`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium ${getTextColor()} mb-1`}>
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`w-full p-3 border ${theme === 'night' ? 'bg-indigo-950/30 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/30 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/10 border-blue-300/30' : 'bg-orange-600/10 border-orange-300/30'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${getTextColor()}`}
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium ${getTextColor()} mb-1`}>
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className={`w-full p-3 border ${theme === 'night' ? 'bg-indigo-950/30 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/30 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/10 border-blue-300/30' : 'bg-orange-600/10 border-orange-300/30'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${getTextColor()}`}
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${getTextColor()} mb-1`}>
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className={`w-full p-3 border ${theme === 'night' ? 'bg-indigo-950/30 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/30 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/10 border-blue-300/30' : 'bg-orange-600/10 border-orange-300/30'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${getTextColor()}`}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className={`w-full ${getButtonStyle()} transition-all duration-300 transform hover:scale-105`}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
