import React from 'react';

const Contact = ({ darkMode }) => (
  <div className={`min-h-screen pt-20 pb-32 px-6 ${darkMode ? 'bg-[#131314] text-white' : 'bg-white text-[#131314]'}`}>
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
      <div>
        <h1 className="text-6xl font-medium tracking-tighter mb-16">CONTACT.</h1>
        <div className="space-y-12">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-4 opacity-50">General Inquiries</div>
            <div className="text-xl font-light">hello@eduflow.tech</div>
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-4 opacity-50">Headquarters</div>
            <div className="text-xl font-light">
              123 Innovation Dr.<br/>
              Tech Valley, CA 94025
            </div>
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-4 opacity-50">Social</div>
            <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
              <button className="hover:underline">Twitter</button>
              <button className="hover:underline">GitHub</button>
              <button className="hover:underline">LinkedIn</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`p-8 border ${darkMode ? 'border-white/20' : 'border-black/20'}`}>
         <form className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase opacity-70">First Name</label>
                  <input className={`w-full bg-transparent border-b p-2 outline-none focus:border-opacity-100 transition-colors ${darkMode ? 'border-white/20 focus:border-white' : 'border-black/20 focus:border-black'}`} type="text" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase opacity-70">Last Name</label>
                  <input className={`w-full bg-transparent border-b p-2 outline-none focus:border-opacity-100 transition-colors ${darkMode ? 'border-white/20 focus:border-white' : 'border-black/20 focus:border-black'}`} type="text" />
               </div>
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-bold tracking-widest uppercase opacity-70">Email</label>
               <input className={`w-full bg-transparent border-b p-2 outline-none focus:border-opacity-100 transition-colors ${darkMode ? 'border-white/20 focus:border-white' : 'border-black/20 focus:border-black'}`} type="email" />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-bold tracking-widest uppercase opacity-70">Message</label>
               <textarea rows="4" className={`w-full bg-transparent border-b p-2 outline-none focus:border-opacity-100 transition-colors ${darkMode ? 'border-white/20 focus:border-white' : 'border-black/20 focus:border-black'}`}></textarea>
            </div>
            <button className={`w-full py-4 text-xs font-bold tracking-widest uppercase border transition-all ${darkMode ? 'bg-white text-black hover:bg-transparent hover:text-white border-white' : 'bg-black text-white hover:bg-transparent hover:text-black border-black'}`}>
               Transmit Message
            </button>
         </form>
      </div>
    </div>
  </div>
);

export default Contact;