import { Game, GameCategory } from '../types/game';
import gameAction1 from '../assets/game-action-1.jpg';
import gamePuzzle1 from '../assets/game-puzzle-1.jpg';
import gameRacing1 from '../assets/game-racing-1.jpg';
import gameAdventure1 from '../assets/game-adventure-1.jpg';
import gameShooting1 from '../assets/game-shooting-1.jpg';
import gameSports1 from '../assets/game-sports-1.jpg';
import gameIo1 from '../assets/game-io-1.jpg';

// New game images
import gameBlazeRunner from '../assets/game-blaze-runner.jpg';
import gameNeonCombat from '../assets/game-neon-combat.jpg';
import gameDragonsDescrent from '../assets/game-dragons-descent.jpg';
import gameCyberStrike from '../assets/game-cyber-strike.jpg';
import gameTempleRaider from '../assets/game-temple-raider.jpg';
import gameSkyfallChampions from '../assets/game-skyfall-champions.jpg';
import gamePipeDreamers from '../assets/game-pipe-dreamers.jpg';
import gameQuantumSudoku from '../assets/game-quantum-sudoku.jpg';
import gamePixelWarfare from '../assets/game-pixel-warfare.jpg';
import gameZombieArena from '../assets/game-zombie-arena.jpg';
import gameAgarIo from '../assets/game-agar-io.jpg';
import gameSlitherIo from '../assets/game-slither-io.jpg';
import gameMotocross from '../assets/game-motocross.jpg';
import gameBasketballStars from '../assets/game-basketball-stars.jpg';
import gameCasualFunny from '../assets/game-casual-funny.jpg';
import gamePaperIo from '../assets/game-paper-io.jpg';
import gameJewelSeeker from '../assets/game-jewel-seeker.jpg';
import gameTankMayhem from '../assets/game-tank-mayhem.jpg';

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
  },
  // Action / Adventure Games
  {
    id: '13',
    title: 'Blaze Runner',
    category: 'Action',
    description: 'A fast-paced parkour game with fire effects.',
    thumbnail: gameBlazeRunner,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    releaseDate: '2024-09-15',
    rating: 4.6,
    plays: 87000,
    tags: ['Parkour', 'Fire', 'Fast-paced', 'Urban'],
    developer: 'Flame Studios'
  },
  {
    id: '14',
    title: 'Neon Combat',
    category: 'Action',
    description: 'A cyberpunk-themed stick-figure shooter.',
    thumbnail: gameNeonCombat,
    isFeatured: false,
    isTrending: true,
    isNew: true,
    releaseDate: '2024-09-12',
    rating: 4.4,
    plays: 54000,
    tags: ['Cyberpunk', 'Stick Figure', 'Shooter', 'Neon'],
    developer: 'Cyber Games'
  },
  {
    id: '15',
    title: "Dragon's Descent",
    category: 'Adventure',
    description: 'Control a dragon through a treacherous canyon.',
    thumbnail: gameDragonsDescrent,
    isFeatured: true,
    isTrending: false,
    isNew: false,
    releaseDate: '2024-08-20',
    rating: 4.7,
    plays: 145000,
    tags: ['Dragon', 'Fantasy', 'Flying', 'Adventure'],
    developer: 'Mythic Adventures'
  },
  {
    id: '16',
    title: 'Cyber Strike',
    category: 'Action',
    description: 'A top-down tactical shooter against robots.',
    thumbnail: gameCyberStrike,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-07-30',
    rating: 4.5,
    plays: 112000,
    tags: ['Top-down', 'Tactical', 'Robots', 'Shooter'],
    developer: 'Tactical Force'
  },
  {
    id: '17',
    title: 'Temple Raider',
    category: 'Adventure',
    description: 'An Indiana Jones-style exploration and puzzle game.',
    thumbnail: gameTempleRaider,
    isFeatured: true,
    isTrending: false,
    isNew: false,
    releaseDate: '2024-06-25',
    rating: 4.8,
    plays: 198000,
    tags: ['Exploration', 'Puzzle', 'Archaeology', 'Adventure'],
    developer: 'Adventure Seekers'
  },
  {
    id: '18',
    title: 'Skyfall Champions',
    category: 'Action',
    description: 'A battle royale where players skydive onto an island.',
    thumbnail: gameSkyfallChampions,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    releaseDate: '2024-09-08',
    rating: 4.9,
    plays: 321000,
    tags: ['Battle Royale', 'Skydiving', 'Multiplayer', 'Island'],
    developer: 'Sky Warriors'
  },
  // Puzzle / Logic Games
  {
    id: '19',
    title: 'Pipe Dreamers',
    category: 'Puzzle',
    description: 'A modern, colorful twist on the classic pipe-connection puzzle.',
    thumbnail: gamePipeDreamers,
    isFeatured: false,
    isTrending: false,
    isNew: true,
    releaseDate: '2024-09-10',
    rating: 4.3,
    plays: 43000,
    tags: ['Pipes', 'Connection', 'Logic', 'Colorful'],
    developer: 'Pipe Works'
  },
  {
    id: '20',
    title: 'Quantum Sudoku',
    category: 'Puzzle',
    description: 'Sudoku with a sci-fi aesthetic and special quantum rules.',
    thumbnail: gameQuantumSudoku,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-08-05',
    rating: 4.4,
    plays: 76000,
    tags: ['Sudoku', 'Sci-Fi', 'Quantum', 'Logic'],
    developer: 'Quantum Puzzles'
  },
  {
    id: '21',
    title: 'Jewel Seeker',
    category: 'Puzzle',
    description: 'A classic match-3 gem game with power-ups.',
    thumbnail: gameJewelSeeker,
    isFeatured: true,
    isTrending: false,
    isNew: false,
    releaseDate: '2024-05-18',
    rating: 4.6,
    plays: 234000,
    tags: ['Match-3', 'Gems', 'Power-ups', 'Classic'],
    developer: 'Gem Studios'
  },
  // Shooting Games
  {
    id: '22',
    title: 'Pixel Warfare 3',
    category: 'Shooting',
    description: 'A popular blocky, multiplayer FPS.',
    thumbnail: gamePixelWarfare,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-07-12',
    rating: 4.7,
    plays: 456000,
    tags: ['Pixel', 'Multiplayer', 'FPS', 'Blocky'],
    developer: 'Pixel Combat'
  },
  {
    id: '23',
    title: 'Zombie Outbreak Arena',
    category: 'Shooting',
    description: 'Defend your base from waves of zombies.',
    thumbnail: gameZombieArena,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-06-30',
    rating: 4.5,
    plays: 187000,
    tags: ['Zombies', 'Defense', 'Waves', 'Survival'],
    developer: 'Undead Games'
  },
  {
    id: '24',
    title: 'Tank Mayhem',
    category: 'Shooting',
    description: 'Top-down tank battles with destructible environments.',
    thumbnail: gameTankMayhem,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    releaseDate: '2024-05-22',
    rating: 4.4,
    plays: 134000,
    tags: ['Tanks', 'Top-down', 'Destructible', 'Battle'],
    developer: 'Tank Wars Studios'
  },
  // IO Games
  {
    id: '25',
    title: 'Agar.io',
    category: 'IO',
    description: 'The classic cell-eating game. (A must-have)',
    thumbnail: gameAgarIo,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-01-15',
    rating: 4.8,
    plays: 1234000,
    tags: ['Cells', 'Multiplayer', 'Classic', 'Online'],
    developer: 'Miniclip'
  },
  {
    id: '26',
    title: 'Slither.io',
    category: 'IO',
    description: 'The snake battle game. (A must-have)',
    thumbnail: gameSlitherIo,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-02-10',
    rating: 4.7,
    plays: 987000,
    tags: ['Snake', 'Multiplayer', 'Battle', 'Classic'],
    developer: 'Steve Howse'
  },
  {
    id: '27',
    title: 'Paper.io 3',
    category: 'IO',
    description: 'Claim territory by drawing lines.',
    thumbnail: gamePaperIo,
    isFeatured: false,
    isTrending: true,
    isNew: true,
    releaseDate: '2024-09-01',
    rating: 4.5,
    plays: 156000,
    tags: ['Territory', 'Lines', 'Strategy', 'Multiplayer'],
    developer: 'Voodoo'
  },
  // Sports / Racing
  {
    id: '28',
    title: 'Mad Skills Motocross 3',
    category: 'Sports',
    description: 'Physics-based motocross racing.',
    thumbnail: gameMotocross,
    isFeatured: true,
    isTrending: false,
    isNew: false,
    releaseDate: '2024-06-15',
    rating: 4.6,
    plays: 245000,
    tags: ['Motocross', 'Physics', 'Racing', 'Stunts'],
    developer: 'Turborilla'
  },
  {
    id: '29',
    title: 'Basketball Stars',
    category: 'Sports',
    description: 'One-on-one street basketball.',
    thumbnail: gameBasketballStars,
    isFeatured: false,
    isTrending: true,
    isNew: false,
    releaseDate: '2024-05-20',
    rating: 4.4,
    plays: 178000,
    tags: ['Basketball', 'Street', 'One-on-one', 'Sports'],
    developer: 'Miniclip'
  },
  // Casual / Funny
  {
    id: '30',
    title: 'Funny Shooter',
    category: 'Casual',
    description: 'A wacky, non-violent shooter with silly characters.',
    thumbnail: gameCasualFunny,
    isFeatured: false,
    isTrending: false,
    isNew: true,
    releaseDate: '2024-09-05',
    rating: 4.2,
    plays: 67000,
    tags: ['Funny', 'Non-violent', 'Silly', 'Casual'],
    developer: 'Fun Games Co'
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
    id: 'adventure',
    name: 'Adventure',
    icon: '🗺️',
    description: 'Explore worlds and discover stories',
    gameCount: games.filter(g => g.category === 'Adventure').length
  },
  {
    id: 'puzzle',
    name: 'Puzzle',
    icon: '🧩',
    description: 'Brain-teasing challenges and logic games',
    gameCount: games.filter(g => g.category === 'Puzzle').length
  },
  {
    id: 'shooting',
    name: 'Shooting',
    icon: '🎯',
    description: 'FPS and shooting action games',
    gameCount: games.filter(g => g.category === 'Shooting').length
  },
  {
    id: 'racing',
    name: 'Racing',
    icon: '🏎️',
    description: 'High-speed racing and driving games',
    gameCount: games.filter(g => g.category === 'Racing').length
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
  },
  {
    id: 'casual',
    name: 'Casual',
    icon: '🎮',
    description: 'Fun and relaxing casual games',
    gameCount: games.filter(g => g.category === 'Casual').length
  }
];