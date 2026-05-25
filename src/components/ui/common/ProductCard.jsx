import React from 'react';

export default function ProductCard({ item, onClick }) {
  return (
    <div 
      onClick={onClick}
      /* Tightened min-width boundary and matched the dense 4px border style of sibling modules */
      className="min-w-[180px] bg-white border-4 border-black rounded-xl overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col cursor-pointer hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 group text-black"
    >
      {/* Compressed vertical image housing frame down from h-44/56 to a crisp h-32 track */}
      <div className="relative h-32 bg-zinc-50 overflow-hidden border-b-2 border-black">
        {item?.img && (
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200" 
          />
        )}
        
        {/* Wishlist Button Toggle Node */}
        {/* Adjusted padding from w-8 h-8 to a compact w-6 h-6 framework */}
        <button 
          type="button"
          onClick={(e) => { e.stopPropagation(); alert('Saved to Wishlist!'); }} 
          className="absolute top-2 right-2 bg-white border-2 border-black w-6 h-6 rounded-md text-xs font-black flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 cursor-pointer"
        >
          ♥
        </button>
      </div>
      
      {/* Content & Metadata Layout Hub */}
      {/* Sized standard grid block structural padding parameters down from p-4 to p-2.5 */}
      <div className="p-2.5 flex flex-col flex-1 justify-between gap-2">
        <div className="space-y-1">
          {/* Calibrated title typography down from broad text-lg/2xl to clear, high-density text-xs rules */}
          <h3 className="font-black text-xs text-black leading-tight line-clamp-2 group-hover:text-purple-600 transition-colors uppercase tracking-tight">
            {item?.title}
          </h3>
          <div className="text-[10px] tracking-tight">{'⭐'.repeat(item?.rating || 5)}</div>
        </div>
        
        {/* Action Transaction Row Split */}
        <div className="flex items-center justify-between gap-1.5 pt-0.5">
          <span className="font-black text-xs font-mono">${item?.price}</span>
          
          {/* Quick Add Bag Action Trigger */}
          {/* Downsized CTA dimensions down from px-4 py-2 to a dense px-2.5 py-1 box */}
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); alert('Added to bag!'); }}
            className="bg-emerald-300 hover:bg-emerald-400 text-black border-2 border-black text-[10px] font-black px-2.5 py-1 rounded-lg shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer uppercase tracking-wider"
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}