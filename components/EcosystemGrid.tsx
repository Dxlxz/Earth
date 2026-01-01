
import React from 'react';

const ECOSYSTEMS = [
  {
    title: "Deep Hydrosphere",
    image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80&w=1200",
    id: "BIO_H2O",
    desc: "The largest habitat on Earth, covering 71% of the surface and regulating the global energy balance."
  },
  {
    title: "Arctic Cryosphere",
    image: "https://images.unsplash.com/photo-1517783999520-f068d3439003?auto=format&fit=crop&q=80&w=1200",
    id: "BIO_ICE",
    desc: "A massive planetary reflector of solar energy, now transitioning at unprecedented velocities."
  },
  {
    title: "Amazonian Biosphere",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    id: "BIO_ORG",
    desc: "The primary biological engine for humidity cycling and oxygen generation on the continental shelf."
  }
];

const EcosystemGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 bg-white/5">
      {ECOSYSTEMS.map((eco, idx) => (
        <div key={idx} className="relative h-[800px] group overflow-hidden border-r border-white/5 last:border-0">
          <img 
            src={eco.image} 
            alt={eco.title} 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
          
          <div className="absolute inset-0 p-16 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">{eco.id}</span>
              <div className="w-10 h-[1px] bg-white/20 mt-2"></div>
            </div>

            <div className="space-y-8">
              <h3 className="text-5xl font-black text-white leading-tight tracking-tighter max-w-[200px] group-hover:text-emerald-400 transition-colors">
                {eco.title}
              </h3>
              <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                {eco.desc}
              </p>
              <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white hover:text-emerald-500 transition-colors pt-4 border-t border-white/10 w-full">
                Synchronize Data Archive
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EcosystemGrid;
