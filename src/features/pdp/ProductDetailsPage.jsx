import React from 'react';
import { mockProduct } from '../../data/pdpMockData';
import ImageGallery from './ImageGallery';
import PurchaseAction from './PurchaseAction';
import CreatorProfile from './CreatorProfile';
import LocalCommerce from './LocalCommerce';
import TrustSocial from './TrustSocial';

export default function ProductDetailsPage({ product, onBackToHome }) {
  // If a product was clicked from the homepage, substitute its live values cleanly!
  // Otherwise, default gracefully back to our rich mock product archetype details.
  const displayProduct = {
    ...mockProduct,
    title: product ? product.title : mockProduct.title,
    price: product ? product.price : mockProduct.price,
    // Inject the clicked homepage image as the primary image item in the gallery sequence
    images: product ? [product.img, ...mockProduct.images.slice(1)] : mockProduct.images
  };

  return (
    /* Aligned structural container boundaries from max-w-7xl down to standard max-w-6xl proportions */
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 space-y-6 animate-fadeIn text-black">

      {/* Return Navigation Anchor Button - Calibrated down to text-xs with tight padding controls */}
      <button 
        type="button"
        onClick={onBackToHome}
        className="inline-flex items-center gap-2 text-xs font-black bg-white border-2 border-black px-4 py-2 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-wide cursor-pointer"
      >
        ⬅ Back to Feed
      </button>

      {/* Tag Metadata Row - Sized down discovery labels */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="bg-amber-100 border-2 border-black text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wide">
          🔥 Active Discovery
        </span>
        {displayProduct.tags.map(t => (
          <span key={t} className="text-xs font-black text-zinc-500 hover:text-black hover:underline cursor-pointer transition-colors">
            #{t}
          </span>
        ))}
      </div>

      {/* Split-Layout Matrix Container */}
      {/* Converted simple block stack into an efficient 12-column layout grid on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT STREAM COLUMN: Product Visuals Presentation Frame (5 Columns) */}
        <div className="lg:col-span-5 space-y-4">
          <ImageGallery images={displayProduct.images} />
        </div>

        {/* RIGHT STREAM COLUMN: Commercial Engines, Profiles, & Logistics (7 Columns) */}
        <div className="lg:col-span-7 space-y-5">
          <PurchaseAction product={displayProduct} />
          <CreatorProfile creator={displayProduct.creator} />
          <LocalCommerce info={displayProduct.localInfo} />
          
          {/* Product Backstory Card - Adjusted text-3xl to clear text-base / text-sm bounds */}
          <div className="bg-white border-4 border-black p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
            <h3 className="font-black text-base uppercase tracking-tight text-black">The Slow-Made Backstory</h3>
            <p className="text-xs font-bold text-zinc-700 leading-relaxed">
              {displayProduct.description}
            </p>
            <div className="bg-zinc-50 border-l-4 border-black p-3.5 rounded-r-xl italic text-xs text-zinc-600 font-bold leading-normal">
              "{displayProduct.story}"
            </div>
          </div>

          <TrustSocial reviews={displayProduct.reviews} btsVideo={displayProduct.btsVideo} />

          {/* Bespoke Creator Commission Module */}
          <div className="bg-amber-100 p-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <strong className="text-xs font-black block text-black uppercase tracking-tight">Want different colorways?</strong>
                <span className="text-xs font-bold text-zinc-700">Request bespoke variants directly from the creator.</span>
              </div>
              <button 
                type="button"
                className="bg-white hover:bg-zinc-50 text-black border-2 border-black font-black text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                Custom Request
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}