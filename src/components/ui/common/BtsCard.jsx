import React from 'react';

export default function BtsCard({ clip }) {
  return (
    <div className="relative aspect-[9/16] bg-zinc-950 border-4 border-black rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] group">
      <img src={clip.img} alt="Video feed cover" className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-4 flex flex-col justify-between">
        <div className="self-end bg-white/20 backdrop-blur-md rounded-full w-9 h-9 flex items-center justify-center text-white text-xs font-bold cursor-pointer">
          ▶
        </div>
        <div>
          <span className="font-black text-sm text-emerald-300 block mb-1">{clip.handle}</span>
          <p className="text-xs text-white/90 font-medium leading-tight mb-2">{clip.activity}</p>
          <span className="text-[10px] font-bold text-zinc-400 block">👁️ {clip.views} views</span>
        </div>
      </div>
    </div>
  );
}