import React, { useState } from 'react';
// Shared Navigation Components
import Navigation from './features/home/Navigation';
import BottomNavigation from './features/home/BottomNavigation';

// Homepage Feature Assemblies (View 1)
import CreatorUpdates from './features/home/CreatorUpdates';
import BtsFeed from './features/home/BtsFeed';
import BrowseCategories from './features/home/BrowseCategories';
import TrendingProducts from './features/home/TrendingProducts';
import NearbyCreators from './features/home/NearbyCreators';
import CheckoutWizard from './features/checkout/CheckoutWizard';

// Product Listing Page Module (View 2)
import PLPPage from './features/plp/PLPPage';

// Product Details Page Module (Contextual Overlays)
import ProductDetailsPage from './features/pdp/ProductDetailsPage';

function App() {
  // Global Navigation Tab Tracker Routing State
  const [currentTab, setCurrentTab] = useState('home'); // Options: 'home', 'browse', 'wishlist', 'profile'
  
  // Local Deep Route Page Overlay View States
  const [currentView, setCurrentView] = useState('home'); // Options: 'home', 'pdp'
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Centralized click registration event for product items
  const handleProductClick = (productData) => {
    setSelectedProduct(productData);
    setCurrentView('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Safe wrapper for changing main tabs and resetting deep-nested overlays
  const handleTabSwitch = (tabId) => {
    setCurrentTab(tabId);
    setCurrentView('home'); // Closes any open PDP view if tabs are changed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-black antialiased pb-40 lg:pb-0 lg:pl-36">
      
      {/* CONDITIONAL BAR RENDERING:
        The PLP page brings its own integrated search-driven top navigation system.
        We show your standard global top Navigation on all other views.
      */}
      {currentTab !== 'browse' && <Navigation />}
      
      {/* Dynamic View Selector Mesh Frame */}
      {currentView === 'pdp' ? (
        <main>
          <ProductDetailsPage 
            product={selectedProduct} 
            onBackToHome={() => setCurrentView('home')} 
          />
        </main>
      ) : (
        /* Render base panel routing state layout based on active bottom navigation tab button */
        <>
          {/* TAB 1: BASE DEPLOYMENT HUB MAIN LANDING VIEW */}
          {currentTab === 'home' && (
            <main className="w-full max-w-[1240px] mx-auto px-8 py-12 space-y-24">
              
              {/* Desktop-scale Notice Board Card */}
              <div className="w-full bg-purple-50 border-4 border-black p-12 rounded-[32px] shadow-[8px_8px_0px_0_rgba(0,0,0,1)]">
                <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 tracking-tight">
                  Followed Creator Updates
                </h2>
                <CreatorUpdates />
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
              
              <div className="w-full">
                <NearbyCreators />
              </div>

            </main>
          )}

          {/* TAB 2: ADVANCED PRODUCT LISTING CATALOG VIEW PANEL */}
          {currentTab === 'browse' && (
            <PLPPage />
          )}

          {/* TAB 3: SHOPPING CART / CHECKOUT FLOW */}
          {currentTab === 'cart' && (
            <CheckoutWizard />
          )}

          {/* TABS 4 & 5: AUXILIARY SYSTEM PLATFORM PLACEHOLDERS */}
          {(currentTab === 'wishlist' || currentTab === 'profile') && (
            <main className="w-full max-w-[1240px] mx-auto px-8 py-24 flex flex-col items-center justify-center text-center">
              <div className="bg-white border-4 border-black p-12 rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xl">
                <span className="text-6xl block mb-4">✨</span>
                <h1 className="text-3xl font-black uppercase tracking-tight">{currentTab} Vault</h1>
                <p className="text-zinc-600 font-bold mt-2 text-lg">
                  This interface canvas stores upcoming component structures for the <span className="text-purple-600 font-black uppercase">"{currentTab}"</span> page state.
                </p>
                <button 
                  onClick={() => handleTabSwitch('home')}
                  className="mt-6 bg-black text-white font-black text-base px-6 py-3.5 rounded-xl border-2 border-black hover:bg-zinc-800 transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0.5"
                >
                  Return to Main Feed
                </button>
              </div>
            </main>
          )}
        </>
      )}

      {/* Global Unified Fixed Floating Action Control Dashboard Grid Navigation Menu Panel */}
      <BottomNavigation activeTab={currentTab} onTabChange={handleTabSwitch} />
    </div>
  );
}

export default App;