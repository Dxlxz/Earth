
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-slate-950">T</div>
              <span className="text-2xl font-bold tracking-tighter uppercase text-white">Terra</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Terra is a non-profit initiative dedicated to digitizing Earth's complexity. 
              Our mission is to foster a deeper connection between humanity and our biological heritage.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'EarthNet', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">{social}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Exploration</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Global Vitals</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Oceanic Archive</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Atmospheric Labs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Biodiversity Maps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contribute</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Citizen Science</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Data Submission</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Conservation Fund</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Partnerships</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2024 Terra Archive Project. All rights reserved. Powered by the Heart of Earth.</p>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Carbon Offset Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
