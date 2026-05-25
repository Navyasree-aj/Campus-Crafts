import React from 'react';

export default function PLPHeader({ searchQuery, onSearchChange }) {
  return (
    /* Compressed padding from px-8 py-5 to px-4 py-3, and minimized the bottom shadow drop */
    <nav className="sticky top-0 z-40 bg-[#FFFDF9] border-b-4 border-black px-4 py-3 shadow-[0_3px_0_0_rgba(0,0,0,1)] text-black">
      {/* Normalized the layout container envelope max-width down to standard 6xl bounds */}
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 lg:gap-6">
        
        {/* App Title Identity */}
        {/* Scaled identity down from text-3xl/4xl to a compact, punchy text-sm md:text-base formatting */}
        <a href="/" className="text-xl md:text-base font-black uppercase tracking-tighter hover:text-black-600 transition-colors flex-shrink-0">
          campus<span className="text-black-600">-crafts</span>
        </a>

        {/* Scaled Global Input Controller Element */}
        {/* Re-calibrated input text size to text-xs, dialed padding to py-2, and matched border architecture */}
        <div className="flex-1 max-w-xl relative hidden sm:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search aesthetics, goods, creators..."
            className="w-full bg-white border-2 border-black font-bold text-xs px-4 py-2 rounded-xl outline-none focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all placeholder-zinc-400"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm pointer-events-none">✨</span>
        </div>

        {/* Global Interaction Interface Nodes */}
        {/* Resized interactive icon button containers from large p-3 frames to crisp, uniform layouts */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button 
            type="button"
            className="relative p-2 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer hover:bg-zinc-50"
          >
            <span className="text-base block">🔔</span>
            <span className="absolute top-0.5 right-0.5 h-2 w-2 bg-red-500 rounded-full border border-black animate-pulse"></span>
          </button>
          
          <button 
            type="button"
            className="p-2 bg-white border-2 border-black rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer hover:bg-zinc-50"
          >
            <span className="text-base block">🛒</span>
          </button>
        </div>

      </div>
    </nav>
  );
}