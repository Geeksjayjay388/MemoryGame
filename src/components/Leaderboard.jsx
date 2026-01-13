import React from 'react';
import { Trophy, Users, Star } from 'lucide-react';

const Leaderboard = ({ currentPlayers = [] }) => {
  // Sort players by score
  const sortedPlayers = [...currentPlayers].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 border border-gray-800 shadow-2xl sticky top-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg shadow-lg">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Current Standings</h2>
          <p className="text-sm text-gray-400">Live score tracking</p>
        </div>
      </div>

      {/* Players List */}
      <div className="space-y-4">
        {sortedPlayers.map((player, index) => (
          <div
            key={player.id}
            className={`
              relative overflow-hidden p-5 rounded-2xl transition-all duration-300
              ${player.score > 0 ? 'bg-gray-800/40 border-l-4' : 'bg-gray-900/40 border-l-2'}
              ${index === 0 && player.score > 0 ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'border-gray-700'}
            `}
          >
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold
                  ${index === 0 && player.score > 0 ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-300'}
                `}>
                  {index === 0 && player.score > 0 ? '🏆' : index + 1}
                </div>

                <div>
                  <div className="font-bold text-lg flex items-center gap-2">
                    {player.name}
                    {index === 0 && player.score > 0 && (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <div className="text-sm text-gray-400">Current Score</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">
                  {player.score}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Points</div>
              </div>
            </div>

            {/* Match progress indicator */}
            <div className="mt-4 h-1.5 bg-gray-900/50 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${player.color || 'bg-blue-500'}`}
                style={{ width: `${(player.score / 8) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Game Info */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
          <div className="flex items-center gap-3 text-blue-400 mb-2">
            <Users className="w-4 h-4" />
            <span className="text-sm font-bold">Game Status</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Players are competing to find 8 matches. Each match grants 1 point.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;