import React, { useState } from 'react';

export default function LocalCommerce({ info }) {
  const [isPickup, setIsPickup] = useState(true);

  return (
    /* Calibrated outer block padding down from p-8/md:p-10 to high-density p-5 proportions */
    <div className="bg-emerald-50 border-4 border-black p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      
      {/* Fulfillment Toggle Matrix - Sized down inner paddings and borders */}
      <div className="flex flex-col sm:flex-row bg-white border-2 border-black rounded-xl overflow-hidden p-1 gap-1 mb-4">
        <button
          type="button"
          onClick={() => setIsPickup(true)}
          className={`flex-1 py-2 rounded-lg font-black text-xs uppercase tracking-wide transition-all cursor-pointer ${isPickup ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-zinc-100'}`}
        >
          跑 Dorm Pickup (Free)
        </button>
        <button
          type="button"
          onClick={() => setIsPickup(false)}
          className={`flex-1 py-2 rounded-lg font-black text-xs uppercase tracking-wide transition-all cursor-pointer ${!isPickup ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-zinc-100'}`}
        >
          箱 Flat Shipping
        </button>
      </div>

      {isPickup ? (
        <div className="space-y-3">
          {/* Stabilized text sizes down from text-sm/md:text-base to crisp text-xs/sm metrics */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
            <span className="text-xs font-bold text-zinc-500">Proximity Index:</span>
            <span className="text-xs sm:text-sm font-black text-black">📍 {info?.distance}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
            <span className="text-xs font-bold text-zinc-500">Pickup Common Station:</span>
            <span className="text-xs sm:text-sm font-black text-black">{info?.pickupLocation}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-dashed border-zinc-300 pt-2.5 mt-2 gap-1">
            <span className="text-xs font-bold text-zinc-500">Turnaround Horizon:</span>
            {/* Trimmed padding down to cleaner inline layout values */}
            <span className="bg-emerald-200 border border-black text-xs font-black px-2.5 py-1 rounded-lg">
              ⚡ {info?.timeline}
            </span>
          </div>
          
          {/* Adjusted alert notification padding down from p-4/p-5 to dense p-3 parameters */}
          <div className="bg-white border border-black p-3 rounded-xl text-xs font-bold text-zinc-600 mt-2">
            🔥 <span className="text-black font-black">Community Signal:</span> 14 students near your quad checked out items from this creator this week!
          </div>
        </div>
      ) : (
        /* Normalized description from text-base/md:text-lg to clean text-xs */
        <div className="text-center py-4 text-xs font-bold text-zinc-600 leading-relaxed max-w-sm mx-auto">
          Ships via Campus Post Mailers standard parcel routing. Arrives at your dorm package lockers in 2-3 business days.
        </div>
      )}
    </div>
  );
}