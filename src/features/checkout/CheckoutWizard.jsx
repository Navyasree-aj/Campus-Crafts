import React, { useState } from 'react';
import CartStep from './CartStep';
import CheckoutStep from './CheckoutStep';
import SuccessStep from './SuccessStep';
import { initialCartItems } from '../../data/checkoutMockData';

export default function CheckoutWizard() {
  const [step, setStep] = useState('cart'); // 'cart' | 'checkout' | 'success'
  const [cart, setCart] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [fulfillmentType, setFulfillmentType] = useState('pickup'); // 'pickup' | 'delivery'
  const [supportTip, setSupportTip] = useState(5); // "Pay What You Want" direct creator support tip
  const [orderSummary, setOrderSummary] = useState(null);

  // Core Subtotal Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const logisticsFee = fulfillmentType === 'delivery' ? 5.99 : 0.00;
  const discountValue = discountApplied ? subtotal * 0.10 : 0; // 10% coupon code off base items
  const finalTotal = subtotal + logisticsFee + Number(supportTip) - discountValue;

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const nextQty = item.quantity + delta;
        if (nextQty > 0 && nextQty <= item.maxStock) {
          return { ...item, quantity: nextQty };
        }
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'CAMPUS10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid code! Try "CAMPUS10" for a 10% student discount.');
    }
  };

  const handleCompleteOrder = (billingDetails) => {
    setOrderSummary({
      items: [...cart],
      totals: { subtotal, logisticsFee, supportTip, discountValue, finalTotal },
      fulfillment: fulfillmentType,
      billing: billingDetails,
      orderNumber: `CC-${Math.floor(100000 + Math.random() * 900000)}`
    });
    setStep('success');
  };

  return (
    <div className="w-full bg-[#FFFDF9] min-h-screen">
      {/* Structural Wizard Progress Tracker */}
      <div className="w-full border-b-4 border-black bg-white py-10 px-12 sticky top-[88px] z-20">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-4 font-black uppercase text-lg md:text-xl">
            <span className={`px-5 py-3 border-2 border-black rounded-xl ${step === 'cart' ? 'bg-purple-600 text-white' : 'bg-zinc-150'}`}>1. Review Bag</span>
            <span className="text-zinc-600">➔</span>
            <span className={`px-5 py-3 border-2 border-black rounded-xl ${step === 'checkout' ? 'bg-purple-600 text-white' : 'bg-zinc-150'}`}>2. Secure Checkout</span>
            <span className="text-zinc-600">➔</span>
            <span className={`px-5 py-3 border-2 border-black rounded-xl ${step === 'success' ? 'bg-green-500 text-white' : 'bg-zinc-150'}`}>3. Meetup Set</span>
          </div>
          <div className="hidden sm:block font-mono font-black text-2xl bg-yellow-300 px-6 py-3 border-2 border-black rounded-xl shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            Est. Total: ${finalTotal.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Render Steps Matrix Contextually */}
      <div className="max-w-[1600px] mx-auto px-12 py-20">
        {step === 'cart' && (
          <CartStep
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            handleApplyPromo={handleApplyPromo}
            discountApplied={discountApplied}
            fulfillmentType={fulfillmentType}
            setFulfillmentType={setFulfillmentType}
            supportTip={supportTip}
            setSupportTip={setSupportTip}
            totals={{ subtotal, logisticsFee, discountValue, finalTotal }}
            onNavigateNext={() => setStep('checkout')}
          />
        )}

        {step === 'checkout' && (
          <CheckoutStep
            totals={{ subtotal, logisticsFee, discountValue, finalTotal }}
            fulfillmentType={fulfillmentType}
            onBack={() => setStep('cart')}
            onComplete={handleCompleteOrder}
          />
        )}

        {step === 'success' && orderSummary && (
          <SuccessStep 
            summary={orderSummary} 
            onReset={() => {
              setCart([]);
              setStep('cart');
            }} 
          />
        )}
      </div>
    </div>
  );
}