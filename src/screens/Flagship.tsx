import React, { useEffect } from 'react';
import { Hero } from '../components/flagship/Hero';
import { IntelSection } from '../components/flagship/IntelSection';
import { SystemsGrid } from '../components/flagship/SystemsGrid';
import { ProtocolsTimeline } from '../components/flagship/ProtocolsTimeline';
import { LuminaCore } from '../components/flagship/LuminaCore';
import '../styles/flagship.css';

const Flagship: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Set document title
    document.title = "DIGITAL FLAGSHIP — RAREWARE STUDIO";
    
    // Cleanup title on unmount
    return () => {
      document.title = "Sanctuary";
    };
  }, []);

  return (
    <div className="flagship-theme w-full min-h-screen selection:bg-[#D000FF] selection:text-white overflow-x-hidden">
      {/* 
        This screen assembles the modular flagship components 
        into a seamless, high-density cinematic experience.
      */}
      
      <Hero />
      
      <div id="intel">
        <IntelSection />
      </div>
      
      <div id="systems">
        <SystemsGrid />
      </div>
      
      <div id="protocols">
        <ProtocolsTimeline />
      </div>
      
      <div id="lumina">
        <LuminaCore />
      </div>

      {/* Flagship Footer */}
      <footer className="bg-black py-24 px-12 border-t border-white/5 flex flex-col items-center">
        <div className="font-mono text-[10px] tracking-[0.5em] text-[#D000FF] mb-8 uppercase">RAREWARE_STUDIO</div>
        <div className="text-white/20 font-mono text-[8px] tracking-[0.2em] uppercase mb-12">
          ©2024. ALL_SYSTEMS_OPERATIONAL.
        </div>
        <div className="flex gap-12 font-mono text-[9px] tracking-[0.2em] uppercase text-white/40">
          <a href="#" className="hover:text-[#D000FF] transition-colors">DECRYPT_ACCESS</a>
          <a href="#" className="hover:text-[#D000FF] transition-colors">PRIVACY_PROTOCOL</a>
          <a href="#" className="hover:text-[#D000FF] transition-colors">UPTIME_STATS</a>
        </div>
      </footer>
    </div>
  );
};

export default Flagship;
