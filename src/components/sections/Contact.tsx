
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from "@/components/ui/button";

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
        return 'bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white shadow-lg shadow-orange-500/30';
      case 'day':
        return 'bg-gradient-to-r from-blue-400 to-sky-500 hover:from-blue-500 hover:to-sky-600 text-white shadow-lg shadow-sky-500/30';
      case 'evening':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30';
      case 'night':
      default:
        return 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-700/30';
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className={getTextColor()}>
            <h3 className="text-2xl font-semibold font-display mb-4">Contact Information</h3>
            <p className="opacity-80 mb-6">
              Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className={`rounded-full ${theme === 'night' ? 'bg-purple-500/20' : theme === 'evening' ? 'bg-purple-400/20' : theme === 'day' ? 'bg-blue-500/20' : 'bg-orange-500/20'} p-3 mr-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${theme === 'night' ? 'text-purple-400' : theme === 'evening' ? 'text-purple-300' : theme === 'day' ? 'text-blue-600' : 'text-orange-600'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="opacity-80">john.smith@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`rounded-full ${theme === 'night' ? 'bg-purple-500/20' : theme === 'evening' ? 'bg-purple-400/20' : theme === 'day' ? 'bg-blue-500/20' : 'bg-orange-500/20'} p-3 mr-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${theme === 'night' ? 'text-purple-400' : theme === 'evening' ? 'text-purple-300' : theme === 'day' ? 'text-blue-600' : 'text-orange-600'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="opacity-80">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`rounded-full ${theme === 'night' ? 'bg-purple-500/20' : theme === 'evening' ? 'bg-purple-400/20' : theme === 'day' ? 'bg-blue-500/20' : 'bg-orange-500/20'} p-3 mr-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${theme === 'night' ? 'text-purple-400' : theme === 'evening' ? 'text-purple-300' : theme === 'day' ? 'text-blue-600' : 'text-orange-600'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="opacity-80">Cambridge, MA</p>
                </div>
              </div>
              
              {/* Additional social links */}
              <div className="flex items-start">
                <div className={`rounded-full ${theme === 'night' ? 'bg-purple-500/20' : theme === 'evening' ? 'bg-purple-400/20' : theme === 'day' ? 'bg-blue-500/20' : 'bg-orange-500/20'} p-3 mr-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${theme === 'night' ? 'text-purple-400' : theme === 'evening' ? 'text-purple-300' : theme === 'day' ? 'text-blue-600' : 'text-orange-600'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="opacity-80">github.com/johnsmith</p>
                </div>
              </div>
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
    </section>
  );
};

export default Contact;
