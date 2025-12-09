import React from 'react';

const Hero = ({ setActiveTab, darkMode }) => (
  <div className={`min-h-screen flex flex-col justify-center px-6 pt-20 ${darkMode ? 'bg-[#131314] text-white' : 'bg-white text-[#131314]'}`}>
    <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-8">
        <div className={`inline-block border px-3 py-1 text-[10px] tracking-widest uppercase mb-8 ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
          System Update 2.0
        </div>
        <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-12">
          MASTER<br />
          THE CRAFT<br />
          OF CODE.
        </h1>
        <p className="text-lg md:text-xl max-w-xl opacity-70 leading-relaxed mb-12">
          A minimalist platform for serious engineering. No distractions. 
          Just syntax, logic, and architecture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setActiveTab('courses')}
            className={`px-8 py-4 text-xs font-bold tracking-widest uppercase border transition-all ${darkMode ? 'bg-white text-black hover:bg-transparent hover:text-white border-white' : 'bg-black text-white hover:bg-transparent hover:text-black border-black'}`}
          >
            Browse Catalog
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-8 py-4 text-xs font-bold tracking-widest uppercase border transition-all ${darkMode ? 'border-white/20 hover:border-white' : 'border-black/20 hover:border-black'}`}
          >
            View Projects
          </button>
        </div>
      </div>

      <div className="md:col-span-4 flex flex-col justify-end gap-px bg-transparent">
         {[
           { label: 'Active Engineers', value: '25,000+' },
           { label: 'Curriculum Modules', value: '150+' },
           { label: 'Completion Rate', value: '94%' },
         ].map((stat, i) => (
           <div key={i} className={`py-6 border-t ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
             <div className="text-4xl font-light tracking-tighter mb-1">{stat.value}</div>
             <div className="text-[10px] tracking-widest uppercase opacity-60">{stat.label}</div>
           </div>
         ))}
         <div className={`w-full h-px ${darkMode ? 'bg-white/20' : 'bg-black/20'}`}></div>
      </div>
    </div>
  </div>
);

export default Hero;