import { useState } from "react";
import { X, Search, Heart, Check } from "lucide-react";

const MAX_SELECTED = 5;

type LeagueSummary = {
  id: string;
  name: string;
  country: string;
  emoji: string;
};

interface FavoriteLeaguesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (selectedLeagues: string[]) => void;
  initialSelectedLeagues?: string[];
}

interface League {
  id: string;
  name: string;
  country: string;
  emoji: string;
  isPopular?: boolean;
}

const leaguesData: League[] = [
  // Popular leagues
  { id: "epl", name: "Premier League", country: "England", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", isPopular: true },
  { id: "laliga", name: "La Liga", country: "Spain", emoji: "🇪🇸", isPopular: true },
  { id: "ucl", name: "UEFA Champions League", country: "Europe", emoji: "🏆", isPopular: true },
  { id: "seriea", name: "Serie A", country: "Italy", emoji: "🇮🇹", isPopular: true },
  { id: "bundesliga", name: "Bundesliga", country: "Germany", emoji: "🇩🇪", isPopular: true },
  
  // Other leagues
  { id: "ligue1", name: "Ligue 1", country: "France", emoji: "🇫🇷" },
  { id: "eredivisie", name: "Eredivisie", country: "Netherlands", emoji: "🇳🇱" },
  { id: "primeira", name: "Primeira Liga", country: "Portugal", emoji: "🇵🇹" },
  { id: "uel", name: "UEFA Europa League", country: "Europe", emoji: "🏆" },
  { id: "mls", name: "Major League Soccer", country: "USA", emoji: "🇺🇸" },
  { id: "championship", name: "Championship", country: "England", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: "bundesliga2", name: "2. Bundesliga", country: "Germany", emoji: "🇩🇪" }
];

const countries = ["All", "England", "Spain", "Italy", "Germany", "France", "Europe"];

export function FavoriteLeaguesDrawer({ isOpen, onClose, onSave, initialSelectedLeagues = [] }: FavoriteLeaguesDrawerProps) {
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>(initialSelectedLeagues);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  if (!isOpen) return null;

  const filteredLeagues = leaguesData.filter(league => {
    const matchesSearch = league.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         league.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === "All" || league.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const popularLeagues = filteredLeagues.filter(league => league.isPopular);
  const otherLeagues = filteredLeagues.filter(league => !league.isPopular);

  const atMax = selectedLeagues.length >= MAX_SELECTED;

  const handleLeagueToggle = (leagueId: string) => {
    setSelectedLeagues(prev => {
      const isSelected = prev.includes(leagueId);
      // Allow unselect at any time
      if (isSelected) return prev.filter(id => id !== leagueId);
      // Enforce max when adding
      if (prev.length >= MAX_SELECTED) return prev; // ignore when at limit
      return [...prev, leagueId];
    });
  };

  const handleSave = () => {
    // Build summaries from leaguesData for localStorage
    const summaries: LeagueSummary[] = leaguesData
      .filter(l => selectedLeagues.includes(l.id))
      .map(l => ({
        id: l.id,
        name: l.name,
        country: l.country,
        emoji: l.emoji,
      }));

    localStorage.setItem('favLeagues', JSON.stringify(summaries));
    window.dispatchEvent(new CustomEvent("fav:leagues:updated"));
    onSave(selectedLeagues);
    onClose();
  };

  const handleCancel = () => {
    setSelectedLeagues(initialSelectedLeagues);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Favorite Leagues</h2>
            <button
              onClick={handleCancel}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Choose up to 5 leagues to follow — Selected: {selectedLeagues.length}/{MAX_SELECTED}
          </p>
          
          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search leagues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#9ce800] focus:border-transparent"
            />
          </div>

          {/* Country Filter Pills */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedCountry === country
                    ? 'bg-[#9ce800] text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            {/* Popular Leagues */}
            {popularLeagues.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Popular Leagues</h3>
                <div className="space-y-2">
                  {popularLeagues.map((league) => {
                    const isSelected = selectedLeagues.includes(league.id);
                    const canToggle = isSelected || !atMax;
                    
                    return (
                      <button
                        key={league.id}
                        onClick={() => canToggle && handleLeagueToggle(league.id)}
                        disabled={!canToggle}
                        className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                          isSelected
                            ? 'bg-[#9ce800]/10 border-[#9ce800] text-black'
                            : canToggle
                            ? 'bg-white border-gray-200 hover:bg-gray-50 text-gray-900'
                            : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{league.emoji}</span>
                          <div className="text-left">
                            <div className="text-sm font-medium">{league.name}</div>
                            <div className="text-xs text-gray-600">{league.country}</div>
                          </div>
                        </div>
                        {isSelected && (
                          <Check className="w-4 h-4 text-[#9ce800]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Other Leagues */}
            {otherLeagues.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Other Leagues</h3>
                <div className="space-y-2">
                  {otherLeagues.map((league) => {
                    const isSelected = selectedLeagues.includes(league.id);
                    const canToggle = isSelected || !atMax;
                    
                    return (
                      <button
                        key={league.id}
                        onClick={() => canToggle && handleLeagueToggle(league.id)}
                        disabled={!canToggle}
                        className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                          isSelected
                            ? 'bg-[#9ce800]/10 border-[#9ce800] text-black'
                            : canToggle
                            ? 'bg-white border-gray-200 hover:bg-gray-50 text-gray-900'
                            : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{league.emoji}</span>
                          <div className="text-left">
                            <div className="text-sm font-medium">{league.name}</div>
                            <div className="text-xs text-gray-600">{league.country}</div>
                          </div>
                        </div>
                        {isSelected && (
                          <Check className="w-4 h-4 text-[#9ce800]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {filteredLeagues.length === 0 && (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">No leagues found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-gray-100 bg-gray-50">
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              className="flex-1 py-3 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setSelectedLeagues([])}
              className="py-3 px-3 rounded-lg text-gray-600 hover:bg-gray-100"
              type="button"
            >
              Clear all
            </button>
            <button
              onClick={handleSave}
              className="py-3 px-4 rounded-lg font-medium transition-colors bg-[#9ce800] text-black hover:bg-[#8bd400]"
            >
              Save ({selectedLeagues.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}