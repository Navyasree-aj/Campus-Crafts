import React from 'react';

export default function LimitedEdition() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] py-12 px-6 text-center bg-zinc-900">
        <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80" alt="Background overlay" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto">
          <span className="bg-red-400 text-white border border-white font-black text-[10px] px-2.5 py-1 rounded">HYPER SCARCE COLLECTIBLES</span>
          <h2 className="text-2xl md:text-4xl font-black text-white mt-4 mb-2">The Vault: 1-of-1 Micro Collections</h2>
          <p className="text-xs md:text-sm text-zinc-200 font-medium mb-6 leading-relaxed">Individually numbered bespoke builds, community memorabilia drops, and commissioned items produced in batch counts under 5 items globally.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-amber-100 border-2 border-black text-black font-black text-xs px-5 py-2.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Explore Collection</button>
            <button className="bg-white border-2 border-black text-black font-black text-xs px-5 py-2.5 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Custom Commission Request</button>
          </div>
        </div>
      </div>
    </section>
  );
}