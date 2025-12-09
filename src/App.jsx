import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Projects  from "./pages/Projects"
import Contact from "./pages/Contact"
import Quiz from "./pages/Quiz" 
import Learning from "./pages/Learning"
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";


const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasInitialized = useRef(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#131314' : '#FFFFFF';
    
    if (!hasInitialized.current) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        hasInitialized.current = true;
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [darkMode]);

  const handleStartCourse = (course) => {
    setCurrentCourse(course);
    setActiveTab('learning');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (activeTab === 'learning' && currentCourse) {
      return (
        <Learning 
          course={currentCourse} 
          onBack={() => setActiveTab('courses')} 
          darkMode={darkMode}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} darkMode={darkMode} />;
      case 'courses':
        return <Courses onStartCourse={handleStartCourse} darkMode={darkMode} />;
      case 'projects':
        return <Projects darkMode={darkMode} />;
      case 'contact':
        return <Contact darkMode={darkMode} />;
      case 'practice':
        return <Quiz darkMode={darkMode} />;
      default:
        return <Home setActiveTab={setActiveTab} darkMode={darkMode} />;
    }
  };      
  return (
    <div className={`min-h-screen font-sans antialiased selection:text-black selection:bg-white  ${darkMode ?'selection:bg-white selection:text-black' : 'selection:bg-black selection:text-white'}`}>
      <LoadingScreen isLoading={isLoading} darkMode={darkMode} />
      
      <AnimatePresence mode="wait">
        {!isLoading && (
          <>
            {activeTab !== 'learning' && (
              <Navbar 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
              />
            )}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderContent()}
            </motion.div>
            
            {activeTab !== 'learning' && (
              <Footer darkMode={darkMode} />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App;