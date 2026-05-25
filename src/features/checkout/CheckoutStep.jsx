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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
      {/* Left Form Stream: Secure Credentials and Addresses (8 Columns) */}
      <form onSubmit={handleFormSubmission} className="lg:col-span-8 space-y-14">
        
        {/* Address & Operational Logistic Coordinates Forms */}
        <div className="bg-white border-4 border-black p-12 rounded-[32px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-8">
          <h3 className="text-4xl font-black uppercase tracking-tight">
            {fulfillmentType === 'pickup' ? '🤝 Meetup Hand-off Details' : '📦 Delivery Destination Logistics'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
<label className="block text-base font-black uppercase text-zinc-800">Full Name (Matches ID)</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-zinc-50 border-2 border-black rounded-2xl font-black p-4 text-base outline-none"
              />
            </div>
            {fulfillmentType === 'delivery' && (
              <div className="space-y-3">
                <label className="block text-base font-black uppercase text-zinc-800">Dorm Room / Suite Residence Address</label>
                <input
                  type="text"
                  required
                  value={campusAddress}
                  onChange={(e) => setCampusAddress(e.target.value)}
                  placeholder="Sterling Hall, Suite 402B"
                  className="w-full bg-zinc-50 border-2 border-black rounded-2xl font-black p-4 text-base outline-none"
                />
              </div>
            )}
          </div>

          <div className="space-y-3">
            <label className="block text-base font-black uppercase text-zinc-800">Special Instructions / Coordination Notes</label>
            <textarea
              rows="4"
              value={deliveryNotes}
              onChange={(e) => setDeliveryNotes(e.target.value)}
              placeholder="Leave package at package locker room desk, or text me when walking outside the main fountain..."
              className="w-full bg-zinc-50 border-2 border-black rounded-2xl font-black p-4 text-base outline-none"
            ></textarea>
          </div>
        </div>

        {/* Financial Gateways Payment Engine Section Layout */}
        <div className="bg-white border-4 border-black p-12 rounded-[32px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-8">
          <h3 className="text-4xl font-black uppercase tracking-tight">💳 Select Payment Mechanism</h3>
          
          <div className="space-y-6">
            <label
              onClick={() => setPaymentMethod('razorpay')}
              className={`p-8 border-2 border-black rounded-2xl flex items-center justify-between cursor-pointer transition-all ${paymentMethod === 'razorpay' ? 'bg-zinc-100 shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-black' : 'bg-white font-bold'}`}
            >
              <div className="flex items-center gap-3">
                <input type="radio" checked={paymentMethod === 'razorpay'} readOnly className="accent-black h-4 w-4" />
                <span className="text-base uppercase tracking-tight">Razorpay Instant Engine (UPI, Cards, NetBanking)</span>
              </div>
              <span className="bg-purple-600 text-white font-black text-xs px-2.5 py-1 rounded">SECURE RAZORPAY</span>
            </label>

            <label
              onClick={() => setPaymentMethod('cod')}
              className={`p-6 border-2 border-black rounded-2xl flex items-center justify-between cursor-pointer transition-all ${paymentMethod === 'cod' ? 'bg-zinc-100 shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-black' : 'bg-white font-bold'}`}
            >
              <div className="flex items-center gap-3">
                <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-black h-4 w-4" />
                <span className="text-base uppercase tracking-tight">Pay on Hand-off (Cash / Venmo / UPI at Meetup)</span>
              </div>
              <span className="bg-zinc-700 text-white font-black text-xs px-2.5 py-1 rounded">LOCAL ONLY</span>
            </label>
          </div>
        </div>
      </form>

      {/* Right Core Sticky Totals Summary Box (4 Columns) */}
      <div className="lg:col-span-4 lg:sticky lg:top-40 space-y-8">
        <div className="bg-white border-4 border-black p-12 rounded-3xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-8">
          <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-4">Final Review</h3>
          <div className="space-y-4 font-bold text-base text-zinc-600">
            <div className="flex justify-between">
              <span>Fulfillment Protocol:</span>
              <span className="text-black uppercase font-black">{fulfillmentType}</span>
            </div>
            <div className="flex justify-between border-t border-dashed border-zinc-200 pt-3 text-lg font-black text-black uppercase">
              <span>Final Charge:</span>
              <span className="text-purple-600 font-mono">${totals.finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="pt-3 flex flex-col gap-4">
            <button
              type="button"
              onClick={handleFormSubmission}
              className="w-full bg-purple-600 text-white font-black py-5 border-2 border-black rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all uppercase text-lg tracking-wide"
            >
              {paymentMethod === 'razorpay' ? '🚀 Load Razorpay API Frame' : '🤝 Finalize Meetup Order'}
            </button>
            <button type="button" onClick={onBack} className="w-full text-center font-black uppercase text-sm text-zinc-700 hover:underline">
              ⬅ Return to Edit Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}