import React from 'react';

export default function Navigation({ user, onTriggerLogin, onLogOut }) {
  return (
    <nav className="sticky top-0 z-40 bg-[#FFFDF9] border-b-4 border-black px-8 py-10 shadow-[0_6px_0_0_rgba(0,0,0,1)]">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-12">
        
        {/* COLUMN 1: Massive Brand Logo (Anchored to the Left End) */}
        <a href="/" className="text-3xl lg:text-6xl font-black tracking-tighter uppercase hover:text-purple-600 transition-colors flex-shrink-0">
          campus-crafts
        </a>

        {/* COLUMN 2: Large, Readable Search Bar (Centered in the Middle) */}
        <div className="flex-1 max-w-3xl relative mx-auto">
          <input 
            type="text" 
            placeholder="Search dorm drops, creators, aesthetics..." 
            className="w-full bg-white border-4 border-black font-bold text-lg px-6 py-4 rounded-2xl outline-none focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all placeholder-zinc-400"
          />
        </div>

        {/* COLUMN 3: Large Authentication Button (Anchored to the Right End) */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {user?.isAuthenticated ? (
            /* STATE A: User session is active - display their campus hub and a functional Sign Out action button */
            <div className="flex items-center gap-4">
              <span className="hidden md:inline-block bg-purple-50 text-purple-700 font-mono font-black text-base px-5 py-3.5 border-4 border-purple-600 rounded-2xl">
                🎓 {user?.campusHub?.split(' ')[0] || 'Campus'} Hub
              </span>
              <button 
                onClick={onLogOut}
                className="bg-white border-4 border-black hover:bg-red-50 text-red-600 font-black text-lg px-8 py-4 rounded-2xl active:translate-y-[2px] transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          ) : (
            /* STATE B: User is unauthenticated - assign the login page trigger to the click handler */
            <button 
              onClick={onTriggerLogin}
              className="bg-black text-white font-black text-lg px-8 py-4 rounded-2xl border-4 border-black hover:bg-purple-600 active:translate-y-[2px] transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:shadow-none cursor-pointer"
            >
              Sign In / Login
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}