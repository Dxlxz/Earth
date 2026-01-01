
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vitals from './components/Vitals';
import EarthExplorer from './components/EarthExplorer';
import EcosystemGrid from './components/EcosystemGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Vitals Section */}
        <section id="vitals" className="py-40 px-6 max-w-7xl mx-auto">
          <Vitals />
        </section>

        {/* Immersive Ecosystems - Breaking the grid */}
        <section id="ecosystems" className="bg-black py-0">
          <div className="text-center py-40 bg-black relative z-10">
            <h2 className="text-6xl md:text-[120px] font-black tracking-tighter mb-8 leading-none">
              THE <span className="text-outline">THREE</span> <br/> 
              <span className="text-emerald-500">PILLARS</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto px-6 text-lg font-light">
              We monitor the core ecological systems that sustain the thin layer of life on our rocky home.
            </p>
          </div>
          <EcosystemGrid />
        </section>

        {/* Intelligence Section */}
        <section id="explorer" className="py-40 px-6 bg-black relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -z-10"></div>
          <EarthExplorer />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
