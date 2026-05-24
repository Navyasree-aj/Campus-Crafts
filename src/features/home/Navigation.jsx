import React, { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-4 border-black p-5 md:p-7 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-black text-2xl md:text-4xl tracking-tight text-black">CAMPUS CRAFTS</span>
          <div className="hidden sm:flex items-center gap-1 bg-emerald-200 border-2 border-black px-4 py-2 rounded-full text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span>📍</span>
            <select className="bg-transparent outline-none cursor-pointer font-bold">
              <option>Stanford (94305)</option>
              <option>UC Berkeley (94720)</option>
            </select>
          </div>
        </div>

        <div className="hidden md:block relative flex-1 max-w-md">
          <input type="text" placeholder="Search vibes: #cottagecore #Y2K..." className="w-full bg-white border-2 border-black rounded-xl p-3 px-4 text-base font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none" />
          <span className="absolute right-3 top-3 bg-purple-200 border border-black font-black text-xs px-2 py-1 rounded">AI VIBE</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="bg-white border-2 border-black font-bold text-base px-6 py-3 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">Sell</button>
          <button className="bg-amber-200 border-2 border-black font-bold text-base px-6 py-3 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">Login</button>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex flex-col gap-1.5 bg-white border-2 border-black p-3 rounded-lg">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-t-2 border-black mt-3 py-5 px-3 flex flex-col gap-3 animate-fadeIn">
          <input type="text" placeholder="Search vibes..." className="w-full bg-white border-2 border-black rounded-xl p-3 px-4 text-base font-medium" />
          <div className="flex gap-2">
            <button className="w-full bg-white border-2 border-black font-bold py-3 rounded-xl text-base">Sell</button>
            <button className="w-full bg-amber-200 border-2 border-black font-bold py-3 rounded-xl text-base">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
}