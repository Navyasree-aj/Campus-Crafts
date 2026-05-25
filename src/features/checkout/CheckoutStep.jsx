import React, { useState } from 'react';

export default function CheckoutStep({ totals, fulfillmentType, onBack, onComplete }) {
  // Logistics Address States
  const [fullName, setFullName] = useState('');
  const [campusAddress, setCampusAddress] = useState('');
  const [deliveryNotes, setDeliveryNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('razorpay'); // 'razorpay' | 'cod'

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!fullName || (fulfillmentType === 'delivery' && !campusAddress)) {
      alert('Please fill out the required checkout fields.');
      return;
    }
    onComplete({ fullName, campusAddress, deliveryNotes, paymentMethod });
  };

  return (
    /* Scaled outer grid container layouts from gap-20 down to gap-8 */
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Form Stream: Secure Credentials and Addresses (8 Columns) */}
      <form onSubmit={handleFormSubmission} className="lg:col-span-8 space-y-6">
        
        {/* Address & Operational Logistic Coordinates Forms */}
        {/* Adjusted padding from p-12 down to standard p-6 response sizes */}
        <div className="bg-white border-4 border-black p-6 rounded-[24px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-5">
          <h3 className="text-xl font-black uppercase tracking-tight">
            {fulfillmentType === 'pickup' ? '🤝 Meetup Hand-off Details' : '📦 Delivery Destination Logistics'}
          </h3>

          {/* Brought field layout grid gaps from gap-10 to gap-4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase tracking-wider text-zinc-500">Full Name (Matches ID)</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-zinc-50 border-2 border-black rounded-xl font-bold p-3 text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
              />
            </div>
            {fulfillmentType === 'delivery' && (
              <div className="space-y-1.5">
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-500">Dorm Room / Suite Residence Address</label>
                <input
                  type="text"
                  required
                  value={campusAddress}
                  onChange={(e) => setCampusAddress(e.target.value)}
                  placeholder="Sterling Hall, Suite 402B"
                  className="w-full bg-zinc-50 border-2 border-black rounded-xl font-bold p-3 text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                />
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-wider text-zinc-500">Special Instructions / Coordination Notes</label>
            <textarea
              rows="3"
              value={deliveryNotes}
              onChange={(e) => setDeliveryNotes(e.target.value)}
              placeholder="Leave package at package locker room desk, or text me when walking outside the main fountain..."
              className="w-full bg-zinc-50 border-2 border-black rounded-xl font-bold p-3 text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all resize-none"
            ></textarea>
          </div>
        </div>

        {/* Financial Gateways Payment Engine Section Layout */}
        <div className="bg-white border-4 border-black p-6 rounded-[24px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-4">
          <h3 className="text-xl font-black uppercase tracking-tight">💳 Select Payment Mechanism</h3>
          
          <div className="space-y-3">
            {/* Trimmed padding labels down to balanced text box layouts */}
            <label
              onClick={() => setPaymentMethod('razorpay')}
              className={`p-4 border-2 border-black rounded-xl flex items-center justify-between cursor-pointer transition-all ${paymentMethod === 'razorpay' ? 'bg-zinc-100 shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-black' : 'bg-white font-bold'}`}
            >
              <div className="flex items-center gap-3">
                <input type="radio" checked={paymentMethod === 'razorpay'} readOnly className="accent-black h-4 w-4 cursor-pointer" />
                <span className="text-sm uppercase tracking-tight">Razorpay Instant Engine (UPI, Cards, NetBanking)</span>
              </div>
              <span className="bg-purple-600 text-white font-black text-[10px] px-2 py-0.5 rounded">SECURE RAZORPAY</span>
            </label>

            <label
              onClick={() => setPaymentMethod('cod')}
              className={`p-4 border-2 border-black rounded-xl flex items-center justify-between cursor-pointer transition-all ${paymentMethod === 'cod' ? 'bg-zinc-100 shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-black' : 'bg-white font-bold'}`}
            >
              <div className="flex items-center gap-3">
                <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-black h-4 w-4 cursor-pointer" />
                <span className="text-sm uppercase tracking-tight">Pay on Hand-off (Cash / Venmo / UPI at Meetup)</span>
              </div>
              <span className="bg-zinc-700 text-white font-black text-[10px] px-2 py-0.5 rounded">LOCAL ONLY</span>
            </label>
          </div>
        </div>
      </form>

      {/* Right Core Sticky Totals Summary Box (4 Columns) */}
      <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
        <div className="bg-white border-4 border-black p-6 rounded-[24px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-5">
          <h3 className="text-lg font-black uppercase border-b-4 border-black pb-2">Final Review</h3>
          <div className="space-y-2 font-bold text-sm text-zinc-600">
            <div className="flex justify-between">
              <span>Fulfillment Protocol:</span>
              <span className="text-black uppercase font-black">{fulfillmentType}</span>
            </div>
            <div className="flex justify-between border-t border-dashed border-zinc-200 pt-3 text-base font-black text-black uppercase">
              <span>Final Charge:</span>
              <span className="text-purple-600 font-mono text-lg">${totals.finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={handleFormSubmission}
              className="w-full bg-purple-600 text-white font-black py-3.5 border-2 border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all uppercase text-sm tracking-wide cursor-pointer"
            >
              {paymentMethod === 'razorpay' ? '🚀 Load Razorpay API Frame' : '🤝 Finalize Meetup Order'}
            </button>
            <button type="button" onClick={onBack} className="w-full text-center font-black uppercase text-[11px] text-zinc-500 hover:text-black hover:underline cursor-pointer transition-colors">
              ⬅ Return to Edit Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}