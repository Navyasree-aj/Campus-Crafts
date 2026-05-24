import React, { useState } from 'react';

export default function ImageGallery({ images }) {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full aspect-[5/6] bg-zinc-50 border-4 border-black rounded-3xl overflow-hidden shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] relative">
        <img src={activeImg} alt="Active product context" className="w-full h-full object-cover" />
        <span className="absolute top-5 right-5 bg-black text-white font-black text-base px-4 py-2 rounded-full uppercase tracking-widest">
          1-of-1 Build
        </span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImg(img)}
            className={`w-28 h-28 rounded-3xl overflow-hidden border-2 flex-shrink-0 transition-all ${
              activeImg === img ? 'border-black scale-95 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' : 'border-zinc-300 opacity-70'
            }`}
          >
            <img src={img} alt="Thumbnail view" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}