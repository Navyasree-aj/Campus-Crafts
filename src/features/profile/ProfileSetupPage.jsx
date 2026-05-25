import React, { useState } from 'react';

export default function ProfileSetupPage({ currentUser, onSaveSuccess }) {
  // Local high-density input form states
  const [username, setUsername] = useState(currentUser?.username || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [campusHub, setCampusHub] = useState(currentUser?.campusHub || 'Main Quad Hub');
  const [avatarUrl, setAvatarUrl] = useState(currentUser?.img || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80');
  const [bio, setBio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct updated profile transaction payload
    const updatedUserData = {
      ...currentUser,
      isAuthenticated: true,
      username,
      phone,
      campusHub,
      img: avatarUrl,
      bio
    };

    alert('Profile parameters calibrated successfully!');
    if (onSaveSuccess) onSaveSuccess(updatedUserData);
  };

  return (
    <main className="w-full max-w-xl mx-auto px-4 py-6 text-black">
      <div className="bg-white border-4 border-black p-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Header Block */}
        <div className="border-b-2 border-black pb-3 mb-4">
          <h1 className="text-base font-black uppercase tracking-wider">👤 Calibrate Account Profile</h1>
          <p className="text-[11px] font-bold text-zinc-500 mt-0.5">Set up your campus identity nodes to begin trading.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Avatar Preview & Selection Node */}
          <div className="flex items-center gap-4 p-3 bg-zinc-50 border-2 border-dashed border-black rounded-lg">
            <img 
              src={avatarUrl} 
              alt="Profile preview avatar" 
              className="w-14 h-14 rounded-full border-2 border-black object-cover bg-white"
            />
            <div className="flex-1 space-y-1">
              <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-600">Avatar Image Pointer URL</label>
              <input 
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                className="w-full bg-white border-2 border-black px-2 py-1 text-xs font-mono rounded focus:bg-purple-50 outline-none"
                placeholder="https://..."
              />
            </div>
          </div>

          {/* Grid Layout Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-600">Handle / Handle Name</label>
              <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white border-2 border-black px-2 py-1.5 text-xs font-bold rounded focus:bg-purple-50 outline-none"
                placeholder="e.g., alex_drops"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-600">Institutional Phone / LINE</label>
              <input 
                type="text" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border-2 border-black px-2 py-1.5 text-xs font-bold rounded focus:bg-purple-50 outline-none"
                placeholder="+1 (555) 019-2834"
              />
            </div>
          </div>

          {/* Location Campus Hub Select Element */}
          <div className="space-y-1">
            <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-600">Primary Delivery Hub Node</label>
            <select 
              value={campusHub} 
              onChange={(e) => setCampusHub(e.target.value)}
              className="w-full bg-white border-2 border-black px-2 py-1.5 text-xs font-black rounded focus:bg-purple-50 outline-none cursor-pointer"
            >
              <option value="Main Quad Hub">🏫 Main Quad Hub (North Campus)</option>
              <option value="Engineering Commons">🧪 Engineering Commons Plaza</option>
              <option value="Library Vault Square">📚 Library Vault Square</option>
              <option value="Athletics Field Complex">🏃 Athletics Field Complex</option>
            </select>
          </div>

          {/* Mini Bio TextArea */}
          <div className="space-y-1">
            <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-600">Creator Exchange Bio Statement</label>
            <textarea 
              rows="2"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full bg-white border-2 border-black p-2 text-xs font-medium rounded focus:bg-purple-50 outline-none resize-none"
              placeholder="Tell other students what you design, craft, or collect..."
            />
          </div>

          {/* Action Call to Button */}
          <button 
            type="submit"
            className="w-full bg-emerald-300 hover:bg-emerald-400 border-2 border-black text-xs font-black py-2 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer uppercase tracking-wider"
          >
            Save & Finalize Profile Node
          </button>

        </form>
      </div>
    </main>
  );
}