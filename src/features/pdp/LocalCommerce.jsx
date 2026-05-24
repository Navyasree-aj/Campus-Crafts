import React, { useState } from 'react';

export default function LocalCommerce({ info }) {
  const [isPickup, setIsPickup] = useState(true);

  return (
    <div className="bg-emerald-50 border-4 border-black p-8 md:p-10 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col sm:flex-row bg-white border-2 border-black rounded-2xl overflow-hidden p-1 gap-1 mb-6">
        <button
          onClick={() => setIsPickup(true)}
          className={`flex-1 py-3 md:py-4 rounded-xl font-black text-sm md:text-base transition-all ${isPickup ? 'bg-black text-white' : 'bg-transparent text-black'}`}
        >
          🏃 Dorm Pickup (Free)
        </button>
        <button
          onClick={() => setIsPickup(false)}
          className={`flex-1 py-3 md:py-4 rounded-xl font-black text-sm md:text-base transition-all ${!isPickup ? 'bg-black text-white' : 'bg-transparent text-black'}`}
        >
          📦 Flat Shipping
        </button>
      </div>

      {isPickup ? (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span className="text-sm md:text-base font-bold text-zinc-600">Proximity Index:</span>
            <span className="text-sm md:text-base font-black text-black">📍 {info.distance}</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span className="text-sm md:text-base font-bold text-zinc-600">Pickup Common Station:</span>
            <span className="text-sm md:text-base font-black text-black">{info.pickupLocation}</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-dashed border-zinc-400 pt-3 mt-3 gap-2">
            <span className="text-sm md:text-base font-bold text-zinc-600">Turnaround Horizon:</span>
            <span className="bg-emerald-200 border border-black text-sm md:text-base font-black px-3 py-2 rounded-xl">
              ⚡ {info.timeline}
            </span>
          </div>
          <div className="bg-white border border-black p-4 md:p-5 rounded-2xl text-sm md:text-base font-bold text-zinc-600 mt-4">
            🔥 <span className="text-black font-black">Community Signal:</span> 14 students near your quad checked out items from this creator this week!
          </div>
        </div>
      ) : (
        <div className="text-center py-6 text-base md:text-lg font-bold text-zinc-600">
          Ships via Campus Post Mailers standard parcel routing. Arrives at your dorm package lockers in 2-3 business days.
        </div>
      )}
    </div>
  );
}