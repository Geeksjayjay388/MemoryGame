import React from 'react';
import { RotateCcw, Plus, LogOut, ChevronRight } from 'lucide-react';

const GameControls = ({
  onResetGame,
  onNewGame,
  onEndGame,
  isGameComplete,
  moves,
  matchesFound
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Stats Section */}
        <div className="flex gap-12">
          <div className="relative group">
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-1">Total Moves</div>
            <div className="text-4xl font-black tracking-tighter text-white/90 group-hover:scale-110 transition-transform cursor-default">
              {moves.toString().padStart(2, '0')}
            </div>
            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="relative group">
            <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-1">Success Rate</div>
            <div className="text-4xl font-black tracking-tighter text-white/90 group-hover:scale-110 transition-transform cursor-default">
              {moves > 0 ? Math.round((matchesFound / moves) * 100) : 0}<span className="text-xl text-gray-500 ml-1">%</span>
            </div>
            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-emerald-500 rounded-full" />
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onResetGame}
            className="group flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all hover:-translate-y-1"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-sm">Reset</span>
          </button>

          <button
            onClick={onNewGame}
            className="group flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl font-black shadow-xl shadow-blue-900/40 transition-all hover:-translate-y-1"
          >
            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            <span className="tracking-tight uppercase text-sm">New Session</span>
          </button>

          <button
            onClick={onEndGame}
            className="group flex items-center gap-3 px-6 py-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 rounded-2xl font-bold transition-all hover:scale-95"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isGameComplete && (
        <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 rounded-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-900/20">
              <ChevronRight className="w-6 h-6 text-black" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-emerald-400">VICTORY ACHIEVED</div>
              <div className="text-sm text-gray-500">All data packets successfully synchronized</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameControls;