import React from 'react';

const ProjectCard = ({ project, darkMode }) => (
  <div className={`flex flex-col h-full border ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
    <div className="p-8 flex-1">
      <div className="mb-6">
        <span className={`text-[10px] font-bold tracking-widest uppercase ${darkMode ? 'text-white' : 'text-black'}`}>
          {project.difficulty}
        </span>
      </div>
      <h3 className="text-xl font-medium tracking-tight mb-4">{project.title}</h3>
      <p className="text-sm opacity-60 leading-relaxed mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span key={i} className={`text-[10px] font-mono opacity-50`}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
    <div className={`px-8 py-6 border-t ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
      <button className="text-xs font-bold tracking-widest uppercase hover:underline underline-offset-4">
        Read Specification
      </button>
    </div>
  </div>
);

export default ProjectCard;