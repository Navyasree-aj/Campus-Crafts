import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [addedCount, setAddedCount] = useState(0);

  return (
    <div className="group bg-white border-4 border-black rounded-[28px] overflow-hidden shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      
      {/* Media Image Showcase Section Frame */}
      <div className="w-full aspect-square bg-zinc-100 relative overflow-hidden border-b-4 border-black flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Floating Context-Aware Drop Metrics badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 items-start z-10">
          {product.status === 'countdown' && (
            <span className="bg-red-500 text-white font-mono text-[11px] font-black px-3 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)] animate-bounce">
              ⏳ DROPS IN: {product.timer}
            </span>
          )}
          {product.status === 'limited' && (
            <span className="bg-yellow-400 text-black font-black text-[10px] px-3 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)] tracking-wider uppercase">
              🚨 ONLY {product.stockLeft} PIECES LEFT
            </span>
          )}
          <span className="bg-black text-white font-black text-[9px] px-2.5 py-0.5 rounded-md uppercase tracking-widest">
            #{product.aesthetic}
          </span>
        </div>

        {/* Wishlist Button Toggle Node */}
        <button
          onClick={() => setIsSaved(!isSaved)}
          className="absolute top-4 right-4 p-2.5 bg-white border-2 border-black rounded-xl z-10 shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 transition-all text-lg cursor-pointer"
        >
          {isSaved ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Content & Metadata Layout Hub */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Creator Identity & Profile Block Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <img
                src={product.creator.avatar}
                alt={product.creator.name}
                className="w-7 h-7 rounded-full border-2 border-black object-cover"
              />
              <span className="text-xs font-black tracking-tight text-zinc-800 hover:underline cursor-pointer">
                {product.creator.name}
              </span>
              {product.creator.isVerified && (
                <span className="text-[9px] bg-purple-150 text-purple-700 font-black px-1 rounded border border-purple-400 uppercase">
                  🎓 STU
                </span>
              )}
            </div>
            
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`text-[10px] font-black px-2.5 py-1 rounded-lg border-2 border-black transition-colors ${
                isFollowing ? 'bg-zinc-200 text-zinc-700' : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
              }`}
            >
              {isFollowing ? 'Following' : '＋ Follow'}
            </button>
          </div>

          <h4 className="font-black text-lg text-black leading-snug tracking-tight line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer">
            {product.title}
          </h4>
        </div>

        {/* Review Summary Box */}
        <div className="flex items-center justify-between text-xs font-bold text-zinc-500 border-t-2 border-dashed border-zinc-100 pt-3">
          <span className="flex items-center gap-2 text-black">
            <span className="text-yellow-500">★</span>
            <span>{product.rating.toFixed(1)} / 5</span>
          </span>
          <span className="text-black font-mono font-black bg-zinc-100 px-2 py-0.5 rounded-md">{product.reviewCount} reviews</span>
        </div>

        {/* Action Transaction Panel */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 leading-none">Price Local</span>
            <span className="text-2xl font-black text-black font-mono mt-0.5">${product.price}</span>
          </div>

          {product.status === 'countdown' ? (
            <button className="bg-zinc-300 text-zinc-600 border-2 border-zinc-400 font-black text-xs px-5 py-3.5 rounded-xl cursor-not-allowed uppercase">
              Locked Drop
            </button>
          ) : addedCount > 0 ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAddedCount(Math.max(0, addedCount - 1))}
                className="w-11 h-11 bg-white text-black font-black text-lg rounded-full border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:bg-zinc-100 transition-all"
                aria-label="Remove one item from cart"
              >
                −
              </button>
              <div className="text-center">
                <span className="block text-[10px] font-black uppercase tracking-wider text-zinc-400">In Cart</span>
                <span className="block text-2xl font-black">{addedCount}</span>
              </div>
              <button
                onClick={() => setAddedCount(addedCount + 1)}
                className="w-11 h-11 bg-black text-white font-black text-lg rounded-full border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:bg-purple-600 transition-all"
                aria-label="Add one item to cart"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => setAddedCount(1)}
              className="bg-black text-white font-black text-xs px-5 py-3.5 rounded-xl border-2 border-black hover:bg-purple-600 hover:text-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all uppercase tracking-tight"
            >
              Add to Cart
            </button>
          )}
        </div>

      </div>

    </div>
  );
}