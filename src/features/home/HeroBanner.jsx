import React from 'react';

export default function HeroBanner() {
  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      <div className="w-full bg-gradient-to-tr from-purple-200 via-pink-100 to-amber-100 border-4 border-black p-6 md:p-12 rounded-3xl text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-1.5 rounded-full text-xs font-black tracking-wide shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6">
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
          <span>85 ARTISANS ACTIVE ONLINE</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-none max-w-3xl mx-auto mb-4">CAMPUS FALL DROPS ARE LIVE!</h1>
        <p className="text-sm md:text-base font-bold text-black/80 max-w-xl mx-auto mb-8">Snag hyper-exclusive, premium handmade pieces crafted out of campus dorm rooms before the timers hit zero.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-black text-white font-black text-md px-8 py-3.5 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">ENTER DROP WINDOW</button>
          <button className="w-full sm:w-auto bg-white text-black font-black text-md px-8 py-3.5 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Explore Map</button>
        </div>
      </div>
    </section>
  );
}