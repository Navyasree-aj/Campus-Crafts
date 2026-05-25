import React, { useState } from 'react';
// Navigation Layer Components
import Navigation from './features/home/Navigation';
import SidebarNavigation from './features/home/SidebarNavigation';

// Feature Components Assemblies
import CreatorUpdates from './features/home/CreatorUpdates';
import BtsFeed from './features/home/BtsFeed';
import BrowseCategories from './features/home/BrowseCategories';
import TrendingProducts from './features/home/TrendingProducts';
import NearbyCreators from './features/home/NearbyCreators';
import CheckoutWizard from './features/checkout/CheckoutWizard';
import PLPPage from './features/plp/PLPPage';
import ProductDetailsPage from './features/pdp/ProductDetailsPage';
import BuyerLoginPage from './features/auth/BuyerLoginPage';
import NewUserSignUpPage from './features/auth/NewUserSignUpPage';

// Injected Profile Setup Module Page Component Target
import ProfileSetupPage from './features/profile/ProfileSetupPage';

function App() {
  const [currentTab, setCurrentTab] = useState('home'); 
  const [currentView, setCurrentView] = useState('home'); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleProductClick = (productData) => {
    setSelectedProduct(productData);
    setCurrentView('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabSwitch = (tabId) => {
    setCurrentTab(tabId);
    setCurrentView('home'); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Profile Onboarding Gate Router Channel Mapping
  const handleAuthSuccess = (userData) => {
    // Save authentication details state registry keys
    const profileMockUser = {
      ...userData,
      isAuthenticated: true // Force validation flag verification
    };
    setCurrentUser(profileMockUser);
    setCurrentView('home'); 
    setCurrentTab('profile'); // Force-redirect user directly onto the layout profile configuration form
  };

  const handleProfileSaveComplete = (finalizedUserData) => {
    setCurrentUser(finalizedUserData);
    setCurrentTab('home'); // Snap user straight to primary catalog feed once profile is set up
  };

  const handleLogoutRoutine = () => {
    setCurrentUser(null);
    setCurrentTab('home');
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-black antialiased pb-24 lg:pb-0 lg:pl-24">
      
      {currentTab !== 'browse' && currentView !== 'login' && currentView !== 'signup' && (
        <Navigation 
          user={currentUser} 
          onTriggerLogin={() => setCurrentView('login')} 
          onLogOut={handleLogoutRoutine}
        />
      )}
      
      {/* Structural Master View Render Frame Panels */}
      {currentView === 'pdp' && (
        <main>
          <ProductDetailsPage product={selectedProduct} onBackToHome={() => setCurrentView('home')} />
        </main>
      )}

      {currentView === 'login' && (
        <BuyerLoginPage onLoginSuccess={handleAuthSuccess} onSwitchToSignUp={() => setCurrentView('signup')} />
      )}

      {currentView === 'signup' && (
        <NewUserSignUpPage onSignUpSuccess={handleAuthSuccess} onSwitchToLogin={() => setCurrentView('login')} />
      )}

      {currentView === 'home' && (
        <>
          {/* TAB 1: BASE MAIN HUB LANDING FEED */}
          {currentTab === 'home' && (
            <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-6">
              <div className="w-full bg-purple-50 border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0_rgba(0,0,0,1)]">
                <h2 className="text-sm font-black text-black mb-3 uppercase tracking-wider">👍 Followed Creator Updates</h2>
                <CreatorUpdates />
              </div>

              <div className="w-full bg-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-sm font-black text-black mb-3 uppercase tracking-wider">📺 Live Studio Process</h2>
                <BtsFeed />
              </div>

              <div className="w-full"><BrowseCategories /></div>
              <div className="w-full"><TrendingProducts onProductSelect={handleProductClick} /></div>
              <div className="w-full"><NearbyCreators /></div>
            </main>
          )}

          {/* TAB 2: ADVANCED CATALOG PAGE PROFILES */}
          {currentTab === 'browse' && <PLPPage />}

          {/* TAB 3: CHECKOUT SHOPPING BAG MESH */}
          {currentTab === 'cart' && (
            <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-6">
              <CheckoutWizard user={currentUser} onLogOut={handleLogoutRoutine} />
            </main>
          )}

          {/* TAB 4: WISHLIST VAULT ELEMENT SELECTION */}
          {currentTab === 'wishlist' && (
            <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center">
              <div className="bg-white border-4 border-black p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-md w-full">
                <span className="text-4xl block mb-2">✨</span>
                <h1 className="text-base font-black uppercase tracking-wider">Wishlist Vault</h1>
                <p className="text-zinc-600 font-bold mt-1 text-xs">Upcoming structures for the wishlist vault.</p>
              </div>
            </main>
          )}

          {/* TAB 5: DYNAMIC USER PROFILE BUTTON RENDER GATEWAY */}
          {currentTab === 'profile' && (
            <div className="py-6">
              <ProfileSetupPage 
                currentUser={currentUser} 
                onSaveSuccess={handleProfileSaveComplete} 
              />
            </div>
          )}
        </>
      )}

      {/* Global Unified Fixed Rail Sidebar Component Element */}
      <SidebarNavigation activeTab={currentTab} onTabChange={handleTabSwitch} />
    </div>
  );
}

export default App;