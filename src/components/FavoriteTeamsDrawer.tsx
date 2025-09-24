import { useState } from "react";
import { X, Search, Heart, Check } from "lucide-react";

const MAX_SELECTED = 5;

type TeamSummary = {
  id: string;
  name: string;
  subtitle: string; // e.g., "Football • Premier League"
  logo: string;     // keep the emoji for now
};

interface FavoriteTeamsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (selectedTeams: string[]) => void;
  initialSelectedTeams?: string[];
}

interface Team {
  id: string;
  name: string;
  sport: string;
  league: string;
  logo: string;
  isPopular?: boolean;
}

const teamsData: Team[] = [
  // Football Teams
  { id: "mu", name: "Manchester United", sport: "Football", league: "Premier League", logo: "🔴", isPopular: true },
  { id: "mc", name: "Manchester City", sport: "Football", league: "Premier League", logo: "🔵", isPopular: true },
  { id: "liv", name: "Liverpool", sport: "Football", league: "Premier League", logo: "🔴" },
  { id: "che", name: "Chelsea", sport: "Football", league: "Premier League", logo: "🔵" },
  { id: "ars", name: "Arsenal", sport: "Football", league: "Premier League", logo: "🔴" },
  { id: "tot", name: "Tottenham", sport: "Football", league: "Premier League", logo: "⚪" },
  { id: "rm", name: "Real Madrid", sport: "Football", league: "La Liga", logo: "⚪", isPopular: true },
  { id: "fcb", name: "FC Barcelona", sport: "Football", league: "La Liga", logo: "🔵" },
  { id: "psg", name: "Paris Saint-Germain", sport: "Football", league: "Ligue 1", logo: "🔵" },
  { id: "bay", name: "Bayern Munich", sport: "Football", league: "Bundesliga", logo: "🔴" },
  
  // Basketball Teams
  { id: "lal", name: "Los Angeles Lakers", sport: "Basketball", league: "NBA", logo: "💜", isPopular: true },
  { id: "gsw", name: "Golden State Warriors", sport: "Basketball", league: "NBA", logo: "💛", isPopular: true },
  { id: "bos", name: "Boston Celtics", sport: "Basketball", league: "NBA", logo: "💚" },
  { id: "mia", name: "Miami Heat", sport: "Basketball", league: "NBA", logo: "🔴" },
  { id: "brk", name: "Brooklyn Nets", sport: "Basketball", league: "NBA", logo: "⚫" },
  { id: "phi", name: "Philadelphia 76ers", sport: "Basketball", league: "NBA", logo: "🔵" },
  
  // Tennis Players (treated as teams)
  { id: "djokovic", name: "Novak Djokovic", sport: "Tennis", league: "ATP", logo: "🎾" },
  { id: "nadal", name: "Rafael Nadal", sport: "Tennis", league: "ATP", logo: "🎾" },
  { id: "federer", name: "Roger Federer", sport: "Tennis", league: "ATP", logo: "🎾" }
];

const sports = ["All", "Football", "Basketball", "Tennis"];

