import React from 'react';

export const GameSkeleton: React.FC = () => {
  return (
    <div className="game-card overflow-hidden animate-pulse">
      <div className="h-48 bg-muted"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded"></div>
          <div className="h-3 bg-muted rounded w-5/6"></div>
        </div>
        <div className="h-8 bg-muted rounded"></div>
      </div>
    </div>
  );
};