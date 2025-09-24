import { useState } from 'react';
import { getLeagueFlag } from './FlagComponents';

type FilterType = 'popular' | 'live' | 'upcoming' | 'leagues';

interface FilterTabsProps {
  onFilterChange?: (filter: FilterType) => void;
  onLeaguesClick?: () => void;
  selectedLeagues?: string[];
}

export function FilterTabs({ onFilterChange, onLeaguesClick, selectedLeagues }: FilterTabsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('popular');

  const handleFilterClick = (filter: FilterType) => {
    if (filter === 'leagues') {
      onLeaguesClick?.();
    } else {
      setActiveFilter(filter);
      onFilterChange?.(filter);
    }
  };

  const getButtonStyles = (filter: FilterType, isActive: boolean) => {
    const baseStyles = "box-border content-stretch flex flex-col gap-2.5 h-8 items-center justify-center p-[8px] relative rounded-[16px] shrink-0 cursor-pointer transition-all duration-200";
    
    if (isActive) {
      return `${baseStyles} bg-[#ecf9c5] border border-[#c8ed47] border-solid`;
    } else {
      return `${baseStyles} bg-[#ffffff] hover:bg-gray-50`;
    }
  };

  const getTextColor = (isActive: boolean) => {
    return isActive ? "text-[#000000]" : "text-[#000000]";
  };

  const getWidth = (filter: FilterType) => {
    switch (filter) {
      case 'popular':
        return 'w-[69px]';
      case 'live':
        return 'w-[50px]';
      case 'upcoming':
        return 'w-[69px]';
      case 'leagues':
        // Dynamic width based on selected leagues
        if (selectedLeagues && selectedLeagues.length > 0 && !selectedLeagues.includes('All Leagues')) {
          return 'w-auto min-w-[65px]';
        }
        return 'w-[65px]';
      default:
        return 'w-auto';
    }
  };

  // Get flags for selected leagues (excluding 'All Leagues')
  const getSelectedLeagueFlags = () => {
    if (!selectedLeagues || selectedLeagues.length === 0 || selectedLeagues.includes('All Leagues')) {
      return [];
    }
    
    return selectedLeagues
      .map(league => getLeagueFlag(league))
      .filter(flag => flag !== null)
      .slice(0, 3); // Limit to 3 flags max for spacing
  };

  const selectedFlags = getSelectedLeagueFlags();
  const hasSelectedLeagues = selectedFlags.length > 0;

  return (
    <div className="content-stretch flex gap-1 items-center justify-between relative w-full">
      {/* Main Filter Group */}
      <div className="content-stretch flex gap-0.5 items-center justify-start relative flex-shrink-0">
        {/* Popular Filter */}
        <div 
          className={`${getButtonStyles('popular', activeFilter === 'popular')} ${getWidth('popular')}`}
          onClick={() => handleFilterClick('popular')}
        >
          {activeFilter === 'popular' && (
            <div aria-hidden="true" className="absolute border border-[#c8ed47] border-solid inset-0 pointer-events-none rounded-[16px]" />
          )}
          <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
            <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 ${getTextColor(activeFilter === 'popular')} text-[12px] text-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[12px] whitespace-pre">Popular</p>
            </div>
          </div>
        </div>

        {/* Live Filter */}
        <div 
          className={`${getButtonStyles('live', activeFilter === 'live')} ${getWidth('live')}`}
          onClick={() => handleFilterClick('live')}
        >
          {activeFilter === 'live' && (
            <div aria-hidden="true" className="absolute border border-[#c8ed47] border-solid inset-0 pointer-events-none rounded-[16px]" />
          )}
          <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
            <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 ${getTextColor(activeFilter === 'live')} text-[12px] text-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[12px] whitespace-pre">Live</p>
            </div>
          </div>
        </div>

        {/* Upcoming Filter */}
        <div 
          className={`${getButtonStyles('upcoming', activeFilter === 'upcoming')} ${getWidth('upcoming')}`}
          onClick={() => handleFilterClick('upcoming')}
        >
          {activeFilter === 'upcoming' && (
            <div aria-hidden="true" className="absolute border border-[#c8ed47] border-solid inset-0 pointer-events-none rounded-[16px]" />
          )}
          <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
            <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 ${getTextColor(activeFilter === 'upcoming')} text-[12px] text-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[12px] whitespace-pre">Upcoming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leagues Filter - Separate Group */}
      <div 
        className={`${getButtonStyles('leagues', hasSelectedLeagues)} ${getWidth('leagues')} flex-shrink-0`}
        onClick={() => handleFilterClick('leagues')}
      >
        {hasSelectedLeagues && (
          <div aria-hidden="true" className="absolute border border-[#c8ed47] border-solid inset-0 pointer-events-none rounded-[16px]" />
        )}
        <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
          {hasSelectedLeagues ? (
            // Show flags when leagues are selected
            <div className="flex gap-1 items-center">
              {selectedFlags.map((flag, index) => (
                <div key={index} className="shrink-0">
                  {flag}
                </div>
              ))}
              {selectedLeagues && selectedLeagues.length > 3 && (
                <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000000] text-[10px] text-nowrap ml-1" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[12px] whitespace-pre">+{selectedLeagues.length - 3}</p>
                </div>
              )}
            </div>
          ) : (
            // Show "Leagues" text when no leagues are selected
            <div className={`flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 ${getTextColor(activeFilter === 'leagues')} text-[12px] text-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[12px] whitespace-pre">Leagues</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}