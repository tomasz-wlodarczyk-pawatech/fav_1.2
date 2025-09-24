import svgPaths from "../imports/svg-qkutqz7892";
import flamesvgPaths from "../imports/svg-8mjce4ue1t";
import starSvgPaths from "../imports/svg-j2z99k9d1a";
import { favoritesStore } from "../lib/favoritesStore";
import { 
  Circle, 
  Gamepad2, 
  Trophy, 
  Zap
} from "lucide-react";

function SoccerBall({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main ball circle */}
      <circle cx="12" cy="12" r="10" fill="white" stroke="#22c55e" strokeWidth="2"/>
      
      {/* Central pentagon */}
      <polygon 
        points="12,7 15,9.5 13.5,13 10.5,13 9,9.5" 
        fill="#000000" 
      />
      
      {/* Top hexagon parts */}
      <path 
        d="M12,7 L15,9.5 L17,6 L12,4 Z" 
        fill="none" 
        stroke="#000000" 
        strokeWidth="1"
      />
      
      {/* Right hexagon parts */}
      <path 
        d="M15,9.5 L13.5,13 L18,14 L19,10 Z" 
        fill="none" 
        stroke="#000000" 
        strokeWidth="1"
      />
      
      {/* Bottom right hexagon parts */}
      <path 
        d="M13.5,13 L10.5,13 L12,18 L16,17 Z" 
        fill="none" 
        stroke="#000000" 
        strokeWidth="1"
      />
      
      {/* Bottom left hexagon parts */}
      <path 
        d="M10.5,13 L9,9.5 L5,10 L6,14 Z" 
        fill="none" 
        stroke="#000000" 
        strokeWidth="1"
      />
      
      {/* Left hexagon parts */}
      <path 
        d="M9,9.5 L12,7 L7,6 L5,10 Z" 
        fill="none" 
        stroke="#000000" 
        strokeWidth="1"
      />
    </svg>
  );
}

interface Team {
  name: string;
  score?: number;
}

interface Badge {
  type: 'boosted' | 'bestOdds';
}

interface MatchCardProps {
  id: string;
  isLive: boolean;
  teams: [Team, Team] | { home: string; away: string };
  league: string | { name: string };
  odds: [string, string, string] | string[];
  oddsValues: [string, string, string] | number[];
  betCount: number;
  timestamp?: {
    time?: string;
    date?: string;
  } | string;
  badges?: Badge[] | string[];
  isPopular?: boolean;
  boostedOddsIndex?: number; // 0, 1, or 2 to indicate which odds should show the fire icon
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

function Activity() {
  return (
    <div className="relative shrink-0 size-4" data-name="activity">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_6576)" id="activity">
          <path d={svgPaths.p2d09d900} id="Vector" stroke="var(--stroke-0, #FF7A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_6576">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Live() {
  return (
    <div className="content-stretch flex gap-[17px] items-center justify-start relative shrink-0" data-name="Live">
      <Activity />
    </div>
  );
}

function LiveTimestamp() {
  return (
    <div className="content-stretch flex gap-[17px] items-center justify-start relative shrink-0" data-name="Timestamp">
      <Live />
    </div>
  );
}

function PreTimestamp({ time, date }: { time?: string; date?: string }) {
  return (
    <div className="content-stretch flex gap-2 sm:gap-3 items-center justify-start leading-[0] relative shrink-0 text-[#2f3437] text-[11px] sm:text-[12px] text-nowrap" data-name="Timestamp">
      {time && (
        <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[14px] sm:leading-[16px] text-nowrap whitespace-pre">{time}</p>
        </div>
      )}
      {date && (
        <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[14px] sm:leading-[16px] text-nowrap whitespace-pre">{date}</p>
        </div>
      )}
    </div>
  );
}

function Component2Up() {
  return (
    <div className="absolute left-px size-[18px] top-px" data-name="2up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="2up">
          <path d={svgPaths.p1938ff00} fill="var(--fill-0, #FF7A00)" id="Vector" />
          <path d={svgPaths.p2b92de70} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p138db700} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function BestOdds() {
  return (
    <div className="absolute inset-0 rounded-[100px]" data-name="best odds">
      <Component2Up />
    </div>
  );
}

function Boosted() {
  return (
    <div className="relative shrink-0 size-5" data-name="boosted">
      <BestOdds />
    </div>
  );
}

function Component2Up1() {
  return (
    <div className="absolute left-px size-[18px] top-px" data-name="2up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="2up">
          <path d={svgPaths.p1938ff00} fill="var(--fill-0, #6915BE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BestOdds1() {
  return (
    <div className="absolute aspect-[20/20] left-0 right-0 rounded-[100px] top-0" data-name="best odds">
      <Component2Up1 />
    </div>
  );
}

function ChevronsUp() {
  return (
    <div className="absolute inset-[20%]" data-name="chevrons-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevrons-up">
          <path d={svgPaths.p2b92a180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function BestOddsIcon() {
  return (
    <div className="relative shrink-0 size-5" data-name="best-odds">
      <BestOdds1 />
      <ChevronsUp />
    </div>
  );
}

function Badges({ badges }: { badges: Badge[] | string[] }) {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="badges">
      {badges.map((badge, index) => {
        if (typeof badge === 'string') {
          return badge.toLowerCase().includes('boost') ? <Boosted key={index} /> : <BestOddsIcon key={index} />;
        } else {
          return badge.type === 'boosted' ? <Boosted key={index} /> : <BestOddsIcon key={index} />;
        }
      })}
    </div>
  );
}

function PreTimestampWithBadges({ time, date }: { time?: string; date?: string }) {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
      <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0">
        <PreTimestamp time={time} date={date} />
      </div>
      {/* Badges are now handled in the TopIcons component */}
    </div>
  );
}

function LiveTeams({ teams }: { teams: [Team, Team] | { home: string; away: string } }) {
  const homeTeam = Array.isArray(teams) ? teams[0] : { name: teams.home, score: 0 };
  const awayTeam = Array.isArray(teams) ? teams[1] : { name: teams.away, score: 0 };
  
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Teams">
      <div className="content-stretch flex font-['Roboto:Bold',_sans-serif] font-bold gap-0.5 items-center justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[16px] w-full">
        <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[#252a2d]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] sm:leading-[24px] truncate">{homeTeam.name}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#ff7a00] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] sm:leading-[24px] whitespace-pre">{homeTeam.score || 0}</p>
        </div>
      </div>
      <div className="content-stretch flex font-['Roboto:Bold',_sans-serif] font-bold items-center justify-between leading-[0] relative shrink-0 text-[14px] sm:text-[16px] w-full">
        <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[#252a2d]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] sm:leading-[24px] truncate">{awayTeam.name}</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#ff7a00] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] sm:leading-[24px] whitespace-pre">{awayTeam.score || 0}</p>
        </div>
      </div>
    </div>
  );
}

function PreTeams({ teams }: { teams: [Team, Team] | { home: string; away: string } }) {
  const homeTeam = Array.isArray(teams) ? teams[0] : { name: teams.home };
  const awayTeam = Array.isArray(teams) ? teams[1] : { name: teams.away };
  
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Bold',_sans-serif] font-bold items-start justify-start leading-[0] relative shrink-0 text-[#252a2d] text-[14px] sm:text-[16px] w-full" data-name="Teams">
      <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] sm:leading-[24px] truncate">{homeTeam.name}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] sm:leading-[24px] truncate">{awayTeam.name}</p>
      </div>
    </div>
  );
}

function PawaFlame() {
  return (
    <div className="relative shrink-0 size-4" data-name="Pawa/flame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Pawa/flame">
          <path d={flamesvgPaths.p12187900} id="Vector" stroke="var(--stroke-0, #CC371B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Odds({ value, showFlame }: { value: string; showFlame?: boolean }) {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-end relative shrink-0 min-w-[40px] sm:min-w-[49px]" data-name="odds">
      {showFlame && <PawaFlame />}
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] sm:text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] sm:leading-[20px] whitespace-pre">{value}</p>
      </div>
    </div>
  );
}

function EventBetWrapperBetPrice({ label, odds, showFlame }: { label: string; odds: string; showFlame?: boolean }) {
  return (
    <div className="basis-0 bg-[#f2f2f3] grow min-h-px min-w-px relative rounded-[6px] shrink-0 hover:bg-[#9ce800]/10 transition-colors cursor-pointer" data-name="event-bet-wrapper bet-price">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-2 sm:p-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] sm:text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px] sm:leading-[20px] whitespace-pre">{label}</p>
          </div>
          <Odds value={odds} showFlame={showFlame} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function BetlineList({ odds, oddsValues, boostedOddsIndex }: { odds: [string, string, string] | string[]; oddsValues: [string, string, string] | number[]; boostedOddsIndex?: number }) {
  // Ensure we have at least 3 items and convert to strings with proper formatting
  const oddLabels = odds.slice(0, 3);
  const oddValues = oddsValues.slice(0, 3).map(val => {
    if (typeof val === 'number') {
      return val.toFixed(2);
    }
    // If it's already a string, ensure it has proper decimal formatting
    const numVal = parseFloat(val);
    return !isNaN(numVal) ? numVal.toFixed(2) : val;
  });
  
  return (
    <div className="basis-0 content-stretch flex gap-1.5 sm:gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="betline-list">
      <EventBetWrapperBetPrice label={oddLabels[0] || '1'} odds={oddValues[0] || '1.00'} showFlame={boostedOddsIndex === 0} />
      <EventBetWrapperBetPrice label={oddLabels[1] || 'X'} odds={oddValues[1] || '1.00'} showFlame={boostedOddsIndex === 1} />
      <EventBetWrapperBetPrice label={oddLabels[2] || '2'} odds={oddValues[2] || '1.00'} showFlame={boostedOddsIndex === 2} />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative size-4" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #252A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BetlineCountButton({ count }: { count: number }) {
  return (
    <div className="bg-[#ffffff] relative rounded-[6px] shrink-0 hover:bg-[#9ce800]/10 transition-colors cursor-pointer" data-name="betline-count-button">
      <div className="box-border content-stretch flex gap-[20px] sm:gap-[38px] items-center justify-center overflow-clip px-1 py-1.5 sm:py-2 relative">
        <div className="box-border content-stretch flex items-center justify-center px-0.5 py-0 relative shrink-0">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] sm:text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px] sm:leading-[20px] whitespace-pre">{count}</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%] scale-75 sm:scale-100">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Betline({ odds, oddsValues, betCount, boostedOddsIndex }: { odds: [string, string, string] | string[]; oddsValues: [string, string, string] | number[]; betCount: number; boostedOddsIndex?: number }) {
  return (
    <div className="content-stretch flex gap-1.5 sm:gap-2 h-8 sm:h-9 items-start justify-start relative shrink-0 w-full" data-name="betline">
      <BetlineList odds={odds} oddsValues={oddsValues} boostedOddsIndex={boostedOddsIndex} />
      <BetlineCountButton count={betCount} />
    </div>
  );
}

function FavoriteIcon({ isFavorite, onToggle }: { isFavorite?: boolean; onToggle?: () => void }) {
  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        onToggle?.();
      }}
      className="p-1 hover:opacity-70 transition-opacity"
    >
      <svg className="size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path 
          d={starSvgPaths.pcd53300} 
          stroke={isFavorite ? "#fbbf24" : "#717182"} 
          fill={isFavorite ? "#fbbf24" : "none"}
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
        />
      </svg>
    </button>
  );
}

