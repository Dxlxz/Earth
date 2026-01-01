
import React, { useState } from 'react';
import { getEarthInsight } from '../services/geminiService';

const EarthExplorer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleExplore = async (topic: string) => {
    if (!topic) return;
    setLoading(true);
    const result = await getEarthInsight(topic);
    setInsight(result);
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">Planetary <span className="text-emerald-500">Intelligence</span></h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
          Deep reasoning applied to geological and biological complexity. Query the archive for real-time synthesis of Earth systems.
        </p>
      </div>

      <div className="glass-card rounded-[3rem] p-4 border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4 bg-slate-900/50 rounded-[2.5rem] p-8">
            <div className="mb-10">
              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-6">Discovery Vectors</div>
              <div className="flex flex-col gap-3">
                {[
                  "Deep Ocean Thermohaline Circulation",
                  "Mycelial Communication Networks",
                  "Plate Tectonic Evolution",
                  "Lithospheric Gas Exchange"
                ].map(topic => (
                  <button
                    key={topic}
                    onClick={() => handleExplore(topic)}
                    className="group flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 transition-all text-left"
                  >
                    <span className="text-xs font-bold text-slate-300 group-hover:text-slate-950 truncate pr-4">{topic}</span>
                    <svg className="w-4 h-4 text-emerald-500 group-hover:text-slate-950 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Manual Inquiry</div>
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter vector..."
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button
                  onClick={() => handleExplore(query)}
                  className="mt-3 w-full py-4 bg-emerald-500 text-slate-950 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10"
                >
                  {loading ? 'Processing...' : 'Execute Query'}
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 min-h-[500px] flex flex-col">
            {loading ? (
              <div className="flex-1 flex flex-col items-center justify-center p-12 bg-slate-950/20 rounded-[2.5rem] border border-white/5">
                <div className="relative w-20 h-20 mb-8">
                  <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div className="font-mono text-[10px] text-emerald-500 uppercase tracking-[0.4em] animate-pulse">Accessing Core Repositories</div>
              </div>
            ) : insight ? (
              <div className="flex-1 p-12 bg-slate-950/20 rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 m-10 text-[100px] font-black text-white/5 pointer-events-none select-none">TERRA</div>
                <div className="relative z-10 max-w-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Query Result Alpha-7</span>
                  </div>
                  <div className="text-slate-200 text-lg leading-relaxed space-y-4 font-light italic">
                    {insight.split('\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-12 bg-slate-950/20 rounded-[2.5rem] border border-dashed border-white/10 opacity-60">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <p className="text-slate-500 text-sm font-medium">Select a vector or define a custom coordinate.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthExplorer;
