import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { MatchCard } from "./MatchCard";

function BasketballIcon() {
  return (
    <div className="relative shrink-0 size-5" data-name="basketball">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="basketball">
          <circle cx="10" cy="10" r="8" stroke="var(--stroke-0, #252A2D)" strokeWidth="1.75" fill="none" />
          <path d="M2 10h16" stroke="var(--stroke-0, #252A2D)" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M10 2v16" stroke="var(--stroke-0, #252A2D)" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M6 2.5c0 3 0 12 0 15" stroke="var(--stroke-0, #252A2D)" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M14 2.5c0 3 0 12 0 15" stroke="var(--stroke-0, #252A2D)" strokeWidth="1.75" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function IconRightBan() {
  return (
    <div className="relative shrink-0 size-5" data-name="IconRight / Ban">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="IconRight / Ban">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #252A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-2 relative w-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] underline whitespace-pre">View more Basketball 158</p>
          </div>
          <IconRightBan />
        </div>
      </div>
    </div>
  );
}

interface BasketballProps {
  onFiltersClick?: () => void;
}

export function Basketball({ onFiltersClick }: BasketballProps) {
  const [favoriteMatches, setFavoriteMatches] = useState<string[]>([]);
  
  const handleHeaderClick = () => {
    console.log('Basketball section header clicked');
  };
  
  const handleFavoriteToggle = (matchId: string) => {
    setFavoriteMatches(prev => 
      prev.includes(matchId) 
        ? prev.filter(id => id !== matchId)
        : [...prev, matchId]
    );
  };

  // Sample basketball match data
  const liveMatch = {
    isLive: true,
    teams: [
      { name: "Los Angeles Lakers", score: 89 },
      { name: "Boston Celtics", score: 92 }
    ] as [{ name: string; score: number }, { name: string; score: number }],
    league: "Basketball / USA / NBA",
    odds: ["1", "X", "2"] as [string, string, string],
    oddsValues: ["2.45", "12.50", "1.85"] as [string, string, string],
    betCount: 127
  };

  const preMatch1 = {
    isLive: false,
    teams: [
      { name: "Golden State Warriors" },
      { name: "Miami Heat" }
    ] as [{ name: string }, { name: string }],
    league: "Basketball / USA / NBA",
    odds: ["1", "X", "2"] as [string, string, string],
    oddsValues: ["1.95", "15.00", "2.10"] as [string, string, string],
    betCount: 89,
    timestamp: {
      time: "21.00",
      date: "Thu 29/05"
    },
    badges: [
      { type: 'boosted' as const }
    ]
  };

  const preMatch2 = {
    isLive: false,
    teams: [
      { name: "Phoenix Suns" },
      { name: "Denver Nuggets" }
    ] as [{ name: string }, { name: string }],
    league: "Basketball / USA / NBA",
    odds: ["1", "X", "2"] as [string, string, string],
    oddsValues: ["2.75", "14.25", "1.65"] as [string, string, string],
    betCount: 64,
    timestamp: {
      time: "23.30",
      date: "Thu 29/05"
    },
    badges: [
      { type: 'bestOdds' as const }
    ]
  };

  return (
    <div className="content-stretch flex flex-col items-start justify-start relative w-full" data-name="Basketball">
      <SectionHeader 
        icon={<BasketballIcon />}
        title="Basketball"
        count={158}
        onClick={handleHeaderClick}
      />
      
      <MatchCard 
        {...liveMatch} 
        isFavorite={favoriteMatches.includes('basketball-live-1')}
        onFavoriteToggle={() => handleFavoriteToggle('basketball-live-1')}
      />
      <MatchCard 
        {...preMatch1} 
        isFavorite={favoriteMatches.includes('basketball-pre-1')}
        onFavoriteToggle={() => handleFavoriteToggle('basketball-pre-1')}
      />
      <MatchCard 
        {...preMatch2} 
        isFavorite={favoriteMatches.includes('basketball-pre-2')}
        onFavoriteToggle={() => handleFavoriteToggle('basketball-pre-2')}
      />
      
      <Button />
    </div>
  );
}