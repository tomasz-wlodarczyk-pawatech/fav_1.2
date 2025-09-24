import { useState, useRef, useEffect, forwardRef } from 'react';
import svgPaths from "../imports/svg-dhzd718cm1";

type SportType = 'football' | 'efootball' | 'basketball' | 'tennis';

interface InteractiveSportTabsProps {
  onSportChange?: (sport: SportType) => void;
  defaultSport?: SportType;
}

export function InteractiveSportTabs({ onSportChange, defaultSport = 'football' }: InteractiveSportTabsProps) {
  const [activeSport, setActiveSport] = useState<SportType>(defaultSport);
  
  // Refs for each tab and the scrollable container
  const footballRef = useRef<HTMLDivElement>(null);
  const efootballRef = useRef<HTMLDivElement>(null);
  const basketballRef = useRef<HTMLDivElement>(null);
  const tennisRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Map sport types to their refs
  const sportRefs = {
    football: footballRef,
    efootball: efootballRef,
    basketball: basketballRef,
    tennis: tennisRef,
  };

  const handleSportClick = (sport: SportType) => {
    setActiveSport(sport);
    onSportChange?.(sport);
  };

  // Auto-scroll active tab into view within the horizontal container only
  useEffect(() => {
    const activeRef = sportRefs[activeSport];
    const container = scrollContainerRef.current;
    
    if (activeRef.current && container) {
      const tabElement = activeRef.current;
      const containerRect = container.getBoundingClientRect();
      const tabRect = tabElement.getBoundingClientRect();
      
      // Calculate if tab is out of view
      const tabLeft = tabRect.left - containerRect.left;
      const tabRight = tabRect.right - containerRect.left;
      const containerWidth = containerRect.width;
      
      // Only scroll if the tab is not fully visible
      if (tabLeft < 0) {
        // Tab is cut off on the left
        container.scrollLeft += tabLeft - 20; // 20px padding
      } else if (tabRight > containerWidth) {
        // Tab is cut off on the right
        container.scrollLeft += tabRight - containerWidth + 20; // 20px padding
      }
    }
  }, [activeSport]);

  // Timer icon component (used for active state)
  function Timer({ isActive }: { isActive: boolean }) {
    return (
      <div className="relative shrink-0 size-4" data-name="timer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="timer">
            <path 
              d={svgPaths.pcbd7300} 
              id="Vector" 
              stroke={isActive ? "var(--stroke-0, #9CE800)" : "var(--stroke-0, #AAAEB0)"} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
            />
          </g>
        </svg>
      </div>
    );
  }

  // Flame icon for Basketball
  function Flame({ isActive }: { isActive: boolean }) {
    return (
      <div className="relative shrink-0 size-4" data-name="flame">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="flame">
            <path 
              d={svgPaths.p12187900} 
              id="Vector" 
              stroke={isActive ? "var(--stroke-0, #9CE800)" : "var(--stroke-0, #AAAEB0)"} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
            />
          </g>
        </svg>
      </div>
    );
  }

  // Activity icon for Tennis
  function Activity({ isActive }: { isActive: boolean }) {
    return (
      <div className="relative shrink-0 size-4" data-name="activity">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g clipPath="url(#clip0_1_1767)" id="football-ball">
            <path 
              d={svgPaths.p283c2b80} 
              id="Vector" 
              stroke={isActive ? "var(--stroke-0, #9CE800)" : "var(--stroke-0, #AAAEB0)"} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1767">
              <rect fill="white" height="16" width="16" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }

  // Chevrons Up icon for eFOOTBALL
  function ChevronsUp({ isActive }: { isActive: boolean }) {
    return (
      <div className="relative shrink-0 size-4" data-name="chevrons-up">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="chevrons-up">
            <path 
              d={svgPaths.pb495af0} 
              id="Vector" 
              stroke={isActive ? "var(--stroke-0, #9CE800)" : "var(--stroke-0, #AAAEB0)"} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
            />
          </g>
        </svg>
      </div>
    );
  }

  // Generic tab body component
  function TabBody({ text, isActive }: { text: string; isActive: boolean }) {
    return (
      <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body">
        <div 
          className={`font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[12px] text-nowrap ${
            isActive ? 'text-[#9ce800]' : 'text-[#aaaeb0]'
          }`} 
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="leading-[16px] whitespace-pre">{text}</p>
        </div>
      </div>
    );
  }

  // Generic tab component with forwardRef
  const SportTab = forwardRef<HTMLDivElement, { 
    sport: SportType; 
    icon: React.ReactNode; 
    label: string; 
    isActive: boolean;
  }>(({ sport, icon, label, isActive }, ref) => {
    return (
      <div 
        ref={ref}
        className="bg-[#2f3437] h-[38px] min-h-px min-w-[97px] relative flex-shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#3a3f42]" 
        data-name="_header-tab-12px-new"
        onClick={() => handleSportClick(sport)}
      >
        {isActive && (
          <div aria-hidden="true" className="absolute border-[#9ce800] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
        )}
        <div className="flex flex-row items-center justify-center min-w-inherit relative size-full">
          <div className="box-border content-stretch flex gap-1.5 h-[38px] items-center justify-center min-w-inherit px-4 py-0 relative w-full">
            {icon}
            <TabBody text={label} isActive={isActive} />
          </div>
        </div>
      </div>
    );
  });

  function Tabs() {
    return (
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-hide" 
        data-name="tabs" 
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex items-center justify-start min-w-max gap-0">
          <SportTab
            sport="football"
            icon={<Timer isActive={activeSport === 'football'} />}
            label="FOOTBALL"
            isActive={activeSport === 'football'}
            ref={footballRef}
          />
          <SportTab
            sport="efootball"
            icon={<ChevronsUp isActive={activeSport === 'efootball'} />}
            label="eFOOTBALL"
            isActive={activeSport === 'efootball'}
            ref={efootballRef}
          />
          <SportTab
            sport="basketball"
            icon={<Flame isActive={activeSport === 'basketball'} />}
            label="BASKETBALL"
            isActive={activeSport === 'basketball'}
            ref={basketballRef}
          />
          <SportTab
            sport="tennis"
            icon={<Activity isActive={activeSport === 'tennis'} />}
            label="TENNIS"
            isActive={activeSport === 'tennis'}
            ref={tennisRef}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#2f3437] overflow-hidden" data-name="Sport tabs">
      <Tabs />
    </div>
  );
}