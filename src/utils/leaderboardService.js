// Simulating real-time leaderboard with localStorage
const LEADERBOARD_KEY = 'memory-game-leaderboard';

export const getLeaderboard = () => {
  const stored = localStorage.getItem(LEADERBOARD_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Default leaderboard
  return [
    { id: 1, player: 'Champion', wins: 12, matches: 15, avatar: '👑' },
    { id: 2, player: 'Memory Master', wins: 10, matches: 13, avatar: '🧠' },
    { id: 3, player: 'Card Wizard', wins: 8, matches: 10, avatar: '🎩' },
    { id: 4, player: 'Quick Thinker', wins: 6, matches: 8, avatar: '⚡' },
    { id: 5, player: 'Beginner', wins: 3, matches: 10, avatar: '🌱' }
  ];
};

export const updateLeaderboard = (playerName, didWin) => {
  const leaderboard = getLeaderboard();
  
  // Find existing player or add new
  let player = leaderboard.find(p => p.player === playerName);
  
  if (player) {
    player.matches += 1;
    if (didWin) player.wins += 1;
  } else {
    player = {
      id: leaderboard.length + 1,
      player: playerName,
      wins: didWin ? 1 : 0,
      matches: 1,
      avatar: ['😎', '🚀', '🌟', '🔥', '🎯'][Math.floor(Math.random() * 5)]
    };
    leaderboard.push(player);
  }
  
  // Sort by win rate, then by wins
  leaderboard.sort((a, b) => {
    const winRateA = a.wins / a.matches;
    const winRateB = b.wins / b.matches;
    if (winRateB !== winRateA) return winRateB - winRateA;
    return b.wins - a.wins;
  });
  
  // Keep top 10
  const top10 = leaderboard.slice(0, 10);
  
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(top10));
  return top10;
};

// Simulate real-time updates with WebSocket-like behavior
export const createLeaderboardSubscription = (callback) => {
  let interval;
  
  const start = () => {
    interval = setInterval(() => {
      // Simulate occasional updates from "other players"
      if (Math.random() > 0.7) {
        const leaderboard = getLeaderboard();
        const simulatedUpdates = leaderboard.map(p => ({
          ...p,
          wins: p.wins + Math.floor(Math.random() * 2),
          matches: p.matches + Math.floor(Math.random() * 3)
        }));
        localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(simulatedUpdates));
        callback(simulatedUpdates);
      } else {
        callback(getLeaderboard());
      }
    }, 3000); // Update every 3 seconds
  };
  
  const stop = () => {
    clearInterval(interval);
  };
  
  return { start, stop };
};