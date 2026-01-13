import React from 'react';

const Card = ({ card, onClick, index }) => {
  // Add a safety check and use optional chaining
  const { id, Icon, color, isFlipped, isMatched } = card || {};

  return (
    <button
      onClick={() => onClick(card)}
      disabled={isFlipped || isMatched}
      className="group relative w-full h-full"
      style={{ aspectRatio: '1/1' }}
    >
      <div className={`
        absolute inset-0 transition-all duration-700 transform-preserve-3d
        ${isFlipped || isMatched ? 'rotate-y-180' : ''}
      `}>
        {/* Card Back */}
        <div className={`
          absolute inset-0 backface-hidden rounded-[2rem]
          bg-gradient-to-br from-gray-800 via-gray-900 to-black
          border-2 border-white/10 group-hover:border-blue-500/50
          shadow-2xl group-hover:shadow-blue-500/20
          flex items-center justify-center
          transition-all duration-500 overflow-hidden
        `}>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500/10 opacity-50" />

            <div className={`
              w-24 h-24 rounded-3xl flex items-center justify-center
              bg-gradient-to-br from-white/5 to-white/10
              relative z-10 border border-white/5 shadow-inner
              group-hover:scale-110 transition-transform duration-500
            `}>
              {/* Central Icon */}
              <div className="text-5xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">🎴</div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/10 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br-lg" />
          </div>
        </div>

        {/* Card Front */}
        <div className={`
          absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem]
          bg-gradient-to-br from-gray-900 via-black to-gray-900
          border-2 ${isMatched ? 'border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.1)]' : 'border-white/10'}
          shadow-2xl flex flex-col items-center justify-center p-6
        `}>
          <div className={`
            w-32 h-32 rounded-full flex items-center justify-center mb-0
            ${isMatched ? 'bg-green-500/10' : 'bg-white/5'}
            transition-all duration-500 relative
          `}>
            {/* Glow effect for symbols */}
            <div className={`absolute inset-0 rounded-full blur-2xl opacity-20 ${color.replace('text-', 'bg-')}`} />

            {Icon && <Icon className={`w-20 h-20 ${color} relative z-10 transition-transform duration-500 ${isMatched ? 'scale-110' : 'group-hover:scale-110'}`} />}
          </div>

          {isMatched && (
            <div className="absolute top-6 right-6">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                <span className="text-black font-black text-sm">✓</span>
              </div>
            </div>
          )}

          {/* Decorative element */}
          <div className={`absolute bottom-6 w-12 h-1 bg-gradient-to-r from-transparent ${isMatched ? 'via-green-500' : 'via-white/20'} to-transparent`} />
        </div>
      </div>
    </button>
  );
};

export default Card;