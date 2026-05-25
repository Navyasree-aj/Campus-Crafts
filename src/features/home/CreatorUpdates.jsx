import React from 'react';

export default function CreatorUpdates() {
  return (
    /* Clean layout container matching your max-w-6xl dashboard matrix boundaries */
    <section className="py-4 w-full mx-auto max-w-6xl">
      {/* Sized card boundaries and aligned shadow values to crisp standard dimensions */}
      <div className="bg-white border-4 border-black p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Creator Identity Meta Header */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" 
            alt="Avatar" 
            className="w-10 h-10 rounded-full border-2 border-black object-cover" 
          />
          <div>
            {/* Calibrated title typography down from text-2xl to standard text-base */}
            <strong className="text-base font-black text-black block uppercase tracking-tight">Mia Crafts</strong>
            <span className="text-xs font-bold text-zinc-500">Posted 2 hours ago</span>
          </div>
        </div>

        {/* Post Feed Body Context */}
        {/* Stabilized font sizes down from md:text-xl to crisp, balanced text-sm constraints */}
        <p className="text-sm font-bold text-zinc-800 leading-relaxed mb-4">
          Just finalized throwing a dynamic grid batch of glazed checkerboard trinket dishes! Dropping them directly onto the campus market square checkout tomorrow around lunch hour. Block your spot! 🧩✨
        </p>

        {/* Action Button Interaction Matrix */}
        {/* Adjusted buttons from thin borders and text-lg to standard high-contrast text-xs utility parameters */}
        <div className="flex items-center gap-2">
          <button 
            type="button"
            className="bg-zinc-50 hover:bg-zinc-100 border-2 border-black font-black text-xs uppercase px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            ❤️ Like (54)
          </button>
          <button 
            type="button"
            className="bg-zinc-50 hover:bg-zinc-100 border-2 border-black font-black text-xs uppercase px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            🔗 Share
          </button>
        </div>

      </div>
    </section>
  );
}