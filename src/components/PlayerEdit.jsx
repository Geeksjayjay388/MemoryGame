import React, { useState } from 'react';

const PlayerEdit = ({ player, onSave, onCancel }) => {
  const [name, setName] = useState(player.name);
  const [color, setColor] = useState(player.color);
  
  const colors = [
    { name: 'Blue', value: 'bg-blue-500' },
    { name: 'Red', value: 'bg-red-500' },
    { name: 'Green', value: 'bg-green-500' },
    { name: 'Purple', value: 'bg-purple-500' },
    { name: 'Yellow', value: 'bg-yellow-500' },
    { name: 'Pink', value: 'bg-pink-500' },
  ];
  
  const handleSave = () => {
    onSave({ ...player, name, color });
  };
  
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Edit Player {player.id}</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Player Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="Enter player name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-3">Player Color</label>
            <div className="grid grid-cols-3 gap-3">
              {colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  className={`
                    p-4 rounded-lg transition-all
                    ${color === c.value ? 'ring-4 ring-white scale-105' : 'opacity-80 hover:opacity-100'}
                    ${c.value}
                  `}
                >
                  <span className="font-bold text-white">{c.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button
              onClick={onCancel}
              className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 rounded-lg font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerEdit;