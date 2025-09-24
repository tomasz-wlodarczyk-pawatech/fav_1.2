import { useState, useEffect } from "react";
import { Search, X, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MatchCard } from "./MatchCard";
import { useAISearch } from "../hooks/useAISearch";
import { favoritesStore } from "../lib/favoritesStore";
import { useDebounce } from "./ui/use-debounce";

interface AISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export function AISearchModal({ isOpen, onClose, initialQuery = "" }: AISearchModalProps) {
  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query, 500);
  const { search, results, isLoading, error, clearResults } = useAISearch();

  // Update query when initialQuery changes and modal opens
  useEffect(() => {
    if (isOpen && initialQuery) {
      setQuery(initialQuery);
    }
  }, [isOpen, initialQuery]);

  // Perform search when debounced query changes or when modal opens with initial query
  useEffect(() => {
    if (debouncedQuery.trim()) {
      search(debouncedQuery);
    } else {
      clearResults();
    }
  }, [debouncedQuery, search, clearResults]);

  // Trigger search when modal opens with an initial query (even if it's the same)
  useEffect(() => {
    if (isOpen && initialQuery && initialQuery.trim()) {
      // Clear results first
      clearResults();
      // Set query immediately to show it in the input  
      setQuery(initialQuery.trim());
      
      // Use setTimeout to ensure search happens after state updates
      setTimeout(() => {
        search(initialQuery.trim(), 10, true);
      }, 50);
    }
  }, [isOpen, initialQuery, search, clearResults]);

  // Clear results when modal closes
  useEffect(() => {
    if (!isOpen) {
      clearResults();
    }
  }, [isOpen, clearResults]);

  const handleClose = () => {
    setQuery("");
    clearResults();
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      search(query.trim());
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-[#9ce800]" />
            AI Sports Search
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 flex-1 overflow-hidden">
          {/* Search Form */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for teams, leagues, or betting markets..."
                value={query}
                onChange={handleInputChange}
                className="pl-10 pr-4 py-2 w-full"
                autoFocus
              />
            </div>
            <Button type="submit" disabled={!query.trim() || isLoading}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
            </Button>
          </form>

          {/* Search Results */}
          <div className="flex-1 overflow-auto">
            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-[#9ce800] mx-auto mb-3" />
                  <p className="text-sm text-gray-500">Searching for matches...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-red-800 mb-1">Search Error</h4>
                    <p className="text-xs text-red-600">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* No Results State */}
            {query && !isLoading && !error && results.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-base text-gray-900 mb-2">No matches found</h3>
                <p className="text-sm text-gray-500 mb-4">
                  No results for "{query}". Try adjusting your search terms.
                </p>
                <div className="text-xs text-gray-400">
                  <p className="mb-1">Try searching for:</p>
                  <p>• Team names (e.g., "Arsenal", "Barcelona")</p>
                  <p>• League names (e.g., "Premier League", "La Liga")</p>
                  <p>• Betting markets (e.g., "over 2.5 goals", "1X2")</p>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!query && !isLoading && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#9ce800]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-[#9ce800]" />
                </div>
                <h3 className="text-base text-gray-900 mb-2">Search for matches</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Use natural language to find betting opportunities
                </p>
                <div className="text-xs text-gray-400">
                  <p className="mb-2">Example searches:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-gray-100 px-2 py-1 rounded">Arsenal over 2.5 goals</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Premier League 1X2 matches</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Liverpool odds above 2.0</span>
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            {results.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base text-gray-900">
                    Found {results.length} match{results.length !== 1 ? 'es' : ''}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Results for "{query}"
                  </p>
                </div>
                
                <div className="grid gap-3">
                  {results.map((match) => (
                    <MatchCard
                      key={`modal-${match.id}`}
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
                      onFavoriteToggle={() => favoritesStore.toggle(match.id)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}