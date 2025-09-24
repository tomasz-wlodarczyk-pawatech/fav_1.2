import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";
import { PillTabs_Sports_Default, SportType } from "./PillTabs_Sports";
import { FilterNavigation } from "./FilterNavigation";
import { MatchCard } from "./MatchCard";
import { getFilteredMatches, getFavoritedMatchesCount } from "./SportsMatchData";
import { favoritesStore } from "../lib/favoritesStore";

interface SportsProps {
  activeItem: string;
  onAccountClick: () => void;
  onNavigationClick: () => void;
  onHelpClick: () => void;
  onLeaguesClick: () => void;
  onFiltersClick: () => void;
  onBetslipClick: () => void;
  selectedLeagues?: string[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  onAISearchClick: () => void;
  onSearchWithQuery?: (query: string) => void;
}

export function Sports({ activeItem, onAccountClick, onNavigationClick, onHelpClick, onLeaguesClick, onFiltersClick, onBetslipClick, selectedLeagues, isLoggedIn, setIsLoggedIn, onAISearchClick, onSearchWithQuery }: SportsProps) {
  const [searchParams] = useSearchParams();
  const [activeSport, setActiveSport] = useState<'football' | 'basketball' | 'efootball' | 'tennis'>('football');
  const [selectedFilter, setSelectedFilter] = useState<'popular' | 'live' | 'upcoming'>('popular');
  const [appliedLeagueFilters, setAppliedLeagueFilters] = useState<string[]>([]);
  const [appliedCountryFilters, setAppliedCountryFilters] = useState<string[]>([]);
  const [favouritesCount, setFavouritesCount] = useState(0);
  const [favoriteEvents, setFavoriteEvents] = useState<string[]>([]);
  const [favoriteSuggestedEvents, setFavoriteSuggestedEvents] = useState<string[]>([]);
  const [suggestedEventMatches, setSuggestedEventMatches] = useState<any[]>([]);
  
  // Local bump state to trigger re-render on favorites changes
  const [, setTick] = useState(0);
  useEffect(() => favoritesStore.subscribe(() => setTick((t) => t + 1)), []);

  // Read sport query parameter and switch to that sport tab
  useEffect(() => {
    const sport = searchParams.get('sport');
    if (sport === 'football' || sport === 'basketball' || sport === 'efootball' || sport === 'tennis') {
      setActiveSport(sport);
      // optional: scroll to top for clarity
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);

  // Listen for navigation events from Favorites
  useEffect(() => {
    const onNav = (e: any) => {
      const sport = e?.detail?.sport;
      if (sport === 'football' || sport === 'basketball' || sport === 'efootball' || sport === 'tennis') {
        setActiveSport(sport);
        // optionally scroll to top:
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('sports:navigate', onNav);
    return () => window.removeEventListener('sports:navigate', onNav);
  }, []);

  // Read filter parameters from URL on component mount and set favourites count
  useEffect(() => {
    const leagues = searchParams.get('leagues');
    const countries = searchParams.get('countries');
    const filter = searchParams.get('filter');
    const sport = searchParams.get('sport');
    
    if (leagues) {
      setAppliedLeagueFilters(leagues.split(','));
    }
    
    if (countries) {
      setAppliedCountryFilters(countries.split(','));
    }
    
    // Set initial filter from URL parameter
    if (filter && (filter === 'popular' || filter === 'live' || filter === 'upcoming')) {
      setSelectedFilter(filter as 'popular' | 'live' | 'upcoming');
    }
    
    // Set initial sport from URL parameter
    if (sport && (sport === 'football' || sport === 'basketball' || sport === 'efootball' || sport === 'tennis')) {
      setActiveSport(sport);
      // Scroll to top when navigating via URL
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Set favourites count to 0 for empty state
    setFavouritesCount(0);
  }, [searchParams]);

  const handleSportChange = (sport: SportType) => {
    setActiveSport(sport);
    console.log('Sport changed to:', sport);
  };

  const handleFilterChange = (filter: 'popular' | 'live' | 'upcoming') => {
    setSelectedFilter(filter);
    console.log('Filter changed to:', filter);
  };

  const handleFiltersClick = () => {
    onFiltersClick();
  };





  // Get filtered matches based on current sport and filter selection
  let matches = getFilteredMatches(activeSport, selectedFilter);
  


  return (
    <div className="min-h-screen bg-gray-50 w-full relative">
      {/* Fixed header at the top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header onAccountClick={onAccountClick} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onAISearchClick={onAISearchClick} onSearchWithQuery={onSearchWithQuery} />
      </div>
      
      {/* Fixed sport tabs directly below header with no gap */}
      <div className="fixed top-[40px] left-0 right-0 z-30">
        <PillTabs_Sports_Default 
          onTabChange={handleSportChange}
          defaultActiveTab={activeSport}
        />
      </div>
      
      {/* Fixed filter navigation below sport tabs */}
      <div className="fixed top-[78px] left-0 right-0 z-30 bg-[rgba(255,255,255,0)] px-[8px] py-[10px]">
        <FilterNavigation 
          onFilterChange={handleFilterChange}
          onFiltersClick={handleFiltersClick}
          onLeaguesClick={onLeaguesClick}
          selectedLeagues={selectedLeagues}
        />
      </div>
      
      {/* Main content with top and bottom padding to account for fixed navigation, sport tabs, filter nav, and floating betslip */}
      <div className="content-stretch flex flex-col items-start justify-start relative w-full pb-[120px] pt-[126px]">

        {/* Match Cards Section */}
        <div className="w-full">
          {/* Show matches if they exist */}
          {matches.length > 0 && (
            <div className="flex flex-col">
              {matches.map((match) => (
                <MatchCard
                  key={match.id}
                  id={match.id}
                  isLive={match.isLive}
                  teams={match.teams}
                  league={match.league}
                  odds={match.odds}
                  oddsValues={match.oddsValues}
                  betCount={match.betCount}
                  timestamp={match.timestamp}
                  badges={match.badges}
                  isPopular={selectedFilter === 'popular'}
                  boostedOddsIndex={match.boostedOddsIndex}
                  isFavorite={favoritesStore.has(match.id) || favoriteSuggestedEvents.includes(match.id)}
                  onFavoriteToggle={() => {
                    // Handle suggested event match unfavoriting
                    if (favoriteSuggestedEvents.includes(match.id)) {
                      setFavoriteSuggestedEvents(prev => prev.filter(id => id !== match.id));
                      setSuggestedEventMatches(prev => prev.filter(m => m.id !== match.id));
                      setFavouritesCount(prev => prev - 1);
                    } else {
                      favoritesStore.toggle(match.id);
                    }
                  }}
                />
              ))}
            </div>
          )}

          {/* Suggested Events Section - Always show when matches exist */}
          {matches.length > 0 && (
            <div className="mt-6 px-4">
              <div className="bg-gradient-to-r from-[#9ce800]/10 to-[#9ce800]/5 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#9ce800] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base text-gray-900 mb-1">Exciting things are happening in the Premier League!</h3>
                    <p className="text-sm text-gray-600">Add some of these events to your favorites so you can watch them all at once.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  {
                    id: "man-city-vs-arsenal",
                    title: "Manchester City vs Arsenal",
                    subtitle: "Title race showdown at Etihad Stadium",
                    icon: "⚽",
                    date: "Mar 15",
                    time: "16:30",
                    badge: "BIG MATCH"
                  },
                  {
                    id: "liverpool-vs-chelsea",
                    title: "Liverpool vs Chelsea",
                    subtitle: "European spots battle at Anfield",
                    icon: "🔥",
                    date: "Mar 18",
                    time: "17:30",
                    badge: "RIVALRY"
                  },
                  {
                    id: "man-utd-vs-tottenham",
                    title: "Manchester United vs Tottenham",
                    subtitle: "Top 4 crucial clash at Old Trafford",
                    icon: "⭐",
                    date: "Mar 22",
                    time: "14:00",
                    badge: "TOP 4"
                  },
                  {
                    id: "newcastle-vs-brighton",
                    title: "Newcastle vs Brighton",
                    subtitle: "European qualification battle",
                    icon: "🎯",
                    date: "Mar 25",
                    time: "15:00",
                    badge: "EUROPA"
                  }
                ].map((event) => (
                  <div 
                    key={event.id}
                    className="bg-white rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                          {event.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="text-sm text-gray-900 truncate">{event.title}</h4>
                            <span className="px-2 py-0.5 bg-[#9ce800]/10 text-[#9ce800] text-xs rounded-full whitespace-nowrap">
                              {event.badge}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mb-1">{event.subtitle}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <span>{event.date}</span>
                            <span>•</span>
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => {
                          const isFavorited = favoriteSuggestedEvents.includes(event.id);
                          if (isFavorited) {
                            // Remove from favorites
                            setFavoriteSuggestedEvents(prev => prev.filter(id => id !== event.id));
                            setSuggestedEventMatches(prev => prev.filter(match => match.id !== event.id));
                            setFavouritesCount(prev => prev - 1);
                          } else {
                            // Add to favorites and create a match card
                            setFavoriteSuggestedEvents(prev => [...prev, event.id]);
                            
                            // Create a proper match object for this suggested event
                            const newMatch = {
                              id: event.id,
                              isLive: false,
                              teams: [
                                { name: event.title.split(' vs ')[0] },
                                { name: event.title.split(' vs ')[1] }
                              ],
                              league: 'Premier League',
                              odds: ['1', 'X', '2'],
                              oddsValues: ['2.15', '3.40', '3.20'],
                              betCount: Math.floor(Math.random() * 150) + 50,
                              timestamp: { time: event.time, date: event.date },
                              badges: [{ type: 'boosted' }],
                              boostedOddsIndex: Math.floor(Math.random() * 3),
                              isFavorite: true
                            };
                            
                            setSuggestedEventMatches(prev => [...prev, newMatch]);
                            setFavouritesCount(prev => prev + 1);
                          }
                        }}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 ml-2"
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill={favoriteSuggestedEvents.includes(event.id) ? "#fbbf24" : "none"} 
                          stroke={favoriteSuggestedEvents.includes(event.id) ? "#fbbf24" : "#6b7280"} 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Popular Events Section - Only show when matches exist */}
          {matches.length > 0 && (
            <div className="mt-8 px-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">Popular Events</h3>
                <span className="text-sm text-gray-500">Tap to favorite</span>
              </div>
              
              <div className="space-y-3">
                {[
                  {
                    id: "champions-league",
                    title: "UEFA Champions League",
                    subtitle: "Europe's premier club competition",
                    icon: "⚽",
                    badge: "LIVE SEASON"
                  },
                  {
                    id: "premier-league",
                    title: "Premier League",
                    subtitle: "England's top football division",
                    icon: "🏆",
                    badge: "ONGOING"
                  },
                  {
                    id: "el-clasico",
                    title: "El Clásico",
                    subtitle: "Real Madrid vs Barcelona",
                    icon: "⭐",
                    badge: "UPCOMING"
                  },
                  {
                    id: "world-cup-qualifiers",
                    title: "World Cup Qualifiers",
                    subtitle: "Road to the World Cup",
                    icon: "🌍",
                    badge: "QUALIFYING"
                  },
                  {
                    id: "europa-league",
                    title: "UEFA Europa League",
                    subtitle: "European secondary competition",
                    icon: "🥈",
                    badge: "KNOCKOUT"
                  }
                ].map((event) => (
                  <div 
                    key={event.id}
                    className="bg-white rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-sm text-gray-900">{event.title}</h4>
                            <span className="px-2 py-0.5 bg-[#9ce800]/10 text-[#9ce800] text-xs rounded-full">
                              {event.badge}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">{event.subtitle}</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => {
                          const isFavorited = favoriteEvents.includes(event.id);
                          if (isFavorited) {
                            setFavoriteEvents(prev => prev.filter(id => id !== event.id));
                          } else {
                            setFavoriteEvents(prev => [...prev, event.id]);
                          }
                        }}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <svg 
                          className="w-5 h-5" 
                          fill={favoriteEvents.includes(event.id) ? "#fbbf24" : "none"} 
                          stroke={favoriteEvents.includes(event.id) ? "#fbbf24" : "#6b7280"} 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty state when no matches */}
          {matches.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-[#2f3437] text-[16px] font-['Roboto:Bold',_sans-serif] font-bold mb-2">
                No matches available
              </div>
              <div className="text-[#aaaeb0] text-[14px] font-['Roboto:Regular',_sans-serif] font-normal">
                {appliedLeagueFilters.length > 0 || appliedCountryFilters.length > 0 
                  ? 'No matches found for the selected filters'
                  : 'Try selecting a different sport or filter'
                }
              </div>
              {(appliedLeagueFilters.length > 0 || appliedCountryFilters.length > 0) && (
                <div className="mt-4 text-center">
                  <div className="text-[#2f3437] text-[12px] font-['Roboto:Regular',_sans-serif] font-normal mb-2">
                    Active Filters:
                  </div>
                  {appliedLeagueFilters.length > 0 && (
                    <div className="text-[#9ce800] text-[12px] font-['Roboto:Bold',_sans-serif] font-bold">
                      Leagues: {appliedLeagueFilters.join(', ')}
                    </div>
                  )}
                  {appliedCountryFilters.length > 0 && (
                    <div className="text-[#9ce800] text-[12px] font-['Roboto:Bold',_sans-serif] font-bold">
                      Countries: {appliedCountryFilters.join(', ')}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}


        </div>
      </div>
      

      
      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeItem={activeItem} onHelpClick={onHelpClick} onBetslipClick={onBetslipClick} onNavigationClick={onNavigationClick} />
      </div>
    </div>
  );
}