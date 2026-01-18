import React, { useState, useEffect } from 'react';
import GameBoard from '../components/GameBoard';
import PlayerTurn from '../components/PlayerTurn';
import Leaderboard from '../components/Leaderboard';
import PlayerEdit from '../components/PlayerEdit';
import GameControls from '../components/GameControls';
import {
  generateGameCards,
  initialPlayers,
  shuffleCards,
  CARD_SYMBOLS
} from '../utils/gameLogic';

const GamePage = ({ onReturn }) => {
  // Game state
  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [showLeaderboard, setShowLeaderboard] = useState(true);
  const [pairCount, setPairCount] = useState(8);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const initialCards = generateGameCards(pairCount);
    setCards(initialCards);
    setFlippedCards([]);
    setMoves(0);
    setIsGameComplete(false);
    setCurrentPlayer(0);
    // Reset player scores but keep names/colors
    setPlayers(players.map(p => ({ ...p, score: 0 })));
  };

  const handleCardClick = (cardId) => {
    if (flippedCards.length >= 2 || cards[cardId].isFlipped || cards[cardId].isMatched) {
      return;
    }

    const updatedCards = [...cards];
    updatedCards[cardId].isFlipped = true;
    setCards(updatedCards);

    const newFlippedCards = [...flippedCards, cardId];

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);

      const [firstId, secondId] = newFlippedCards;

      if (cards[firstId].pairId === cards[secondId].pairId) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...updatedCards];
          matchedCards[firstId].isMatched = true;
          matchedCards[secondId].isMatched = true;
          setCards(matchedCards);
          setFlippedCards([]);

          // Update player score
          const updatedPlayers = [...players];
          updatedPlayers[currentPlayer].score += 1;
          setPlayers(updatedPlayers);

          // Note: currentPlayer stays the same, allowing them to play again

          // Check if game is complete
          const allMatched = matchedCards.every(card => card.isMatched);
          if (allMatched) {
            setIsGameComplete(true);
          }
        }, 500);
      } else {
        // No match - flip back after delay
        setTimeout(() => {
          const resetCards = [...updatedCards];
          resetCards[firstId].isFlipped = false;
          resetCards[secondId].isFlipped = false;
          setCards(resetCards);
          setFlippedCards([]);

          // Switch to next player only here
          setCurrentPlayer((currentPlayer + 1) % players.length);
        }, 1000);
      }
      setFlippedCards(newFlippedCards);
    } else {
      setFlippedCards(newFlippedCards);
    }
  };

  const handleEditPlayer = (playerId) => {
    const player = players.find(p => p.id === playerId);
    setEditingPlayer(player);
  };

  const handleSavePlayer = (updatedPlayer) => {
    const updatedPlayers = players.map(p =>
      p.id === updatedPlayer.id ? updatedPlayer : p
    );
    setPlayers(updatedPlayers);
    setEditingPlayer(null);
  };

  const handleResetGame = () => {
    initializeGame();
  };

  const handleNewGame = () => {
    handleResetGame();
  };

  const changeCardCount = (count) => {
    if (count >= 8 && count <= 32) {
      setPairCount(count);
      // We need to re-initialize immediately when count changes
      // But we can't call initializeGame directly because pairCount state update is async
      // So we pass the new count explicitly
      const initialCards = generateGameCards(count);
      setCards(initialCards);
      setFlippedCards([]);
      setMoves(0);
      setIsGameComplete(false);
      setCurrentPlayer(0);
      setPlayers(players.map(p => ({ ...p, score: 0 })));
    }
  };

  const matchesFound = cards.filter(card => card.isMatched).length / 2;

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onReturn}
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Memory Match
        </h1>

        <button
          onClick={() => setShowLeaderboard(!showLeaderboard)}
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
        >
          {showLeaderboard ? 'Hide' : 'Show'} Sidebar
        </button>
      </div>

      {/* Card Count Selection (Only visible at start or reset) */}
      {moves === 0 && !isGameComplete && (
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
            <span className="text-gray-300 font-medium">Card Pairs:</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => changeCardCount(pairCount - 1)}
                disabled={pairCount <= 8}
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded text-white font-bold transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold text-blue-400 w-8 text-center">{pairCount}</span>
              <button
                onClick={() => changeCardCount(pairCount + 1)}
                disabled={pairCount >= 32}
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded text-white font-bold transition-colors"
              >
                +
              </button>
            </div>
            <span className="text-gray-500 text-sm">({pairCount * 2} cards)</span>
          </div>
        </div>
      )}

      {/* Main Game Area */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <GameBoard
            cards={cards}
            onCardClick={handleCardClick}
          />

          <GameControls
            onResetGame={handleResetGame}
            onNewGame={handleNewGame}
            onEndGame={onReturn}
            isGameComplete={isGameComplete}
            moves={moves}
            matchesFound={matchesFound}
          />
        </div>

        {/* Sidebar with Player Turn and Leaderboard */}
        {showLeaderboard && (
          <div className="space-y-6">
            <PlayerTurn
              players={players}
              currentPlayer={currentPlayer}
              onEditPlayer={handleEditPlayer}
            />

            <Leaderboard currentPlayers={players} />
          </div>
        )}
      </div>

      {/* Player Edit Modal */}
      {editingPlayer && (
        <PlayerEdit
          player={editingPlayer}
          onSave={handleSavePlayer}
          onCancel={() => setEditingPlayer(null)}
        />
      )}
    </div>
  );
};

export default GamePage;