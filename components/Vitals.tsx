
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

const data = [
  { name: '1880', temp: -0.16 },
  { name: '1900', temp: -0.08 },
  { name: '1920', temp: -0.27 },
  { name: '1940', temp: 0.12 },
  { name: '1960', temp: -0.03 },
  { name: '1980', temp: 0.26 },
  { name: '2000', temp: 0.39 },
  { name: '2020', temp: 1.02 },
];

const StatBlock: React.FC<{ label: string; value: string; unit: string; delta: string }> = ({ label, value, unit, delta }) => (
  <div className="glass-panel p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-3xl -mr-12 -mt-12 group-hover:bg-emerald-500/10 transition-colors"></div>
    <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-10">{label}</div>
    <div className="flex items-baseline gap-2 mb-8">
      <span className="text-6xl font-black text-white tracking-tighter">{value}</span>
      <span className="text-white/30 text-base font-medium">{unit}</span>
    </div>
    <div className="flex items-center gap-2">
      <div className={`text-xs font-mono font-bold ${delta.startsWith('+') ? 'text-rose-500' : 'text-emerald-500'}`}>
        {delta} <span className="text-[10px] text-white/20 font-light ml-1">VS BASELINE</span>
      </div>
    </div>
  </div>
);

const Vitals: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
        <div className="max-w-xl">
          <div className="text-emerald-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4">Planetary Bio-Metrics</div>
          <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            THE <span className="text-white/20">GLOBAL</span> <br/> DIAGNOSTIC.
          </h2>
        </div>
        <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm border-l border-white/10 pl-8">
            The archive continuously updates planetary health metrics sourced from over 4,000 decentralized monitoring stations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 glass-panel p-12 rounded-[3.5rem] relative">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-white font-bold text-xl mb-1 uppercase tracking-tighter">Thermal Anomaly Map</h3>
              <p className="text-white/30 text-xs uppercase tracking-widest">Metric: Surface Temperature Variation</p>
            </div>
            <div className="px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
              Live Feed
            </div>
          </div>
          
          <div className="h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="gradientGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#333" fontSize={10} axisLine={false} tickLine={false} dy={20}/>
                <YAxis stroke="#333" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(val) => `${val}°C`}/>
                <Tooltip 
                  cursor={{ stroke: '#10b981', strokeWidth: 1 }}
                  contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="temp" stroke="#10b981" strokeWidth={4} fill="url(#gradientGlow)" animationDuration={2500}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <StatBlock label="CO2 Concentration" value="424.1" unit="PPM" delta="+2.38" />
          <StatBlock label="Ocean Heat Content" value="325" unit="ZJ" delta="+11.2" />
        </div>
      </div>
    </div>
  );
};

export default Vitals;
