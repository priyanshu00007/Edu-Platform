import React, { useState } from 'react';
import { FAQS } from '../data/mockData';

const FAQSection = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={`py-32 px-6 border-t ${darkMode ? 'bg-[#131314] text-white border-white/10' : 'bg-white text-[#131314] border-black/10'}`}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-xs font-bold tracking-widest uppercase">System Specs / FAQ</h2>
        </div>
        <div className="md:col-span-8">
          {FAQS.map((faq, idx) => (
            <div key={idx} className={`border-b ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 text-left flex justify-between items-center group"
              >
                <span className="text-xl font-light">{faq.question}</span>
                <span className="text-xs font-mono">{openIndex === idx ? '[-]' : '[+]'}</span>
              </button>
              {openIndex === idx && (
                <div className="pb-8 pr-12 opacity-70 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;