import React from 'react';

export default function CreatorCard({ creator }) {
  return (
    /* Compressed outer dimension widths and cut down container cell padding from p-6 to p-3 */
    <div className="min-w-[180px] bg-emerald-100 border-4 border-black p-3 text-center rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] snap-start text-black">
      
      {/* Sized user profile avatar framework down from w-24 h-24 to w-14 h-14 boundaries */}
      <div className="relative w-14 h-14 mx-auto mb-2">
        {creator?.img && (
          <img src={creator.img} alt={creator.name} className="w-full h-full rounded-full border-2 border-black object-cover" />
        )}
        <span className="absolute bottom-0 right-0 bg-amber-200 border border-black w-4 h-4 rounded-full text-[9px] font-black flex items-center justify-center">✓</span>
      </div>
      
      {/* Normalized primary typography nodes down from large text-lg/3xl values to compact text-xs limits */}
      <div className="space-y-0.5 mb-2.5">
        <h3 className="font-black text-xs text-black leading-tight uppercase tracking-tight truncate">{creator?.name}</h3>
        <span className="text-[10px] font-bold text-zinc-500 block truncate">{creator?.handle}</span>
      </div>
      
      {/* Proximity Location Badge Matrix */}
      {/* Lowered font values from text-xl down to a tight text-[10px] setup */}
      <div className="bg-white border-2 border-black text-[10px] font-black py-1 px-2 rounded-lg mb-2.5 truncate">
        🏃 {creator?.distance} ({creator?.uni})
      </div>
      
      {/* Action Button CTA Core */}
      {/* Adjusted padding rules from py-3 down to a high-density py-1.5 interface element */}
      <button 
        type="button"
        className="w-full bg-white border-2 border-black font-black text-xs py-1.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer hover:bg-zinc-50 uppercase tracking-wider"
      >
        Portfolio
      </button>
    </div>
  );
}