import React from 'react';

export default function TrustSocial({ reviews, btsVideo }) {
  return (
    /* Tightened spacing between modules from space-y-10 to space-y-6 */
    <div className="space-y-6 text-black">
      
      {/* Video Studio Feed Module */}
      {/* Adjusted padding from p-8/md:p-10 down to high-density p-4 metrics */}
      <div className="bg-zinc-900 text-white p-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <span className="bg-purple-500 border-2 border-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-3">
          Seen on Studio Feed
        </span>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          {/* Calibrated video dimensions down from md:w-40 to a space-efficient w-24 bounds */}
          <div className="relative w-24 aspect-[9/16] rounded-xl bg-zinc-800 overflow-hidden border-2 border-zinc-700 flex-shrink-0 mx-auto sm:mx-0">
            {btsVideo?.thumbnail && (
              <img src={btsVideo.thumbnail} alt="Video static layer" className="w-full h-full object-cover opacity-80" />
            )}
            <span className="absolute inset-0 flex items-center justify-center text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">▶</span>
          </div>
          
          <div className="space-y-1 text-center sm:text-left">
            {/* Stabilized headings down from text-2xl/3xl to clear text-sm metrics */}
            <h4 className="font-black text-sm uppercase tracking-tight text-white">Behind the Process Clip</h4>
            <p className="text-xs font-bold text-zinc-400 leading-normal">{btsVideo?.caption}</p>
            <span className="text-xs font-black text-emerald-400 block pt-1">👁️ {btsVideo?.views} views</span>
          </div>
        </div>
      </div>

      {/* Reviews Matrix Section */}
      <div className="space-y-3">
        {/* Adjusted section label down to clean text-sm formatting */}
        <h3 className="text-sm font-black uppercase tracking-wider text-black">Reviews & Studio Proof</h3>
        
        <div className="space-y-3">
          {reviews?.map(rev => (
            /* Scaled inner wrapper down to dense p-4 layout dimensions */
            <div key={rev.id} className="bg-white border-4 border-black p-4 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex items-center gap-3">
                  {/* Downsized user avatar container from w-12 h-12 to a crisp w-8 h-8 boundary */}
                  <img src={rev.avatar} alt="User node" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
                  <strong className="text-xs font-black text-black">{rev.user}</strong>
                </div>
                {/* Clean inline tracking for star review metrics */}
                <div className="text-xs tracking-tight">{ '⭐'.repeat(rev.rating) }</div>
              </div>
              
              {/* Refined body content typography down to text-xs */}
              <p className="text-xs font-bold text-zinc-700 leading-relaxed">{rev.comment}</p>
              
              {/* User Proof Multi-Image Gallery Grid */}
              {rev.photos && (
                <div className="flex gap-2 pt-1">
                  {rev.photos.map((p, i) => (
                    /* Sized upload thumbnail frames down from w-24 h-24 to crisp w-12 h-12 layers */
                    <div key={i} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-black flex-shrink-0">
                      <img src={p} alt="User upload proof" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
              
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}