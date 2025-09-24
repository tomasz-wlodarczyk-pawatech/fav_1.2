import { useState } from "react";
import svgPaths from "../imports/svg-qkutqz7892";
import { SectionHeader } from "./SectionHeader";
import { MatchCard } from "./MatchCard";

function FootballBall() {
  return (
    <div className="relative shrink-0 size-5" data-name="football-ball">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_6582)" id="football-ball">
          <path d={svgPaths.p2fb36640} id="Vector" stroke="var(--stroke-0, #252A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
        <defs>
          <clipPath id="clip0_1_6582">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
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
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] underline whitespace-pre">View more Boosted 291</p>
          </div>
          <IconRightBan />
        </div>
      </div>
    </div>
  );
}

interface FootballProps {
  onFiltersClick?: () => void;
}

export function Football({ onFiltersClick }: FootballProps) {
  const [favoriteMatches, setFavoriteMatches] = useState<string[]>([]);
  
  const handleHeaderClick = () => {
    console.log('Football section header clicked');
  };
  
  const handleFavoriteToggle = (matchId: string) => {
    setFavoriteMatches(prev => 
      prev.includes(matchId) 
        ? prev.filter(id => id !== matchId)
        : [...prev, matchId]
    );
  };

  // Sample match data
  const liveMatch = {
    isLive: true,
    teams: [
      { name: "St George Willawong FC", score: 0 },
      { name: "Olympic FC Brisbane", score: 0 }
    ] as [{ name: string; score: number }, { name: string; score: number }],
    league: "Football / Australia / Queensland NPL",
    odds: ["1", "X", "2"] as [string, string, string],
    oddsValues: ["4.35", "4.35", "4.35"] as [string, string, string],
    betCount: 83
  };

  const preMatch = {
    isLive: false,
    teams: [
      { name: "St George Willawong FC" },
      { name: "Olympic FC Brisbane" }
    ] as [{ name: string }, { name: string }],
    league: "Football / Australia / Queensland NPL",
    odds: ["1", "X", "2"] as [string, string, string],
    oddsValues: ["4.35", "4.35", "4.35"] as [string, string, string],
    betCount: 83,
    timestamp: {
      time: "10.30",
      date: "Wed 28/05"
    },
    badges: [
      { type: 'boosted' as const },
      { type: 'bestOdds' as const }
    ]
  };

  return (
    <div className="content-stretch flex flex-col items-start justify-start relative w-full" data-name="Football">
      <SectionHeader 
        icon={<FootballBall />}
        title="Football"
        count={291}
        onClick={handleHeaderClick}
      />
      
      <MatchCard 
        {...liveMatch} 
        isFavorite={favoriteMatches.includes('live-match-1')}
        onFavoriteToggle={() => handleFavoriteToggle('live-match-1')}
      />
      
      {[...Array(2).keys()].map((_, i) => (
        <MatchCard 
          key={i} 
          {...preMatch} 
          isFavorite={favoriteMatches.includes(`pre-match-${i}`)}
          onFavoriteToggle={() => handleFavoriteToggle(`pre-match-${i}`)}
        />
      ))}
      
      <Button />
    </div>
  );
}