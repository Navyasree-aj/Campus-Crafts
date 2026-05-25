import React from 'react';
import TrustBadge from '../../components/ui/common/TrustBadge';

export default function CartStep({
  cart, updateQuantity, removeItem, promoCode, setPromoCode,
  handleApplyPromo, discountApplied, fulfillmentType, setFulfillmentType,
  supportTip, setSupportTip, totals, onNavigateNext
}) {
  if (cart.length === 0) {
    return (
      /* Calibrated empty state container down from padding p-20 and font text-4xl */
      <div className="bg-white border-4 border-black p-10 rounded-[24px] text-center shadow-[6px_6px_0_0_rgba(0,0,0,1)] max-w-md mx-auto space-y-4">
        <span className="text-5xl block">🛒</span>
        <h2 className="text-2xl font-black uppercase tracking-tight">Your Shopping Bag is Empty</h2>
        <p className="text-sm text-zinc-600 font-bold">Looks like you haven't snatched any limited dorm-crafted drops yet.</p>
      </div>
    );
  }

  return (
    /* Brought gap matrix down from gap-16 to standard layout gap-8 */
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Main Stream: Core Item Lists and Logistics Settings (8 Columns) */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Logistics Fulfillment Toggle Selection */}
        {/* Sized down card layout padding from p-10 to p-6 */}
        <div className="bg-white border-4 border-black p-6 rounded-[24px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-4">
          <h3 className="text-xl font-black uppercase tracking-tight">📍 Select Retrieval Method</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setFulfillmentType('pickup')}
              className={`p-4 border-4 rounded-xl text-left transition-all cursor-pointer ${fulfillmentType === 'pickup' ? 'border-purple-600 bg-purple-50/50 shadow-[4px_4px_0_0_rgba(0,0,0,1)]' : 'border-black bg-white'}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-base font-black uppercase tracking-tight">Free Campus Meetup</span>
                <span className="text-xl">🤝</span>
              </div>
              <p className="text-[11px] font-bold text-zinc-600 leading-normal">Coordinate directly with student creators for a safe hand-off right outside campus landmarks.</p>
            </button>

            <button
              type="button"
              onClick={() => setFulfillmentType('delivery')}
              className={`p-4 border-4 rounded-xl text-left transition-all cursor-pointer ${fulfillmentType === 'delivery' ? 'border-purple-600 bg-purple-50/50 shadow-[4px_4px_0_0_rgba(0,0,0,1)]' : 'border-black bg-white'}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-base font-black uppercase tracking-tight">Standard Shipping</span>
                <span className="text-xl">📦</span>
              </div>
              <p className="text-[11px] font-bold text-zinc-600 leading-normal">Get items boxed and shipped right to your dorm locker room or residential off-campus suite.</p>
            </button>
          </div>
        </div>

        {/* Dynamic Itemization List Container */}
        <div className="space-y-4">
          <h3 className="text-xl font-black uppercase tracking-tight">🎒 Your Selection Summary</h3>
          {cart.map((item) => (
            /* Scaled block configuration down from item padding p-8 and title text-2xl */
            <div key={item.id} className="bg-white border-4 border-black rounded-[20px] p-4 md:p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <img src={item.image} alt={item.title} className="w-24 h-24 rounded-lg object-cover border-2 border-black flex-shrink-0 shadow-[2px_2px_0_0_rgba(0,0,0,1)]" />
              
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="bg-black text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">#{item.aesthetic}</span>
                  <span className="text-xs font-bold text-zinc-500">📍 {item.campus}</span>
                </div>
                <h4 className="font-black text-lg text-black leading-snug">{item.title}</h4>
                <p className="text-[11px] font-bold text-purple-600">Made by {item.creator.name} {item.creator.isVerified && '🎓'}</p>
              </div>

              {/* Quantity Adjusters & Item Actions */}
              <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-dashed border-zinc-200">
                <div className="flex items-center gap-1.5">
                  <button type="button" onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 bg-zinc-100 border-2 border-black font-black rounded-md hover:bg-zinc-200 active:translate-y-0.5 cursor-pointer">-</button>
                  <span className="font-mono font-black text-base w-6 text-center">{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 bg-zinc-100 border-2 border-black font-black rounded-md hover:bg-zinc-200 active:translate-y-0.5 cursor-pointer" disabled={item.quantity >= item.maxStock}>+</button>
                </div>
                <div className="text-right sm:block flex items-center justify-between w-full sm:w-auto">
                  <span className="text-[10px] block font-black uppercase text-zinc-400 sm:leading-none">Total</span>
                  <span className="text-xl font-black font-mono text-black">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="flex gap-2.5 text-[10px] font-black uppercase pt-0.5">
                  <button type="button" onClick={() => removeItem(item.id)} className="text-red-500 hover:underline cursor-pointer">Remove</button>
                  <span className="text-zinc-200">|</span>
                  <button type="button" onClick={() => alert('Saved to wishlist items bundle!')} className="text-purple-600 hover:underline cursor-pointer">Save</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pay-What-You-Want Direct Tip Component */}
        <div className="bg-purple-50 border-4 border-black p-6 rounded-[24px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <h4 className="text-lg font-black uppercase">☕ "Pay What You Want" Creator Support</h4>
              <p className="text-xs font-bold text-zinc-600">100% of this goes straight to fuel late-night dorm creation processes.</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-black text-lg text-zinc-700">$</span>
              <input
                type="number"
                min="0"
                value={supportTip}
                onChange={(e) => setSupportTip(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-16 bg-white border-2 border-black rounded-lg font-black font-mono text-center p-1.5 text-sm outline-none"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[0, 2, 5, 10].map((amt) => (
              <button key={amt} type="button" onClick={() => setSupportTip(amt)} className={`px-4 py-2 border-2 border-black rounded-lg font-black text-xs transition-all cursor-pointer ${supportTip === amt ? 'bg-black text-white' : 'bg-white text-black hover:bg-zinc-50'}`}>
                {amt === 0 ? 'No Tip' : `$${amt}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column Checkout Summary Panel Container (4 Columns) */}
      <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
        <div className="bg-white border-4 border-black p-6 rounded-[24px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-5">
          <h3 className="text-lg font-black uppercase border-b-4 border-black pb-2">Order Summary</h3>

          {/* Promo Input System */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-black uppercase text-zinc-400 tracking-wider">Apply Student Coupon</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="CAMPUS10"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-zinc-50 border-2 border-black font-black px-3 py-2 rounded-xl text-sm outline-none uppercase placeholder-zinc-400"
              />
              <button type="button" onClick={handleApplyPromo} className="bg-black text-white text-xs font-black px-4 py-2 border-2 border-black rounded-xl hover:bg-purple-600 transition-all cursor-pointer">Apply</button>
            </div>
            {discountApplied && <p className="text-[11px] font-black text-green-600">🎉 "CAMPUS10" applied! Save 10% off items</p>}
          </div>

          {/* Financial Breakdown Table lines */}
          <div className="space-y-2 border-t-2 border-dashed border-zinc-200 pt-4 font-bold text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-600">Items Subtotal:</span>
              <span className="font-mono text-zinc-900">${totals.subtotal.toFixed(2)}</span>
            </div>
            {discountApplied && (
              <div className="flex justify-between text-green-600">
                <span>10% Promo Deduction:</span>
                <span className="font-mono">-${totals.discountValue.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-zinc-500">Fulfillment Fee:</span>
              <span className="font-mono text-zinc-900">{totals.logisticsFee === 0 ? 'FREE' : `$${totals.logisticsFee.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Creator Support:</span>
              <span className="font-mono text-zinc-900">${Number(supportTip).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-black uppercase border-t-4 border-black pt-3 mt-2">
              <span>Final Total:</span>
              <span className="text-purple-600 font-mono text-lg">${totals.finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onNavigateNext}
            className="w-full bg-black text-white font-black py-3.5 border-2 border-black rounded-xl shadow-[4px_4px_0_0_rgba(147,51,234,1)] active:translate-y-0.5 active:shadow-none transition-all uppercase text-sm tracking-wide text-center cursor-pointer"
          >
            Secure Checkout ➔
          </button>
        </div>

        <TrustBadge />
      </div>
    </div>
  );
}