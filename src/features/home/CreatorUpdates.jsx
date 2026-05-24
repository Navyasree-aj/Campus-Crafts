import React from 'react';

export default function CreatorUpdates() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-black text-black mb-6">📣 Followed Creator Updates</h2>
      <div className="max-w-2xl bg-white border-4 border-black p-5 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3 mb-3">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Avatar" className="w-10 h-10 rounded-full border border-black object-cover" />
          <div>
            <strong className="text-sm font-black text-black block">Mia Crafts</strong>
            <span className="text-[10px] font-bold text-zinc-500">Posted 2 hours ago</span>
          </div>
        </div>
        <p className="text-xs md:text-sm font-medium text-black/90 leading-relaxed mb-4">
          Just finalized throwing a dynamic grid batch of glazed checkerboard trinket dishes! Dropping them directly onto the campus market square checkout tomorrow around lunch hour. Block your spot! 🧩✨
        </p>
        <div className="flex gap-2">
          <button className="bg-zinc-100 border border-black font-bold text-xs py-1.5 px-3 rounded-full">❤️ Like (54)</button>
          <button className="bg-zinc-100 border border-black font-bold text-xs py-1.5 px-3 rounded-full">🔗 Share</button>
        </div>
      </div>
    </section>
  );
}