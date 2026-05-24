import React, { useState } from 'react';
import Navigation from './features/home/Navigation';
import HeroBanner from './features/home/HeroBanner';
import NearbyCreators from './features/home/NearbyCreators';
import BtsFeed from './features/home/BtsFeed';
import BrowseCategories from './features/home/BrowseCategories';
import TrendingProducts from './features/home/TrendingProducts';
import CreatorUpdates from './features/home/CreatorUpdates';
import BottomNavigation from './features/home/BottomNavigation';
import ProductDetailsPage from './features/pdp/ProductDetailsPage';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (productData) => {
    setSelectedProduct(productData);
    setCurrentView('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-black antialiased pb-40">
      <Navigation />
      
      {currentView === 'home' ? (
        /* Large Desktop Canvas */
        <main className="w-full max-w-[1600px] mx-auto px-8 py-12 space-y-24">
          
          <div className="w-full">
            <HeroBanner />
          </div>
          
          <div className="w-full">
            <NearbyCreators />
          </div>

          {/* Desktop-scale Behind the Scenes Card */}
          <div className="w-full bg-white border-4 border-black p-12 rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-10 tracking-tight">
              📺 Live Studio Process
            </h2>
            <BtsFeed />
          </div>

          <div className="w-full">
            <BrowseCategories />
          </div>
          
          <div className="w-full">
            <TrendingProducts onProductSelect={handleProductClick} />
          </div>
          
          {/* Desktop-scale Notice Board Card */}
          <div className="w-full bg-purple-50 border-4 border-black p-12 rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 tracking-tight">
              💬 Campus Notice Board
            </h2>
            <CreatorUpdates />
          </div>

        </main>
      ) : (
        <main>
          <ProductDetailsPage 
            product={selectedProduct} 
            onBackToHome={() => setCurrentView('home')} 
          />
        </main>
      )}

      <BottomNavigation />
    </div>
  );
}

export default App;