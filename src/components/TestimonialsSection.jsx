import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

const TestimonialsSection = ({ darkMode }) => (
  <div className={`py-32 border-t ${darkMode ? 'bg-[#131314] text-white border-white/10' : 'bg-white text-[#131314] border-black/10'}`}>
    <div className="max-w-screen-xl mx-auto px-6">
      <h2 className="text-xs font-bold tracking-widest uppercase mb-16">Peer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="flex flex-col">
            <div className="text-lg leading-relaxed mb-8">"{t.text}"</div>
            <div className="mt-auto">
              <div className="font-bold text-sm">{t.name}</div>
              <div className="text-xs opacity-50 uppercase tracking-wider">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TestimonialsSection;