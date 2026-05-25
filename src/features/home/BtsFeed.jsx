import React from 'react';
import { mockBts } from '../../data/mockData';
import BtsCard from '../../components/ui/common/BtsCard';

export default function BtsFeed() {
  return (
    /* Aligned the maximum layout boundaries from max-w-7xl down to max-w-6xl */
    /* Balanced the workspace padding to match the core layout matrix container profiles */
    <section className="py-6 w-full">
      {/* Sized structural grid spacing from gap-6 to a balanced gap-4 profile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockBts.map(clip => (
          <BtsCard key={clip.id} clip={clip} />
        ))}
      </div>
    </section>
  );
}