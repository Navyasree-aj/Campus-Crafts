import React from 'react';
import { mockTrending } from '../../data/mockData';
import ProductCard from '../../components/ui/common/ProductCard';

export default function TrendingProducts({ onProductSelect }) {
  return (
    <section className="px-4 py-8 w-full">
      <div className="mx-auto max-w-full">
        <h2 className="text-2xl md:text-4xl font-black text-black mb-6">🔥 Trending Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {mockTrending.map(item => (
            <ProductCard 
              key={item.id} 
              item={item} 
              // Trigger the app selection event when this card frame wrapper is tapped
              onClick={() => onProductSelect && onProductSelect(item)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}