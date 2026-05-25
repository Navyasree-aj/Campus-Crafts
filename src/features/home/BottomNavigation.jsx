import React from 'react';

export default function BottomNavigation({ activeTab, onTabChange }) {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-8 pointer-events-none">
      {/* Heavy desktop dashboard panel bar */}
      <div className="max-w-[1600px] mx-auto bg-[#FFFDF9] border-4 border-black p-4 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between pointer-events-auto">
        
        {/* Browse Categories */}
        <button 
          onClick={() => onTabChange?.('browse')}
          className="flex flex-col items-center justify-center flex-1 py-3 text-black group hover:bg-zinc-100 rounded-xl transition-colors"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">🗂️</span>
          <span className="text-xs lg:text-sm font-black uppercase tracking-wider mt-2">Browse Products</span>
        </button>

        {/* Live Creator Feed */}
        <button 
          onClick={() => alert('Opening Real-Time Student Stream Feed...')}
          className="flex flex-col items-center justify-center flex-1 py-3 text-black group hover:bg-zinc-100 rounded-xl transition-colors"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform relative">
            📺
            <span className="absolute -top-1 -right-2 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-black animate-pulse"></span>
          </span>
          <span className="text-xs lg:text-sm font-black uppercase tracking-wider mt-2">Live Creator Feed</span>
        </button>

        {/* Global Shopping Cart */}
        <button 
          onClick={() => alert('Opening Shopping Bag Overlay...')}
          className="flex flex-col items-center justify-center flex-1 py-3 text-black group hover:bg-zinc-100 rounded-xl transition-colors"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">🛒</span>
          <span className="text-xs lg:text-sm font-black uppercase tracking-wider mt-2">Shopping Cart</span>
        </button>

        {/* Student Profile */}
        <button 
          onClick={() => alert('Routing to Personal Dashboard Hub...')}
          className="flex flex-col items-center justify-center flex-1 py-3 text-black group hover:bg-zinc-100 rounded-xl transition-colors"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">👤</span>
          <span className="text-xs lg:text-sm font-black uppercase tracking-wider mt-2">Student Profile</span>
        </button>

      </div>
    </div>
  );
}