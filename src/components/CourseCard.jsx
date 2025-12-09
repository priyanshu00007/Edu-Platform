

import React from 'react';

const CourseCard = ({ course, onStart, darkMode }) => (
  <div className={`flex flex-col h-full border transition-colors duration-300 hover:border-opacity-100 ${darkMode ? 'border-white/20 hover:border-white' : 'border-black/20 hover:border-black'}`}>
    <div className={`p-8 flex-1`}>
      <div className="flex justify-between items-start mb-6">
        <span className={`text-[10px] font-bold tracking-widest uppercase border px-2 py-1 ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
          {course.level}
        </span>
        <span className="text-[10px] font-mono opacity-60">{course.duration}</span>
      </div>
      <h3 className="text-2xl font-medium tracking-tight mb-4">{course.title}</h3>
      <p className="text-sm opacity-60 leading-relaxed mb-8">
        {course.description}
      </p>
    </div>
    <div className={`p-6 border-t ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
      <button 
        onClick={() => onStart(course)}
        className={`w-full py-3 text-xs font-bold tracking-widest uppercase flex items-center justify-between group ${darkMode ? 'text-white' : 'text-black'}`}
      >
        <span>Initialize Module</span>
        <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
      </button>
    </div>
  </div>
);

export default CourseCard;