import React from 'react';
import { mockCategories } from '../../data/mockData';

export default function BrowseCategories() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-black text-black mb-6">🗂️ Browse Categories</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
        {mockCategories.map((cat) => (
          <div key={cat.id} className="group flex flex-col items-center cursor-pointer">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-100 border-2 border-black rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 group-hover:rotate-6 transition-all duration-150">
              {cat.icon}
            </div>
            <span className="text-xs font-black text-black mt-2 tracking-tight">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}