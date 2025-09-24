import { useState } from 'react';
import svgPaths from "../imports/svg-qbvq8u1tlh";

interface LeaguesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
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

function Check() {
  return (
    <div className="relative shrink-0 size-4" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <rect fill="var(--fill-0, #9CE800)" height="16" rx="4" width="16" />
          <path d={svgPaths.pb97b500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox({ checked = false }: { checked?: boolean }) {
  return (
    <div className="box-border content-stretch flex items-center justify-center pb-0 pt-0.5 px-0 relative shrink-0 w-4" data-name="Checkbox">
      {checked ? <Check /> : (
        <div className="bg-[#ffffff] relative rounded-[4px] shrink-0 size-4" data-name="Checkbox">
          <div aria-hidden="true" className="absolute border border-[#aaaeb0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      )}
    </div>
  );
}

function EuEurope() {
  return (
    <div className="bg-blue-900 overflow-clip relative rounded-[8.889px] shrink-0 size-4" data-name="eu-Europe">
      <div className="absolute inset-[22.22%_21.81%_22.22%_22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <g id="Group 59">
            <path d={svgPaths.p23e6a800} fill="var(--fill-0, #FBBF24)" id="Vector" />
            <path d={svgPaths.p644d200} fill="var(--fill-0, #FBBF24)" id="Vector_2" />
            <path d={svgPaths.pe24e800} fill="var(--fill-0, #FBBF24)" id="Vector_3" />
            <path d={svgPaths.peb67b00} fill="var(--fill-0, #FBBF24)" id="Vector_4" />
            <path d={svgPaths.p26dddb00} fill="var(--fill-0, #FBBF24)" id="Vector_5" />
            <path d={svgPaths.p127b5c00} fill="var(--fill-0, #FBBF24)" id="Vector_6" />
            <path d={svgPaths.p605d500} fill="var(--fill-0, #FBBF24)" id="Vector_7" />
            <path d={svgPaths.p3f86b600} fill="var(--fill-0, #FBBF24)" id="Vector_8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function GbEngEngland() {
  return (
    <div className="relative shrink-0 size-4" data-name="gb-eng-England">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="gb-eng-England">
          <g clipPath="url(#clip0_8_3491)">
            <rect fill="var(--fill-0, #F5F5F5)" height="16" rx="8" width="16" />
            <path clipRule="evenodd" d={svgPaths.p29475500} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="Union" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_8_3491">
            <rect fill="white" height="16" rx="8" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ItItaly() {
  return (
    <div className="relative shrink-0 size-4" data-name="it-Italy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="it-Italy">
          <g clipPath="url(#clip0_8_3481)">
            <path d="M0 0H5.33333V16H0V0Z" fill="var(--fill-0, #22C55E)" id="Rectangle 10" />
            <path d={svgPaths.p28039980} fill="var(--fill-0, #F5F5F5)" id="Rectangle 12" />
            <path d="M10.6667 0H16V16H10.6667V0Z" fill="var(--fill-0, #EF4444)" id="Rectangle 11" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_8_3481">
            <rect fill="white" height="16" rx="8" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DeGermany() {
  return (
    <div className="relative shrink-0 size-4" data-name="de-Germany">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="de-Germany">
          <g clipPath="url(#clip0_8_3476)">
            <path d="M0 0H16V5.33333H0V0Z" fill="var(--fill-0, #262626)" id="Rectangle 12" />
            <path d={svgPaths.p3e369200} fill="var(--fill-0, #EF4444)" id="Rectangle 10" />
            <path d="M0 10.6667H16V16H0V10.6667Z" fill="var(--fill-0, #FBBF24)" id="Rectangle 11" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_8_3476">
            <rect fill="white" height="16" rx="8" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EsSpain() {
  return (
    <div className="relative shrink-0 size-4" data-name="es-Spain">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="es-Spain">
          <path d="M0 0H16V4H0V0Z" fill="var(--fill-0, #EF4444)" id="Rectangle 10" />
          <path d="M0 4H16V8H0V4Z" fill="var(--fill-0, #FBBF24)" id="Rectangle 13" />
          <path d="M0 8H16V12H0V8Z" fill="var(--fill-0, #FBBF24)" id="Rectangle 15" />
          <path d="M0 12H16V16H0V12Z" fill="var(--fill-0, #EF4444)" id="Rectangle 14" />
          <g id="Group 72">
            <path d={svgPaths.p2e927300} fill="var(--fill-0, #EF4444)" id="Vector" />
            <path d={svgPaths.p3cbc5bc0} fill="var(--fill-0, #EF4444)" id="Vector_2" />
            <path d={svgPaths.p3e4d0af0} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
            <path d={svgPaths.p36d90000} fill="var(--fill-0, #EF4444)" id="Vector_4" />
            <path d={svgPaths.p38356180} fill="var(--fill-0, #EF4444)" id="Vector_5" />
            <path d={svgPaths.p31463d80} fill="var(--fill-0, #FBBF24)" id="Vector_6" />
            <path d={svgPaths.p3f7a3d80} fill="var(--fill-0, #FBBF24)" id="Vector_7" />
            <path d={svgPaths.p12fc700} fill="var(--fill-0, #EF4444)" id="Vector_8" />
            <path d={svgPaths.p3bf9c080} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
            <path d={svgPaths.p35486000} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
            <path d={svgPaths.p896ed00} fill="var(--fill-0, #EF4444)" id="Vector_11" />
            <path d={svgPaths.p41fd400} fill="var(--fill-0, #EF4444)" id="Vector_12" />
            <path d={svgPaths.p1c1e4900} fill="var(--fill-0, #FBBF24)" id="Vector_13" />
            <path d={svgPaths.p1d070c80} fill="var(--fill-0, #FBBF24)" id="Vector_14" />
            <path d={svgPaths.p10755300} fill="var(--fill-0, #FBBF24)" id="Vector_15" />
            <path d={svgPaths.p5ecc760} fill="var(--fill-0, #3B82F6)" id="Vector_16" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface LeagueItemProps {
  icon?: React.ReactNode;
  label: string;
  checked?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

function LeagueItem({ icon, label, checked = false, isActive = false, onClick }: LeagueItemProps) {
  const containerClass = isActive 
    ? "bg-[#ecf9c5] relative rounded-[8px] shrink-0 w-full border border-[#c8ed47] border-solid" 
    : "bg-[#ffffff] relative rounded-[8px] shrink-0 w-full border border-slate-100 border-solid";

  return (
    <div className={containerClass} onClick={onClick}>
      <div className="flex flex-row items-center relative size-full cursor-pointer">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-2 pr-1 py-2 relative w-full">
          <Checkbox checked={checked} />
          <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 w-[262px]">
            {icon}
            <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#171a1c] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[20px]">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CountryItemProps {
  icon: React.ReactNode;
  label: string;
  checked?: boolean;
  hasChevron?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
}

function CountryItem({ icon, label, checked = false, hasChevron = true, isExpanded = false, onClick }: CountryItemProps) {
  return (
    <div className="bg-[#ffffff] relative rounded-[8px] shrink-0 w-full border border-slate-100 border-solid" onClick={onClick}>
      <div className="flex flex-row items-center relative size-full cursor-pointer">
        <div className="box-border content-stretch flex items-center justify-between pl-2 pr-1 py-2 relative w-full">
          <Checkbox checked={checked} />
          <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0 w-[300px]">
            {icon}
            <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#171a1c] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[20px]">{label}</p>
            </div>
            {hasChevron && (
              <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                <ChevronDown />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeaguesDrawer({ isOpen, onClose }: LeaguesDrawerProps) {
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>(['All Leagues']);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [expandedCountries, setExpandedCountries] = useState<string[]>([]);

  const handleLeagueToggle = (league: string) => {
    setSelectedLeagues(prev => {
      if (league === 'All Leagues') {
        return prev.includes(league) ? [] : ['All Leagues'];
      } else {
        const newSelected = prev.includes(league) 
          ? prev.filter(l => l !== league)
          : [...prev.filter(l => l !== 'All Leagues'), league];
        return newSelected;
      }
    });
  };

  const handleCountryToggle = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
  };

  const handleCountryExpand = (country: string) => {
    setExpandedCountries(prev => 
      prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country]
    );
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
        <div className="flex flex-col items-end relative size-full">
          <div className="box-border content-stretch flex flex-col gap-3 items-end justify-start pb-8 pt-3 px-3 relative size-full overflow-y-auto">
            {/* Close Button */}
            <div onClick={onClose} className="cursor-pointer">
              <CloseX />
            </div>
            
            {/* Popular Leagues Section */}
            <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[24px]">Popular Leagues</p>
              </div>
              
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
                <LeagueItem 
                  label="All Leagues" 
                  checked={selectedLeagues.includes('All Leagues')}
                  isActive={selectedLeagues.includes('All Leagues')}
                  onClick={() => handleLeagueToggle('All Leagues')}
                />
                <LeagueItem 
                  icon={<EuEurope />}
                  label="UEFA Champions League" 
                  checked={selectedLeagues.includes('UEFA Champions League')}
                  onClick={() => handleLeagueToggle('UEFA Champions League')}
                />
                <LeagueItem 
                  icon={<EuEurope />}
                  label="UEFA Europa League" 
                  checked={selectedLeagues.includes('UEFA Europa League')}
                  onClick={() => handleLeagueToggle('UEFA Europa League')}
                />
                <LeagueItem 
                  icon={<EuEurope />}
                  label="UEFA Conference League" 
                  checked={selectedLeagues.includes('UEFA Conference League')}
                  onClick={() => handleLeagueToggle('UEFA Conference League')}
                />
                <LeagueItem 
                  icon={<GbEngEngland />}
                  label="Premier League" 
                  checked={selectedLeagues.includes('Premier League')}
                  onClick={() => handleLeagueToggle('Premier League')}
                />
                <LeagueItem 
                  icon={<ItItaly />}
                  label="Serie A" 
                  checked={selectedLeagues.includes('Serie A')}
                  onClick={() => handleLeagueToggle('Serie A')}
                />
                <LeagueItem 
                  icon={<DeGermany />}
                  label="Bundesliga" 
                  checked={selectedLeagues.includes('Bundesliga')}
                  onClick={() => handleLeagueToggle('Bundesliga')}
                />
                <LeagueItem 
                  icon={<EsSpain />}
                  label="La Liga" 
                  checked={selectedLeagues.includes('La Liga')}
                  onClick={() => handleLeagueToggle('La Liga')}
                />
              </div>
            </div>

            {/* Popular Countries Section */}
            <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[24px]">Popular Countries</p>
              </div>
              
              <CountryItem 
                icon={<GbEngEngland />}
                label="England" 
                checked={selectedCountries.includes('England')}
                isExpanded={expandedCountries.includes('England')}
                onClick={() => {
                  handleCountryToggle('England');
                  handleCountryExpand('England');
                }}
              />
            </div>

            {/* Other Countries Section */}
            <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
              <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[24px]">Other Countries</p>
              </div>
              
              {/* Add more countries as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}