import React from 'react';
import { mockCategories } from '../../data/mockData';

export default function BrowseCategories() {
  return (
    /* Clean layout boundaries using maximum scannability parameters */
    <section className="py-6 w-full">
      <div className="mx-auto max-w-full space-y-4">
        {/* Adjusted section header from text-2xl md:text-4xl to production proportions */}
        <h2 className="text-xl font-black text-black uppercase tracking-tight">🗂️ Browse Categories</h2>
        
        {/* Calibrated grid spacing matrix and responsive columns */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center">
          {mockCategories.map((cat) => (
            <div key={cat.id} className="group flex flex-col items-center cursor-pointer">
              {/* Scaled circle sizes down from md:w-36/md:h-36 to a crisp md:w-20/md:h-20 layout */}
              {/* Sized down the icon font metrics from text-5xl to clean text-2xl bounds */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-100 border-4 border-black rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 group-hover:rotate-3 transition-all duration-150">
                {cat.icon}
              </div>
              {/* Sized down categorical typography from md:text-2xl to standard text-xs font tracking */}
              <span className="text-xs md:text-sm font-black text-black mt-2 uppercase tracking-wide leading-tight break-words max-w-[100px]">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}