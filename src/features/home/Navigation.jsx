import React from 'react';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-40 bg-[#FFFDF9] border-b-4 border-black px-8 py-5 shadow-[0_6px_0_0_rgba(0,0,0,1)]">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-12">
        
        {/* Massive Brand Logo */}
        <a href="/" className="text-3xl lg:text-4xl font-black tracking-tighter uppercase hover:text-purple-600 transition-colors flex-shrink-0">
          campus-crafts
        </a>

        {/* Large, Readable Search Bar */}
        <div className="flex-1 max-w-3xl relative">
          <input 
            type="text" 
            placeholder="Search dorm drops, creators, aesthetics..." 
            className="w-full bg-white border-4 border-black font-bold text-lg px-6 py-4 rounded-2xl outline-none focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all placeholder-zinc-400"
          />
        </div>

        {/* Large Authentication Button */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="bg-black text-white font-black text-lg px-8 py-4 rounded-2xl border-4 border-black hover:bg-zinc-800 active:translate-y-[2px] transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none">
            Sign In / Login
          </button>
        </div>

      </div>
    </nav>
  );
}