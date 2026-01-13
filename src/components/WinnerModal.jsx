import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Star, RotateCcw, Home } from 'lucide-react';

const WinnerModal = ({ winner, onRestart, onHome }) => {
    useEffect(() => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    if (!winner) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative max-w-md w-full bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-10 border border-white/10 shadow-3xl text-center overflow-hidden">
                {/* Shine background */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_20px_rgba(234,179,8,0.5)]" />

                {/* Content */}
                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-yellow-500 text-black mb-8 shadow-2xl shadow-yellow-900/50 animate-bounce">
                        <Trophy className="w-12 h-12" />
                    </div>

                    <h2 className="text-4xl font-black tracking-tighter text-white mb-2">
                        VICTORY!
                    </h2>

                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
                        {winner.name} wins the match!
                    </div>

                    <div className="flex justify-center gap-4 mb-10">
                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                            <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Total Score</div>
                            <div className="text-3xl font-black text-white">{winner.score}</div>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                            <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Rank</div>
                            <div className="text-3xl font-black text-white">#1</div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={onRestart}
                            className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-black shadow-xl shadow-blue-900/40 transition-all hover:scale-[1.02]"
                        >
                            <RotateCcw className="w-5 h-5" />
                            PLAY AGAIN
                        </button>
                        <button
                            onClick={onHome}
                            className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all"
                        >
                            <Home className="w-5 h-5" />
                            RETURN HOME
                        </button>
                    </div>
                </div>

                {/* Decorative Stars */}
                <Star className="absolute top-10 left-10 text-yellow-500/20 w-8 h-8 rotate-12" />
                <Star className="absolute bottom-10 right-10 text-blue-500/20 w-8 h-8 -rotate-12" />
            </div>
        </div>
    );
};

export default WinnerModal;
