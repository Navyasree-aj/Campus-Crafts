import React from 'react';

export default function TrustBadge() {
  return (
    /* Compressed padding down from p-6 to p-3, and lowered corner roundness from 3xl to xl */
    <div className="bg-zinc-950 text-white p-3 rounded-xl space-y-2 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
      
      {/* Header Metric */}
      <h4 className="text-[10px] font-black uppercase tracking-wider text-purple-400 flex items-center gap-1">
        🛡️ Campus Protection Protocols
      </h4>
      
      {/* Informational Protection Vectors */}
      {/* Replaced thick space-y gap stacks with custom divider lines for a cleaner layout */}
      <div className="divide-y divide-zinc-800 text-[10px] font-medium text-zinc-400">
        
        {/* Vector Element 1 */}
        <div className="flex items-start gap-1.5 pb-2">
          <span className="text-xs pt-0.5 flex-shrink-0">🎓</span>
          <p className="leading-normal">
            <span className="text-zinc-200 font-black uppercase tracking-tight text-[9px] block sm:inline mr-1">
              Verified Student Network:
            </span> 
            Every creator undergoes manual institutional portal validation checks.
          </p>
        </div>
        
        {/* Vector Element 2 */}
        <div className="flex items-start gap-1.5 pt-2">
          <span className="text-xs pt-0.5 flex-shrink-0">🤝</span>
          <p className="leading-normal">
            <span className="text-zinc-200 font-black uppercase tracking-tight text-[9px] block sm:inline mr-1">
              Safe Escrow Release:
            </span> 
            Funds remain protected until you confirm physical exchange collection.
          </p>
        </div>

      </div>
    </div>
  );
}