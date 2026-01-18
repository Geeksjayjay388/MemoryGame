import { ICON_COMPONENTS, ICON_COLORS } from './icons';

// Generate pairs of icons with colors
// Generate pairs of icons with colors
export const generateCards = (pairCount = 8) => {
  const icons = [...ICON_COMPONENTS.slice(0, pairCount), ...ICON_COMPONENTS.slice(0, pairCount)];
  const colors = [...ICON_COLORS.slice(0, pairCount), ...ICON_COLORS.slice(0, pairCount)];

  return icons.map((Icon, index) => ({
    id: index,
    Icon,
    color: colors[index],
    isFlipped: false,
    isMatched: false,
    pairId: index % pairCount // Identical icons at index and index + pairCount will have same pairId
  })).sort(() => Math.random() - 0.5);
};

// Generate initial cards for the game
export const generateGameCards = (pairCount = 8) => {
  return generateCards(pairCount);
};

// Shuffle function
export const shuffleCards = (cards) => {
  return [...cards].sort(() => Math.random() - 0.5);
};

// Initial players
export const initialPlayers = [
  {
    id: 1,
    name: 'Player 1',
    score: 0,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    wins: 0,
    games: 0
  },
  {
    id: 2,
    name: 'Player 2',
    score: 0,
    color: 'bg-gradient-to-br from-red-500 to-pink-500',
    wins: 0,
    games: 0
  }
];

// Card symbols for backward compatibility
export const CARD_SYMBOLS = [
  '😀', '🎮', '🚀', '⭐', '🐱', '🐶', '🍕', '🎵',
  '😀', '🎮', '🚀', '⭐', '🐱', '🐶', '🍕', '🎵'
];

// Initial leaderboard
export const initialLeaderboard = [
  { id: 1, player: 'Champion', wins: 12, matches: 15, avatar: '👑' },
  { id: 2, player: 'Memory Master', wins: 10, matches: 13, avatar: '🧠' },
  { id: 3, player: 'Card Wizard', wins: 8, matches: 10, avatar: '🎩' },
  { id: 4, player: 'Quick Thinker', wins: 6, matches: 8, avatar: '⚡' },
  { id: 5, player: 'Beginner', wins: 3, matches: 10, avatar: '🌱' }
];