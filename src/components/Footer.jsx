import React from 'react';

const Footer = ({ darkMode }) => (
    <footer className={`py-12 border-t mt-auto ${darkMode ? 'bg-[#131314] text-white border-white/10' : 'bg-white text-[#131314] border-black/10'}`}>
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
            <div className="text-xl font-bold tracking-tighter mb-4">EDUFLOW.</div>
            <div className="text-xs opacity-50 max-w-xs leading-relaxed">
            © 2024 EduFlow Systems.<br/>
            All Rights Reserved.<br/>
            San Francisco, CA.
            </div>
        </div>
        <div className="flex gap-12">
            {[
            ['Platform', ['Courses', 'Projects', 'Evaluation']],
            ['Company', ['Manifesto', 'Careers', 'Contact']],
            ['Legal', ['Terms', 'Privacy', 'Licenses']]
            ].map(([head, links], i) => (
            <div key={i}>
                <div className="text-[10px] font-bold tracking-widest uppercase mb-4 opacity-50">{head}</div>
                <ul className="space-y-2 text-xs font-medium">
                {links.map(l => <li key={l} className="hover:underline cursor-pointer">{l}</li>)}
                </ul>
            </div>
            ))}
        </div>
        </div>
    </footer>
);

export default Footer;