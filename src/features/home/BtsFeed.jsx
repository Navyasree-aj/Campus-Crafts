import React from 'react';
import { mockBts } from '../../data/mockData';
import BtsCard from '../../components/ui/common/BtsCard';

export default function BtsFeed() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {mockBts.map(clip => (
          <BtsCard key={clip.id} clip={clip} />
        ))}
      </div>
    </section>
  );
}