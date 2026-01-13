import React, { useState, useEffect } from 'react';
import { Play, Trophy, Users, Zap, Sparkles, Star } from 'lucide-react';
import Card from '../components/Card';
import { generateCards } from '../utils/gameLogic';

const HomePage = ({ onStartGame }) => {
  const [demoCards, setDemoCards] = useState([]);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [stats, setStats] = useState({
    totalGames: 1247,
    totalMatches: 8924,
    activePlayers: 42
  });

  useEffect(() => {
    // Initialize demo cards
    const cards = generateCards().slice(0, 8); // Show 8 cards in demo
    setDemoCards(cards);
    
    // Auto-flip demo cards
    const interval = setInterval(() => {
      setFlippedIndex(prev => {
        if (prev === null) return 0;
        const next = (prev + 1) % 8;
        
        // Flip back after showing
        setTimeout(() => {
          setFlippedIndex(null);
        }, 800);
        
        return next;
      });
    }, 2000);
    
    // Animate stats
    const statsInterval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activePlayers: prev.activePlayers + (Math.random() > 0.5 ? 1 : -1),
        totalGames: prev.totalGames + Math.floor(Math.random() * 3)
      }));
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(statsInterval);
    };
  }, []);

  const handleDemoClick = (index) => {
    setFlippedIndex(index);
    setTimeout(() => setFlippedIndex(null), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-blue-300 font-medium">Memory Challenge v2.0</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Memory
            </span>
            <span className="text-white ml-4">Match</span>
            <span className="inline-block ml-4 text-yellow-400 animate-bounce">✨</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Test your memory, compete with friends, and climb the global leaderboard in this exciting card matching game!
          </p>
        </div>

        {/* Interactive Demo Area */}
        <div className="bg-gradient-to-b from-gray-900/50 to-black/50 rounded-3xl p-8 mb-16 border border-gray-800">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              Try It Out!
            </h2>
            <div className="text-sm text-gray-400 animate-pulse">
              Click on cards to preview
            </div>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-center mb-8">
            {demoCards.map((card, index) => (
              <div 
                key={card.id} 
                className="aspect-square cursor-pointer"
                onClick={() => handleDemoClick(index)}
              >
                <Card
                  card={{
                    ...card,
                    isFlipped: flippedIndex === index,
                    isMatched: false
                  }}
                  onClick={() => handleDemoClick(index)}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-400">
            Match identical cards to score points. Two players take turns finding matches!
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Trophy className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <div className="text-3xl font-bold">{stats.totalGames}</div>
                <div className="text-gray-400">Games Played</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-900/10 rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <div className="text-3xl font-bold">{stats.totalMatches}</div>
                <div className="text-gray-400">Total Matches</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-900/10 rounded-2xl p-6 border border-pink-500/20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pink-500/20 rounded-xl">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <div>
                <div className="text-3xl font-bold">{stats.activePlayers}</div>
                <div className="text-gray-400">Active Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: '👥',
              title: '2 Player Mode',
              desc: 'Play with a friend locally',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: '📊',
              title: 'Live Leaderboard',
              desc: 'Real-time global rankings',
              color: 'from-purple-500 to-pink-500'
            },
            {
              icon: '🎨',
              title: 'Customizable',
              desc: 'Edit names and colors',
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: '⚡',
              title: 'Fast Gameplay',
              desc: 'Quick 5-minute matches',
              color: 'from-yellow-500 to-orange-500'
            },
            {
              icon: '🏆',
              title: 'Achievements',
              desc: 'Unlock rewards as you play',
              color: 'from-red-500 to-rose-500'
            },
            {
              icon: '🌐',
              title: 'Cross-Platform',
              desc: 'Play on any device',
              color: 'from-indigo-500 to-violet-500'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all hover:scale-[1.02]"
            >
              <div className={`text-3xl mb-4 inline-block p-3 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-20`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onStartGame}
            className="group relative px-12 py-6 text-2xl font-bold rounded-2xl overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative flex items-center justify-center gap-4">
              <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span>Start Playing Now</span>
              <Sparkles className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
          
          <p className="text-gray-400 mt-6">
            No account needed • Free to play • Instant start
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;