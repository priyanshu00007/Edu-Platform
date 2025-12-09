import React from 'react';

const Navbar = ({ activeTab, setActiveTab, darkMode, setDarkMode }) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${darkMode ? 'bg-[#131314] border-white/20 text-white' : 'bg-white border-black/10 text-[#131314]'}`}>
    <div className="max-w-screen-xl mx-auto px-6 h-20 flex justify-between items-center">
      <div 
        className="text-xl font-bold tracking-tighter cursor-pointer select-none" 
        onClick={() => setActiveTab('home')}
      >
        EDUFLOW.
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {['home', 'courses', 'projects', 'practice', 'contact'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs font-medium tracking-widest uppercase hover:underline underline-offset-4 transition-all ${
              activeTab === tab ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="text-xs font-bold tracking-widest uppercase opacity-60 hover:opacity-100"
        >
          {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
        <button className={`hidden md:block px-6 py-2 text-xs font-bold tracking-widest uppercase border transition-all ${darkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}>
          Log In
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;