import React from 'react';
import { mockSocialProofs } from '../../data/authMockData';

export default function AuthLeftHero() {
  return (
    <>
      {/* Upper Boundary: Logo & Subheading */}
      <div className="space-y-2 z-10">
        <div>
          <a href="/" className="text-2xl lg:text-3xl font-black uppercase tracking-tighter hover:text-purple-600 transition-colors flex-shrink-0">
            campus-crafts
          </a>
        </div>
        {/* Scaled text from text-lg to text-xs with proportional padding */}
        <div className="bg-black text-white font-black uppercase tracking-wider text-xs px-2.5 py-1 rounded-md inline-block">
          🛒 BUYER INTERFACE CHANNEL
        </div>
      </div>

      {/* Middle Core Area: Bold Slogans & Flat Artwork Insets */}
      <div className="space-y-4 z-10 my-6">
        {/* Adjusted headline scale from text-5xl down to text-3xl */}
        <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-black leading-tight">
          Skip Shipping.<br />
          Buy From the<br />
          <span className="text-purple-600">Dorm Next Door.</span>
        </h2>
        {/* Scaled context body text from text-xl down to text-sm */}
        <p className="font-bold text-zinc-700 text-sm lg:text-base max-w-sm leading-relaxed">
          A hyper-local student marketplace network pairing cutting-edge design aesthetics with face-to-face campus community trading circles.
        </p>
      </div>

      {/* Lower Boundary Section Frame: Rotating Neo-brutalist Social Testimonials Grid */}
      <div className="space-y-3 z-10">
        {/* Scaled tracker label from text-xl to text-xs */}
        <span className="text-xs font-black uppercase tracking-widest text-zinc-400 block">REAL CAMPUS EXPERIENCES</span>
        <div className="space-y-3">
          {mockSocialProofs.map((item) => (
            /* Brought testimonial body and card scaling down to standard proportions */
            <div key={item.id} className="bg-white border-2 border-black p-3.5 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] space-y-1.5">
              <p className="text-sm font-bold italic text-zinc-700">"{item.quote}"</p>
              <div className="flex items-center gap-2 pt-0.5">
                <img src={item.avatar} alt={item.buyer} className="w-4 h-4 rounded-full border border-black object-cover" />
                <span className="text-xs font-black uppercase text-zinc-400">{item.buyer}</span>
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