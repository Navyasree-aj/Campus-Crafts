import React from 'react';
import TrustBadge from '../../components/ui/common/TrustBadge';

export default function CartStep({
  cart, updateQuantity, removeItem, promoCode, setPromoCode,
  handleApplyPromo, discountApplied, fulfillmentType, setFulfillmentType,
  supportTip, setSupportTip, totals, onNavigateNext
}) {
  if (cart.length === 0) {
    return (
      <div className="bg-white border-4 border-black p-20 rounded-[32px] text-center shadow-[8px_8px_0_0_rgba(0,0,0,1)] max-w-2xl mx-auto space-y-6">
        <span className="text-7xl block">🛒</span>
        <h2 className="text-4xl font-black uppercase">Your Shopping Bag is Empty</h2>
        <p className="text-lg text-zinc-600 font-bold">Looks like you haven't snatched any limited dorm-crafted drops yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      {/* Left Main Stream: Core Item Lists and Logistics Settings (8 Columns) */}
      <div className="lg:col-span-8 space-y-12">
        
        {/* Logistics Fulfillment Toggle Selection */}
        <div className="bg-white border-4 border-black p-10 rounded-[32px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-8">
          <h3 className="text-3xl font-black uppercase tracking-tight">📍 Select Retrieval Method</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setFulfillmentType('pickup')}
              className={`p-6 border-4 rounded-2xl text-left transition-all ${fulfillmentType === 'pickup' ? 'border-purple-600 bg-purple-50/50 shadow-[4px_4px_0_0_rgba(0,0,0,1)]' : 'border-black bg-white'}`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-black uppercase">Free Campus Meetup</span>
                <span className="text-2xl">🤝</span>
              </div>
              <p className="text-xs font-bold text-zinc-600">Coordinate directly with student creators for a safe hand-off right outside campus landmarks.</p>
            </button>

            <button
              onClick={() => setFulfillmentType('delivery')}
              className={`p-6 border-4 rounded-2xl text-left transition-all ${fulfillmentType === 'delivery' ? 'border-purple-600 bg-purple-50/50 shadow-[4px_4px_0_0_rgba(0,0,0,1)]' : 'border-black bg-white'}`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-black uppercase">Standard Shipping</span>
                <span className="text-2xl">📦</span>
              </div>
              <p className="text-sm font-bold text-zinc-700">Get items boxed and shipped right to your dorm locker room or residential off-campus suite.</p>
            </button>
          </div>
        </div>

        {/* Dynamic Itemization List Container */}
        <div className="space-y-8">
          <h3 className="text-3xl font-black uppercase tracking-tight">🎒 Your Selection Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="bg-white border-4 border-black rounded-[24px] p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 items-center">
              <img src={item.image} alt={item.title} className="w-32 h-32 rounded-xl object-cover border-2 border-black flex-shrink-0 shadow-[2px_2px_0_0_rgba(0,0,0,1)]" />
              
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <span className="bg-black text-white text-[11px] font-black uppercase px-3 py-1 rounded">#{item.aesthetic}</span>
                  <span className="text-sm font-bold text-zinc-500">📍 {item.campus}</span>
                </div>
                <h4 className="font-black text-2xl text-black leading-snug">{item.title}</h4>
                <p className="text-xs font-bold text-purple-600">Made by {item.creator.name} {item.creator.isVerified && '🎓'}</p>
              </div>

              {/* Quantity Adjusters & Item Actions */}
              <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-dashed border-zinc-200">
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 bg-zinc-100 border-2 border-black font-black rounded-lg hover:bg-zinc-200 active:translate-y-0.5">-</button>
                  <span className="font-mono font-black text-lg w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 bg-zinc-100 border-2 border-black font-black rounded-lg hover:bg-zinc-200 active:translate-y-0.5" disabled={item.quantity >= item.maxStock}>+</button>
                </div>
                <div className="text-right">
                  <span className="text-sm block font-black uppercase text-zinc-700">Total</span>
                  <span className="text-2xl font-black font-mono">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="flex gap-3 text-xs font-black uppercase">
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:underline">Remove</button>
                  <span className="text-zinc-300">|</span>
                  <button onClick={() => alert('Saved to wishlist items bundle!')} className="text-purple-600 hover:underline">Save to Wishlist</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pay-What-You-Want Direct Tip Component */}
        <div className="bg-purple-50 border-4 border-black p-10 rounded-[32px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <h4 className="text-3xl font-black uppercase">☕ "Pay What You Want" Creator Support</h4>
              <p className="text-sm font-bold text-zinc-600 mt-0.5">100% of this goes straight to fuel late-night dorm creation processes.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-xl">$</span>
              <input
                type="number"
                min="0"
                value={supportTip}
                onChange={(e) => setSupportTip(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-20 bg-white border-2 border-black rounded-xl font-black font-mono text-center p-2"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {[0, 2, 5, 10].map((amt) => (
              <button key={amt} onClick={() => setSupportTip(amt)} className={`px-5 py-3 border-2 border-black rounded-xl font-black text-sm transition-all ${supportTip === amt ? 'bg-black text-white' : 'bg-white text-black'}`}>
                {amt === 0 ? 'No Tip' : `$${amt}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column Checkout Summary Panel Container (4 Columns) */}
      <div className="lg:col-span-4 lg:sticky lg:top-40 space-y-8">
        <div className="bg-white border-4 border-black p-10 rounded-3xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-8">
          <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-3">Order Math</h3>

          {/* Promo Input System */}
          <div className="space-y-3">
            <label className="block text-sm font-black uppercase text-zinc-500">Apply Student Coupon</label>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="CAMPUS10"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-zinc-50 border-2 border-black font-black px-4 py-3 rounded-2xl text-base outline-none uppercase"
              />
              <button onClick={handleApplyPromo} className="bg-black text-white text-xs font-black px-4 py-2 border-2 border-black rounded-xl">Apply</button>
            </div>
            {discountApplied && <p className="text-xs font-black text-green-600">🎉 "CAMPUS10" applied! Save 10% off items</p>}
          </div>

          {/* Financial Breakdown Table lines */}
          <div className="space-y-4 border-t-2 border-dashed border-zinc-200 pt-5 font-bold text-base">
            <div className="flex justify-between">
              <span className="text-zinc-700">Items Subtotal:</span>
              <span className="font-mono">${totals.subtotal.toFixed(2)}</span>
            </div>
            {discountApplied && (
              <div className="flex justify-between text-green-600">
                <span>10% Promo Deduction:</span>
                <span className="font-mono">-${totals.discountValue.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-zinc-500">Fulfillment Fee:</span>
              <span className="font-mono">{totals.logisticsFee === 0 ? 'FREE' : `$${totals.logisticsFee.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Direct Creator Support:</span>
              <span className="font-mono">${Number(supportTip).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-black uppercase border-t-4 border-black pt-4">
              <span>Final Total:</span>
              <span className="text-purple-600 font-mono">${totals.finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={onNavigateNext}
            className="w-full bg-black text-white font-black py-5 border-2 border-black rounded-2xl shadow-[4px_4px_0_0_rgba(147,51,234,1)] active:translate-y-1 active:shadow-none transition-all uppercase text-lg tracking-wider text-center"
          >
            Secure Checkout ➔
          </button>
        </div>

        <TrustBadge />
      </div>
    </div>
  );
}