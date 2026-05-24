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
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12 animate-fadeIn">

      <button 
        onClick={onBackToHome}
        className="inline-flex items-center gap-3 text-base md:text-lg font-black bg-white border-2 border-black px-5 py-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all"
      >
        ⬅ Back to Campus Feed
      </button>

      <div className="flex flex-wrap gap-4 items-center">
        <span className="bg-amber-100 border border-black text-sm md:text-base font-black px-4 py-2 rounded-full uppercase tracking-wider">
          🔥 Active Discovery
        </span>
        {displayProduct.tags.map(t => (
          <span key={t} className="text-base md:text-lg font-bold text-zinc-600 hover:underline cursor-pointer">{t}</span>
        ))}
      </div>

      <div className="space-y-10">
        <ImageGallery images={displayProduct.images} />

        <PurchaseAction product={displayProduct} />

        <CreatorProfile creator={displayProduct.creator} />

        <LocalCommerce info={displayProduct.localInfo} />

        <div className="bg-white border-2 border-black p-8 md:p-10 rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-black text-2xl md:text-3xl uppercase tracking-wider text-black mb-5">The Slow-Made Backstory</h3>
          <p className="text-base md:text-lg font-medium text-zinc-800 leading-relaxed mb-6">
            {displayProduct.description}
          </p>
          <div className="bg-zinc-50 border-l-4 border-black p-5 rounded-r-2xl italic text-base text-zinc-600 font-medium">
            "{displayProduct.story}"
          </div>
        </div>

        <TrustSocial reviews={displayProduct.reviews} btsVideo={displayProduct.btsVideo} />

        <div className="bg-amber-100 p-5 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <strong className="text-sm md:text-base font-black block text-black">Want different colorways?</strong>
              <span className="text-sm font-medium text-zinc-700">Request bespoke variants from creator.</span>
            </div>
            <button className="bg-white border-2 border-black text-black font-black text-sm px-4 py-2 rounded-2xl">
              Custom Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}