import React from 'react';

export default function DropCard({ drop }) {
  // Prevent division by zero errors gracefully
  const total = drop?.totalStock || 1;
  const currentStock = drop?.stock || 0;
  const percentLeft = Math.min((currentStock / total) * 100, 100);

  return (
    /* Tightened minimum width metrics and adjusted the card's outer shadow depth */
    <div className="min-w-[200px] flex-1 bg-white border-4 border-black rounded-xl overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] snap-start text-black">
      
      {/* Sized down image housing wrapper box from h-48 to a crisp h-32 layout bounds */}
      <div className="relative h-32 bg-zinc-100 border-b-2 border-black">
        {drop?.img && (
          <img src={drop.img} alt={drop.title} className="w-full h-full object-cover" />
        )}
        <span className="absolute top-2 left-2 bg-red-400 text-white font-black text-[8px] px-1.5 py-0.5 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] tracking-wider">
          LIVE NOW
        </span>
      </div>
      
      {/* Normalized structural layout cell padding from p-4 down to p-3 */}
      <div className="p-3 space-y-1.5">
        
        <div className="bg-amber-100 border-2 border-black inline-block text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-tight">
          ⏱️ {drop?.time} Left
        </div>
        
        <div>
          <h3 className="font-black text-xs text-black truncate uppercase tracking-tight">{drop?.title}</h3>
          <span className="text-sm font-black text-black font-mono">${drop?.price}</span>
        </div>
        
        {/* Flash Sale Progress Bar */}
        {/* Compressed height configuration down from h-3 to h-2 tracks */}
        <div className="space-y-1">
          <div className="w-full bg-zinc-100 border-2 border-black h-2 rounded-full overflow-hidden">
            <div className="bg-red-400 h-full transition-all" style={{ width: `${percentLeft}%` }}></div>
          </div>
          <span className="text-[10px] font-bold text-zinc-500 block leading-none">
            Only {currentStock} items remaining!
          </span>
        </div>
        
        {/* Action Button CTA Core */}
        {/* Scaled padding from py-2.5 to py-1.5 to maintain tight component uniformity */}
        <button 
          type="button"
          className="w-full bg-purple-200 hover:bg-purple-300 border-2 border-black font-black py-1.5 text-xs rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer uppercase tracking-wider pt-2"
        >
          Remind Me
        </button>
        
      </div>
    </div>
  );
}