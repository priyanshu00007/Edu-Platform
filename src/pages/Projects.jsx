import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/mockData';

const Projects = ({ darkMode }) => {
    return (
        <div className={`min-h-screen pt-20 px-6 ${darkMode ? 'bg-[#131314] text-white' : 'bg-white text-[#131314]'}`}>
            <div className="max-w-screen-xl mx-auto">
                <div className="mb-20 pt-12">
                    <h1 className="text-6xl font-medium tracking-tighter mb-4">PROJECTS.</h1>
                    <p className="opacity-60 text-lg max-w-xl">Production-grade specifications for your portfolio.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROJECTS.map(project => (
                        <ProjectCard key={project.id} project={project} darkMode={darkMode} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;