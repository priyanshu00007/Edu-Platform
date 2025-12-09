import React from 'react';

const MissionSection = ({ darkMode }) => (
  <div className={`py-32 px-6 border-t ${darkMode ? 'bg-[#131314] text-white border-white/10' : 'bg-white text-[#131314] border-black/10'}`}>
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div>
           <h2 className="text-xs font-bold tracking-widest uppercase mb-6">Manifesto</h2>
           <h3 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight">
             EFFICIENCY IN <br/>EDUCATION.
           </h3>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-lg opacity-70 leading-relaxed max-w-md">
            We reject gamification and clutter. We believe in providing a rigorous, 
            standardized environment for learning software engineering principles.
            Our curriculum is designed by engineers, for engineers.
          </p>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-3 border-t ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
        {[
          { title: 'Standardization', desc: 'Uniform curriculum standards ensuring consistent knowledge transfer.' },
          { title: 'Implementation', desc: 'Focus on production-ready code execution and system design.' },
          { title: 'Architecture', desc: 'Deep dives into structural patterns and algorithmic complexity.' }
        ].map((item, i) => (
          <div key={i} className={`py-12 pr-12 ${i !== 2 ? 'md:border-r' : ''} ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
            <div className="text-xs font-mono mb-4">0{i+1}</div>
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MissionSection;