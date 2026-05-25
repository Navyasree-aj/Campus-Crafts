import React from 'react';

export default function PLPHeader({ searchQuery, onSearchChange }) {
  return (
    <nav className="sticky top-0 z-40 bg-[#FFFDF9] border-b-4 border-black px-8 py-5 shadow-[0_5px_0_0_rgba(0,0,0,1)]">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-8 lg:gap-12">
        
        {/* App Title Identity */}
        <a href="/" className="text-3xl lg:text-4xl font-black uppercase tracking-tighter hover:text-purple-600 transition-colors flex-shrink-0">
          campus<span className="text-black-600">-crafts</span>
        </a>

        {/* Scaled Global Input Controller Element */}
        <div className="flex-1 max-w-3xl relative hidden sm:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search matching aesthetics, handmade goods, student creators..."
            className="w-full bg-white border-4 border-black font-bold text-base px-6 py-3.5 rounded-2xl outline-none focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all placeholder-zinc-400"
          />
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl pointer-events-none">✨</span>
        </div>

        {/* Global Interaction Interface Nodes */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="relative p-3 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer">
            <span className="text-2xl block">🔔</span>
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border border-black animate-pulse"></span>
          </button>
          <button className="relative p-3 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer">
            <span className="text-2xl block">🛒</span>
          </button>
        </div>

      </div>
    </nav>
  );
}