import React, { useState } from 'react';
import AuthLeftHero from './AuthLeftHero';
import { mockCampusHubs } from '../../data/authMockData';

export default function BuyerLoginPage({ onLoginSuccess }) {
  // Simple credential collection states
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Quick validation check to guarantee email looks like an institutional student profile
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 4) {
      alert('Password must be at least 4 characters long.');
      return;
    }

    setLoading(true);

    // Simulate safe server latency authorization processing
    setTimeout(() => {
      setLoading(false);
      
      const authenticatedUser = {
        uid: "usr_" + Math.random().toString(36).substr(2, 9),
        username: username,
        phone: email, // Maps email identifier parameter seamlessly into fallback display chips
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
      <div className="hidden lg:flex lg:w-5/12 bg-purple-50 border-r-4 border-black p-12 flex-col justify-between relative overflow-hidden select-none">
        <AuthLeftHero />
      </div>

      {/* Right Form Component Workspace */}
      <main className="w-full lg:w-7/12 flex flex-col justify-center items-center px-6 py-12 lg:px-16">
        <div className="w-full max-w-2xl space-y-10">
          
          <div className="text-center lg:text-left space-y-4">
            {/* Header titles increased to text-5xl and text-6xl */}
            <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              Enter Campus Hub
            </h1>
            {/* Context descriptions increased to text-lg */}
            <p className="text-zinc-600 font-bold text-lg lg:text-xl leading-relaxed">
              Unlock access to exclusive local drops, safe meetup trades, and nearby student creator studios.
            </p>
          </div>

          <div className="bg-white border-4 border-black p-10 rounded-[32px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative transition-all">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Field 1: Campus Picker Node */}
              <div className="space-y-2">
                {/* Inputs labels increased to text-sm and tracking-wide */}
                <label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Your College / Campus Zone</label>
                <select
                  required
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  className="w-full bg-zinc-50 border-4 border-black p-4 rounded-xl font-black text-lg outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all cursor-pointer"
                >
                  <option value="" disabled>Select your nearby campus network hub...</option>
                  {mockCampusHubs.map((campus) => (
                    <option key={campus.id} value={campus.name}>{campus.name}</option>
                  ))}
                </select>
              </div>

              {/* Field 2: Verified Email Inset */}
              <div className="space-y-2">
                <label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="student@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-50 border-4 border-black p-4 rounded-xl font-bold text-lg outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                />
              </div>

              {/* Row Grid: Username and Password fields grouped side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Username</label>
                  <input
                    type="text"
                    required
                    placeholder="studious_crafter"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-zinc-50 border-4 border-black p-4 rounded-xl font-bold text-lg outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-black uppercase tracking-wider text-zinc-500">Secure Password</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-zinc-50 border-4 border-black p-4 rounded-xl font-bold text-lg outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
                  />
                </div>
              </div>

            

              {/* Massive CTA Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white font-black py-5 border-4 border-black rounded-xl shadow-[6px_6px_0_0_rgba(147,51,234,1)] active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-purple-600 transition-all uppercase tracking-wide text-base text-center cursor-pointer"
              >
                {loading ? 'Authenticating Campus Profile Tokens...' : 'Secure Secure Access & Enter Hub ➔'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}