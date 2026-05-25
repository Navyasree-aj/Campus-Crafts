import React, { useState, useMemo } from 'react';
import PLPHeader from './PLPHeader';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';
import { mockProducts, mockCategories, mockAesthetics } from '../../data/plpMockData';

export default function PLPPage() {
  // Query, Category, and Advanced Filtering Coordinates
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAesthetic, setSelectedAesthetic] = useState(null);
  const [maxPrice, setMaxPrice] = useState(150);
  const [maxDistance, setMaxDistance] = useState(5);
  const [pincode, setPincode] = useState('94305');
  const [sortBy, setSortBy] = useState('nearest'); // Values: 'nearest', 'low-high', 'high-low'

  // Optimized Functional Filtering/Sorting Pipeline
  const filteredProducts = useMemo(() => {
    return mockProducts
      .filter((product) => {
        const matchesQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             product.creator.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        const matchesAesthetic = selectedAesthetic ? product.aesthetic === selectedAesthetic : true;
        const matchesPrice = product.price <= maxPrice;
        
        const numericalDistance = parseFloat(product.distance.split(' ')[0]);
        const matchesDistance = numericalDistance <= maxDistance;

        return matchesQuery && matchesCategory && matchesAesthetic && matchesPrice && matchesDistance;
      })
      .sort((a, b) => {
        if (sortBy === 'best-reviewed') {
          if (b.rating !== a.rating) return b.rating - a.rating;
          return b.reviewCount - a.reviewCount;
        }
        if (sortBy === 'low-high') return a.price - b.price;
        if (sortBy === 'high-low') return b.price - a.price;
        return parseFloat(a.distance.split(' ')[0]) - parseFloat(b.distance.split(' ')[0]);
      });
  }, [searchQuery, selectedCategory, selectedAesthetic, maxPrice, maxDistance, sortBy]);

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#FFFDF9] text-black">
      {/* Main Sticky Header */}
      <PLPHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Horizontal Categories Strip */}
      {/* Tightened vertical padding down from py-5 to py-2.5 and normalized layout wrapper */}
      <section className="w-full bg-[#FFFDF9] border-b-4 border-black py-2.5 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Compressed layout components down from px-6 py-3 to px-3 py-1.5 */}
          <div className="flex items-center overflow-x-auto gap-2 no-scrollbar py-1">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 border-black font-black text-xs whitespace-nowrap tracking-tight transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer ${
                selectedCategory === null ? 'bg-purple-600 text-white' : 'bg-white text-black hover:bg-zinc-50'
              }`}
            >
              📦 All Drops
            </button>
            {mockCategories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 border-black font-black text-xs whitespace-nowrap tracking-tight transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer ${
                  selectedCategory === cat.name ? 'bg-purple-600 text-white' : 'bg-white text-black hover:bg-zinc-50'
                }`}
              >
                <span className="text-xs">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Desktop Split Workspace Grid */}
      {/* Normalized structure width bounds from max-w-[1600px] to max-w-6xl, compressed gaps to gap-5 */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start flex-1">
        
        {/* Sidebar Filtering Block Panel (Spans 3 Columns on Desktop) */}
        <aside className="w-full lg:col-span-3 lg:sticky lg:top-20 z-20">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            maxDistance={maxDistance}
            setMaxDistance={setMaxDistance}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categoriesList={mockCategories}
          />
        </aside>

        {/* Primary Listing Presentation Feed (Spans 9 Columns on Desktop) */}
        {/* Swapped deep grid spaces from space-y-8 down to space-y-4 */}
        <main className="w-full lg:col-span-9 space-y-4">
          
          {/* Query Feed Header Metric Strip */}
          {/* Trimmed down structural padding to p-3 and scaled main text tracker down to text-xs */}
          <div className="w-full bg-yellow-100 border-4 border-black p-3 rounded-xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xs font-black uppercase tracking-wider">
              ⚡ Catalog: <span className="text-purple-600 font-mono text-sm">{filteredProducts.length}</span> items found
            </h2>
            {selectedCategory && (
              <span className="bg-black text-white text-[9px] font-black px-2 py-1 rounded-lg uppercase tracking-wider">
                Active: {selectedCategory}
              </span>
            )}
          </div>

          {/* Conditional Rendering Fallback Interface */}
          {filteredProducts.length === 0 ? (
            <div className="w-full bg-white border-4 border-black p-8 rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-center space-y-3">
              <span className="text-4xl block">🔍</span>
              <h3 className="text-sm font-black uppercase tracking-wider">No Creative Drops Match</h3>
              <p className="text-zinc-500 font-bold text-xs max-w-xs mx-auto leading-normal">
                No matching items were found within your current radius constraints. Try resetting your active filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setSelectedAesthetic(null);
                  setMaxPrice(150);
                  setMaxDistance(5);
                }}
                className="bg-black hover:bg-zinc-800 text-white font-black text-xs px-4 py-2 border-2 border-black rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            /* Responsive Product Storefront Grid Layout */
            /* Compressed layout grid row spaces down from gap-8 to gap-4 */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}