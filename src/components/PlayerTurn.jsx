import React from 'react';
import { User, Edit3, Flame } from 'lucide-react';

const PlayerTurn = ({ players, currentPlayer, onEditPlayer }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-md rounded-[2rem] p-6 border border-white/5 shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <User className="w-5 h-5 text-blue-400" />
        </div>
        <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white/70">Battle Status</h2>
      </div>

      <div className="flex flex-col gap-6">
        {players.map((player, index) => {
          const isActive = currentPlayer === index;
          return (
            <div
              key={player.id}
              className={`
                p-6 rounded-3xl transition-all duration-500 relative overflow-hidden group
                ${isActive
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-2 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.1)]'
                  : 'bg-white/5 border border-white/5 hover:bg-white/10'
                }
              `}
            >
              {/* Active Highlight */}
              {isActive && (
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-yellow-500 rounded-full shadow-lg animate-bounce">
                    <Flame className="w-3 h-3 text-black fill-black" />
                    <span className="text-[8px] font-black text-black">ACTIVE</span>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`relative group-hover:scale-110 transition-transform duration-300 w-12 h-12 rounded-2xl ${player.color} flex items-center justify-center shadow-xl`}>
                  <span className="font-black text-lg text-white">P{player.id}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-black tracking-tight truncate">{player.name}</h3>
                  <button
                    onClick={() => onEditPlayer(player.id)}
                    className="flex items-center gap-1 text-[10px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest mt-1"
                  >
                    Edit Profile <Edit3 className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20">
                    {player.score}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mt-1">Score</div>
                </div>

                <div className="flex gap-1 h-8 items-end">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-500 ${i < player.score ? player.color.replace('bg-', 'bg-').split(' ')[0] : 'bg-white/10'}`}
                      style={{ height: `${20 + (i * 10)}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerTurn;