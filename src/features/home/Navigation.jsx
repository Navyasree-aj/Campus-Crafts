import React from 'react';

export default function Navigation({ user, onTriggerLogin, onLogOut }) {
  return (
    /* Calibrated structural padding down from py-10 to py-3.5 and compressed shadow metrics */
    <nav className="sticky top-0 z-40 bg-[#FFFDF9] border-b-4 border-black px-4 md:px-6 py-3.5 shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      {/* Aligned container layout from max-w-[1600px] to max-w-6xl for synchronized alignment */}
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        
        {/* COLUMN 1: Brand Logo - Scaled down from lg:text-6xl to clear text-lg md:text-xl dimensions */}
        <a href="/" className="text-lg md:text-xl font-black tracking-tighter uppercase hover:text-purple-600 transition-colors flex-shrink-0 text-black">
          campus-crafts
        </a>

        {/* COLUMN 2: Search Bar - Sized input frame from p-4 text-lg down to high-density text-xs bounds */}
        <div className="flex-1 max-w-md relative mx-auto hidden sm:block">
          <input 
            type="text" 
            placeholder="Search drops, creators, aesthetics..." 
            className="w-full bg-white border-2 border-black font-bold text-xs px-4 py-2 rounded-xl outline-none focus:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all placeholder-zinc-400 text-black"
          />
        </div>

        {/* COLUMN 3: Authentication Actions - Adjusted button padding fields from px-8 py-4 to clean standard dimensions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {user?.isAuthenticated ? (
            /* STATE A: User session is active */
            <div className="flex items-center gap-2">
              <span className="hidden md:inline-block bg-purple-50 text-purple-700 font-mono font-black text-xs px-3 py-1.5 border-2 border-purple-600 rounded-xl">
                🎓 {user?.campusHub?.split(' ')[0] || 'Campus'} Hub
              </span>
              <button 
                type="button"
                onClick={onLogOut}
                className="bg-white border-2 border-black hover:bg-red-50 text-red-600 font-black text-xs uppercase px-4 py-1.5 rounded-xl active:translate-y-[1px] transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:shadow-none cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          ) : (
            /* STATE B: User is unauthenticated */
            <button 
              type="button"
              onClick={onTriggerLogin}
              className="bg-black text-white font-black text-xs uppercase px-4 py-1.5 rounded-xl border-2 border-black hover:bg-purple-600 active:translate-y-[1px] transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:shadow-none cursor-pointer"
            >
              Login/Sign In
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}