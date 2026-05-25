import React from 'react';

export default function TrustBadge() {
  return (
    <div className="bg-zinc-900 text-white p-6 rounded-3xl space-y-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
      <h4 className="text-xs font-black uppercase tracking-widest text-purple-400">🛡 Campus Protection Protocols</h4>
      <div className="space-y-3 text-xs font-bold text-zinc-300">
        <div className="flex items-start gap-2">
          <span className="text-base">🎓</span>
          <p><span className="text-white font-black">Verified Student Network:</span> Every creator undergoes manual institutional phone and portal validation check flags.</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-base">🤝</span>
          <p><span className="text-white font-black">Safe Escrow Release:</span> Funds remain protected under marketplace escrow safeguards until you confirm physical exchange collection.</p>
        </div>
      </div>
    </div>
  );
}