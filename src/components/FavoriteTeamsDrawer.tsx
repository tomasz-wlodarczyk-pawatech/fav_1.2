import { useState, useEffect } from "react";
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
  rank?: number;
}

// Team logos mapping
const teamLogos: Record<string, string> = {
  // Premier League
  "AFC Bournemouth": "🍒",
  "Arsenal FC": "🔴",
  "Aston Villa": "🦁",
  "Brentford FC": "🐝",
  "Brighton & Hove Albion": "⚪",
  "Burnley FC": "🔴",
  "Chelsea FC": "🔵",
  "Crystal Palace": "🦅",
  "Everton FC": "🔵",
  "Fulham FC": "⚪",
  "Leeds United": "⚪",
  "Liverpool FC": "🔴",
  "Manchester City": "🔵",
  "Manchester United": "🔴",
  "Newcastle United": "⚫",
  "Nottingham Forest": "🔴",
  "Sunderland AFC": "🔴",
  "Tottenham Hotspur": "⚪",
  "West Ham United": "🔵",
  "Wolverhampton Wanderers": "🟡",
  
  // Serie A
  "AC Milan": "🔴",
  "ACF Fiorentina": "🟣",
  "AS Roma": "🔴",
  "Atalanta BC": "🔵",
  "Bologna FC": "🔴",
  "Cagliari Calcio": "🔴",
  "Como 1907": "🔵",
  "Genoa CFC": "🔴",
  "Hellas Verona": "🟡",
  "Inter Milano": "🔵",
  "Juventus Turin": "⚫",
  "Lazio Rome": "🔵",
  "Parma Calcio": "🟡",
  "Pisa SC": "🔵",
  "SSC Napoli": "🔵",
  "Sassuolo Calcio": "🟢",
  "Torino FC": "🔴",
  "US Cremonese": "🔴",
  "US Lecce": "🟡",
  "Udinese Calcio": "⚫",
  
  // Bundesliga
  "1. FC Cologne": "🔴",
  "1. FC Heidenheim": "🔴",
  "Bayer Leverkusen": "🔴",
  "Bayern Munich": "🔴",
  "Borussia Dortmund": "🟡",
  "Borussia Monchengladbach": "⚫",
  "Eintracht Frankfurt": "🔴",
  "FC Augsburg": "🔴",
  "FC St. Pauli": "🤎",
  "FSV Mainz": "🔴",
  "Hamburger SV": "🔵",
  "RB Leipzig": "🔴",
  "SC Freiburg": "🔴",
  "TSG Hoffenheim": "🔵",
  "Union Berlin": "🔴",
  "VfB Stuttgart": "⚪",
  "VfL Wolfsburg": "🟢",
  "Werder Bremen": "🟢",
  
  // La Liga
  "Athletic Bilbao": "🔴",
  "Atletico Madrid": "🔴",
  "CA Osasuna": "🔴",
  "Deportivo Alaves": "🔵",
  "Elche CF": "🟢",
  "Espanyol Barcelona": "🔵",
  "FC Barcelona": "🔵",
  "Getafe CF": "🔵",
  "Girona FC": "🔴",
  "Levante UD": "🔵",
  "RC Celta de Vigo": "🔵",
  "RCD Mallorca": "🔴",
  "Rayo Vallecano": "⚪",
  "Real Betis Seville": "🟢",
  "Real Madrid": "⚪",
  "Real Oviedo": "🔵",
  "Real Sociedad San Sebastian": "🔵",
  "Sevilla FC": "⚪",
  "Valencia CF": "🔴",
  "Villarreal CF": "🟡",
  
  // Ligue 1
  "AJ Auxerre": "🔵",
  "AS Monaco": "🔴",
  "Angers SCO": "⚫",
  "FC Lorient": "🟠",
  "FC Metz": "🔴",
  "FC Nantes": "🟡",
  "Le Havre AC": "🔵",
  "Lille OSC": "🔴",
  "OGC Nice": "🔴",
  "Olympique Lyon": "🔵",
  "Olympique Marseille": "🔵",
  "Paris FC": "🔵",
  "Paris Saint-Germain": "🔵",
  "RC Lens": "🟡",
  "Stade Brest 29": "🔴",
  "Stade Rennes": "🔴",
  "Strasbourg Alsace": "🔵",
  "Toulouse FC": "🟣"
};

const sports = ["All", "Football"];

// Hardcoded top 5 popular teams
const POPULAR_TEAMS = [
  { name: "Real Madrid", rank: 1, league: "La Liga" },
  { name: "FC Barcelona", rank: 2, league: "La Liga" },
  { name: "Manchester City", rank: 3, league: "Premier League" },
  { name: "Paris Saint-Germain", rank: 4, league: "Ligue 1" },
  { name: "Arsenal FC", rank: 5, league: "Premier League" }
];

