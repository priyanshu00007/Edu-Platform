import React, { useState } from 'react';

const Learning = ({ course, onBack, darkMode }) => {
    const [activeLesson, setActiveLesson] = useState(
  course?.lessons?.length > 0 ? course.lessons[0] : null
);
  const [activeTab, setActiveTab] = useState('lesson'); 

  return (
    <div className={`min-h-screen flex flex-col md:flex-row ${darkMode ? 'bg-[#131314] text-white' : 'bg-white text-[#131314]'}`}>
      {/* Sidebar */}
      <div className={`w-full md:w-80 flex-shrink-0 border-r ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className={`p-6 border-b ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
          <button onClick={onBack} className="text-[10px] font-bold tracking-widest uppercase hover:underline mb-8 block">
            &lt; Return to Index
          </button>
          <h2 className="text-lg font-bold leading-tight mb-2">{course.title}</h2>
          <div className="text-[10px] font-mono opacity-50">Module ID: {course.id.toString().padStart(3, '0')}</div>
        </div>
        
        <div>
          {course.lessons.map((lesson, idx) => (    
            <button
              key={lesson.id}
              onClick={() => setActiveLesson(lesson)}
              className={`w-full text-left px-6 py-4 border-b text-sm transition-colors ${
                activeLesson.id === lesson.id 
                  ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  : darkMode ? 'hover:bg-white/5 border-white/5' : 'hover:bg-black/5 border-black/5'
              }`}
            >
              <div className="font-mono text-[10px] opacity-50 mb-1">LESSON 0{idx + 1}</div>
              <div className="font-medium truncate">{lesson.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Tabs */}
        <div className={`flex border-b ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
          {[
            { id: 'lesson', label: 'Documentation' },
            { id: 'code', label: 'Terminal' },
            { id: 'resources', label: 'Assets' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 text-xs font-bold tracking-widest uppercase border-r transition-colors ${
                activeTab === tab.id 
                   ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                   : darkMode ? 'border-white/10 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <div className="max-w-3xl">
            {activeTab === 'lesson' && (
              <div className="animate-in fade-in duration-500">
                <div className="text-[10px] font-mono opacity-50 mb-6 uppercase tracking-widest">
                  {course.title} / {activeLesson.title}
                </div>
                <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">
                  {activeLesson.title}
                </h1>
                <div className="prose prose-lg leading-loose opacity-80 max-w-none">
                  <p className="mb-8">{activeLesson.content}</p>
                  <div className={`p-6 border ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
                    <div className="text-[10px] font-bold tracking-widest uppercase mb-2">Notice</div>
                    <p className="text-sm opacity-80">Ensure rigorous testing before deployment.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="h-full flex flex-col">
                <div className={`w-full border font-mono text-sm ${darkMode ? 'bg-black border-white/20' : 'bg-gray-50 border-black/20'}`}>
                  <div className={`flex items-center justify-between px-4 py-2 border-b ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
                    <span className="text-xs opacity-50">main.js</span>
                    <button className="text-[10px] font-bold uppercase tracking-widest hover:underline">[RUN]</button>
                  </div>
                  <div className="p-6 whitespace-pre opacity-80">
                    {activeLesson.codeSnippet || "// Source unavailable."}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'resources' && (
               <div className="space-y-4">
                  {['Documentation.pdf', 'Source_Code.zip', 'References.md'].map((file, i) => (
                      <div key={i} className={`flex items-center justify-between p-4 border ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
                          <span className="font-mono text-sm">{file}</span>
                          <button className="text-[10px] font-bold uppercase tracking-widest hover:underline">[DOWNLOAD]</button>
                      </div>
                  ))}
               </div>
            )}
          </div>
        </div>
        
        {/* Footer Nav */}
        <div className={`p-6 border-t flex justify-between items-center ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
           <button 
             className="text-xs font-bold tracking-widest uppercase opacity-50 hover:opacity-100 disabled:opacity-20"
             disabled={course.lessons.indexOf(activeLesson) === 0}
             onClick={() => {
                const idx = course.lessons.indexOf(activeLesson);
                if (idx > 0) setActiveLesson(course.lessons[idx - 1]);
             }}
           >
             &lt; Previous
           </button>
           <button 
             className={`px-8 py-3 text-xs font-bold tracking-widest uppercase ${darkMode ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}
             onClick={() => {
                const idx = course.lessons.indexOf(activeLesson);
                if (idx < course.lessons.length - 1) setActiveLesson(course.lessons[idx + 1]);
             }}
           >
             Next Module &gt;
           </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;