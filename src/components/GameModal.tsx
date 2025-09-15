import React from 'react';
import { X, Play, Star, Users, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Game } from '../types/game';

interface GameModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GameModal: React.FC<GameModalProps> = ({ game, isOpen, onClose }) => {
  if (!game) return null;

  const formatPlays = (plays: number) => {
    if (plays >= 1000000) return `${(plays / 1000000).toFixed(1)}M`;
    if (plays >= 1000) return `${(plays / 1000).toFixed(0)}K`;
    return plays.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Header Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>

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

            {/* Game Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-3xl font-bold text-white mb-2">{game.title}</h2>
              <p className="text-white/80">by {game.developer}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="font-semibold">{game.rating}</span>
                <span className="text-muted-foreground">Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">{formatPlays(game.plays)}</span>
                <span className="text-muted-foreground">Plays</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">{formatDate(game.releaseDate)}</span>
                <span className="text-muted-foreground">Released</span>
              </div>
              
              <Badge variant="outline" className="text-sm">
                {game.category}
              </Badge>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">About This Game</h3>
              <p className="text-foreground/80 leading-relaxed">{game.description}</p>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Game Preview Area */}
            <div className="mb-6">
              <div className="bg-muted/50 rounded-xl p-8 text-center border-2 border-dashed border-border">
                <div className="max-w-md mx-auto">
                  <Play className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Game Loading...</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>{game.title}</strong> would start here. This is a preview modal.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    In a real implementation, this would be the game's iframe or WebGL canvas.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gaming"
                size="lg"
                className="flex-1 text-lg py-3"
                onClick={() => {
                  // In a real implementation, this would launch the game
                  console.log('Starting game:', game.title);
                }}
              >
                <Play className="h-5 w-5 mr-2" />
                Play {game.title}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="sm:w-auto px-8"
                onClick={onClose}
              >
                Close
              </Button>
            </div>

            {/* Game Instructions */}
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">How to Play</h4>
              <p className="text-sm text-muted-foreground">
                Use arrow keys or WASD to move, mouse to aim and click to interact. 
                Press ESC to pause the game. More specific controls will be shown when the game loads.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};