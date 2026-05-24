import React from 'react';
import { mockDrops } from '../../data/mockData';
import DropCard from '../../components/ui/common/DropCard';

export default function LiveDrops() {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-black text-black mb-6">⚡ Live Creator Drops</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x md:grid md:grid-cols-3 md:overflow-x-visible">
        {mockDrops.map(drop => (
          <DropCard key={drop.id} drop={drop} />
        ))}
      </div>
    </section>
  );
}