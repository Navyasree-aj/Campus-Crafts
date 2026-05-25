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

// Identity & Authentication Module
import BuyerLoginPage from './features/auth/BuyerLoginPage';

function App() {
  // Global Navigation Tab Tracker Routing State
  const [currentTab, setCurrentTab] = useState('home'); // Options: 'home', 'browse', 'wishlist', 'profile', 'cart'
  
  // Local Deep Route Page Overlay View States
  const [currentView, setCurrentView] = useState('home'); // Options: 'home', 'pdp', 'login'
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Global Session Identity State
  const [currentUser, setCurrentUser] = useState(null);

  // Centralized click registration event for product items
  const handleProductClick = (productData) => {
    setSelectedProduct(productData);
    setCurrentView('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Safe wrapper for changing main tabs and resetting deep-nested overlays
  const handleTabSwitch = (tabId) => {
    setCurrentTab(tabId);
    setCurrentView('home'); // Closes any open PDP or login views if tabs are changed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Callback handler passing data down from a successful authentication flow
  const handleAuthSuccess = (userData) => {
    setCurrentUser(userData);
    setCurrentView('home'); 
    setCurrentTab('cart'); // Snaps the buyer straight to checkout once identity is verified
  };

  // Place this right alongside your other handle handlers (like handleAuthSuccess)
  const handleLogoutRoutine = () => {
    setCurrentUser(null);
    setCurrentTab('home');
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-black antialiased pb-40 lg:pb-0 lg:pl-36">
      
      {/* CONDITIONAL BAR RENDERING:
        The PLP page brings its own integrated search-driven top navigation system.
        We show your standard global top Navigation on all other views, passing authentication hooks down.
      */}
      {currentTab !== 'browse' && currentView !== 'login' && (
        <Navigation 
          user={currentUser} 
          onTriggerLogin={() => setCurrentView('login')} 
          onLogOut={handleLogoutRoutine}
        />
      )}
      
      {/* Dynamic View Selector Mesh Frame */}
      {currentView === 'pdp' && (
        <main>
          <ProductDetailsPage 
            product={selectedProduct} 
            onBackToHome={() => setCurrentView('home')} 
          />
        </main>
      )}

      {currentView === 'login' && (
        <BuyerLoginPage onLoginSuccess={handleAuthSuccess} />
      )}

      {currentView === 'home' && (
        /* Render base panel routing state layout based on active bottom navigation tab button */
        <>
          {/* TAB 1: BASE DEPLOYMENT HUB MAIN LANDING VIEW */}
          {currentTab === 'home' && (
            <main className="w-full max-w-screen-3xl mx-auto px-8 py-12 space-y-24">
              
              {/* Desktop-scale Notice Board Card */}
              <div className="w-full bg-purple-50 border-4 border-black p-12 rounded-[32px] shadow-[8px_8px_0px_0_rgba(0,0,0,1)]">
                <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 tracking-tight">
                👍 Followed Creator Updates
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

          {/* TAB 3: SHOPPING CART / CHECKOUT FLOW (Guarded by session verification) */}
          {currentTab === 'cart' && (
            <>
              {currentUser?.isAuthenticated ? (
                <CheckoutWizard user={currentUser} onLogOut={handleLogoutRoutine} />
              ) : (
                <main className="w-full max-w-[1240px] mx-auto px-8 py-24 flex flex-col items-center justify-center text-center">
                  <div className="bg-white border-4 border-black p-12 rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xl space-y-4">
                    <span className="text-6xl block">🔒</span>
                    <h1 className="text-3xl font-black uppercase tracking-tight">Authentication Required</h1>
                    <p className="text-zinc-600 font-bold text-base leading-relaxed">
                      To coordinate secure campus meetups and manage physical creator hand-offs, you must verify your profile with a local phone line first.
                    </p>
                    <button 
                      onClick={() => setCurrentView('login')}
                      className="mt-4 w-full bg-purple-600 text-white font-black text-base py-4 rounded-xl border-2 border-black hover:bg-black transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 uppercase tracking-wide cursor-pointer"
                    >
                      Verify Identity via SMS ➔
                    </button>
                  </div>
                </main>
              )}
            </>
          )}

          {/* TABS 4 & 5: AUXILIARY SYSTEM PLATFORM PLACEHOLDERS */}
          {(currentTab === 'wishlist' || currentTab === 'profile') && (
            <main className="w-full max-w-[1600px] mx-auto px-8 py-24 flex flex-col items-center justify-center text-center">
              <div className="bg-white border-4 border-black p-12 rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xl">
                <span className="text-6xl block mb-4">✨</span>
                <h1 className="text-3xl font-black uppercase tracking-tight">{currentTab} Vault</h1>
                <p className="text-zinc-600 font-bold mt-2 text-lg">
                  This interface canvas stores upcoming component structures for the <span className="text-purple-600 font-black uppercase">"{currentTab}"</span> page state.
                </p>

                {currentTab === 'profile' && currentUser?.isAuthenticated && (
                  <div className="mt-4 p-4 bg-zinc-50 border-2 border-dashed border-black rounded-xl font-mono text-xs font-bold text-left space-y-1">
                    <p>📱 LINE: {currentUser.phone}</p>
                    <p>Hub Node: {currentUser.campusHub}</p>
                  </div>
                )}

                <div className="flex gap-4 justify-center mt-6">
                  <button 
                    onClick={() => handleTabSwitch('home')}
                    className="bg-black text-white font-black text-base px-6 py-3.5 rounded-xl border-2 border-black hover:bg-zinc-800 transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0.5"
                  >
                    Return to Main Feed
                  </button>
                  
                  {currentTab === 'profile' && currentUser?.isAuthenticated && (
                    <button 
                      onClick={handleLogoutRoutine}
                      className="bg-white text-red-600 border-2 border-red-600 font-black text-base px-6 py-3.5 rounded-xl hover:bg-red-50 transition-all uppercase"
                    >
                      Disconnect Profile
                    </button>
                  )}
                </div>
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