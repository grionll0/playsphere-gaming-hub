import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GameCard } from './GameCard';
import { Game } from '../types/game';

interface GameSectionProps {
  title: string;
  subtitle?: string;
  games: Game[];
  onPlay: (game: Game) => void;
  onToggleFavorite: (gameId: string) => void;
  favorites: Set<string>;
  variant?: 'default' | 'featured' | 'compact';
  showScrollButtons?: boolean;
  id?: string;
}

export const GameSection: React.FC<GameSectionProps> = ({
  title,
  subtitle,
  games,
  onPlay,
  onToggleFavorite,
  favorites,
  variant = 'default',
  showScrollButtons = false,
  id
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  if (games.length === 0) {
    return null;
  }

  const getGridClass = () => {
    switch (variant) {
      case 'featured':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      case 'compact':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4';
      default:
        return showScrollButtons 
          ? 'flex space-x-4 overflow-x-auto pb-4 custom-scrollbar'
          : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4';
    }
  };

  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
          
          {showScrollButtons && (
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll('left')}
                className="p-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll('right')}
                className="p-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div 
          ref={scrollContainerRef}
          className={getGridClass()}
        >
          {games.map((game) => (
            <div
              key={game.id}
              className={showScrollButtons ? 'flex-shrink-0 w-72' : ''}
            >
              <GameCard
                game={game}
                onPlay={onPlay}
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.has(game.id)}
                variant={variant}
              />
            </div>
          ))}
        </div>

        {!showScrollButtons && games.length > 8 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All {title}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};