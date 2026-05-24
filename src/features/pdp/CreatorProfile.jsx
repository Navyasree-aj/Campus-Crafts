import React, { useState } from 'react';

export default function CreatorProfile({ creator }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="bg-purple-100 border-4 border-black p-8 md:p-10 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div className="flex items-center gap-5">
        <div className="relative w-24 h-24">
          <img src={creator.avatar} alt={creator.name} className="w-full h-full rounded-full border-2 border-black object-cover" />
          {creator.verified && (
            <span className="absolute bottom-0 right-0 bg-amber-300 border border-black w-6 h-6 rounded-full text-[12px] font-black flex items-center justify-center">✓</span>
          )}
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <h3 className="font-black text-2xl md:text-3xl text-black">{creator.name}</h3>
            <span className="bg-white border border-black text-xs md:text-sm font-black px-3 py-1.5 rounded-full text-zinc-600 uppercase tracking-wider">
              Student Verified
            </span>
          </div>
          <span className="text-base md:text-lg font-bold text-zinc-600 block mt-3">{creator.handle}</span>
          <span className="text-base md:text-lg font-medium text-purple-800 block">{creator.uni} • {creator.class}</span>
        </div>
      </div>

      <div className="flex gap-4 flex-col sm:flex-row w-full md:w-auto">
        <button 
          onClick={() => setFollowing(!following)}
          className={`flex-1 sm:flex-none font-black text-base px-6 py-4 rounded-2xl border-2 border-black transition-all ${
            following ? 'bg-zinc-300 text-black shadow-none' : 'bg-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
          }`}
        >
          {following ? 'Following' : 'Follow'}
        </button>
        <button className="flex-1 sm:flex-none bg-white border-2 border-black font-black text-base px-6 py-4 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          View Studio
        </button>
      </div>
    </div>
  );
}