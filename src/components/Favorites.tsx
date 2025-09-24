import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";

import { MatchCard } from "./MatchCard";
import MarketMatchCard from "./MarketMatchCard";
import { FavoriteTeamsDrawer } from "./FavoriteTeamsDrawer";
import { FavoriteLeaguesDrawer } from "./FavoriteLeaguesDrawer";
import { getSportsMatchData } from "./SportsMatchData";
import { searchResultsStore } from "../lib/searchResultsStore";
import { favoritesStore } from "../lib/favoritesStore";
import { favoritesStoreV2 } from "../lib/favoritesStoreV2";
import { AISearchDrawer } from "./AISearchDrawer";
import { Star, Heart, TrendingUp, Gamepad2, Grid3X3, Brain, Trophy, Users, Settings } from "lucide-react";
import Cherry from "../imports/Cherry-2-962";
import exampleImage from 'figma:asset/6eae845d1f6aef678dc4fb1166b55b006d869c83.png';
import jetxImage from 'figma:asset/4d144ccf2f7820767435a3172705c3b18a12294c.png';
import fortuneMinerImage from 'figma:asset/f4f81027d6ba0598ec5a350602dbc6490d23dc15.png';
import svgPaths from "../imports/svg-j2z99k9d1a";

interface FavoritesProps {
  activeItem: string;
  onAccountClick: () => void;
  onNavigationClick: () => void;
  onHelpClick: () => void;
  onFiltersClick?: () => void;
  onBetslipClick: () => void;
  selectedLeagues?: string[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  favoriteTeams: string[];
  onFavoriteTeamsClick?: () => void;
  onFavoriteLeaguesClick?: () => void;
  onAISearchClick: () => void;
  onSearchWithQuery?: (query: string) => void;
}

type FavTeam = { id: string; name: string; subtitle: string; logo: string };
type FavLeague = { id: string; name: string; country: string; emoji: string };

export function Favorites({ 
  activeItem, 
  onAccountClick, 
  onNavigationClick,
  onHelpClick, 
  onFiltersClick, 
  onBetslipClick, 
  selectedLeagues, 
  isLoggedIn, 
  setIsLoggedIn,
  favoriteTeams,
  onFavoriteTeamsClick,
  onFavoriteLeaguesClick,
  onAISearchClick,
  onSearchWithQuery
}: FavoritesProps) {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'sports' | 'casino' | 'MyApps'>('sports');

  // Local bump state to trigger re-render on store changes
  const [, setTick] = useState(0);
  const [, setSearchTick] = useState(0);
  const [, setMarketTick] = useState(0);
  useEffect(() => favoritesStore.subscribe(() => setTick((t) => t + 1)), []);
  useEffect(() => searchResultsStore.subscribe(() => setSearchTick((t) => t + 1)), []);
  useEffect(() => favoritesStoreV2.subscribe(() => setMarketTick((t) => t + 1)), []);

  // AI Search state
  const [aiQuery, setAiQuery] = useState("");
  const [isAISearchOpen, setIsAISearchOpen] = useState(false);

  // Enhanced market favorites state
  const [favMarketItems, setFavMarketItems] = useState(favoritesStoreV2.list());
  useEffect(() => favoritesStoreV2.subscribe(() => setFavMarketItems(favoritesStoreV2.list())), []);

  // Local state for favorites as specified
  const [favTeamIds, setFavTeamIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('favTeams') || '[]').map((team: FavTeam) => team.id);
    } catch {
      return [];
    }
  });
  
  const [favLeagueIds, setFavLeagueIds] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('favLeagues') || '[]').map((league: FavLeague) => league.id);
    } catch {
      return [];
    }
  });
  
  const [isTeamsDrawerOpen, setIsTeamsDrawerOpen] = useState(false);
  const [isLeaguesDrawerOpen, setIsLeaguesDrawerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Get favorite teams and leagues data from localStorage
  const [favTeamsData, setFavTeamsData] = useState<FavTeam[]>([]);
  const [favLeaguesData, setFavLeaguesData] = useState<FavLeague[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const teams = JSON.parse(localStorage.getItem('favTeams') || '[]');
      setFavTeamsData(Array.isArray(teams) ? teams : []);
    } catch {
      setFavTeamsData([]);
    }

    try {
      const leagues = JSON.parse(localStorage.getItem('favLeagues') || '[]');
      setFavLeaguesData(Array.isArray(leagues) ? leagues : []);
    } catch {
      setFavLeaguesData([]);
    }
  }, []);

  // Add listeners to custom events + storage
  useEffect(() => {
    const refresh = () => {
      try {
        setFavTeamsData(JSON.parse(localStorage.getItem('favTeams') || '[]'));
      } catch { setFavTeamsData([]); }
      try {
        setFavLeaguesData(JSON.parse(localStorage.getItem('favLeagues') || '[]'));
      } catch { setFavLeaguesData([]); }
    };
    window.addEventListener("fav:teams:updated", refresh);
    window.addEventListener("fav:leagues:updated", refresh);
    window.addEventListener("storage", refresh); // cross-tab safety
    return () => {
      window.removeEventListener("fav:teams:updated", refresh);
      window.removeEventListener("fav:leagues:updated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  // Build merged pills defensively
  type Pill = { label: string; kind: "team" | "league" };
  const clean = (s?: string) => (s || "").trim();

  const mergedPills: Pill[] = useMemo(() => {
    const teams = Array.isArray(favTeamsData) ? favTeamsData : [];
    const leagues = Array.isArray(favLeaguesData) ? favLeaguesData : [];
    const t = teams.map(t => ({ label: clean((t as any)?.name), kind: "team" as const })).filter(p => p.label);
    const l = leagues.map(l => ({ label: clean((l as any)?.name), kind: "league" as const })).filter(p => p.label);
    const map = new Map<string, Pill>();
    [...t, ...l].forEach(p => map.set(`${p.kind}::${p.label}`, p));
    return Array.from(map.values());
  }, [favTeamsData, favLeaguesData]);

  // Save handlers as specified
  const handleSaveTeams = useCallback((ids: string[]) => {
    setFavTeamIds(ids);
    // The FavoriteTeamsDrawer already saves to localStorage, so we just need to update our local state
    try {
      const savedTeams = JSON.parse(localStorage.getItem('favTeams') || '[]');
      setFavTeamsData(savedTeams);
    } catch {
      setFavTeamsData([]);
    }
  }, []);

  const handleSaveLeagues = useCallback((ids: string[]) => {
    setFavLeagueIds(ids);
    // The FavoriteLeaguesDrawer already saves to localStorage, so we just need to update our local state
    try {
      const savedLeagues = JSON.parse(localStorage.getItem('favLeagues') || '[]');
      setFavLeaguesData(savedLeagues);
    } catch {
      setFavLeaguesData([]);
    }
  }, []);

  // Remove functions
  const removeFavTeam = (id: string) => {
    const updatedTeams = favTeamsData.filter(t => t.id !== id);
    const updatedIds = updatedTeams.map(t => t.id);
    setFavTeamsData(updatedTeams);
    setFavTeamIds(updatedIds);
    localStorage.setItem('favTeams', JSON.stringify(updatedTeams));
  };

  const removeFavLeague = (id: string) => {
    const updatedLeagues = favLeaguesData.filter(l => l.id !== id);
    const updatedIds = updatedLeagues.map(l => l.id);
    setFavLeaguesData(updatedLeagues);
    setFavLeagueIds(updatedIds);
    localStorage.setItem('favLeagues', JSON.stringify(updatedLeagues));
  };

  // Helper to navigate to Sports page with specific sport tab
  const goToSport = (sportId: 'football' | 'basketball' | 'efootball' | 'tennis') => {
    // Navigate directly to Sports route with a sport query param
    navigate(`/sports?sport=${sportId}`);
    // Fire event too, as a fallback for already-mounted Sports
    window.dispatchEvent(new CustomEvent('sports:navigate', { detail: { sport: sportId } }));
  };



  // Compute favorite matches from both stores
  const favIds = favoritesStore.get();
  const allFootballMatches = getSportsMatchData('football');
  const allBasketballMatches = getSportsMatchData('basketball');
  const allTennisMatches = getSportsMatchData('tennis');
  const allStaticMatches = [...allFootballMatches, ...allBasketballMatches, ...allTennisMatches];
  
  // Also include cached search results (reactive to subscription)
  const searchResults = searchResultsStore.get();
  const allMatches = [...allStaticMatches, ...searchResults];

  // Legacy match favorites (1X2 only)
  let favoriteMatchData = allMatches.filter(m => favIds.includes(m.id));
  
  // Enhanced market favorites (all market types with snapshots)
  const favoriteMarketData = favoritesStoreV2.list();



  // Mock favorite casino games and apps data
  const favoriteCasinoGames = [
    { id: 1, name: "Aviator", provider: "Spribe", type: "Crash Game", lastWin: "₦452k", playCount: 127, image: exampleImage },
    { id: 2, name: "JetX", provider: "SmartSoft", type: "Crash Game", lastWin: "₦89k", playCount: 43, image: jetxImage },
    { id: 3, name: "Fortune Miner 2", provider: "BGaming", type: "Slot", lastWin: "₦156k", playCount: 78, image: fortuneMinerImage }
  ];

  const favoriteApps = [
    { 
      id: 1, 
      name: "Tipster App", 
      description: "Share predictions, follow top tipsters, leaderboards", 
      icon: <Users className="h-8 w-8 text-pink-600" />,
      iconBg: "bg-gradient-to-br from-pink-100 to-pink-200",
      category: "Social", 
      isNew: false 
    },
    { 
      id: 2, 
      name: "Group Bets", 
      description: "Friends combine stakes into one pooled bet", 
      icon: <Heart className="h-8 w-8 text-red-600" />,
      iconBg: "bg-gradient-to-br from-red-100 to-red-200",
      category: "Social", 
      isNew: false 
    },
    { 
      id: 3, 
      name: "Challenges App", 
      description: "Turn $1 into $100 community challenges", 
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      iconBg: "bg-gradient-to-br from-green-100 to-green-200",
      category: "Social", 
      isNew: false 
    },
    { 
      id: 4, 
      name: "BetMaker Pro", 
      description: "AI-powered betting recommendations", 
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      iconBg: "bg-gradient-to-br from-purple-100 to-purple-200",
      category: "Analytics", 
      isNew: true 
    }
  ];

  const tabs = [
    { id: 'sports' as const, label: 'Sports', icon: <Trophy className="h-4 w-4" /> },
    { id: 'casino' as const, label: 'Casino', icon: <div className="h-4 w-4"><Cherry /></div> },
    { id: 'apps' as const, label: 'MyApps', icon: <Grid3X3 className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full relative flex flex-col">
      {/* Fixed header at the top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header onAccountClick={onAccountClick} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onAISearchClick={onAISearchClick} onSearchWithQuery={onSearchWithQuery} />
      </div>
      
      {/* Main content */}
      <div className="flex-1 pt-[48px] pb-[120px]">
        {/* Page Header */}
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#9ce800] rounded-lg">
                <Star className="h-6 w-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Favorites</h1>
                <p className="text-sm text-gray-600">Your favourite events, teams & leagues</p>
              </div>
            </div>
            
            {/* Settings Menu */}
            <div className="relative">
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="w-8 h-8 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-600 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Settings className="h-4 w-4" />
              </button>

              {/* Settings Menu Dropdown */}
              {isSettingsOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsSettingsOpen(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setIsSettingsOpen(false);
                      }
                    }}
                  />
                  
                  {/* Menu */}
                  <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-lg p-1 z-50 origin-top-right">
                    <button
                      onClick={() => {
                        setIsSettingsOpen(false);
                        setIsTeamsDrawerOpen(true);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-50 active:bg-gray-100"
                    >
                      Manage Favorite Teams
                    </button>
                    <button
                      onClick={() => {
                        setIsSettingsOpen(false);
                        setIsLeaguesDrawerOpen(true);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-50 active:bg-gray-100"
                    >
                      Manage Favorite Leagues
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>



          {/* AI Search Input — tall, multiline, ChatGPT-style */}
          <div className="mt-3">
            <div>
              <textarea
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyDown={(e) => {
                  // Submit on Enter, allow Shift+Enter for a new line
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    setIsAISearchOpen(true);
                  }
                }}
                rows={3} // visible rows; users can still type longer
                placeholder="Type what you want to find… e.g. 'I love betting Man City BTTS with odds over 1.8'"
                className="w-full min-h-[64px] px-3 py-3 rounded-2xl border border-gray-200 bg-white text-sm outline-none focus:ring-2 focus:ring-black/10 resize-none placeholder:text-gray-400"
                aria-label="AI search for teams, leagues and markets"
              />
            </div>
            <div className="mt-1 text-[11px] text-gray-500">
              Press <span className="font-medium">Enter</span> to search • <span className="font-medium">Shift+Enter</span> for a new line
            </div>
          </div>

          {/* Mixed pills row (Teams + Leagues) with reliable empty state */}
          <div className="mt-2">
            {mergedPills.length > 0 ? (
              <div className="overflow-x-auto hide-scroll pr-1 [-ms-overflow-style:none] [scrollbar-width:none]">
                <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  {mergedPills.map((pill) => (
                    <button
                      key={`pill-${pill.kind}-${pill.label}`}
                      onClick={() => { setAiQuery(pill.label); setIsAISearchOpen(true); }}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
                      aria-label={`Search matches for ${pill.kind} ${pill.label}`}
                    >
                      {pill.kind === "team" ? (
                        <Users className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
                      ) : (
                        <Trophy className="h-3.5 w-3.5 text-gray-600" aria-hidden="true" />
                      )}
                      <span className="truncate max-w-[160px]">{pill.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-6">
          {activeTab === 'sports' && (
            <div className="space-y-6">


              {/* Favorite Markets Section (market-level) */}
              {favMarketItems.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Favorite Markets</h4>
                  <div className="space-y-3">
                    {favMarketItems.map((rec) => (
                      <MarketMatchCard key={rec.key} item={rec.item} />
                    ))}
                  </div>
                </div>
              )}

              {/* Favorite Events Section */}
              <div>
                {favoriteMatchData.length === 0 && favMarketItems.length === 0 ? (
                  <EmptyState
                    icon={<Trophy className="h-8 w-8 text-gray-400" />}
                    title="No Favorite Events"
                    description="Star your favorite matches to see them here for quick access."
                    type="sports"
                    onNavigateToSport={goToSport}
                  />
                ) : (
                  <div className="space-y-3">
                    {/* Legacy Match Favorites (1X2 only) */}
                    {favoriteMatchData.map((match) => (
                      <MatchCard
                        key={`legacy-${match.id}`}
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
                    
                    {/* Empty state tip for market favorites */}
                    {favMarketItems.length === 0 && (
                      <div className="text-xs text-gray-500 mt-2">Tip: Use search to favorite O/U, BTTS, DC or HT/FT markets.</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'casino' && (
            <div>
              {favoriteCasinoGames.length > 0 ? (
                <div className="space-y-4">
                  {/* Favorite Casino Games */}
                  <div className="space-y-3">
                    {favoriteCasinoGames.map((game) => (
                      <div key={game.id} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                        <div 
                          className="w-12 h-12 rounded-xl bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url('${game.name.includes('Fortune Miner') ? fortuneMinerImage : game.image}')` }}
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{game.name}</h4>
                          <p className="text-xs text-gray-600">{game.provider} • {game.type}</p>
                          <p className="text-xs text-green-600">Last win: {game.lastWin} • {game.playCount} plays</p>
                        </div>
                        <Star className="h-5 w-5 text-[#9ce800]" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <EmptyState 
                  icon={<Gamepad2 className="h-8 w-8 text-gray-400" />}
                  title="No Favorite Casino Games"
                  description="Discover and favorite exciting casino games from our collection."
                  type="casino"
                />
              )}
            </div>
          )}

          {activeTab === 'apps' && (
            <div>
              {favoriteApps.length > 0 ? (
                <div className="space-y-2">{/* compact vertical rhythm */}
                  {/* Favorite Apps - compact row style (consistent with Casino) */}
                  <div className="bg-white">
                    {favoriteApps.map((app) => (
                      <div key={app.id} className="px-3 py-2">
                        <div className="bg-white rounded-xl border border-gray-200 shadow-none px-3 py-2 hover:bg-gray-50 transition-colors">
                          <div className="flex items-center gap-3">
                            {/* Icon box (40px) — flat (no hover scale) */}
                            <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${app.iconBg}`}>
                              <div className="scale-90">{app.icon}</div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2 min-w-0">
                                  <h3 className="truncate text-[15px] sm:text-[16px] font-semibold text-gray-900 leading-tight">
                                    {app.name}
                                  </h3>
                                  {app.isNew && (
                                    <span className="bg-[#9ce800] text-black text-[10px] px-2 py-0.5 rounded-full font-medium">NEW</span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                  <button className="inline-flex items-center h-6 px-2 rounded-full bg-[#E7FCD1] text-[#1C2B0B] text-[11px] font-medium">
                                    Open
                                  </button>
                                  <button className="p-0">
                                    <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                      <path 
                                        d={svgPaths.pcd53300} 
                                        stroke="#fbbf24" 
                                        fill="#fbbf24"
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>

                              {/* single-line description */}
                              <p className="mt-0.5 text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                                {app.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <EmptyState 
                  icon={<Grid3X3 className="h-8 w-8 text-gray-400" />}
                  title="No Favorite Apps"
                  description="Explore our app marketplace and favorite the ones you love."
                  type="apps"
                />
              )}
            </div>
          )}
        </div>
      </div>
      

      
      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeItem={activeItem} onHelpClick={onHelpClick} onBetslipClick={onBetslipClick} onNavigationClick={onNavigationClick} />
      </div>

      {/* Mount drawers at the bottom */}
      <FavoriteTeamsDrawer
        isOpen={isTeamsDrawerOpen}
        onClose={() => setIsTeamsDrawerOpen(false)}
        onSave={handleSaveTeams}
        initialSelectedTeams={favTeamIds}
      />

      <FavoriteLeaguesDrawer
        isOpen={isLeaguesDrawerOpen}
        onClose={() => setIsLeaguesDrawerOpen(false)}
        onSave={handleSaveLeagues}
        initialSelectedLeagues={favLeagueIds}
      />

      <AISearchDrawer
        isOpen={isAISearchOpen}
        initialQuery={aiQuery}
        onClose={() => setIsAISearchOpen(false)}
      />
    </div>
  );
}

// Empty state component
function EmptyState({
  icon, title, description, type, onNavigateToSport
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
  type: 'sports' | 'casino' | 'apps',
  onNavigateToSport?: (sportId: 'football' | 'basketball' | 'efootball' | 'tennis') => void
}) {
  const getSuggestions = () => {
    switch (type) {
      case 'sports':
        return ['Football', 'Basketball', 'Tennis'];
      case 'casino':
        return ['Aviator', 'JetX', 'Slots'];
      case 'apps':
        return ['Pawa6', 'BetMaker', 'Analytics'];
      default:
        return ['Sports', 'Casino', 'Apps'];
    }
  };

  const sportChips = [
    { id: 'football' as const, label: 'Football' },
    { id: 'basketball' as const, label: 'Basketball' },
    { id: 'efootball' as const, label: 'eFootball' },
    { id: 'tennis' as const, label: 'Tennis' },
  ];

  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-6 max-w-sm mx-auto">{description}</p>

      {type === 'sports' ? (
        <div className="space-y-2">
          <p className="text-xs text-gray-500">Explore:</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {sportChips.map(c => (
              <button
                key={c.id}
                onClick={() => onNavigateToSport?.(c.id)}
                className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-xs text-gray-500">Explore:</p>
          <div className="flex gap-2 justify-center">
            {getSuggestions().map((s, i) => (
              <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}