import React from 'react';
import { mockTrending } from '../../data/mockData';
import ProductCard from '../../components/ui/common/ProductCard';

export default function TrendingProducts({ onProductSelect }) {
  return (
    /* Clean layout container matching standard spacing boundaries */
    <section className="py-6 w-full">
      <div className="mx-auto max-w-full space-y-4">
        
        {/* Adjusted section header from text-2xl md:text-4xl to production proportions */}
        <h2 className="text-xl font-black text-black uppercase tracking-tight">🔥 Trending Products</h2>
        
        {/* Aligned spacing grid down from md:gap-6 to a tight, high-density gap-4 layout */}
        {/* Optimized grid columns for a scannable structure across viewports */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {mockTrending.map(item => (
            <ProductCard 
              key={item.id} 
              item={item} 
              /* Trigger the app selection event when this card frame wrapper is tapped */
              onClick={() => onProductSelect && onProductSelect(item)} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}