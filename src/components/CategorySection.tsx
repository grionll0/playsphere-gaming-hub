import React from 'react';
import { Button } from '@/components/ui/button';
import { GameCategory } from '../types/game';

interface CategorySectionProps {
  categories: GameCategory[];
  onCategorySelect: (categoryId: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ categories, onCategorySelect }) => {
  return (
    <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Game <span className="text-transparent bg-clip-text hero-gradient">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your next favorite game from our diverse collection of genres
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              className="h-auto p-6 flex flex-col items-center space-y-3 game-card border-border hover:border-primary transition-all duration-300 hover:scale-105"
              onClick={() => onCategorySelect(category.id)}
            >
              <div className="text-3xl">{category.icon}</div>
              <div className="text-center">
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{category.description}</p>
                <div className="text-xs font-medium text-primary">
                  {category.gameCount} games
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};