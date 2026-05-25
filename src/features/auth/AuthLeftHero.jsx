import React from 'react';
import { mockSocialProofs } from '../../data/authMockData';

export default function AuthLeftHero() {
  return (
    <>
      {/* Upper Boundary: Logo & Subheading */}
      <div className="space-y-3 z-10">
        <div className="text-5xl font-black uppercase tracking-tighter">
           <a href="/" className="text-3xl lg:text-4xl font-black uppercase tracking-tighter hover:text-purple-600 transition-colors flex-shrink-0">
          campus<span className="text-black-600">-crafts</span>
        </a>
        </div>
        <div className="bg-black text-white font-black uppercase tracking-wider text-lg px-3 py-1 rounded-md inline-block">
          🛒 BUYER INTERFACE CHANNEL
        </div>
      </div>

      {/* Middle Core Area: Bold Slogans & Flat Artwork Insets */}
      <div className="space-y-6 z-10 my-8">
        <h2 className="text-5xl font-black uppercase tracking-tight text-black leading-none">
          Skip Shipping.<br />
          Buy From the<br />
          <span className="text-purple-600">Dorm Next Door.</span>
        </h2>
        <p className="font-bold text-zinc-700 text-xl max-w-sm">
          A hyper-local student marketplace network pairing cutting-edge design aesthetics with face-to-face campus community trading circles.
        </p>
      </div>

      {/* Lower Boundary Section Frame: Rotating Neo-brutalist Social Testimonials Grid */}
      <div className="space-y-4 z-10">
        <span className="text-xl font-black uppercase tracking-widest text-zinc-400 block">REAL CAMPUS EXPERIENCES</span>
        <div className="space-y-4">
          {mockSocialProofs.map((item) => (
            <div key={item.id} className="bg-white border-2 border-black p-4 rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] space-y-2">
              <p className="text-xl font-bold italic text-zinc-700">"{item.quote}"</p>
              <div className="flex items-center gap-2 pt-1">
                <img src={item.avatar} alt={item.buyer} className="w-5 h-5 rounded-full border border-black object-cover" />
                <span className="text-lg font-black uppercase text-zinc-500">{item.buyer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Retro background art patterns */}
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-purple-200/50 rounded-full blur-2xl pointer-events-none"></div>
    </>
  );
}