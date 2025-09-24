import { useMemo, useState, useEffect } from "react";
import { Star, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { favoritesStore } from "../lib/favoritesStore";
import { favoritesStoreV2 } from "../lib/favoritesStoreV2";
import { getSportsMatchData } from "./SportsMatchData";
import MarketMatchCard from "./MarketMatchCard";

// Data types
type TeamFav = { id: string; name: string; subtitle: string; logo: string };
type LeagueFav = { id: string; name: string; country: string; emoji: string };

// Helper function to safely read JSON from localStorage
const readJSON = <T,>(key: string, fallback: T): T => {
  try {
    const value = localStorage.getItem(key);
    if (!value || value === 'undefined' || value === 'null') {
      return fallback;
    }
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed as T : fallback;
  } catch (error) {
    console.warn(`Failed to read ${key} from localStorage:`, error);
    return fallback;
  }
};

function SectionHeader({
  activeTab, setActiveTab
}: {
  activeTab: "events" | "teams" | "leagues";
  setActiveTab: (t:"events"|"teams"|"leagues") => void;
}) {
  const tabs = ["events", "teams", "leagues"] as const;
  const labels = ["Events", "Teams", "Leagues"];

  return (
    <div className="space-y-3">
      {/* Title row with star icon */}
      <div className="flex items-center gap-2">
        <Star className="w-5 h-5 text-gray-900" />
        <h3 className="text-gray-900">My Favorites</h3>
      </div>
      
      {/* Segmented toggle on second row */}
      <div className="bg-gray-100 rounded-full p-1 flex">
        {tabs.map((t, index) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              activeTab===t ? "bg-white text-black shadow-sm" : "text-gray-600"
            }`}
          >
            {labels[index]}
          </button>
        ))}
      </div>
    </div>
  );
}

// Compact row for teams (matching Favorites page style)
function TeamRow({ team, onClick }: { team: TeamFav; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{team.logo}</span>
        <div>
          <div className="text-sm font-medium text-gray-900">{team.name}</div>
          <div className="text-xs text-gray-600">{team.subtitle}</div>
        </div>
      </div>
      <Star className="h-4 w-4 text-[#9ce800] fill-[#9ce800]" />
    </div>
  );
}

// Compact row for leagues (matching Favorites page style) 
function LeagueRow({ league, onClick }: { league: LeagueFav; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{league.emoji}</span>
        <div>
          <div className="text-sm font-medium text-gray-900">{league.name}</div>
          <div className="text-xs text-gray-600">{league.country}</div>
        </div>
      </div>
      <Star className="h-4 w-4 text-[#9ce800] fill-[#9ce800]" />
    </div>
  );
}

// Compact row for events (new component for the widget)
function EventRow({ match, onClick }: { match: any; onClick: () => void }) {
  const home = match?.teams?.home ?? (match?.teams?.[0]?.name ?? "");
  const away = match?.teams?.away ?? (match?.teams?.[1]?.name ?? "");
  const league = typeof match?.league === "string" ? match.league : (match?.league?.name ?? "");
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="min-w-0">
        <div className="text-sm font-medium text-gray-900 truncate">{home} vs {away}</div>
        <div className="text-xs text-gray-600 truncate">{league}</div>
      </div>
      <Star className="h-4 w-4 text-[#9ce800] fill-[#9ce800]" />
    </div>
  );
}

function EmptyMini({
  icon, title, onClick
}: { icon: React.ReactNode; title: string; onClick: () => void }) {
  return (
    <div className="text-center p-6 rounded-xl border border-dashed border-gray-200">
      <div className="w-10 h-10 rounded-full bg-gray-100 mx-auto mb-2 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-sm font-medium text-gray-900 mb-1">{title}</div>
      <button onClick={onClick} className="mt-1 text-xs bg-[#9ce800] text-black px-3 py-1.5 rounded-lg">
        Add favorites
      </button>
    </div>
  );
}

export default function HomeFavoritesWidget() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"events"|"teams"|"leagues">("events");

  // Subscribe to favoritesStore changes
  const [_, setTick] = useState(0);
  const [_2, setMarketTick] = useState(0);
  useEffect(() => favoritesStore.subscribe(() => setTick((t) => t + 1)), []);
  useEffect(() => favoritesStoreV2.subscribe(() => setMarketTick((t) => t + 1)), []);

  // Read saved favorites from localStorage
  const teams = readJSON<TeamFav[]>('favTeams', []);
  const leagues = readJSON<LeagueFav[]>('favLeagues', []);

  // Build catalog once per render (cheap for widget):
  const allMatches = useMemo(() => {
    return [
      ...getSportsMatchData("football"),
      ...getSportsMatchData("basketball"),
      ...getSportsMatchData("tennis"),
      // if you have efootball in your data, include it:
      // ...getSportsMatchData("efootball"),
    ];
  }, []);

  const favoriteEventIds = favoritesStore.get();
  const favoriteEvents = useMemo(() => {
    const resolved = allMatches.filter(m => favoriteEventIds.includes(m.id));
    // sort by timestamp if available (descending), then slice to 3
    const byTime = (a: any, b: any) => {
      const ta = new Date(`${a?.timestamp?.date ?? ""} ${a?.timestamp?.time ?? ""}`).getTime() || 0;
      const tb = new Date(`${b?.timestamp?.date ?? ""} ${b?.timestamp?.time ?? ""}`).getTime() || 0;
      return tb - ta;
    };
    return resolved.sort(byTime).slice(0, 3);
  }, [favoriteEventIds, allMatches]);

  // Enhanced market favorites (all market types with snapshots)
  const favoriteMarketData = favoritesStoreV2.list();
  const favMarketItems = useMemo(() => {
    return favoriteMarketData.slice(0, 3); // Show top 3 market favorites
  }, [favoriteMarketData]);

  const handleItemClick = () => {
    navigate('/favorites');
  };

  return (
    <div className="bg-white rounded-2xl mx-4 mb-6 border border-gray-100 p-4">
      <SectionHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="mt-3">
        {activeTab === "events" && (
          <>
            <div className="space-y-4">
              {/* Market Favorites Section */}
              {favMarketItems.length > 0 && (
                <div>
                  <h4 className="text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">Favorite Markets</h4>
                  <div className="space-y-2">
                    {favMarketItems.map((rec) => (
                      <MarketMatchCard key={rec.key} item={rec.item} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Legacy Match Favorites */}
              {favoriteEvents.length > 0 && (
                <div>
                  {favMarketItems.length > 0 && (
                    <h4 className="text-xs font-medium text-gray-600 mb-2 uppercase tracking-wide">Favorite Events</h4>
                  )}
                  <div className="space-y-2">
                    {favoriteEvents.map((match: any) => (
                      <EventRow key={match.id} match={match} onClick={() => navigate('/favorites')} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Empty state */}
              {favoriteEvents.length === 0 && favMarketItems.length === 0 && (
                <EmptyMini
                  icon={<Trophy className="w-5 h-5 text-gray-500" />}
                  title="No sports favorites yet"
                  onClick={() => navigate('/sports')}
                />
              )}
            </div>
          </>
        )}

        {activeTab === "teams" && (
          <>
            {teams.length > 0 ? (
              <div className="space-y-2">
                {teams.slice(0,3).map((team) => (
                  <TeamRow key={team.id} team={team} onClick={() => navigate('/favorites')} />
                ))}
              </div>
            ) : (
              <EmptyMini
                icon={<Users className="w-5 h-5 text-gray-500" />}
                title="No favorite teams yet"
                onClick={() => navigate('/favorites')}
              />
            )}
          </>
        )}

        {activeTab === "leagues" && (
          <>
            {leagues.length > 0 ? (
              <div className="space-y-2">
                {leagues.slice(0,3).map((league) => (
                  <LeagueRow key={league.id} league={league} onClick={() => navigate('/favorites')} />
                ))}
              </div>
            ) : (
              <EmptyMini
                icon={<Trophy className="w-5 h-5 text-gray-500" />}
                title="No favorite leagues yet"
                onClick={() => navigate('/favorites')}
              />
            )}
          </>
        )}
      </div>

      {/* Footer CTA */}
      <div className="mt-3">
        <button
          onClick={() => {
            navigate('/favorites');
            window.scrollTo(0, 0);
          }}
          className="w-full inline-flex items-center justify-center h-9 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200"
        >
          Open Favorites
        </button>
      </div>
    </div>
  );
}