import React from 'react';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../data/mockData';

const Courses = ({ onStartCourse, darkMode }) => {
    return (
        <div className={`min-h-screen pt-20 px-6 ${darkMode ? 'bg-[#131314] text-white' : 'bg-white text-[#131314]'}`}>
            <div className="max-w-screen-xl mx-auto">
                <div className="mb-20 pt-12">
                    <h1 className="text-6xl font-medium tracking-tighter mb-4">CATALOG.</h1>
                    <p className="opacity-60 text-lg max-w-xl">Curated pathways for engineering mastery.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-current bg-opacity-20 border border-current border-opacity-20">
                    {COURSES.map(course => (
                        <div key={course.id} className={`${darkMode ? 'bg-[#131314]' : 'bg-white'}`}>
                            <CourseCard course={course} onStart={onStartCourse} darkMode={darkMode} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;