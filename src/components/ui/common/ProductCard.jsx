import React from 'react';

export default function ProductCard({ item }) {
  return (
    <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
      <div className="relative h-36 md:h-48 bg-zinc-50">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        <button className="absolute top-2 right-2 bg-white border border-black w-7 h-7 rounded-full text-xs font-black flex items-center justify-center shadow-sm">
          ♥
        </button>
      </div>
      
      <div className="p-3 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-xs md:text-sm text-black leading-tight mb-1 line-clamp-2">{item.title}</h3>
          <div className="text-[10px] mb-2">{'⭐'.repeat(item.rating)}</div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-black text-sm md:text-md">${item.price}</span>
          <button className="bg-mint text-black border border-black text-[10px] md:text-xs font-black px-2.5 py-1 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}