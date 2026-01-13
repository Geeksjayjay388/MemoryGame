import React, { useState, useEffect } from 'react';
import { updateLeaderboard } from './utils/leaderboardService';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameResult, setGameResult] = useState(null);

  const handleGameEnd = (winner) => {
    if (winner) {
      updateLeaderboard(winner.name, true);
    }
    setGameResult(winner);
    setGameStarted(false);
  };

  useEffect(() => {
    if (gameResult) {
      const timer = setTimeout(() => setGameResult(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [gameResult]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {gameResult && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🏆</div>
              <div>
                <div className="font-bold">{gameResult.name} won the game!</div>
                <div className="text-sm opacity-90">Score: {gameResult.score} points</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {gameStarted ? (
        <GamePage onReturn={() => setGameStarted(false)} />
      ) : (
        <HomePage onStartGame={() => setGameStarted(true)} />
      )}
    </div>
  );
}

export default App;