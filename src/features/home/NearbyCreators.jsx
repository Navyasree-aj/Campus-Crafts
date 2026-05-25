import React from 'react';
import { mockCreators } from '../../data/mockData';
import CreatorCard from '../../components/ui/common/CreatorCard';

export default function NearbyCreators() {
  return (
    /* Clean vertical spacing layout matching the calibrated application core */
    <section className="py-6 w-full">
      <div className="mx-auto max-w-full space-y-4">
        
        {/* Adjusted section header from text-4xl down to standard text-xl proportions */}
        <h2 className="text-xl font-black text-black uppercase tracking-tight">📍 Nearby Creators</h2>
        
        {/* Re-calibrated spacing system from gap-5 to high-density gap-4 layout */}
        {/* Preserved the native snap-scroll behavior on mobile while aligning desktop columns */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-thin lg:grid lg:grid-cols-4 lg:overflow-x-visible lg:pb-0">
          {mockCreators.map(creator => (
            <div key={creator.id} className="snap-start shrink-0 w-[260px] sm:w-[300px] lg:w-auto">
              <CreatorCard creator={creator} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}