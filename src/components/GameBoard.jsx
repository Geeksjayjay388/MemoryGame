import React from 'react';
import Card from './Card';

const GameBoard = ({ cards, onCardClick }) => {
  return (
    <div className="max-w-4xl mx-auto backdrop-blur-sm">
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-2xl font-black uppercase tracking-widest text-white/90">
          Memory Grid
        </h2>
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blue-500/40 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 p-8 bg-gray-900/40 border border-white/5 rounded-[2.5rem] shadow-3xl">
        {cards.map((card, index) => (
          <div key={card.id} className="transform hover:scale-[1.05] transition-transform duration-300">
            <Card
              card={card}
              onClick={() => onCardClick(index)}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;