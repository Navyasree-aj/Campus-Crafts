import React from 'react';
import Navigation from './features/home/Navigation';
import HeroBanner from './features/home/HeroBanner';
import LiveDrops from './features/home/LiveDrops';
import NearbyCreators from './features/home/NearbyCreators';
import BtsFeed from './features/home/BtsFeed';
import StudentSpotlight from './features/home/StudentSpotlight';
import BrowseCategories from './features/home/BrowseCategories';
import TrendingProducts from './features/home/TrendingProducts';
import CreatorUpdates from './features/home/CreatorUpdates';
import LimitedEdition from './features/home/LimitedEdition';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-black antialiased pb-12">
      {/* Structural Sticky Headers */}
      <Navigation />
      
      <main className="space-y-2">
        <HeroBanner />
        <LiveDrops />
        <NearbyCreators />
        <BtsFeed />
        <StudentSpotlight />
        <BrowseCategories />
        <TrendingProducts />
        <CreatorUpdates />
        <LimitedEdition />
      </main>
    </div>
  );
}

export default App;