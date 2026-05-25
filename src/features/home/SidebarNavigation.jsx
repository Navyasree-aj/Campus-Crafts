import React from 'react';

export default function SidebarNavigation({ activeTab, onTabChange }) {
  // Navigation Routing Registry Matrix
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'browse', label: 'Catalog', icon: '📦' },
    { id: 'feed', label: 'Feed', icon: '✨' },
    { id: 'cart', label: 'Bag', icon: '🛒' },
    { id: 'wishlist', label: 'Vault', icon: '❤️' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#FFFDF9] border-t-4 border-black z-50 flex justify-around items-center py-2 px-1 shadow-[0_-3px_0_0_rgba(0,0,0,1)] lg:bottom-auto lg:top-0 lg:w-24 lg:h-screen lg:border-t-0 lg:border-r-4 lg:flex-col lg:justify-start lg:py-6 lg:gap-5 lg:shadow-[3px_0_0_0_rgba(0,0,0,1)] text-black">
      
      {/* Brand Icon Token — Only visible on Desktop Sidebar Rails */}
      <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-black text-white font-black rounded-xl text-sm border-2 border-black shadow-[2px_2px_0_0_rgba(147,51,234,1)] mb-4 select-none">
        CC
      </div>

      {/* Main Interactive Tab Route Nodes */}
      <div className="flex w-full justify-around items-center lg:flex-col lg:gap-3 lg:px-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center w-14 h-12 lg:w-16 lg:h-14 rounded-xl border-2 border-black transition-all cursor-pointer relative group select-none ${
                isActive 
                  ? 'bg-purple-600 text-white shadow-[1px_1px_0_0_rgba(0,0,0,1)] lg:shadow-[2px_2px_0_0_rgba(0,0,0,1)]' 
                  : 'bg-white text-black hover:bg-zinc-50 shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none'
              }`}
            >
              <span className="text-base lg:text-lg block">{item.icon}</span>
              <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-tight mt-0.5">
                {item.label}
              </span>

              {/* Minimal Desktop Side Active Accent Accentuation */}
              {isActive && (
                <span className="hidden lg:block absolute left-[-6px] top-1/2 -translate-y-1/2 w-1 h-6 bg-black rounded-r" />
              )}
            </button>
          );
        })}
      </div>

    </nav>
  );
}