function TopIcons({ badges, isFavorite, onFavoriteToggle }: { badges?: Badge[] | string[]; isFavorite?: boolean; onFavoriteToggle?: () => void }) {
  return (
    <div className="absolute top-2 right-2 z-10 flex items-center gap-1">
      {/* Badges appear to the left of the favorite icon */}
      {badges && badges.length > 0 && <Badges badges={badges} />}
      {/* Favorite icon always appears on the right */}
      <FavoriteIcon isFavorite={isFavorite} onToggle={onFavoriteToggle} />
    </div>
  );
}

function getSportIcon(league: string | { name: string }) {
  const leagueName = typeof league === 'string' ? league : league.name;
  const lowerLeague = leagueName.toLowerCase();
  
  // Football/Soccer leagues
  if (lowerLeague.includes('premier league') || 
      lowerLeague.includes('la liga') || 
      lowerLeague.includes('serie a') || 
      lowerLeague.includes('bundesliga') || 
      lowerLeague.includes('ligue 1')) {
    return <SoccerBall className="w-4 h-4" />;
  }
  
  // E-Sports
  if (lowerLeague.includes('efootball') || 
      lowerLeague.includes('esports') || 
      lowerLeague.includes('championship') ||
      lowerLeague.includes('pro league') ||
      lowerLeague.includes('world series') ||
      lowerLeague.includes('masters')) {
    return <Gamepad2 className="w-4 h-4 text-purple-600" />;
  }
  
  // Basketball
  if (lowerLeague.includes('nba') || 
      lowerLeague.includes('euroleague')) {
    return <Trophy className="w-4 h-4 text-orange-600" />;
  }
  
  // Tennis  
  if (lowerLeague.includes('atp') || 
      lowerLeague.includes('wta') || 
      lowerLeague.includes('finals')) {
    return <Zap className="w-4 h-4 text-yellow-600" />;
  }
  
  // Default football icon
  return <SoccerBall className="w-4 h-4" />;
}

