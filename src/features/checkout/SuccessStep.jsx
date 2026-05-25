import React from 'react';

export default function SuccessStep({ summary, onReset }) {
  return (
    /* Reduced top/bottom spacing bounds from space-y-20 pb-24 down to clean dashboard grids */
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      
      {/* Primary Success Frame Header Card */}
      {/* Scaled padding from p-20 down to p-6 md:p-8 and text-6xl down to text-2xl */}
      <div className="bg-green-50 border-4 border-black p-6 md:p-8 rounded-[24px] text-center shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-4">
        <span className="text-5xl block animate-bounce">🎉</span>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">Order Confirmed & Locked!</h2>
        <p className="text-sm md:text-base font-bold text-zinc-700 max-w-xl mx-auto">
          Your reservation token <span className="text-purple-600 font-mono font-black bg-purple-50 px-1.5 py-0.5 border border-purple-200 rounded">{summary.orderNumber}</span> has been dispatched directly to the student creators.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <button 
            type="button"
            onClick={() => alert('Launching integrated real-time tracking engine maps...')} 
            className="bg-black text-white font-black text-xs uppercase tracking-wider px-5 py-3 border-2 border-black rounded-xl shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            📍 Open Real-Time Map Tracker
          </button>
          <button 
            type="button"
            onClick={onReset} 
            className="bg-white text-black font-black text-xs uppercase tracking-wider px-5 py-3 border-2 border-black rounded-xl shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-zinc-50 transition-colors cursor-pointer"
          >
            🛍️ Continue Shopping
          </button>
        </div>
      </div>

      {/* Dynamic Creator Personalized Letter Space Card */}
      <div className="space-y-3">
        <h3 className="text-lg font-black uppercase tracking-tight text-black">💬 Notes From Your Creators</h3>
        {/* Normalized grid gap from gap-10 to gap-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {summary.items.map((item) => (
            /* Scaled down item padding from p-10 to p-4 */
            <div key={item.id} className="bg-white border-4 border-black p-4 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] space-y-3">
              <div className="flex items-center gap-3">
                <img src={item.creator.avatar} alt={item.creator.name} className="w-10 h-10 rounded-full border-2 border-black object-cover flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-black text-base text-purple-600 truncate">{item.creator.name}</h4>
                  <p className="text-xs font-bold text-zinc-500 truncate">Creator of: {item.title}</p>
                </div>
              </div>
              <p className="text-xs bg-zinc-50 border border-black p-3 rounded-lg font-bold italic text-zinc-700 leading-relaxed">
                "{item.creator.note}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Overview Summary Bill breakdown lists */}
      {/* Sized container padding from p-14 down to clean p-5 specifications */}
      <div className="bg-white border-4 border-black p-5 md:p-6 rounded-[24px] shadow-[6px_6px_0_0_rgba(0,0,0,1)] space-y-4">
        <h3 className="text-lg font-black uppercase border-b-4 border-black pb-2 text-black">Order Configuration Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold">
          <div className="space-y-1">
            <span className="text-[10px] uppercase text-zinc-400 block font-black tracking-wider">Customer Details</span>
            <p className="text-black text-base font-black">{summary.billing.fullName}</p>
            <p className="text-zinc-600 text-xs uppercase font-mono tracking-tight">Fulfillment Protocol: {summary.fulfillment}</p>
          </div>
          <div className="space-y-1 md:text-right flex flex-col md:justify-end">
            <span className="text-[10px] uppercase text-zinc-400 block font-black tracking-wider">Settled Amount via {summary.billing.paymentMethod.toUpperCase()}</span>
            <p className="text-xl md:text-2xl font-black font-mono text-purple-600">${summary.totals.finalTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

    </div>
  );
}