interface ApiResponse {
  all_teams_by_league: Record<string, string[]>;
  most_popular_teams: Array<{
    team_name: string;
    favorite_count: number;
    rank: number;
  }>;
  total_teams: number;
  total_leagues: number;
  leagues: string[];
}

// Function to fetch teams from API
const fetchTeamsData = async (): Promise<Team[]> => {
  try {
    const response = await fetch('https://alluring-inspiration-production.up.railway.app/teams/all');
    const data: ApiResponse = await response.json();
    
    // Use hardcoded popular teams instead of API data
    const popularTeamNames = POPULAR_TEAMS.map(team => team.name);
    
    // Create rank mapping for quick lookup
    const teamRankMap = new Map();
    POPULAR_TEAMS.forEach(team => {
      teamRankMap.set(team.name, team.rank);
    });
    
    // Convert API data to Team format
    const teams: Team[] = [];
    
    // Process each league and its teams
    Object.entries(data.all_teams_by_league).forEach(([league, teamNames]) => {
      teamNames.forEach(teamName => {
        teams.push({
          id: teamName.toLowerCase().replace(/\s+/g, '-'),
          name: teamName,
          sport: "Football",
          league: league,
          logo: teamLogos[teamName] || "⚽",
          isPopular: popularTeamNames.includes(teamName),
          rank: teamRankMap.get(teamName)
        });
      });
    });
    
    return teams;
  } catch (error) {
    console.error('Failed to fetch teams data:', error);
    // Return empty array on error
    return [];
  }
};

export function FavoriteTeamsDrawer({ isOpen, onClose, onSave, initialSelectedTeams = [] }: FavoriteTeamsDrawerProps) {
  const [selectedTeams, setSelectedTeams] = useState<string[]>(initialSelectedTeams);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");
  const [teamsData, setTeamsData] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch teams data when component mounts
  useEffect(() => {
    const loadTeams = async () => {
      setIsLoading(true);
      const teams = await fetchTeamsData();
      setTeamsData(teams);
      setIsLoading(false);
    };
    
    if (isOpen) {
      loadTeams();
    }
  }, [isOpen]);

  // Listen for favorites updates and sync selectedTeams
  useEffect(() => {
    const handleFavoritesUpdate = () => {
      try {
        const favTeams = JSON.parse(localStorage.getItem('favTeams') || '[]');
        const teamIds = favTeams.map((team: any) => team.id);
        setSelectedTeams(teamIds);
      } catch (error) {
        console.error('Error syncing favorite teams:', error);
      }
    };

    // Sync initial state
    handleFavoritesUpdate();

    // Listen for updates
    window.addEventListener('fav:teams:updated', handleFavoritesUpdate);
    
    return () => {
      window.removeEventListener('fav:teams:updated', handleFavoritesUpdate);
    };
  }, []);

  if (!isOpen) return null;

  const filteredTeams = teamsData.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         team.league.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSport = selectedSport === "All" || team.sport === selectedSport;
    return matchesSearch && matchesSport;
  });

  const popularTeams = filteredTeams
    .filter(team => team.isPopular)
    .sort((a, b) => (a.rank || 999) - (b.rank || 999));
  
  // Group other teams by league
  const teamsByLeague = filteredTeams.filter(team => !team.isPopular).reduce((acc, team) => {
    if (!acc[team.league]) {
      acc[team.league] = [];
    }
    acc[team.league].push(team);
    return acc;
  }, {} as Record<string, Team[]>);
  
  // Sort leagues alphabetically
  const sortedLeagues = Object.keys(teamsByLeague).sort();

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
          {/* Popular Teams Section */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Popular Teams</h3>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                  <span className="text-sm text-gray-600">Loading popular teams...</span>
                </div>
              </div>
            ) : popularTeams.length > 0 ? (
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
            ) : (
              <div className="py-4 text-center">
                <p className="text-sm text-gray-500">No popular teams available</p>
              </div>
            )}
          </div>

          {/* All Teams by League Section */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">All Teams by League</h3>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                  <span className="text-sm text-gray-600">Loading teams by league...</span>
                </div>
              </div>
            ) : sortedLeagues.length > 0 ? (
              <div className="space-y-4">
                {sortedLeagues.map((league) => (
                  <div key={league}>
                    <h4 className="text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">
                      {league}
                    </h4>
                    <div className="space-y-2">
                      {teamsByLeague[league].map((team) => (
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
                ))}
              </div>
            ) : !isLoading && filteredTeams.length === 0 ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">No teams found</h3>
                <p className="text-xs text-gray-600">Try adjusting your search or filter</p>
              </div>
            ) : (
              <div className="py-4 text-center">
                <p className="text-sm text-gray-500">No teams available by league</p>
              </div>
            )}
          </div>
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