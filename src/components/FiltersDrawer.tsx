import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-jibxtgan75";

interface FiltersDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApply?: (selectedMarkets: string[], selectedTimes: string[]) => void;
}

function IconContent() {
  return (
    <div className="relative shrink-0 size-3" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-content">
          <path d={svgPaths.p189f7200} fill="var(--fill-0, #E6E7E2)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function CloseX() {
  return (
    <div className="bg-[#353b40] box-border content-stretch flex items-start justify-between p-[3px] relative rounded-[2px] shrink-0 w-[18px]" data-name="close-x">
      <IconContent />
    </div>
  );
}

interface FilterPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function FilterPill({ label, isActive = false, onClick }: FilterPillProps) {
  const containerClass = isActive 
    ? "bg-[#ecf9c5] border-[#c8ed47]" 
    : "bg-[#ffffff] border-slate-100";

  return (
    <div 
      className={`${containerClass} box-border content-stretch flex flex-col gap-2.5 h-8 items-center justify-center p-[8px] rounded-[16px] border border-solid cursor-pointer hover:bg-[#f0f9e0] transition-colors duration-200`}
      onClick={onClick}
    >
      <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
        <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[12px] whitespace-pre">{label}</p>
        </div>
      </div>
    </div>
  );
}

function MarketsSection({ selectedMarkets, onMarketToggle }: { selectedMarkets: string[]; onMarketToggle: (market: string) => void }) {
  const markets = [
    "1X2",
    "Over / Under", 
    "Both Teams To Score",
    "Double Chance",
    "Half Time / Full Time"
  ];

  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] w-[66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Markets</p>
      </div>
      
      <div className="flex flex-wrap gap-2 items-start justify-start relative w-full">
        {markets.map((market) => (
          <FilterPill
            key={market}
            label={market}
            isActive={selectedMarkets.includes(market)}
            onClick={() => onMarketToggle(market)}
          />
        ))}
      </div>
    </div>
  );
}

function TimeSection({ selectedTimes, onTimeToggle }: { selectedTimes: string[]; onTimeToggle: (time: string) => void }) {
  const times = [
    "All",
    "Today",
    "Tomorrow",
    "Friday",
    "Saturday", 
    "Sunday",
    "Monday",
    "Tuesday"
  ];

  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] w-[66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Time</p>
      </div>
      
      <div className="flex flex-wrap gap-2 items-start justify-start relative w-full">
        {times.map((time) => (
          <FilterPill
            key={time}
            label={time}
            isActive={selectedTimes.includes(time)}
            onClick={() => onTimeToggle(time)}
          />
        ))}
      </div>
    </div>
  );
}

function ActionButtons({ onApply, onClearFilters }: { onApply: () => void; onClearFilters: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full gap-2 sm:gap-3">
      <div 
        className="bg-[#9ce800] box-border content-stretch flex gap-2 items-center justify-center px-3 sm:px-4 py-2 relative flex-1 min-w-0 cursor-pointer" 
        data-name="Button"
        onClick={onApply}
      >
        <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] sm:text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] whitespace-pre">APPLY FILTERS</p>
        </div>
      </div>
      <div 
        className="bg-[#2f3437] box-border content-stretch flex gap-2 items-center justify-center px-3 sm:px-4 py-2 relative flex-1 min-w-0 cursor-pointer" 
        data-name="Button"
        onClick={onClearFilters}
      >
        <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[12px] sm:text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] whitespace-pre">CLEAR FILTERS</p>
        </div>
      </div>
    </div>
  );
}

export function FiltersDrawer({ isOpen, onClose, onApply }: FiltersDrawerProps) {
  const navigate = useNavigate();
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>(['1X2']);
  const [selectedTimes, setSelectedTimes] = useState<string[]>(['All']);

  const handleMarketToggle = (market: string) => {
    setSelectedMarkets(prev => {
      if (market === '1X2' && prev.includes(market)) {
        // Don't allow deselecting 1X2 if it's the only one selected
        return prev.length === 1 ? prev : prev.filter(m => m !== market);
      } else if (market === '1X2') {
        return [market];
      } else {
        const newSelected = prev.includes(market) 
          ? prev.filter(m => m !== market)
          : [...prev.filter(m => m !== '1X2'), market];
        return newSelected.length === 0 ? ['1X2'] : newSelected;
      }
    });
  };

  const handleTimeToggle = (time: string) => {
    setSelectedTimes(prev => {
      if (time === 'All') {
        return prev.includes(time) ? [] : ['All'];
      } else {
        const newSelected = prev.includes(time) 
          ? prev.filter(t => t !== time)
          : [...prev.filter(t => t !== 'All'), time];
        return newSelected;
      }
    });
  };

  const handleApply = () => {
    // Create URL parameters for the selected filters
    const params = new URLSearchParams();
    
    if (selectedMarkets.length > 0 && !selectedMarkets.includes('1X2')) {
      params.set('markets', selectedMarkets.join(','));
    }
    
    if (selectedTimes.length > 0 && !selectedTimes.includes('All')) {
      params.set('times', selectedTimes.join(','));
    }
    
    // Navigate to sports page with filters
    const queryString = params.toString();
    navigate(`/sports${queryString ? `?${queryString}` : ''}`);
    
    if (onApply) {
      onApply(selectedMarkets, selectedTimes);
    }
    onClose();
  };

  const handleClearFilters = () => {
    setSelectedMarkets(['1X2']);
    setSelectedTimes(['All']);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 md:w-80 lg:w-96 xl:w-[400px] bg-[#f4f5f0] z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col relative size-full">
          {/* Scrollable Content */}
          <div className="box-border content-stretch flex flex-col gap-6 items-end justify-start pt-3 px-3 relative flex-1 overflow-y-auto">
            {/* Close Button */}
            <div onClick={onClose} className="cursor-pointer">
              <CloseX />
            </div>
            
            {/* Markets Section */}
            <MarketsSection 
              selectedMarkets={selectedMarkets}
              onMarketToggle={handleMarketToggle}
            />

            {/* Time Section */}
            <TimeSection 
              selectedTimes={selectedTimes}
              onTimeToggle={handleTimeToggle}
            />
          </div>
          
          {/* Fixed Bottom Buttons */}
          <div className="border-t border-[#e5e5e5] bg-[#f4f5f0] p-3">
            <ActionButtons onApply={handleApply} onClearFilters={handleClearFilters} />
          </div>
        </div>
      </div>
    </>
  );
}