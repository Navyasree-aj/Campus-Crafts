import React from 'react';

export default function StudentSpotlight() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-black text-black mb-6">⭐ Student Spotlight</h2>
      <div className="w-full bg-purple-200 border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row">
        <div className="relative h-64 md:h-auto md:w-2/5 bg-zinc-200">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80" alt="Spotlight Maker" className="w-full h-full object-cover" />
          <span className="absolute bottom-4 left-4 bg-amber-200 border-2 border-black font-black text-xs px-3 py-1.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">CREATOR OF THE WEEK</span>
        </div>
        <div className="p-6 md:p-10 flex-1 flex flex-col justify-center">
          <h3 className="text-3xl font-black text-black mb-2">Chloe Resin</h3>
          <p className="text-sm font-bold text-black/80 max-w-xl leading-relaxed mb-4">Sophomore Material Arts student rendering locally-foraged organic botanicals into archival resin table goods out of her dorm workstation.</p>
          <div className="bg-white border-2 border-black p-4 rounded-xl border-l-8 border-l-black mb-6">
            <p className="text-xs font-bold italic text-black/90 mb-1">"The detail on my customized specimen tray is gorgeous. Picked it up directly at the library common room."</p>
            <span className="text-[10px] font-black text-zinc-500">- @sarah.k</span>
          </div>
          <button className="w-full sm:w-auto self-start bg-black text-white font-black text-sm px-6 py-3 rounded-xl hover:bg-zinc-800 transition-all">Follow @chloe.epoxy</button>
        </div>
      </div>
    </section>
  );
}