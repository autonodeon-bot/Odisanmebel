
import React, { useState, useEffect } from 'react';
import { Settings, Cpu, MousePointer2, ClipboardList, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const HUD: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollPos(Math.round(window.scrollY));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-mono">
      {/* HUD Panel */}
      <div className={`absolute bottom-full right-0 mb-4 transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="glass-dark p-6 rounded-2xl w-72 text-white border border-primary/20 shadow-2xl overflow-hidden relative">
          <div className="hud-scanline opacity-20"></div>
          
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-2">
            <span className="text-[10px] text-primary uppercase tracking-[0.2em]">Odisan OS v2.5</span>
            <Activity size={14} className="text-primary animate-pulse" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-gray-400">STATUS</span>
              <span className="text-green-400">ONLINE</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-gray-400">PRODUCTION LOAD</span>
              <span className="text-primary">82%</span>
            </div>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[82%] animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-4">
              <Link to="/planner" className="flex items-center gap-3 p-3 bg-white/5 hover:bg-primary hover:text-charcoal rounded-lg transition-all text-[11px] group">
                <Cpu size={14} className="group-hover:rotate-90 transition-transform" />
                <span>3D CONSTRUCTOR</span>
              </Link>
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-[11px]">
                <MousePointer2 size={14} />
                <span>COORDINATES: {scrollPos}px</span>
              </button>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between text-[9px] text-gray-500 uppercase italic">
            <span>Engineering Art</span>
            <span>Est. 2014</span>
          </div>
        </div>
      </div>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 relative ${isOpen ? 'bg-primary text-charcoal rotate-90' : 'glass-dark text-white border border-primary/50'}`}
      >
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow pointer-events-none"></div>
        {isOpen ? <Settings size={24} /> : <Settings size={24} className="animate-pulse" />}
      </button>
    </div>
  );
};

export default HUD;
