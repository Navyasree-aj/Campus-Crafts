import React from 'react';

export default function DropCard({ drop }) {
  const percentLeft = (drop.stock / drop.totalStock) * 100;

  return (
    <div className="min-w-[280px] flex-1 bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] snap-start">
      <div className="relative h-48 bg-zinc-100">
        <img src={drop.img} alt={drop.title} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-red-400 text-white font-black text-[10px] px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          LIVE NOW
        </span>
      </div>
      
      <div className="p-4">
        <div className="bg-amber-100 border border-black inline-block text-[11px] font-black px-2 py-0.5 rounded mb-3">
          ⏱️ {drop.time} Left
        </div>
        <h3 className="font-black text-lg text-black truncate mb-1">{drop.title}</h3>
        <span className="text-xl font-black text-black block mb-3">${drop.price}</span>
        
        {/* Flash Sale Progress Bar */}
        <div className="w-full bg-zinc-100 border-2 border-black h-3 rounded-full overflow-hidden mb-1">
          <div className="bg-red-400 h-full transition-all" style={{ width: `${percentLeft}%` }}></div>
        </div>
        <span className="text-xs font-bold text-zinc-600 block mb-4">Only {drop.stock} items remaining!</span>
        
        <button className="w-full bg-purple-200 border-2 border-black font-black py-2.5 text-sm rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
          Remind Me
        </button>
      </div>
    </div>
  );
}