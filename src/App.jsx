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

// Identity & Authentication Modules
import BuyerLoginPage from './features/auth/BuyerLoginPage';
import NewUserSignUpPage from './features/auth/NewUserSignUpPage';

function App() {
  // Global Navigation Tab Tracker Routing State
  const [currentTab, setCurrentTab] = useState('home'); // Options: 'home', 'browse', 'wishlist', 'profile', 'cart'
  
  // Local Deep Route Page Overlay View States
  const [currentView, setCurrentView] = useState('home'); // Options: 'home', 'pdp', 'login', 'signup'
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
    setCurrentView('home'); // Closes any open PDP, login, or signup views if tabs are changed
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
    /* Optimized the persistent global layout offsets (changed sidebar navigation pad lg:pl-36 to a clean lg:pl-24) */
    <div className="min-h-screen bg-[#FFFDF9] text-black antialiased pb-24 lg:pb-0 lg:pl-24">
      
      {/* CONDITIONAL BAR RENDERING:
        The PLP page brings its own integrated search-driven top navigation system.
        We show your standard global top Navigation on all other views, passing authentication hooks down.
      */}
      {currentTab !== 'browse' && currentView !== 'login' && currentView !== 'signup' && (
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

      {/* LOGIN VIEW: Accepting structural layout switch hooks */}
      {currentView === 'login' && (
        <BuyerLoginPage 
          onLoginSuccess={handleAuthSuccess} 
          onSwitchToSignUp={() => setCurrentView('signup')} 
        />
      )}

      {/* SIGNUP VIEW: Adding the screen layout link state mapping */}
      {currentView === 'signup' && (
        <NewUserSignUpPage 
          onSignUpSuccess={handleAuthSuccess} 
          onSwitchToLogin={() => setCurrentView('login')} 
        />
      )}

      {currentView === 'home' && (
        /* Render base panel routing state layout based on active bottom navigation tab button */
        <>
          {/* TAB 1: BASE DEPLOYMENT HUB MAIN LANDING VIEW */}
          {/* Compressed page gaps down from space-y-24 to space-y-6, downscaled main wrapper limits to max-w-6xl */}
          {currentTab === 'home' && (
            <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-6">
              
              {/* Desktop-scale Notice Board Card */}
              {/* Sized container metrics down from p-12 and text-4xl/5xl headers down to crisp text-sm formats */}
              <div className="w-full bg-purple-50 border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0_rgba(0,0,0,1)]">
                <h2 className="text-sm font-black text-black mb-3 uppercase tracking-wider">
                  👍 Followed Creator Updates
                </h2>
                <CreatorUpdates />
              </div>

              {/* Desktop-scale Behind the Scenes Card */}
              <div className="w-full bg-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-sm font-black text-black mb-3 uppercase tracking-wider">
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
          {/* Normalized max-width boundary layout constraints from max-w-[1600px] down to max-w-6xl parameters */}
          {currentTab === 'cart' && (
            <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-6">
              <CheckoutWizard user={currentUser} onLogOut={handleLogoutRoutine} />
            </main>
          )}

          {/* TABS 4 & 5: AUXILIARY SYSTEM PLATFORM PLACEHOLDERS */}
          {(currentTab === 'wishlist' || currentTab === 'profile') && (
            <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center">
              <div className="bg-white border-4 border-black p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-md w-full">
                <span className="text-4xl block mb-2">✨</span>
                <h1 className="text-base font-black uppercase tracking-wider">{currentTab} Vault</h1>
                <p className="text-zinc-600 font-bold mt-1 text-xs leading-normal">
                  This interface canvas stores upcoming component structures for the <span className="text-purple-600 font-black uppercase">"{currentTab}"</span> page state.
                </p>

                {currentTab === 'profile' && currentUser?.isAuthenticated && (
                  <div className="mt-3 p-3 bg-zinc-50 border-2 border-dashed border-black rounded-lg font-mono text-[11px] font-bold text-left space-y-1">
                    <p>👤 USERNAME: {currentUser.username}</p>
                    <p>📱 LINE / EMAIL: {currentUser.phone}</p>
                    <p>Hub Node: {currentUser.campusHub}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
                  <button 
                    type="button"
                    onClick={() => handleTabSwitch('home')}
                    className="bg-black hover:bg-zinc-800 text-white font-black text-xs px-4 py-2 rounded-lg border-2 border-black transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 cursor-pointer uppercase tracking-tight"
                  >
                    Return to Main Feed
                  </button>
                  
                  {currentTab === 'profile' && currentUser?.isAuthenticated && (
                    <button 
                      type="button"
                      onClick={handleLogoutRoutine}
                      className="bg-white hover:bg-red-50 text-red-600 border-2 border-red-600 font-black text-xs px-4 py-2 rounded-lg transition-all uppercase tracking-tight cursor-pointer"
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