import React from 'react';

export default function BottomNavigation({ activeTab, onTabChange }) {
  return (
    /* Positioning frame: Anchored cleanly across the bottom viewport with safe responsive margins */
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
      
      {/* Heavy desktop dashboard panel bar - Converted back to a horizontal-first strip layout */}
      {/* Reduced outer padding down from p-4/p-5 to clean, scannable p-1.5 dimensions */}
      <div className="max-w-2xl mx-auto bg-[#FFFDF9]/95 backdrop-blur-sm border-4 border-black p-1.5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between pointer-events-auto gap-1">
        
        {/* Browse Categories */}
        <button 
          type="button"
          onClick={() => onTabChange?.('browse')}
          className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'browse' ? 'bg-purple-100 text-black border-2 border-black -translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'text-zinc-700 border-2 border-transparent hover:bg-zinc-100'}`}
        >
          {/* Sized icons down from text-3xl to clear, production-proportional text-xl/text-2xl bounds */}
          <span className="text-xl md:text-2xl transition-transform duration-200">🗂️</span>
          {/* Calibrated label typography down from uppercase tracking-wider text-xs/sm to high-density text-[10px] */}
          <span className="text-[10px] font-black uppercase tracking-wide mt-0.5 hidden sm:block">Browse</span>
        </button>

        {/* Live Creator Feed */}
        <button 
          type="button"
          onClick={() => alert('Opening Real-Time Student Stream Feed...')}
          className="flex flex-col items-center justify-center flex-1 py-1.5 text-zinc-700 border-2 border-transparent hover:bg-zinc-100 rounded-xl transition-all cursor-pointer"
        >
          <span className="text-xl md:text-2xl relative">
            📺
            <span className="absolute -top-0.5 -right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-black animate-pulse"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-wide mt-0.5 hidden sm:block">Live Feed</span>
        </button>

        {/* Global Shopping Cart */}
        <button 
          type="button"
          onClick={() => onTabChange?.('cart')}
          className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all cursor-pointer ${activeTab === 'cart' ? 'bg-purple-100 text-black border-2 border-black -translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'text-zinc-700 border-2 border-transparent hover:bg-zinc-100'}`}
        >
          <span className="text-xl md:text-2xl transition-transform duration-200">🛒</span>
          <span className="text-[10px] font-black uppercase tracking-wide mt-0.5 hidden sm:block">Cart</span>
        </button>

        {/* Student Profile */}
        <button 
          type="button"
          onClick={() => alert('Routing to Personal Dashboard Hub...')}
          className="flex flex-col items-center justify-center flex-1 py-1.5 text-zinc-700 border-2 border-transparent hover:bg-zinc-100 rounded-xl transition-all cursor-pointer"
        >
          <span className="text-xl md:text-2xl transition-transform duration-200">👤</span>
          <span className="text-[10px] font-black uppercase tracking-wide mt-0.5 hidden sm:block">Profile</span>
        </button>

      </div>
    </div>
  );
}