
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? 'py-4 bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl translate-y-0' 
          : 'py-10 bg-transparent translate-y-0'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-5 group cursor-pointer">
          <div className="relative">
            <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.03] group-hover:bg-emerald-500 transition-all duration-500 overflow-hidden">
               <div className="w-full h-full absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <span className="font-black text-xs text-white group-hover:text-black relative z-10 transition-colors">TR</span>
            </div>
            <div className="absolute inset-0 rounded-full border border-emerald-500 opacity-0 scale-125 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-base font-black tracking-widest uppercase text-white group-hover:text-emerald-400 transition-colors">Terra</span>
            <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-white/30">Archive Project</span>
          </div>
        </div>
        
        {/* Links */}
        <div className="hidden lg:flex items-center gap-16">
          {['Vitals', 'Archive', 'Spheres'].map((link, idx) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="group relative py-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono text-emerald-500/50">0{idx + 1}</span>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 group-hover:text-white transition-colors">{link}</span>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-emerald-500 to-transparent group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
          
          <button className="group relative px-8 py-3.5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95">
             <div className="absolute inset-0 bg-emerald-500 opacity-5 group-hover:opacity-100 transition-opacity"></div>
             <div className="absolute inset-0 border border-emerald-500/20 group-hover:border-emerald-500 transition-colors rounded-full"></div>
             <span className="relative text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-3 text-emerald-500 group-hover:text-black transition-colors">
               Mission 01
               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
             </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-4 bg-white/5 rounded-2xl border border-white/10 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
