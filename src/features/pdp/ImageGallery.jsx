import React, { useState } from 'react';

export default function ImageGallery({ images }) {
  // Safe fallback in case an empty array or undefined is passed
  const [activeImg, setActiveImg] = useState(images?.[0] || '');

  return (
    /* Tightened vertical gap configurations from gap-5 down to gap-3 */
    <div className="flex flex-col gap-3 w-full">
      
      {/* Main Feature Image Container */}
      {/* Aligned outer border shadows down to crisp standard dimensions */}
      <div className="w-full aspect-[5/6] bg-zinc-50 border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
        {activeImg && (
          <img src={activeImg} alt="Active product context" className="w-full h-full object-cover" />
        )}
        {/* Adjusted badge typography scale from text-base to clean text-[10px] metrics */}
        <span className="absolute top-3 right-3 bg-black text-white font-black text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider">
          1-of-1 Build
        </span>
      </div>

      {/* Interactive Thumbnail Carousel Row */}
      {/* Calibrated button frames down from w-28 h-28 to crisp w-14 h-14 dimensions */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {images?.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveImg(img)}
            className={`w-14 h-14 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
              activeImg === img 
                ? 'border-black -translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-100' 
                : 'border-zinc-400 opacity-60 hover:opacity-90'
            }`}
          >
            <img src={img} alt={`Thumbnail view ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

    </div>
  );
}