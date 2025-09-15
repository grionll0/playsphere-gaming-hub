export interface Game {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  isFeatured: boolean;
  isTrending: boolean;
  isNew: boolean;
  releaseDate: string;
  rating: number;
  plays: number;
  tags: string[];
  developer: string;
}

export interface GameCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  gameCount: number;
}