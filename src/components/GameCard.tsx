import React from 'react';
import { Play, Heart, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Game } from '../types/game';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
  onToggleFavorite: (gameId: string) => void;
  isFavorite: boolean;
  variant?: 'default' | 'featured' | 'compact';
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onPlay,
  onToggleFavorite,
  isFavorite,
  variant = 'default'
}) => {
  const formatPlays = (plays: number) => {
    if (plays >= 1000000) return `${(plays / 1000000).toFixed(1)}M`;
    if (plays >= 1000) return `${(plays / 1000).toFixed(0)}K`;
    return plays.toString();
  };

  if (variant === 'compact') {
    return (
      <div className="game-card p-4 flex items-center space-x-4">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm truncate">{game.title}</h3>
          <p className="text-xs text-muted-foreground">{game.category}</p>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <span className="text-xs">{game.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{formatPlays(game.plays)}</span>
            </div>
          </div>
        </div>
        <Button
          variant="gaming"
          size="sm"
          onClick={() => onPlay(game)}
          className="text-xs px-3 py-1"
        >
          <Play className="h-3 w-3" />
        </Button>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="game-card overflow-hidden bg-gradient-to-br from-game-card to-game-card-hover">
        <div className="relative h-64 overflow-hidden">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {game.isFeatured && (
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            )}
            {game.isTrending && (
              <Badge className="bg-secondary text-secondary-foreground">Trending</Badge>
            )}
            {game.isNew && (
              <Badge className="bg-accent text-accent-foreground">New</Badge>
            )}
          </div>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-4 right-4 p-2 ${
              isFavorite ? 'text-red-500' : 'text-white/80 hover:text-white'
            }`}
            onClick={() => onToggleFavorite(game.id)}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="gaming"
              size="lg"
              onClick={() => onPlay(game)}
              className="text-lg px-8 py-4"
            >
              <Play className="h-6 w-6 mr-2" />
              Play Now
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold mb-1">{game.title}</h3>
              <p className="text-muted-foreground text-sm">{game.developer}</p>
            </div>
            <Badge variant="outline">{game.category}</Badge>
          </div>

          <p className="text-foreground/80 text-sm mb-4 line-clamp-2">{game.description}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-medium">{game.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{formatPlays(game.plays)} plays</span>
              </div>
            </div>
          </div>

          <Button
            variant="gaming"
            onClick={() => onPlay(game)}
            className="w-full"
          >
            <Play className="h-4 w-4 mr-2" />
            Play Game
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-card overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {game.isTrending && (
            <Badge className="bg-secondary text-secondary-foreground text-xs">Trending</Badge>
          )}
          {game.isNew && (
            <Badge className="bg-accent text-accent-foreground text-xs">New</Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 p-1.5 ${
            isFavorite ? 'text-red-500' : 'text-white/80 hover:text-white'
          }`}
          onClick={() => onToggleFavorite(game.id)}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="gaming"
            onClick={() => onPlay(game)}
          >
            <Play className="h-4 w-4 mr-2" />
            Play
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-base truncate flex-1">{game.title}</h3>
          <Badge variant="outline" className="ml-2 text-xs">{game.category}</Badge>
        </div>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{game.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <span className="text-sm">{game.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{formatPlays(game.plays)}</span>
            </div>
          </div>
        </div>

        <Button
          variant="gaming"
          onClick={() => onPlay(game)}
          className="w-full text-sm"
        >
          <Play className="h-4 w-4 mr-2" />
          Play Game
        </Button>
      </div>
    </div>
  );
};