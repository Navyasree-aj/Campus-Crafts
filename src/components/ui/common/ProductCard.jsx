import React from 'react';

export default function ProductCard({ item, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="min-w-[260px] bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 group"
    >
      <div className="relative h-44 md:h-56 bg-zinc-50 overflow-hidden">
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
        />
        {/* Prevent card click event from firing when just liking an item */}
        <button 
          onClick={(e) => { e.stopPropagation(); alert('Saved to Wishlist!'); }} 
          className="absolute top-3 right-3 bg-white border border-black w-8 h-8 rounded-full text-sm font-black flex items-center justify-center shadow-sm hover:bg-zinc-100"
        >
          ♥
        </button>
      </div>
      
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-sm md:text-base text-black leading-tight mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {item.title}
          </h3>
          <div className="text-sm md:text-base mb-3">{'⭐'.repeat(item.rating || 5)}</div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="font-black text-lg md:text-xl">${item.price}</span>
          {/* Prevent card click event when hitting quick checkout button */}
          <button 
            onClick={(e) => { e.stopPropagation(); alert('Added to bag!'); }}
            className="bg-mint text-black border border-black text-sm font-black px-4 py-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}