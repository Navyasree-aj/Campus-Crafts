import React from 'react';

export default function TrustSocial({ reviews, btsVideo }) {
  return (
    <div className="space-y-10">
      <div className="bg-zinc-900 text-white p-8 md:p-10 rounded-3xl border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
        <span className="bg-purple-500 border border-white text-sm md:text-base font-black px-4 py-2 rounded tracking-widest uppercase inline-block mb-5">
          Seen on Studio Feed
        </span>
        <div className="flex flex-col md:flex-row gap-5 items-start">
          <div className="relative w-full md:w-40 aspect-[9/16] rounded-3xl bg-zinc-800 overflow-hidden border border-zinc-700 flex-shrink-0">
            <img src={btsVideo.thumbnail} alt="Video static layer" className="w-full h-full object-cover opacity-80" />
            <span className="absolute inset-0 flex items-center justify-center text-2xl">▶</span>
          </div>
          <div>
            <h4 className="font-black text-2xl md:text-3xl text-white mb-3">Behind the Process Clip</h4>
            <p className="text-base md:text-lg font-medium text-zinc-300 leading-relaxed mb-4">{btsVideo.caption}</p>
            <span className="text-base md:text-lg font-bold text-emerald-400">👁️ {btsVideo.views} views</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-black text-black mb-6">Reviews & Studio Proof</h3>
        <div className="space-y-6">
          {reviews.map(rev => (
            <div key={rev.id} className="bg-white border-2 border-black p-6 md:p-7 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <img src={rev.avatar} alt="User node" className="w-12 h-12 rounded-full border border-black object-cover" />
                  <strong className="text-base md:text-lg font-black">{rev.user}</strong>
                </div>
                <div className="text-base">{'⭐'.repeat(rev.rating)}</div>
              </div>
              <p className="text-base md:text-lg font-medium text-zinc-800 leading-relaxed mb-4">{rev.comment}</p>
              {rev.photos && (
                <div className="flex gap-4">
                  {rev.photos.map((p, i) => (
                    <div key={i} className="w-24 h-24 rounded-3xl overflow-hidden border border-black">
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