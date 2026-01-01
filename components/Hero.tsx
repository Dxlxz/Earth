
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[115vh] w-full flex items-center justify-center overflow-hidden bg-transparent selection:bg-emerald-500/30">
      
      {/* 1. CINEMATIC BACKGROUND TYPOGRAPHY (Z-0) */}
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center pointer-events-none select-none">
        <h1 className="text-[26vw] font-black tracking-[-0.08em] text-white/[0.015] leading-none uppercase filter blur-[2px] transition-transform duration-1000">
          TERRA
        </h1>
      </div>

      {/* 2. THE EARTH CENTERPIECE (Z-10) */}
      <div className="absolute top-1/2 left-1/2 z-10 pointer-events-none animate-float-earth">
        <div className="relative w-[65vh] h-[65vh] md:w-[85vh] md:h-[85vh] lg:w-[95vh] lg:h-[95vh] flex items-center justify-center">
          
          {/* Deep Space Atmosphere (Back Glow) */}
          <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-[150px] scale-110 opacity-30"></div>
          <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-[120px] scale-90 opacity-40"></div>
          
          {/* Primary High-Res Earth Asset */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png" 
            alt="The Earth" 
            className="w-full h-full object-contain brightness-[1.15] contrast-[1.1] drop-shadow-[0_0_80px_rgba(16,185,129,0.15)] z-10"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://www.pngall.com/wp-content/uploads/2016/06/Earth-Free-PNG-Image.png";
            }}
          />
          
          {/* VOLUMETRIC LIGHTING OVERLAYS */}
          {/* Sun Side Brightness Enhancement */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.1)_0%,transparent_50%)] z-20"></div>
          
          {/* Dark Side Shadow Mask */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,transparent_40%,rgba(0,0,0,0.6)_80%,rgba(0,0,0,0.98)_100%)] z-20 shadow-[inset_-20px_-20px_100px_rgba(0,0,0,0.8)]"></div>
          
          {/* Atmosphere Rim Light (The 'Blue Line') */}
          <div className="absolute inset-0 rounded-full border-[0.5px] border-emerald-500/20 shadow-[0_0_40px_rgba(52,211,153,0.15),inset_0_0_40px_rgba(52,211,153,0.15)] z-30"></div>
        </div>
      </div>

      {/* 3. FOREGROUND HUD UI (Z-40) */}
      <div className="absolute inset-0 z-40 pointer-events-none flex flex-col justify-between px-8 py-24 md:px-16 md:py-16 max-w-[1700px] mx-auto">
        
        {/* Top Header Information */}
        <div className="flex justify-between items-start mt-12 md:mt-16">
          <div className="space-y-8 pointer-events-auto">
             <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-mono font-black uppercase tracking-[0.5em] text-emerald-400">Live Satellite Feed: TS-01</span>
             </div>
             
             <div className="space-y-2">
                <h2 className="text-7xl md:text-[110px] font-black text-white tracking-[-0.06em] leading-[0.82] uppercase drop-shadow-2xl">
                  THE LIVING<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-500">ARCHIVE.</span>
                </h2>
                <div className="flex items-center gap-6 mt-6">
                  <div className="h-[2px] w-24 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                  <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">Status: Nominal</span>
                </div>
             </div>
          </div>
          
          {/* Right Side Telemetry Card */}
          <div className="hidden lg:block text-right pointer-events-auto">
             <div className="bg-white/[0.02] backdrop-blur-2xl px-8 py-8 rounded-[2.5rem] border border-white/5 space-y-6 shadow-2xl">
                <div className="space-y-1">
                  <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">Orbital Path</div>
                  <div className="text-lg font-mono text-emerald-400 font-medium">51.64° INC</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">Rel Velocity</div>
                  <div className="text-lg font-mono text-white font-medium tracking-tight">7.66 KM/S</div>
                </div>
                <div className="h-px w-full bg-white/5"></div>
                <div className="flex items-center justify-end gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">System Sync</span>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Section: Narrative & Key Metrics */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-12">
          <div className="max-w-lg pointer-events-auto space-y-12">
            <p className="text-xl text-slate-300 font-light leading-relaxed tracking-tight">
              A planetary scale digital twin monitoring Earth's core subsystems. 
              Synthesizing <span className="text-white font-bold">8.1 billion</span> lives with the complex biological tapestry of our home world.
            </p>
            <div className="flex items-center gap-6">
               <button className="group relative px-12 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:bg-emerald-400 hover:scale-105 shadow-[0_20px_60px_rgba(16,185,129,0.2)] active:scale-95">
                 Access Archive
               </button>
               <button className="px-12 py-5 border border-white/10 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white/30 transition-all active:scale-95">
                 Protocol Alpha
               </button>
            </div>
          </div>

          {/* New Grid-Style Metrics Dashboard */}
          <div className="pointer-events-auto grid grid-cols-2 md:grid-cols-3 gap-1 p-1 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/5 shadow-2xl">
            {[
              { label: 'CO2 Content', val: '421.2', unit: 'PPM', color: 'text-white' },
              { label: 'Temp Delta', val: '+1.12', unit: '°C', color: 'text-emerald-400' },
              { label: 'O2 Saturation', val: '20.95', unit: '%', color: 'text-white' }
            ].map((stat, i) => (
              <div key={i} className="px-10 py-8 rounded-[2.8rem] hover:bg-white/[0.04] transition-all cursor-default group">
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 mb-3 group-hover:text-emerald-500 transition-colors">{stat.label}</div>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-3xl font-black tracking-tighter ${stat.color}`}>{stat.val}</span>
                  <span className="text-[10px] text-white/20 font-mono font-bold uppercase">{stat.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Refined */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
         <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/50 group-hover:text-emerald-400 transition-colors">Descend</span>
         <div className="relative h-20 w-px bg-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-[scrollLine_2s_infinite]"></div>
         </div>
      </div>

    </section>
  );
};

export default Hero;
