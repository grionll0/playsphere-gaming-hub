import React, { useState } from 'react';
import { Search, User, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logoImage from '../assets/playsphere-logo.png';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'All Games', href: '#games' },
    { name: 'Categories', href: '#categories' },
    { name: 'Top Picks', href: '#top-picks' },
    { name: 'Favorites', href: '#favorites' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoImage} alt="PlaySphere" className="h-10 w-10" />
          <span className="text-2xl font-bold neon-text">PlaySphere</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors duration-200 hover:neon-text"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex relative max-w-md flex-1 mx-8">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-10 bg-muted/50 border-border focus:border-primary transition-colors"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Heart className="h-4 w-4 mr-2" />
            Favorites
          </Button>
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button variant="gaming" size="sm" className="hidden sm:flex">
            Sign Up
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 bg-muted/50 border-border"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="flex space-x-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button variant="gaming" size="sm" className="flex-1">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};