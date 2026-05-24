import React from 'react';

export default function CreatorCard({ creator }) {
  return (
    <div className="min-w-[210px] bg-emerald-100 border-4 border-black p-5 text-center rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] snap-start">
      <div className="relative w-20 h-20 mx-auto mb-3">
        <img src={creator.img} alt={creator.name} className="w-full h-full rounded-full border-2 border-black object-cover" />
        <span className="absolute bottom-0 right-0 bg-amber-200 border border-black w-5 h-5 rounded-full text-[11px] font-black flex items-center justify-center">✓</span>
      </div>
      
      <h3 className="font-black text-md text-black">{creator.name}</h3>
      <span className="text-xs font-bold text-zinc-600 block mb-3">{creator.handle}</span>
      
      <div className="bg-white border border-black text-[10px] font-bold py-1 px-2 rounded-md mb-4">
        🏃 {creator.distance} ({creator.uni})
      </div>
      
      <button className="w-full bg-white border-2 border-black font-bold text-xs py-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
        Portfolio
      </button>
    </div>
  );
}