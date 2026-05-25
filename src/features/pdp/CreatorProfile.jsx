import React, { useState } from 'react';

export default function CreatorProfile({ creator }) {
  const [following, setFollowing] = useState(false);

  return (
    /* Calibrated card padding down from p-8/p-10 to high-density p-5 layout proportions */
    <div className="bg-purple-100 border-4 border-black p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex items-center gap-4">
        {/* Scaled avatar frame down from w-24 h-24 to crisp, balanced w-16 h-16 bounds */}
        <div className="relative w-16 h-16 flex-shrink-0">
          <img src={creator.avatar} alt={creator.name} className="w-full h-full rounded-full border-2 border-black object-cover" />
          {creator.verified && (
            <span className="absolute bottom-0 right-0 bg-amber-300 border-2 border-black w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center">✓</span>
          )}
        </div>
        
        <div className="space-y-0.5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
            {/* Stabilized title text down from text-2xl md:text-3xl to text-base md:text-lg */}
            <h3 className="font-black text-base md:text-lg text-black uppercase tracking-tight">{creator.name}</h3>
            <span className="inline-block w-max bg-white border-2 border-black text-[9px] font-black px-2 py-0.5 rounded-md text-zinc-600 uppercase tracking-wider">
              Student Verified
            </span>
          </div>
          {/* Calibrated meta descriptions down to balanced body metrics */}
          <span className="text-xs font-bold text-zinc-500 block">{creator.handle}</span>
          <span className="text-xs font-black text-purple-800 block">{creator.uni} • {creator.class}</span>
        </div>
      </div>

      {/* Action Button Interaction Matrix */}
      {/* Sized buttons down from chunkier padding px-6 py-4 to a neat px-4 py-2 layout with text-xs utility */}
      <div className="flex gap-2 flex-col sm:flex-row w-full md:w-auto">
        <button 
          type="button"
          onClick={() => setFollowing(!following)}
          className={`flex-1 sm:flex-none font-black text-xs uppercase tracking-wider px-4 py-2 rounded-xl border-2 border-black transition-all cursor-pointer ${
            following ? 'bg-zinc-300 text-black shadow-none' : 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none'
          }`}
        >
          {following ? 'Following' : 'Follow'}
        </button>
        <button 
          type="button"
          className="flex-1 sm:flex-none bg-white hover:bg-zinc-50 text-black font-black text-xs uppercase tracking-wider px-4 py-2 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
        >
          View Studio
        </button>
      </div>
    </div>
  );
}