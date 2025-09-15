import { Game, GameCategory } from '../types/game';
import gameAction1 from '../assets/game-action-1.jpg';
import gamePuzzle1 from '../assets/game-puzzle-1.jpg';
import gameRacing1 from '../assets/game-racing-1.jpg';
import gameAdventure1 from '../assets/game-adventure-1.jpg';
import gameShooting1 from '../assets/game-shooting-1.jpg';
import gameSports1 from '../assets/game-sports-1.jpg';
import gameIo1 from '../assets/game-io-1.jpg';

export const games: Game[] = [
  {
    id: '1',
    title: 'Shadow Warrior Legends',
    category: 'Action',
    description: 'Epic fantasy action game with intense sword combat and magical abilities.',
    thumbnail: gameAction1,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-08-15',
    rating: 4.8,
    plays: 125000,
    tags: ['Fantasy', '3D', 'Combat', 'Adventure'],
    developer: 'Epic Games Studio'
  },
  {
    id: '2',
    title: 'Mind Bender Puzzles',
    category: 'Puzzle',
    description: 'Challenge your mind with 100+ brain-teasing puzzles and logic games.',
    thumbnail: gamePuzzle1,
    isFeatured: true,
    isTrending: false,
    isNew: true,
    releaseDate: '2024-09-01',
    rating: 4.6,
    plays: 89000,
    tags: ['Logic', 'Brain Training', 'Casual'],
    developer: 'Puzzle Masters'
  },
  {
    id: '3',
    title: 'Neon Speed Racing',
    category: 'Racing',
    description: 'High-speed futuristic racing with customizable cars and neon tracks.',
    thumbnail: gameRacing1,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-07-20',
    rating: 4.7,
    plays: 156000,
    tags: ['Racing', 'Futuristic', '3D', 'Multiplayer'],
    developer: 'Speed Demons'
  },
  {
    id: '4',
    title: 'Mystic Realm Adventure',
    category: 'Adventure',
    description: 'Explore magical worlds filled with ancient mysteries and treasures.',
    thumbnail: gameAdventure1,
    isFeatured: false,
    isTrending: true,
    isNew: true,
    releaseDate: '2024-08-30',
    rating: 4.5,
    plays: 67000,
    tags: ['Fantasy', 'Exploration', 'Magic', 'Story'],
    developer: 'Mystic Studios'
  },
  {
    id: '5',
    title: 'Cyber Strike Force',
    category: 'Shooting',
    description: 'Intense FPS action in a cyberpunk world with advanced weapons.',
    thumbnail: gameShooting1,
    isFeatured: true,
    isTrending: false,
    isNew: false,
    releaseDate: '2024-06-10',
    rating: 4.9,
    plays: 234000,
    tags: ['FPS', 'Cyberpunk', 'Multiplayer', 'Competitive'],
    developer: 'Combat Industries'
  },
  // Additional games for variety
  {
    id: '6',
    title: 'Block Puzzle Master',
    category: 'Puzzle',
    description: 'Classic block puzzle game with modern twists and power-ups.',
    thumbnail: gamePuzzle1,
    isFeatured: false,
    isTrending: false,
    isNew: true,
    releaseDate: '2024-09-05',
    rating: 4.3,
    plays: 45000,
    tags: ['Casual', 'Classic', 'Relaxing'],
    developer: 'Puzzle Masters'
  },
  {
    id: '7',
    title: 'Street Fighter Arena',
    category: 'Action',
    description: 'Ultimate fighting game with combo systems and special moves.',
    thumbnail: gameAction1,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-05-15',
    rating: 4.6,
    plays: 198000,
    tags: ['Fighting', 'Competitive', 'Multiplayer'],
    developer: 'Fight Club Games'
  },
  {
    id: '8',
    title: 'Desert Rally Championship',
    category: 'Racing',
    description: 'Off-road racing adventure through challenging desert terrains.',
    thumbnail: gameRacing1,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    releaseDate: '2024-04-20',
    rating: 4.4,
    plays: 123000,
    tags: ['Off-road', 'Adventure', 'Realistic'],
    developer: 'Rally Sports'
  },
  {
    id: '9',
    title: 'Championship Soccer 2024',
    category: 'Sports',
    description: 'Ultimate soccer experience with realistic physics and team management.',
    thumbnail: gameSports1,
    isFeatured: false,
    isTrending: true,
    isNew: true,
    releaseDate: '2024-09-10',
    rating: 4.7,
    plays: 89000,
    tags: ['Soccer', 'Sports', 'Multiplayer', 'Realistic'],
    developer: 'Sports Pro Games'
  },
  {
    id: '10',
    title: 'Battle Royale Arena',
    category: 'IO',
    description: 'Fast-paced multiplayer battle royale with up to 100 players.',
    thumbnail: gameIo1,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-08-01',
    rating: 4.8,
    plays: 312000,
    tags: ['Multiplayer', 'Battle Royale', 'Competitive', 'Online'],
    developer: 'Arena Games'
  },
  {
    id: '11',
    title: 'Color Match Mania',
    category: 'Puzzle',
    description: 'Addictive color matching puzzle with hundreds of levels.',
    thumbnail: gamePuzzle1,
    isFeatured: false,
    isTrending: false,
    isNew: true,
    releaseDate: '2024-09-12',
    rating: 4.4,
    plays: 34000,
    tags: ['Match-3', 'Casual', 'Relaxing', 'Colorful'],
    developer: 'Puzzle Masters'
  },
  {
    id: '12',
    title: 'Space Shooter Galaxy',
    category: 'Shooting',
    description: 'Epic space combat with alien enemies and powerful upgrades.',
    thumbnail: gameShooting1,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    releaseDate: '2024-07-05',
    rating: 4.5,
    plays: 167000,
    tags: ['Space', 'Sci-Fi', 'Arcade', 'Shooter'],
    developer: 'Cosmic Studios'
  }
];

export const categories: GameCategory[] = [
  {
    id: 'action',
    name: 'Action',
    icon: '⚔️',
    description: 'Fast-paced games with combat and adventure',
    gameCount: games.filter(g => g.category === 'Action').length
  },
  {
    id: 'puzzle',
    name: 'Puzzle',
    icon: '🧩',
    description: 'Brain-teasing challenges and logic games',
    gameCount: games.filter(g => g.category === 'Puzzle').length
  },
  {
    id: 'racing',
    name: 'Racing',
    icon: '🏎️',
    description: 'High-speed racing and driving games',
    gameCount: games.filter(g => g.category === 'Racing').length
  },
  {
    id: 'adventure',
    name: 'Adventure',
    icon: '🗺️',
    description: 'Explore worlds and discover stories',
    gameCount: games.filter(g => g.category === 'Adventure').length
  },
  {
    id: 'shooting',
    name: 'Shooting',
    icon: '🎯',
    description: 'FPS and shooting action games',
    gameCount: games.filter(g => g.category === 'Shooting').length
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '⚽',
    description: 'Sports simulation and arcade games',
    gameCount: games.filter(g => g.category === 'Sports').length
  },
  {
    id: 'io',
    name: 'IO',
    icon: '🌐',
    description: 'Multiplayer online games and battle royales',
    gameCount: games.filter(g => g.category === 'IO').length
  }
];