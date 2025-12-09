import React, { useState } from 'react';
import { COURSES } from '../data/mockData';

const Quiz = ({ darkMode }) => {
    const [selectedCourseId, setSelectedCourseId] = useState(COURSES[0].id);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
  
    const activeCourse = COURSES.find(c => c.id === selectedCourseId);
    const currentQuiz = activeCourse.quizzes[currentQuestionIndex];
  
    const handleOptionClick = (idx) => {
      if (idx === currentQuiz.correct) setScore(score + 1);
      
      setTimeout(() => {
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < activeCourse.quizzes.length) {
          setCurrentQuestionIndex(nextQuestion);
        } else {
          setShowScore(true);
        }
      }, 500);
    };

    const resetQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScore(false);
    };

    return (
        <div className={`min-h-screen pt-20 px-6 ${darkMode ? 'bg-[#131314] text-white' : 'bg-white text-[#131314]'}`}>
             <div className="max-w-screen-xl mx-auto">
                <div className="mb-20 border-b pb-8 border-current border-opacity-20">
                    <h1 className="text-6xl font-medium tracking-tighter mb-4">EVALUATION.</h1>
                    <p className="opacity-60 text-lg max-w-xl">Standardized testing protocol for knowledge verification.</p>
                </div>

                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4 space-y-px bg-current bg-opacity-10 border border-current border-opacity-10">
                         {COURSES.map(course => (
                            <button
                                key={course.id}
                                onClick={() => { setSelectedCourseId(course.id); resetQuiz(); }}
                                className={`w-full text-left p-6 text-sm font-bold tracking-widest uppercase transition-all ${
                                selectedCourseId === course.id
                                    ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                                    : darkMode ? 'bg-[#131314] hover:bg-white/5' : 'bg-white hover:bg-black/5'
                                }`}
                            >
                                {course.title}
                            </button>
                        ))}
                    </div>

                    <div className="md:col-span-8">
                         <div className={`p-12 border ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
                             {showScore ? (
                                 <div className="text-center py-12">
                                     <div className="text-8xl font-light mb-6">{Math.round((score/activeCourse.quizzes.length)*100)}%</div>
                                     <div className="text-xs font-bold tracking-widest uppercase mb-12 opacity-60">Accuracy Rating</div>
                                     <button onClick={resetQuiz} className={`px-8 py-3 text-xs font-bold tracking-widest uppercase border ${darkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}>
                                       Re-Initialize
                                     </button>
                                 </div>
                             ) : (
                                 <>
                                   <div className="flex justify-between items-end mb-12 border-b border-current border-opacity-10 pb-4">
                                       <span className="text-xs font-bold tracking-widest uppercase opacity-50">Query {currentQuestionIndex + 1} / {activeCourse.quizzes.length}</span>
                                       <span className="text-xs font-mono opacity-50">{activeCourse.title}</span>
                                   </div>
                                   <h3 className="text-2xl font-medium leading-relaxed mb-12">{currentQuiz.question}</h3>
                                   <div className="space-y-4">
                                       {currentQuiz.options.map((opt, i) => (
                                           <button 
                                               key={i} 
                                               onClick={() => handleOptionClick(i)}
                                               className={`w-full text-left p-6 border transition-all text-sm font-mono hover:pl-8 ${
                                                   darkMode ? 'border-white/20 hover:border-white hover:bg-white hover:text-black' : 'border-black/20 hover:border-black hover:bg-black hover:text-white'
                                               }`}
                                           >
                                               [{i+1}] {opt}
                                           </button>
                                       ))}
                                   </div>
                                 </>
                             )}
                         </div>
                    </div>
                </div>
             </div>
        </div>
    )
};

export default Quiz;