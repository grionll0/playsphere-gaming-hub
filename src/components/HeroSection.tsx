import React from 'react';
import { Search, Play, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroBanner from '../assets/hero-banner.jpg';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, searchQuery }) => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Gaming Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
        <div className="absolute inset-0 hero-gradient opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 neon-text">
            1000+ Free Online
            <span className="block text-transparent bg-clip-text hero-gradient">
              Games to Play!
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Dive into the ultimate gaming experience with our massive collection of 
            free browser games. No downloads, no limits, just pure gaming fun!
          </p>

          {/* Hero Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search thousands of games..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-background/80 backdrop-blur border-border focus:border-primary transition-all duration-300 focus:bg-background"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="gaming"
              size="lg"
              className="text-lg px-8 py-4 animate-glow"
              onClick={() => document.getElementById('featured-games')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="h-5 w-5 mr-2" />
              Start Playing Now
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-background/20 backdrop-blur border-border hover:bg-background/40 transition-all duration-300"
              onClick={() => document.getElementById('trending-games')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Trending Games
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-12 pt-8 border-t border-border/40">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold neon-text">30+</div>
              <div className="text-sm text-muted-foreground">Free Games</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold neon-text">8</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold neon-text">5M+</div>
              <div className="text-sm text-muted-foreground">Total Plays</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/20 animate-float hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-8 h-8 rounded-full bg-accent/20 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
    </section>
  );
};