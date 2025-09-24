import React, { useState, useEffect, useMemo } from "react";
import { X, Search as SearchIcon, Star, Trophy, Target } from "lucide-react";
import { MatchCard } from "./MatchCard";
import { getSportsMatchData } from "./SportsMatchData";
import { favoritesStore } from "../lib/favoritesStore";

interface EventFavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
}

const MAX_SELECTED = 10;
const sports = ["All", "Football", "Basketball", "Tennis"];

export function EventFavoritesDrawer({ isOpen, onClose, onSave }: EventFavoritesDrawerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");
  const [, setTick] = useState(0);

  // Subscribe to favorites changes
  useEffect(() => favoritesStore.subscribe(() => setTick((t) => t + 1)), []);

  if (!isOpen) return null;

  // Get all matches from different sports
  const allMatches = useMemo(() => {
    let matches: any[] = [];
    if (selectedSport === "All" || selectedSport === "Football") {
      matches = [...matches, ...getSportsMatchData("football")];
    }
    if (selectedSport === "All" || selectedSport === "Basketball") {
      matches = [...matches, ...getSportsMatchData("basketball")];
    }
    if (selectedSport === "All" || selectedSport === "Tennis") {
      matches = [...matches, ...getSportsMatchData("tennis")];
    }
    return matches;
  }, [selectedSport]);

  // Filter matches based on search
  const filteredMatches = useMemo(() => {
    if (!searchQuery.trim()) return allMatches;
    
    const query = searchQuery.toLowerCase();
    return allMatches.filter(match => {
      const home = match?.teams?.home || match?.teams?.[0]?.name || "";
      const away = match?.teams?.away || match?.teams?.[1]?.name || "";
      const league = typeof match?.league === "string" ? match.league : (match?.league?.name || "");
      
      return (
        home.toLowerCase().includes(query) ||
        away.toLowerCase().includes(query) ||
        league.toLowerCase().includes(query)
      );
    });
  }, [allMatches, searchQuery]);

  const favoriteIds = favoritesStore.get();
  const selectedCount = favoriteIds.length;
  const atMax = selectedCount >= MAX_SELECTED;

  const handleToggleFavorite = (matchId: string) => {
    favoritesStore.toggle(matchId);
  };

  const handleSave = () => {
    onSave?.();
    onClose();
  };

  const handleClearAll = () => {
    favoritesStore.set([]);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/50" 
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        }}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-2xl bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Select Favorite Events</h2>
            <p className="text-sm text-gray-600">
              Choose up to {MAX_SELECTED} matches to follow ({selectedCount}/{MAX_SELECTED})
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-600 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Controls */}
        <div className="p-4 border-b border-gray-200 space-y-4">
          {/* Search */}
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search teams, matches, leagues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#9ce800]/20 focus:border-[#9ce800]"
            />
          </div>

          {/* Sport Filter */}
          <div className="flex gap-2 overflow-x-auto">
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedSport === sport
                    ? "bg-[#9ce800] text-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {sport}
              </button>
            ))}
          </div>

          {/* Selected count and actions */}
          {selectedCount > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {selectedCount} event{selectedCount !== 1 ? 's' : ''} selected
              </span>
              <button
                onClick={handleClearAll}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Clear all
              </button>
            </div>
          )}

          {atMax && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-sm text-amber-800">
                Maximum of {MAX_SELECTED} events reached. Remove some to add more.
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {filteredMatches.length > 0 ? (
            <div className="space-y-3">
              {filteredMatches.map((match) => (
                <div key={match.id} className="relative">
                  <MatchCard
                    id={match.id}
                    isLive={match.isLive}
                    teams={match.teams}
                    league={match.league}
                    odds={match.odds}
                    oddsValues={match.oddsValues}
                    betCount={match.betCount}
                    timestamp={match.timestamp}
                    badges={match.badges}
                    isPopular={match.isPopular}
                    boostedOddsIndex={match.boostedOddsIndex}
                    isFavorite={favoritesStore.has(match.id)}
                    onFavoriteToggle={() => handleToggleFavorite(match.id)}
                    isCompact={true}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No matches found</h3>
              <p className="text-sm text-gray-600">
                {searchQuery ? "Try adjusting your search terms" : "No matches available for this sport"}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-2.5 px-4 rounded-lg bg-[#9ce800] text-black font-medium hover:bg-[#8bc700] focus:outline-none focus:ring-2 focus:ring-[#9ce800] focus:ring-offset-2 transition-colors"
          >
            Save {selectedCount > 0 ? `(${selectedCount})` : ''}
          </button>
        </div>
      </div>
    </>
  );
}