import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { GameSection } from '../components/GameSection';
import { CategorySection } from '../components/CategorySection';
import { GameModal } from '../components/GameModal';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { games, categories } from '../data/gamesData';
import { Game } from '../types/game';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('playsphere-favorites');
    if (savedFavorites) {
      setFavorites(new Set(JSON.parse(savedFavorites)));
    }
  }, []);

  // Save favorites to localStorage when changed
  useEffect(() => {
    localStorage.setItem('playsphere-favorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  // Filter games based on search query and category
  const filteredGames = useMemo(() => {
    let filtered = games;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(game =>
        game.title.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(game => 
        game.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Game sections
  const featuredGames = games.filter(game => game.isFeatured);
  const trendingGames = games.filter(game => game.isTrending);
  const newGames = games.filter(game => game.isNew);
  const topPicks = games.slice().sort((a, b) => b.rating - a.rating).slice(0, 6);
  const favoriteGames = games.filter(game => favorites.has(game.id));

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null); // Clear category filter when searching
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery(''); // Clear search when selecting category
  };

  const handlePlayGame = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleToggleFavorite = (gameId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(gameId)) {
        newFavorites.delete(gameId);
      } else {
        newFavorites.add(gameId);
      }
      return newFavorites;
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />
      
      {/* Show different content based on filters */}
      {!searchQuery && !selectedCategory ? (
        <>
          <HeroSection onSearch={handleSearch} searchQuery={searchQuery} />
          
          <GameSection
            id="featured-games"
            title="Featured Games"
            subtitle="Hand-picked games just for you"
            games={featuredGames}
            onPlay={handlePlayGame}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
            variant="featured"
          />

          <CategorySection
            categories={categories}
            onCategorySelect={handleCategorySelect}
          />

          <GameSection
            id="trending-games"
            title="Trending Now"
            subtitle="What everyone's playing right now"
            games={trendingGames}
            onPlay={handlePlayGame}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
            showScrollButtons
          />

          <GameSection
            id="new-games"
            title="New Releases"
            subtitle="Fresh games added this week"
            games={newGames}
            onPlay={handlePlayGame}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />

          <GameSection
            id="top-picks"
            title="Top Picks"
            subtitle="Highest rated games on PlaySphere"
            games={topPicks}
            onPlay={handlePlayGame}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />

          {favoriteGames.length > 0 && (
            <GameSection
              id="favorites"
              title="Your Favorites"
              subtitle="Games you've saved for later"
              games={favoriteGames}
              onPlay={handlePlayGame}
              onToggleFavorite={handleToggleFavorite}
              favorites={favorites}
              variant="compact"
            />
          )}
        </>
      ) : (
        <>
          {/* Search/Category Results */}
          <div className="pt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">
                  {searchQuery ? `Search Results for "${searchQuery}"` : 
                   selectedCategory ? `${selectedCategory} Games` : 'All Games'}
                </h1>
                <p className="text-muted-foreground">
                  {filteredGames.length} game{filteredGames.length !== 1 ? 's' : ''} found
                </p>
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-16">
                  {filteredGames.map((game) => (
                    <div key={game.id} className="game-card overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={game.thumbnail}
                          alt={game.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Button
                          variant="gaming"
                          onClick={() => handlePlayGame(game)}
                          className="px-6 py-2"
                        >
                            Play
                          </Button>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-base truncate mb-1">{game.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{game.description}</p>
                        <Button
                          variant="gaming"
                          onClick={() => handlePlayGame(game)}
                          className="w-full text-sm py-2"
                        >
                          Play Game
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🎮</div>
                  <h3 className="text-xl font-semibold mb-2">No games found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or browse our categories
                  </p>
                  <Button
                    variant="gaming"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(null);
                    }}
                  >
                    Browse All Games
                  </Button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <Footer />
      <BackToTop />

      <GameModal
        game={selectedGame}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