export function FavoriteTeamsDrawer({ isOpen, onClose, onSave, initialSelectedTeams = [] }: FavoriteTeamsDrawerProps) {
  const [selectedTeams, setSelectedTeams] = useState<string[]>(initialSelectedTeams);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");

  if (!isOpen) return null;

  const filteredTeams = teamsData.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         team.league.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = selectedSport === "All" || team.sport === selectedSport;
    return matchesSearch && matchesSport;
  });

  const popularTeams = filteredTeams.filter(team => team.isPopular);
  const otherTeams = filteredTeams.filter(team => !team.isPopular);

  const atMax = selectedTeams.length >= MAX_SELECTED;

  const handleTeamToggle = (teamId: string) => {
    setSelectedTeams(prev => {
      const isSelected = prev.includes(teamId);
      // Allow unselect at any time
      if (isSelected) return prev.filter(id => id !== teamId);
      // Enforce max when adding
      if (prev.length >= MAX_SELECTED) return prev; // ignore when at limit
      return [...prev, teamId];
    });
  };

  const handleSave = () => {
    // Build summaries from teamsData
    const summaries: TeamSummary[] = teamsData
      .filter(t => selectedTeams.includes(t.id))
      .map(t => ({
        id: t.id,
        name: t.name,
        subtitle: `${t.sport} • ${t.league}`,
        logo: t.logo,
      }));

    localStorage.setItem('favTeams', JSON.stringify(summaries));
    window.dispatchEvent(new CustomEvent("fav:teams:updated"));
    onSave(selectedTeams);
    onClose();
  };

  const selectedTeamNames = teamsData
    .filter(team => selectedTeams.includes(team.id))
    .map(team => team.name);

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full bg-white rounded-t-3xl shadow-xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Select Favorite Teams</h2>
            <p className="text-sm text-gray-600">
              Choose up to {MAX_SELECTED} teams to follow — Selected: {selectedTeams.length}/{MAX_SELECTED}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search teams or leagues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9ce800] focus:border-transparent"
            />
          </div>
        </div>

        {/* Sport Filter */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSport === sport
                    ? 'bg-[#9ce800] text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {popularTeams.length > 0 && (
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Popular Teams</h3>
              <div className="space-y-2">
                {popularTeams.map((team) => (
                  <TeamItem
                    key={team.id}
                    team={team}
                    isSelected={selectedTeams.includes(team.id)}
                    disabled={atMax && !selectedTeams.includes(team.id)}
                    onToggle={() => handleTeamToggle(team.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {otherTeams.length > 0 && (
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                {popularTeams.length > 0 ? "All Teams" : "Teams"}
              </h3>
              <div className="space-y-2">
                {otherTeams.map((team) => (
                  <TeamItem
                    key={team.id}
                    team={team}
                    isSelected={selectedTeams.includes(team.id)}
                    disabled={atMax && !selectedTeams.includes(team.id)}
                    onToggle={() => handleTeamToggle(team.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {filteredTeams.length === 0 && (
            <div className="p-8 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">No teams found</h3>
              <p className="text-xs text-gray-600">Try adjusting your search or filter</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          {selectedTeams.length > 0 && (
            <div className="mb-3">
              <p className="text-xs text-gray-600 mb-2">Selected teams:</p>
              <div className="flex flex-wrap gap-1">
                {selectedTeamNames.slice(0, 3).map((name) => (
                  <span key={name} className="text-xs bg-[#9ce800] text-black px-2 py-1 rounded-full">
                    {name}
                  </span>
                ))}
                {selectedTeamNames.length > 3 && (
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                    +{selectedTeamNames.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600">Selected: {selectedTeams.length}/{MAX_SELECTED}</span>
            <div className="ml-auto flex gap-3">
              <button
                onClick={onClose}
                className="py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setSelectedTeams([])}
                className="py-3 px-3 rounded-lg text-gray-600 hover:bg-gray-100"
                type="button"
              >
                Clear all
              </button>
              <button
                onClick={handleSave}
                className="py-3 px-4 rounded-lg font-medium transition-colors bg-[#9ce800] text-black hover:bg-[#8bd400]"
              >
                Save ({selectedTeams.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamItem({
  team, isSelected, disabled, onToggle
}: { team: Team; isSelected: boolean; disabled?: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      disabled={disabled && !isSelected}
      className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${
        isSelected 
          ? 'border-[#9ce800] bg-[#9ce800]/10' 
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      } ${disabled && !isSelected ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
    >
      <div className="text-xl">{team.logo}</div>
      <div className="flex-1 text-left">
        <h4 className="text-sm font-medium text-gray-900">{team.name}</h4>
        <p className="text-xs text-gray-600">{team.sport} • {team.league}</p>
      </div>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        isSelected 
          ? 'border-[#9ce800] bg-[#9ce800]' 
          : 'border-gray-300'
      }`}>
        {isSelected && <Check className="h-3 w-3 text-black" />}
      </div>
    </button>
  );
}