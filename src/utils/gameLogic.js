import { ICON_COMPONENTS, ICON_COLORS } from './icons';

// Generate pairs of icons with colors
export const generateCards = () => {
  const icons = [...ICON_COMPONENTS.slice(0, 8), ...ICON_COMPONENTS.slice(0, 8)];
  const colors = [...ICON_COLORS.slice(0, 8), ...ICON_COLORS.slice(0, 8)];

  return icons.map((Icon, index) => ({
    id: index,
    Icon,
    color: colors[index],
    isFlipped: false,
    isMatched: false,
    pairId: index % 8 // Identical icons at index and index + 8 will have same pairId
  })).sort(() => Math.random() - 0.5);
};

// Generate initial cards for the game
export const generateGameCards = () => {
  return generateCards();
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