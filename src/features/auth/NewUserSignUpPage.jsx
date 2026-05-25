import React, { useState } from 'react';

export default function NewUserSignUpPage({ onSignUpSuccess, onSwitchToLogin }) {
  // 1. Account creation states
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic layout verification checks
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid institutional student email address.');
      return;
    }
    if (password.length < 6) {
      alert('Security policy requires passwords to be at least 6 characters long.');
      return;
    }
    if (!agreeToTerms) {
      alert('You must accept the Campus Safety Terms to create an account.');
      return;
    }

    setLoading(true);

    // Simulate database registration speed
    setTimeout(() => {
      setLoading(false);
      
      const newCreatedUser = {
        username: username,
        phone: email, // Transparently links email fallback strings to layout tags
        campusHub: "Stanford University (Main Quad)",
        isAuthenticated: true
      };

      if (onSignUpSuccess) {
        onSignUpSuccess(newCreatedUser);
      }
    }, 900);
  };

  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center px-4 py-8">
      
      {/* CARD WRAPPER: Calibrated width constraint down from max-w-6xl to max-w-lg */}
      <div className="w-full max-w-lg bg-[#FFFDF9]/95 backdrop-blur-sm border-4 border-black p-6 md:p-8 rounded-[24px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Header Block with Crisp Typography */}
        <div className="text-center mb-6 space-y-1.5">
          <h2 className="text-3xl font-black uppercase tracking-tight text-black">
            Create Account
          </h2>
          <p className="text-zinc-600 font-bold text-sm">
            Join your local campus market network today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* FIELD 1: Verified Email Input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-wider text-black">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="yourname@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border-4 border-black p-3 rounded-xl font-bold text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:bg-purple-50/30 transition-all placeholder-zinc-400"
            />
            <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-tight pt-0.5">
              💡 Must be a valid university domain address for marketplace verification.
            </p>
          </div>

          {/* FIELD 2: Choose Username */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-wider text-black">
              Choose Username
            </label>
            <input
              type="text"
              required
              placeholder="e.g., thrifty_student"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white border-4 border-black p-3 rounded-xl font-bold text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:bg-purple-50/30 transition-all placeholder-zinc-400"
            />
          </div>

          {/* FIELD 3: Create Password */}
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-wider text-black">
              Create Secure Password
            </label>
            <input
              type="password"
              required
              placeholder="minimum 6 characters..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border-4 border-black p-3 rounded-xl font-bold text-base outline-none shadow-[2px_2px_0_0_rgba(0,0,0,1)] focus:shadow-[4px_4px_0_0_rgba(0,0,0,1)] focus:bg-purple-50/30 transition-all"
            />
          </div>

          {/* TERMS AGREEMENT: Sized checkbox block down for fine alignment */}
          <div className="flex items-start pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-5 h-5 border-4 border-black bg-white rounded accent-purple-600 cursor-pointer mt-0.5 flex-shrink-0"
              />
              <span className="text-xs font-black uppercase text-zinc-700 leading-snug">
                I agree to the local campus safety code & buyer verification policies.
              </span>
            </label>
          </div>

          {/* ACTION: Recalibrated Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-black text-sm py-3.5 px-6 border-4 border-black rounded-xl shadow-[4px_4px_0_0_rgba(147,51,234,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-purple-600 transition-all uppercase tracking-wide cursor-pointer text-center mt-2"
          >
            {loading ? 'Generating Security Token Profile...' : 'Complete Registration ➔'}
          </button>

        </form>

        {/* FOOTER SWITCHER: Proportional links back to standard login routes */}
        <div className="text-center mt-6 pt-4 border-t-4 border-dashed border-zinc-200">
          <p className="text-xs md:text-sm font-bold text-zinc-600">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="font-black text-purple-600 hover:underline uppercase tracking-tight cursor-pointer focus:outline-none"
            >
              Log In Here
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}