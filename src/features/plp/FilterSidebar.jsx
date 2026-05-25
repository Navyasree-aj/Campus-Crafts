import React from 'react';

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  maxDistance,
  setMaxDistance,
  sortBy,
  setSortBy,
  categoriesList
}) {
  return (
    <div className="w-full bg-white border-4 border-black p-6 lg:p-8 rounded-[24px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-8">
      
      <div className="border-b-4 border-black pb-3">
        <h3 className="text-2xl font-black uppercase tracking-tight">⚙️ Control Hub</h3>
      </div>

      {/* Distance Slider Control */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm font-black uppercase">
          <span>Max Walk Distance:</span>
          <span className="text-purple-600 font-mono text-base">{maxDistance} Miles</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="10"
          step="0.5"
          value={maxDistance}
          onChange={(e) => setMaxDistance(parseFloat(e.target.value))}
          className="w-full h-3 bg-zinc-200 border-2 border-black rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
      </div>
      {/* Budget Constraint Selection Slider */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm font-black uppercase">
          <span>Budget Range Limit:</span>
          <span className="text-green-600 font-mono text-base">${maxPrice} USD</span>
        </div>
        <input
          type="range"
          min="5"
          max="150"
          step="5"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          className="w-full h-3 bg-zinc-200 border-2 border-black rounded-lg appearance-none cursor-pointer accent-black"
        />
      </div>

      {/* Index Sorting Selection Core */}
      <div className="space-y-2">
        <label className="block text-xs font-black uppercase tracking-wider text-zinc-500">Catalog Sorting Logic</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-white border-2 border-black font-bold p-3 rounded-xl text-sm outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
        >
          <option value="nearest">📍 Nearest Proximity First</option>
          <option value="low-high">💰 Price: Low to High</option>
          <option value="high-low">💎 Price: High to Low</option>
          <option value="best-reviewed">⭐ Best Reviewed</option>
        </select>
      </div>

      {/* Categories removed — control hub simplified */}

    </div>
  );
}