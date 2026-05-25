import React from 'react';

export default function SuccessStep({ summary, onReset }) {
  return (
    <div className="max-w-[1600px] mx-auto space-y-20 pb-24 px-6 sm:px-8 lg:px-0">
      {/* Primary Success Frame Header Card */}
      <div className="bg-green-50 border-4 border-black p-20 rounded-[32px] text-center shadow-[8px_8px_0_0_rgba(0,0,0,1)] space-y-8">
        <span className="text-9xl block animate-bounce">🎉</span>
        <h2 className="text-6xl font-black uppercase tracking-tight">Order Confirmed & Locked!</h2>
        <p className="text-2xl font-bold text-zinc-700">
          Your reservation token <span className="text-purple-600 font-mono font-black">{summary.orderNumber}</span> has been dispatched directly to the student creators.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-6">
          <button onClick={() => alert('Launching integrated real-time tracking engine maps...')} className="bg-black text-white font-black text-base px-10 py-5 border-2 border-black rounded-[28px] shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            📍 Open Real-Time Map Tracker
          </button>
          <button onClick={onReset} className="bg-white text-black font-black text-base px-10 py-5 border-2 border-black rounded-[28px] shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            🛍️ Continue Shopping
          </button>
        </div>
      </div>

      {/* Dynamic Creator Personalized Letter Space Card */}
      <div className="space-y-8">
        <h3 className="text-4xl font-black uppercase tracking-tight">💬 Notes From Your Creators</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {summary.items.map((item) => (
            <div key={item.id} className="bg-white border-4 border-black p-10 rounded-3xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] space-y-6">
              <div className="flex items-center gap-4">
                <img src={item.creator.avatar} alt={item.creator.name} className="w-16 h-16 rounded-full border-2 border-black object-cover" />
                <div>
                  <h4 className="font-black text-2xl text-purple-600 leading-none">{item.creator.name}</h4>
                  <span className="text-base font-bold text-zinc-800">Creator of: {item.title.substring(0, 24)}...</span>
                </div>
              </div>
              <p className="text-base bg-zinc-50 border border-black p-6 rounded-3xl font-black italic text-zinc-800 leading-relaxed">
                "{item.creator.note}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Overview Summary Bill breakdown lists */}
      <div className="bg-white border-4 border-black p-14 rounded-[32px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-6">
        <h3 className="text-3xl font-black uppercase border-b-2 border-black pb-4">Order Configuration Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base font-bold">
          <div className="space-y-3">
            <span className="text-sm uppercase text-zinc-600 block font-black">Customer Details</span>
            <p className="text-black text-xl">{summary.billing.fullName}</p>
            <p className="text-zinc-700 text-sm uppercase font-mono">Fulfillment Protocol: {summary.fulfillment}</p>
          </div>
          <div className="space-y-3 md:text-right">
            <span className="text-sm uppercase text-zinc-600 block font-black">Settled Amount via {summary.billing.paymentMethod.toUpperCase()}</span>
            <p className="text-3xl font-black font-mono text-purple-600">${summary.totals.finalTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}