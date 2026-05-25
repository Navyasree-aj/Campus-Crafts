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
    /* Reduced padding and structural layout spacing down to high-density p-4 and space-y-4 metrics */
    <div className="w-full bg-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] space-y-4 text-black">
      
      {/* Sidebar Control Header */}
      <div className="border-b-2 border-black pb-1.5">
        <h3 className="text-sm font-black uppercase tracking-wider">⚙️ Control Hub</h3>
      </div>

      {/* Distance Slider Control */}
      <div className="space-y-1">
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight">
          <span>Max Walk Distance:</span>
          <span className="text-purple-600 font-mono text-xs">{maxDistance} Miles</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="10"
          step="0.5"
          value={maxDistance}
          onChange={(e) => setMaxDistance(parseFloat(e.target.value))}
          className="w-full h-2 bg-zinc-100 border-2 border-black rounded-md appearance-none cursor-pointer accent-purple-600"
        />
      </div>

      {/* Budget Constraint Selection Slider */}
      <div className="space-y-1">
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tight">
          <span>Budget Range Limit:</span>
          <span className="text-green-600 font-mono text-xs">${maxPrice} USD</span>
        </div>
        <input
          type="range"
          min="5"
          max="150"
          step="5"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          className="w-full h-2 bg-zinc-100 border-2 border-black rounded-md appearance-none cursor-pointer accent-black"
        />
      </div>

      {/* Index Sorting Selection Core */}
      <div className="space-y-1">
        <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-500">Catalog Sorting Logic</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-white border-2 border-black font-bold p-2 rounded-lg text-xs outline-none cursor-pointer shadow-[1px_1px_0_0_rgba(0,0,0,1)] focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all"
        >
          <option value="nearest">📍 Nearest Proximity First</option>
          <option value="low-high">💰 Price: Low to High</option>
          <option value="high-low">💎 Price: High to Low</option>
          <option value="best-reviewed">⭐ Best Reviewed</option>
        </select>
      </div>

    </div>
  );
}