import React from 'react';

export default function CreatorCard({ creator }) {
  return (
    <div className="min-w-[260px] bg-emerald-100 border-4 border-black p-6 text-center rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] snap-start">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <img src={creator.img} alt={creator.name} className="w-full h-full rounded-full border-2 border-black object-cover" />
        <span className="absolute bottom-0 right-0 bg-amber-200 border border-black w-6 h-6 rounded-full text-[12px] font-black flex items-center justify-center">✓</span>
      </div>
      
      <h3 className="font-black text-lg md:text-3xl text-black">{creator.name}</h3>
      <span className="text-xl md:text-2xl font-bold text-zinc-600 block mb-4">{creator.handle}</span>
      
      <div className="bg-white border border-black text-xl font-bold py-2 px-3 rounded-md mb-4">
        🏃 {creator.distance} ({creator.uni})
      </div>
      
      <button className="w-full bg-white border-2 border-black font-bold text-xl py-3 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
        Portfolio
      </button>
    </div>
  );
}