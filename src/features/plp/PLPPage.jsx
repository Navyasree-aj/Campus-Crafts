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
    <div className="w-full flex flex-col">
      {/* Main Sticky Header */}
      <PLPHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Horizontal Categories Strip */}
      <section className="w-full bg-[#FFFDF9] border-b-4 border-black py-5 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center overflow-x-auto gap-4 no-scrollbar py-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-black font-black text-sm whitespace-nowrap tracking-tight transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
                selectedCategory === null ? 'bg-purple-600 text-white' : 'bg-white text-black hover:bg-zinc-50'
              }`}
            >
              📦 All Drops
            </button>
            {mockCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-black font-black text-sm whitespace-nowrap tracking-tight transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
                  selectedCategory === cat.name ? 'bg-purple-600 text-white' : 'bg-white text-black hover:bg-zinc-50'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Desktop Split Workspace Grid */}
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Sidebar Filtering Block Panel (Spans 3 Columns on Desktop) */}
        <aside className="w-full lg:col-span-3 lg:sticky lg:top-36 z-20">
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
        <main className="w-full lg:col-span-9 space-y-8">
          
          {/* Query Feed Header Metric Strip */}
          <div className="w-full bg-yellow-100 border-4 border-black p-5 rounded-2xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl lg:text-2xl font-black uppercase tracking-tight">
              ⚡Catalog: <span className="text-purple-600 font-mono">{filteredProducts.length}</span> items found
            </h2>
            {selectedCategory && (
              <span className="bg-black text-white text-xs font-black px-4 py-1.5 rounded-xl uppercase tracking-wider">
                Active Category: {selectedCategory}
              </span>
            )}
          </div>

          {/* Conditional Rendering Fallback Interface */}
          {filteredProducts.length === 0 ? (
            <div className="w-full bg-white border-4 border-black p-16 rounded-[32px] shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-center space-y-4">
              <span className="text-6xl block">🔍</span>
              <h3 className="text-3xl font-black uppercase tracking-tight">No Creative Drops Match</h3>
              <p className="text-zinc-600 font-bold text-lg max-w-md mx-auto">
                No matching items were found within your current radius constraints. Try resetting your active aesthetic filter tags.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setSelectedAesthetic(null);
                  setMaxPrice(150);
                  setMaxDistance(5);
                }}
                className="bg-black text-white font-black text-sm px-6 py-3 border-2 border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            /* Responsive Product Storefront Grid Layout */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
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