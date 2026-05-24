import React, { useState } from 'react';

export default function PurchaseAction({ product }) {
  const [qty, setQty] = useState(1);
  const [customTip, setCustomTip] = useState(0);

  return (
    <div className="bg-white border-4 border-black p-8 md:p-10 rounded-3xl shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div>
          <span className="text-purple-600 font-black text-sm md:text-base uppercase tracking-wider block mb-3">
            ✨ Vibe: {product.vibe}
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black leading-tight">
            {product.title}
          </h1>
        </div>
        <div className="text-right">
          <div className="text-4xl md:text-5xl font-black text-black">${product.price + Number(customTip)}</div>
          {product.originalPrice && (
            <span className="text-sm md:text-base font-bold text-zinc-400 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>

      {/* Stock Alert Node */}
      <div className="bg-red-50 border-2 border-red-400 text-red-600 font-black text-sm md:text-base px-4 py-3 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <span>🚨 RUSH DEPOSIT NEEDED</span>
        <span>Only {product.stockLeft} items left in active queue!</span>
      </div>

      {/* Variant Field Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs md:text-sm font-black uppercase text-zinc-500 block mb-2">Color Options</label>
          <select className="w-full bg-zinc-50 border-2 border-black font-bold text-sm p-3 rounded-2xl outline-none">
            {product.variants.colors.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs md:text-sm font-black uppercase text-zinc-500 block mb-2">Dimensions</label>
          <select className="w-full bg-zinc-50 border-2 border-black font-bold text-sm p-3 rounded-2xl outline-none">
            {product.variants.sizes.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-amber-50 border-2 border-black p-5 md:p-6 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
          <strong className="text-base md:text-lg font-black text-black">🚀 Support Student Creators</strong>
          <span className="bg-amber-200 text-black border border-black text-sm md:text-base font-black px-3 py-1.5 rounded">PWYW</span>
        </div>
        <p className="text-base font-medium text-zinc-700 leading-relaxed mb-4">
          Add an optional tip to help balance material costs or studio expenses for midterms.
        </p>
        <div className="flex flex-wrap gap-3">
          {[0, 5, 10, 20].map(tip => (
            <button
              key={tip}
              onClick={() => setCustomTip(tip)}
              className={`flex-1 min-w-[80px] font-black text-sm md:text-base py-3 rounded-2xl border-2 border-black transition-all ${
                customTip === tip ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              {tip === 0 ? 'Base' : `+$${tip}`}
            </button>
          ))}
        </div>
      </div>

      {/* Direct E-Commerce Trigger Stacks */}
      <div className="flex flex-col md:flex-row gap-4 items-center mt-3">
        <div className="border-2 border-black flex items-center rounded-2xl overflow-hidden bg-zinc-50 h-16 min-w-[150px]">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-5 font-black text-2xl">-</button>
          <span className="px-5 font-black text-lg text-center w-14">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="px-5 font-black text-2xl">+</button>
        </div>

        <button className="flex-1 bg-black text-white font-black text-lg h-16 rounded-2xl border-2 border-black tracking-wide active:translate-y-[2px] transition-all">
          BUY NOW
        </button>
        <button className="bg-emerald-200 border-2 border-black w-16 h-16 rounded-2xl flex items-center justify-center font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xl">
          ♥
        </button>
      </div>

      <button className="w-full bg-white border-2 border-black text-black font-black text-base py-5 rounded-2xl tracking-wider active:translate-y-[1px]">
        ADD TO BAG
      </button>
    </div>
  );
}