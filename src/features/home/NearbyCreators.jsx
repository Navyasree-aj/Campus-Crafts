import React from 'react';
import { mockCreators } from '../../data/mockData';
import CreatorCard from '../../components/ui/common/CreatorCard';

export default function NearbyCreators() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-black text-black mb-6">📍 Nearby Creators</h2>
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x lg:grid lg:grid-cols-4 lg:overflow-x-visible">
        {mockCreators.map(creator => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </section>
  );
}