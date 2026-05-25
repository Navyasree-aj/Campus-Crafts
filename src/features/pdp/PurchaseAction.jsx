import React, { useState } from 'react';

export default function PurchaseAction({ product }) {
  const [qty, setQty] = useState(1);
  const [customTip, setCustomTip] = useState(0);

  return (
    /* Calibrated outer spacing from p-8/p-10 down to clean p-5 specifications */
    <div className="bg-white border-4 border-black p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4 text-black">
      
      {/* Product Title and Price Frame */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b-2 border-black pb-3">
        <div>
          <span className="text-purple-600 font-black text-[10px] uppercase tracking-wider block mb-1">
            ✨ Vibe: {product?.vibe}
          </span>
          {/* Scaled product headline from text-4xl/5xl down to crisp text-xl md:text-2xl */}
          <h1 className="text-xl md:text-2xl font-black tracking-tight leading-tight uppercase">
            {product?.title}
          </h1>
        </div>
        <div className="sm:text-right flex-shrink-0">
          {/* Calibrated price text from text-4xl/5xl down to a high-contrast text-2xl layout */}
          <div className="text-2xl font-black font-mono text-black">
            ${((product?.price || 0) + Number(customTip)).toFixed(2)}
          </div>
          {product?.originalPrice && (
            <span className="text-xs font-bold text-zinc-400 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>

      {/* Stock Alert Node - Adjusted text dimensions and rounded corners */}
      <div className="bg-red-50 border-2 border-red-400 text-red-600 font-black text-xs px-3 py-2 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
        <span>🚨 RUSH DEPOSIT NEEDED</span>
        <span>Only {product?.stockLeft} items left in active queue!</span>
      </div>

      {/* Variant Field Selectors - Trimmed input select element sizes down from p-3 to p-2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] font-black uppercase text-zinc-500 block mb-1">Color Options</label>
          <select className="w-full bg-zinc-50 border-2 border-black font-bold text-xs p-2 rounded-xl outline-none cursor-pointer">
            {product?.variants?.colors?.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-black uppercase text-zinc-500 block mb-1">Dimensions</label>
          <select className="w-full bg-zinc-50 border-2 border-black font-bold text-xs p-2 rounded-xl outline-none cursor-pointer">
            {product?.variants?.sizes?.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {/* PWYW Support Studio Module */}
      {/* Sized structural padding layout elements from p-5/p-6 down to p-3 */}
      <div className="bg-amber-50 border-2 border-black p-3 rounded-xl space-y-2">
        <div className="flex items-center justify-between gap-2">
          <strong className="text-xs font-black uppercase text-black">🚀 Support Student Creators</strong>
          <span className="bg-amber-200 border-2 border-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase">PWYW</span>
        </div>
        <p className="text-xs font-bold text-zinc-600 leading-relaxed">
          Add an optional tip to help balance material costs or studio expenses for midterms.
        </p>
        <div className="flex gap-2">
          {[0, 5, 10, 20].map(tip => (
            <button
              key={tip}
              type="button"
              onClick={() => setCustomTip(tip)}
              className={`flex-1 font-black text-xs py-2 rounded-lg border-2 border-black transition-all cursor-pointer ${
                customTip === tip 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-zinc-50'
              }`}
            >
              {tip === 0 ? 'Base' : `+$${tip}`}
            </button>
          ))}
        </div>
      </div>

      {/* Action CTA Stack Layout */}
      {/* Downsized core fields from massive h-16/py-5 frames to standard py-2.5 / h-11 operations */}
      <div className="space-y-2 mt-2">
        <div className="flex gap-2 w-full">
          {/* Quantity Selector Counter */}
          <div className="border-2 border-black flex items-center rounded-xl overflow-hidden bg-zinc-50 h-11">
            <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className="px-3.5 font-black text-base cursor-pointer hover:bg-zinc-100 h-full">-</button>
            <span className="font-mono font-black text-xs text-center w-8">{qty}</span>
            <button type="button" onClick={() => setQty(qty + 1)} className="px-3.5 font-black text-base cursor-pointer hover:bg-zinc-100 h-full">+</button>
          </div>

          {/* Primary Buy Button */}
          <button 
            type="button"
            className="flex-1 bg-black text-white font-black text-xs uppercase tracking-wider h-11 rounded-xl border-2 border-black active:translate-y-0.5 transition-all cursor-pointer hover:bg-zinc-800"
          >
            BUY NOW
          </button>
          
          {/* Favorites Bookmark Anchor */}
          <button 
            type="button"
            className="bg-emerald-200 border-2 border-black w-11 h-11 rounded-xl flex items-center justify-center font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none text-sm transition-all cursor-pointer"
          >
            ♥
          </button>
        </div>

        {/* Secondary Add to Cart Interface Button */}
        <button 
          type="button"
          className="w-full bg-white hover:bg-zinc-50 text-black border-2 border-black font-black text-xs uppercase tracking-wider py-2.5 rounded-xl active:translate-y-0.5 transition-all cursor-pointer"
        >
          ADD TO BAG
        </button>
      </div>

    </div>
  );
}