export function MatchCard({ 
  id,
  isLive, 
  teams, 
  league, 
  odds, 
  oddsValues, 
  betCount, 
  timestamp, 
  badges,
  isPopular,
  boostedOddsIndex,
  isFavorite,
  onFavoriteToggle
}: MatchCardProps) {
  // Handle favorite action using the store
  const handleFavorite = () => favoritesStore.toggle(id);
  
  // If isFavorite is not provided, derive from store
  const isFav = isFavorite ?? favoritesStore.has(id);
  
  // Only show fire icon if it's a popular match and we have a boosted odds index
  const shouldShowBoostedOdds = isPopular && boostedOddsIndex !== undefined;
  
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full rounded-lg border border-gray-200" data-name="matchcard">
      <TopIcons badges={badges} isFavorite={isFav} onFavoriteToggle={onFavoriteToggle || handleFavorite} />
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-3 sm:p-4 relative w-full">
          {isLive ? (
            <LiveTimestamp />
          ) : (
            <PreTimestampWithBadges 
              time={typeof timestamp === 'string' ? new Date(timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : timestamp?.time} 
              date={typeof timestamp === 'string' ? new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : timestamp?.date} 
            />
          )}
          
          {isLive ? (
            <LiveTeams teams={teams} />
          ) : (
            <PreTeams teams={teams} />
          )}
          
          <div className="flex items-center gap-2 font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#2f3437] text-[11px] sm:text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {getSportIcon(league)}
            <p className="leading-[14px] sm:leading-[16px] truncate">{typeof league === 'string' ? league : league.name}</p>
          </div>
          
          <Betline 
            odds={odds} 
            oddsValues={oddsValues} 
            betCount={betCount} 
            boostedOddsIndex={shouldShowBoostedOdds ? boostedOddsIndex : undefined}
          />
        </div>
      </div>

    </div>
  );
}