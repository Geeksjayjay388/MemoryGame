# 🎮 Memory Match - Multiplayer Card Matching Game

![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

A beautifully designed, interactive memory card matching game with real-time leaderboard, two-player mode, and stunning 3D animations. Built with React and Tailwind CSS.

## ✨ Features

### 🎯 Core Gameplay
- **Two-Player Mode**: Take turns with a friend locally
- **Memory Matching**: Match pairs of beautiful icon cards
- **Score Tracking**: Real-time score updates for both players
- **Turn-Based System**: Clear indication of current player's turn

### 🏆 Leaderboard System
- **Real-time Updates**: Live leaderboard with automatic updates
- **Global Rankings**: Track players worldwide
- **Win Rate Statistics**: View player performance percentages
- **Persistent Storage**: Data saved using localStorage

### 🎨 Customization
- **Player Profiles**: Edit player names and colors
- **Color Themes**: Choose from multiple gradient themes
- **Icon Selection**: Beautiful Lucide React icons
- **Responsive Design**: Works seamlessly on all devices

### 💫 Visual Features
- **3D Card Animations**: Smooth flip animations with 3D effects
- **Gradient Backgrounds**: Modern gradient color schemes
- **Interactive Demo**: Preview gameplay on homepage
- **Live Statistics**: Animated stats counter
- **Hover Effects**: Responsive interactive elements

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/geeksjayjay388/memory-match.git
cd memory-match
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:3000
```

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
memory-match/
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Card.jsx              # Card component with 3D animations
│   │   ├── GameBoard.jsx         # Game grid layout
│   │   ├── PlayerTurn.jsx        # Player turn indicator
│   │   ├── Leaderboard.jsx       # Live leaderboard
│   │   ├── PlayerEdit.jsx        # Player customization modal
│   │   ├── GameControls.jsx      # Game control buttons
│   │   └── ScoreDisplay.jsx      # Score tracker
│   │
│   ├── pages/
│   │   ├── HomePage.jsx          # Landing page with demo
│   │   └── GamePage.jsx          # Main game page
│   │
│   ├── App.jsx                   # Main app component
│   ├── index.js                  # Entry point
│   ├── gameLogic.js              # Game logic and card generation
│   └── styles.css                # Global styles and animations
│
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎮 How to Play

### Starting a Game
1. Click "Start Playing Now" on the homepage
2. Customize player names and colors (optional)
3. Game begins with Player 1's turn

### Game Rules
- **Turn-Based Play**: Players take turns flipping two cards
- **Matching**: Find matching pairs of icons to score points
- **Scoring**: Each match = 1 point for the current player
- **Turn Continuation**: Successful match = extra turn
- **Game End**: When all cards are matched
- **Winner**: Player with the most matches wins

### Leaderboard
- Points are tracked in real-time
- Win rates are calculated automatically
- Player rankings update dynamically
- Data persists using localStorage

## 🛠️ Technologies Used

- **React 18**: Frontend library with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **LocalStorage**: Data persistence
- **CSS Animations**: Custom keyframe animations
- **ES6+ JavaScript**: Modern JavaScript features

## 🎨 Design Features

### Visual Elements
- **Card Animations**: 3D flip effects with smooth transitions
- **Gradient Backgrounds**: Dynamic gradient animations
- **Live Indicators**: Real-time status indicators
- **Interactive Elements**: Hover and click effects
- **Responsive Layout**: Adapts to all screen sizes

### UI Components
- Animated Cards with unique styling
- Color-coded player indicators
- Visual match progress tracking
- Live game statistics dashboard
- Clean modal interfaces

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS/Android)

## 🔧 Configuration

### Customizing Game Settings
Edit `src/gameLogic.js` to:
- Change number of card pairs
- Modify icon sets
- Adjust player colors
- Change game difficulty

### Styling
- Edit `tailwind.config.js` for theme customization
- Modify `src/styles.css` for custom animations
- Update color schemes in component files

## 📈 Performance

- **Lazy Loading**: Components load on demand
- **Optimized Icons**: SVG components for fast rendering
- **Efficient State Management**: Minimal re-renders
- **Bundle Optimization**: Code splitting implemented

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use Tailwind utility classes
- Maintain consistent styling
- Add animations for user interactions
- Ensure mobile responsiveness

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jacob Sihul**
- GitHub: [@geeksjayjay388](https://github.com/geeksjayjay388)
- Email: jacobsihul911@gmail.com

## 🏆 Acknowledgments

- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling framework
- [React Team](https://react.dev/) for the amazing library
- All contributors and testers

---

⭐ If you found this project helpful, please consider giving it a star!

## 📸 Screenshots

*Coming soon - Add your game screenshots here*# MemoryGame
