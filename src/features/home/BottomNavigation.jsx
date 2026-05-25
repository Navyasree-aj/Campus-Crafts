import React from 'react';

export default function BottomNavigation({ activeTab, onTabChange }) {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-8 pointer-events-none lg:top-32 lg:left-6 lg:right-auto lg:bottom-6 lg:w-28 lg:px-0">
      {/* Heavy desktop dashboard panel bar */}
      <div className="mx-auto bg-[#FFFDF9] border-4 border-black p-4 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between pointer-events-auto gap-3 lg:flex-col lg:items-stretch lg:h-[calc(100vh-140px)] lg:p-5 lg:rounded-[36px]">
        
        {/* Browse Categories */}
        <button 
          onClick={() => onTabChange?.('browse')}
          className="flex flex-col items-center justify-center flex-1 py-3 text-black group hover:bg-zinc-100 rounded-xl transition-colors lg:flex-none lg:w-full lg:px-2 lg:py-4"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">🗂️</span>
          <span className="text-xs lg:text-sm font-black uppercase tracking-wider mt-2">Browse Products</span>
        </button>

        {/* Live Creator Feed */}
        <button 
          onClick={() => alert('Opening Real-Time Student Stream Feed...')}
          className="flex flex-col items-center justify-center flex-1 py-3 text-black group hover:bg-zinc-100 rounded-xl transition-colors lg:flex-none lg:w-full lg:px-2 lg:py-4"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform relative">
            📺
            <span className="absolute -top-1 -right-2 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-black animate-pulse"></span>
          </span>
          <span className="text-xs lg:text-sm font-black uppercase tracking-wider mt-2">Live Creator Feed</span>
        </button>

        {/* Global Shopping Cart */}
        <button 
          onClick={() => onTabChange?.('cart')}
          className="flex flex-col items-center justify-center flex-1 py-3 text-black group hover:bg-zinc-100 rounded-xl transition-colors lg:flex-none lg:w-full lg:px-2 lg:py-4"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">🛒</span>
          <span className="text-xs lg:text-sm font-black uppercase tracking-wider mt-2">Shopping Cart</span>
        </button>

        {/* Student Profile */}
        <button 
          onClick={() => alert('Routing to Personal Dashboard Hub...')}
          className="flex flex-col items-center justify-center flex-1 py-3 text-black group hover:bg-zinc-100 rounded-xl transition-colors lg:flex-none lg:w-full lg:px-2 lg:py-4"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">👤</span>
          <span className="text-xs lg:text-sm font-black uppercase tracking-wider mt-2">Student Profile</span>
        </button>

      </div>
    </div>
  );
}