import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [addedCount, setAddedCount] = useState(0);

  return (
    /* Normalized outer card bounds down from a broad text setting to a tight, high-density rounded-xl layout */
    /* Balanced Neo-Brutalist shadow drop depths to sit cleanly at standard zoom ratios */
    <div className="group bg-white border-4 border-black rounded-xl overflow-hidden shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full text-black">
      
      {/* Media Image Showcase Section Frame */}
      <div className="w-full aspect-square bg-zinc-100 relative overflow-hidden border-b-4 border-black flex-shrink-0">
        <img
          src={product?.image}
          alt={product?.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
        />

        {/* Floating Context-Aware Drop Metrics Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start z-10">
          {product?.status === 'countdown' && (
            <span className="bg-red-500 text-white font-mono text-[9px] font-black px-2 py-0.5 border-2 border-black rounded shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
              ⏳ {product.timer}
            </span>
          )}
          {product?.status === 'limited' && (
            <span className="bg-yellow-400 text-black font-black text-[9px] px-2 py-0.5 border-2 border-black rounded shadow-[1px_1px_0_0_rgba(0,0,0,1)] tracking-wide uppercase">
              🚨 {product.stockLeft} LEFT
            </span>
          )}
          <span className="bg-black text-white font-black text-[8px] px-1.5 py-0.5 rounded uppercase tracking-wider">
            #{product?.aesthetic}
          </span>
        </div>

        {/* Wishlist Button Toggle Node */}
        {/* Adjusted padding from p-2.5 to a smaller layout circle and trimmed icon scaling down to text-sm */}
        <button
          type="button"
          onClick={() => setIsSaved(!isSaved)}
          className="absolute top-2 right-2 p-1.5 bg-white border-2 border-black rounded-lg z-10 shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 transition-all text-sm cursor-pointer"
        >
          {isSaved ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Content & Metadata Layout Hub */}
      {/* Scaled structural inner panel padding configurations down from p-5 to p-3 */}
      <div className="p-3 flex-1 flex flex-col justify-between gap-3">
        
        {/* Creator Identity & Profile Block Area */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <img
                src={product?.creator?.avatar}
                alt={product?.creator?.name}
                className="w-5 h-5 rounded-full border-2 border-black object-cover"
              />
              <span className="text-[11px] font-black tracking-tight text-zinc-700 hover:underline cursor-pointer truncate max-w-[80px]">
                {product?.creator?.name}
              </span>
              {product?.creator?.isVerified && (
                <span className="text-[8px] bg-purple-100 text-purple-700 font-black px-1 rounded border border-purple-400 uppercase tracking-tight">
                  STU
                </span>
              )}
            </div>
            
            <button
              type="button"
              onClick={() => setIsFollowing(!isFollowing)}
              className={`text-[9px] font-black px-2 py-0.5 rounded border-2 border-black transition-colors cursor-pointer ${
                isFollowing ? 'bg-zinc-200 text-zinc-700' : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
              }`}
            >
              {isFollowing ? 'Following' : '＋ Follow'}
            </button>
          </div>

          {/* Calibrated card listing header down from text-lg to crisp text-xs utility parameters */}
          <h4 className="font-black text-xs text-black leading-snug tracking-tight line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer uppercase">
            {product?.title}
          </h4>
        </div>

        {/* Review Summary Box */}
        <div className="flex items-center justify-between text-[10px] font-bold text-zinc-500 border-t-2 border-dashed border-zinc-100 pt-2">
          <span className="flex items-center gap-1 text-black">
            <span className="text-yellow-500">★</span>
            <span className="font-black">{product?.rating?.toFixed(1)}</span>
          </span>
          <span className="text-zinc-500 font-mono font-medium">{product?.reviewCount} reviews</span>
        </div>

        {/* Action Transaction Panel */}
        <div className="flex items-center justify-between gap-2 pt-0.5">
          <div className="flex flex-col">
            <span className="text-[8px] font-black uppercase tracking-wider text-zinc-400 leading-none">Price Local</span>
            <span className="text-base font-black text-black font-mono mt-0.5">${product?.price}</span>
          </div>

          {product?.status === 'countdown' ? (
            <button 
              type="button"
              className="bg-zinc-200 text-zinc-500 border-2 border-zinc-400 font-black text-[10px] px-3 py-1.5 rounded-lg cursor-not-allowed uppercase tracking-wider"
            >
              Locked
            </button>
          ) : addedCount > 0 ? (
            /* Interactive Quantity Adjusted Matrices */
            /* Scaled round control buttons down from w-11/h-11 frames to compact w-7/h-7 structures */
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setAddedCount(Math.max(0, addedCount - 1))}
                className="w-7 h-7 bg-white text-black font-black text-sm rounded-md border-2 border-black shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
                aria-label="Remove item"
              >
                −
              </button>
              <div className="text-center min-w-[28px]">
                <span className="block text-[8px] font-black uppercase tracking-tight text-zinc-400 leading-none">Cart</span>
                <span className="block text-xs font-black font-mono">{addedCount}</span>
              </div>
              <button
                type="button"
                onClick={() => setAddedCount(addedCount + 1)}
                className="w-7 h-7 bg-black text-white font-black text-sm rounded-md border-2 border-black shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
                aria-label="Add item"
              >
                +
              </button>
            </div>
          ) : (
            /* Standard Add to Cart Anchor CTA */
            /* Downsized grid button padding rules from px-5 py-3.5 to px-3 py-1.5 elements */
            <button
              type="button"
              onClick={() => setAddedCount(1)}
              className="bg-black text-white font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg border-2 border-black hover:bg-purple-600 hover:text-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              Add To Cart
            </button>
          )}
        </div>

      </div>
    </div>
  );
}