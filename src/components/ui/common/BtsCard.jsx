import React from 'react';

export default function BtsCard({ clip }) {
  return (
    /* Retained the distinct 9:16 vertical video layout container with scaled shadow metrics */
    <div className="relative aspect-[9/16] bg-zinc-950 border-4 border-black rounded-xl overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group">
      {/* Optimized background visual fallback framework */}
      {clip?.img && (
        <img 
          src={clip.img} 
          alt="Video feed cover" 
          className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-200" 
        />
      )}
      
      {/* Dense Interaction Text Overlay layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-3 flex flex-col justify-between">
        
        {/* Play Action Trigger Element Box */}
        {/* Calibrated down from w-9 h-9 to a crisp w-7 h-7 container */}
        <button 
          type="button"
          className="self-end bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full w-7 h-7 flex items-center justify-center text-white text-[10px] font-bold cursor-pointer transition-colors border border-white/10"
          aria-label="Play process clip"
        >
          ▶
        </button>
        
        {/* Core Metadata Container */}
        {/* Scaled text constraints from bulky text-lg classes down to high-density text-xs parameters */}
        <div className="space-y-0.5">
          <span className="font-black text-xs text-emerald-300 block tracking-tight">
            {clip?.handle}
          </span>
          <p className="text-xs text-white/90 font-bold leading-snug line-clamp-2">
            {clip?.activity}
          </p>
          <span className="text-[10px] font-medium text-zinc-400 block pt-0.5">
            👁️ {clip?.views} views
          </span>
        </div>
        
      </div>
    </div>
  );
}