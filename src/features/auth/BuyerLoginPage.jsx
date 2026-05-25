import React, { useState } from 'react';
import AuthLeftHero from './AuthLeftHero';
import { mockCampusHubs } from '../../data/authMockData';

export default function BuyerLoginPage({ onLoginSuccess, onSwitchToSignUp }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 4) {
      alert('Password must be at least 4 characters long.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      
      const authenticatedUser = {
        uid: "usr_" + Math.random().toString(36).substr(2, 9),
        username: username,
        phone: email, 
        campusHub: selectedCampus || "Stanford University (Main Quad)",
        isAuthenticated: true
      };

      if (onLoginSuccess) {
        onLoginSuccess(authenticatedUser);
      }
    }, 800);
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFDF9] text-black flex items-stretch animate-fadeIn">
      
      {/* Left Feature Column Banner */}
      <div className="hidden lg:flex lg:w-5/12 bg-purple-50 border-r-4 border-black p-8 flex-col justify-between relative overflow-hidden select-none">
        <AuthLeftHero />
      </div>

      {/* Right Form Component Workspace */}
      <main className="w-full lg:w-7/12 flex flex-col justify-center items-center px-4 py-8 lg:px-12">
        {/* Brought max-width down to a clean, standard dashboard form width */}
        <div className="w-full max-w-lg space-y-6">
          
          <div className="text-center lg:text-left space-y-2">
            {/* Adjusted typography scales to look crisp at 100% */}
            <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight leading-none">
              Enter Campus Hub
            </h1>
            <p className="text-zinc-600 font-bold text-sm lg:text-base leading-relaxed">
              Unlock access to exclusive local drops, safe meetup trades, and nearby student creator studios.
            </p>
          </div>

          {/* Adjusted padding from p-10 down to responsive padding */}
          <div className="bg-white border-4 border-black p-6 md:p-8 rounded-[24px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transition-all">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Field 1: Campus Picker Node */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-500">Your College / Campus Zone</label>
                <select
                  required
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  className="w-full bg-zinc-50 border-4 border-black p-3 rounded-xl font-black text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all cursor-pointer"
                >
                  <option value="" disabled>Select your nearby campus network hub...</option>
                  {mockCampusHubs.map((campus) => (
                    <option key={campus.id} value={campus.name}>{campus.name}</option>
                  ))}
                </select>
              </div>

              {/* Field 2: Verified Email Inset */}
              <div className="space-y-1.5">
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-500">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="student@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-50 border-4 border-black p-3 rounded-xl font-bold text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                />
              </div>

              {/* Row Grid: Username and Password fields grouped side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-black uppercase tracking-wider text-zinc-500">Username</label>
                  <input
                    type="text"
                    required
                    placeholder="studious_crafter"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-zinc-50 border-4 border-black p-3 rounded-xl font-bold text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-black uppercase tracking-wider text-zinc-500">Secure Password</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-zinc-50 border-4 border-black p-3 rounded-xl font-bold text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                  />
                </div>
              </div>

              {/* Proportional CTA Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white font-black py-3.5 border-4 border-black rounded-xl shadow-[4px_4px_0_0_rgba(147,51,234,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-purple-600 transition-all uppercase tracking-wide text-sm text-center cursor-pointer mt-2"
              >
                {loading ? 'Authenticating...' : 'Secure Access & Enter Hub ➔'}
              </button>
            </form>

            {/* Switch link panel */}
            <div className="text-center mt-6 pt-4 border-t-4 border-dashed border-black">
              <p className="text-xs md:text-sm font-bold text-zinc-600">
                New to campus-crafts?{' '}
                <button
                  type="button"
                  onClick={onSwitchToSignUp}
                  className="font-black text-purple-600 hover:underline uppercase tracking-tight cursor-pointer focus:outline-none"
                >
                  Create an Account Here
                </button>
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}