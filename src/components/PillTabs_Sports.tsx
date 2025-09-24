import { useState, useRef, useEffect, forwardRef } from 'react';
import svgPaths from "../imports/svg-dhzd718cm1";

export type SportType = 'football' | 'basketball' | 'efootball' | 'tennis';

export interface SportTabConfig {
  id: SportType;
  label: string;
  icon: React.ReactNode;
}

interface PillTabs_SportsProps {
  tabs?: SportTabConfig[];
  onTabChange?: (tabId: SportType) => void;
  defaultActiveTab?: SportType;
}

export function PillTabs_Sports({ tabs = [], onTabChange, defaultActiveTab }: PillTabs_SportsProps) {
  const [activeTab, setActiveTab] = useState<SportType>(() => {
    if (defaultActiveTab) return defaultActiveTab;
    if (tabs && tabs.length > 0) return tabs[0].id;
    return 'football'; // fallback
  });
  
  // Create static refs for all possible sport types
  const footballRef = useRef<HTMLDivElement>(null);
  const efootballRef = useRef<HTMLDivElement>(null);
  const basketballRef = useRef<HTMLDivElement>(null);
  const tennisRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Map sport types to their corresponding refs
  const getRefForSport = (sportId: SportType) => {
    switch (sportId) {
      case 'football': return footballRef;
      case 'efootball': return efootballRef;
      case 'basketball': return basketballRef;
      case 'tennis': return tennisRef;
      default: return footballRef;
    }
  };

  const handleTabClick = (tabId: SportType) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  // Auto-scroll active tab into view within the horizontal container only
  useEffect(() => {
    const activeRef = getRefForSport(activeTab);
    const container = scrollContainerRef.current;
    
    if (activeRef?.current && container) {
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
  }, [activeTab]);

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
    tabId: SportType; 
    icon: React.ReactNode; 
    label: string; 
    isActive: boolean;
  }>(({ tabId, icon, label, isActive }, ref) => {
    return (
      <div 
        ref={ref}
        className="bg-[#2f3437] h-[38px] min-h-px relative flex-shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#3a3f42] min-w-[97px]"
        data-name="_header-tab-12px-new"
        onClick={() => handleTabClick(tabId)}
      >
        {isActive && (
          <div aria-hidden="true" className="absolute border-[#9ce800] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
        )}
        <div className="flex flex-row items-center justify-center min-w-inherit relative size-full">
          <div className="box-border content-stretch flex h-[38px] items-center justify-center min-w-inherit py-0 relative w-full gap-1.5 px-4">
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
          {tabs && tabs.map(tab => (
            <SportTab
              key={tab.id}
              tabId={tab.id}
              icon={tab.icon}
              label={tab.label}
              isActive={activeTab === tab.id}
              ref={getRefForSport(tab.id)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Don't render if no tabs are provided
  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-[#2f3437] overflow-hidden" data-name="Sport tabs">
      <Tabs />
    </div>
  );
}

// Helper function to create sport tab icons with proper active/inactive states
export function createSportIcon(pathData: string, isActive: boolean, clipPath?: string) {
  return (
    <div className="relative shrink-0 size-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {clipPath && (
          <defs>
            <clipPath id={clipPath}>
              <rect fill="white" height="16" width="16" />
            </clipPath>
          </defs>
        )}
        <g clipPath={clipPath ? `url(#${clipPath})` : undefined}>
          <path 
            d={pathData} 
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

// Pre-configured sports tabs for easy use
export const defaultSportsTabs: SportTabConfig[] = [
  {
    id: 'football',
    label: 'FOOTBALL',
    icon: createSportIcon(svgPaths.pcbd7300, false) // Timer icon
  },
  {
    id: 'basketball',
    label: 'BASKETBALL',
    icon: createSportIcon(svgPaths.p12187900, false) // Flame icon
  },
  {
    id: 'efootball',
    label: 'eFOOTBALL',
    icon: createSportIcon(svgPaths.pb495af0, false) // Chevrons Up icon
  },
  {
    id: 'tennis',
    label: 'TENNIS',
    icon: createSportIcon(svgPaths.p283c2b80, false, 'clip0_1_1767') // Activity/Ball icon
  }
];

// Component with default sports configuration
export function PillTabs_Sports_Default({ 
  onTabChange, 
  defaultActiveTab = 'football'
}: Omit<PillTabs_SportsProps, 'tabs'>) {
  // Create dynamic icons that respond to active state
  const [activeTab, setActiveTab] = useState<SportType>(defaultActiveTab);
  
  // Sync with external changes to defaultActiveTab
  useEffect(() => {
    setActiveTab(defaultActiveTab);
  }, [defaultActiveTab]);
  
  const dynamicTabs: SportTabConfig[] = [
    {
      id: 'football',
      label: 'FOOTBALL',
      icon: createSportIcon(svgPaths.pcbd7300, activeTab === 'football')
    },
    {
      id: 'basketball',
      label: 'BASKETBALL',
      icon: createSportIcon(svgPaths.p12187900, activeTab === 'basketball')
    },
    {
      id: 'efootball',
      label: 'eFOOTBALL',
      icon: createSportIcon(svgPaths.pb495af0, activeTab === 'efootball')
    },
    {
      id: 'tennis',
      label: 'TENNIS',
      icon: createSportIcon(svgPaths.p283c2b80, activeTab === 'tennis', 'clip0_1_1767')
    }
  ];

  const handleTabChange = (tabId: SportType) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <PillTabs_Sports 
      tabs={dynamicTabs} 
      onTabChange={handleTabChange} 
      defaultActiveTab={activeTab}
    />
  );
}