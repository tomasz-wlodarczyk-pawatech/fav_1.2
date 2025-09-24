import { useState } from "react";
import svgPaths from "../imports/svg-i0yq03h3c5";

interface CasinoFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

function IconSearch() {
  return (
    <div className="relative size-4" data-name="icon_search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon_search">
          <g id="Space"></g>
          <g id="Vector">
            <path d={svgPaths.p2eeb900} fill="var(--fill-0, #353B40)" />
            <path clipRule="evenodd" d={svgPaths.p168d4f40} fill="var(--fill-0, #353B40)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 1">
      <div className="absolute flex h-[16px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[16px]">
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <IconSearch />
        </div>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="star">
          <g id="Vector"></g>
          <path d={svgPaths.p2e23c200} fill="var(--fill-0, #252A2D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

interface FilterPillProps {
  label?: string;
  icon?: "search" | "star";
  isActive?: boolean;
  onClick?: () => void;
}

function FilterPill({ label, icon, isActive = false, onClick }: FilterPillProps) {
  const baseClasses = "box-border content-stretch flex gap-2 h-[34px] sm:h-[36px] md:h-[38px] items-center justify-center px-3 sm:px-4 py-2 sm:py-3 relative rounded-[20px] shrink-0 cursor-pointer hover:opacity-80 transition-all duration-200 active:scale-95";
  
  const activeClasses = isActive 
    ? "bg-[#ddfaa5] border-2 border-[#9ce800] shadow-sm" 
    : "bg-white border border-[#e6e7e2] hover:border-[#9ce800]/50 hover:bg-gray-50";
  
  return (
    <div 
      className={`${baseClasses} ${activeClasses}`}
      onClick={onClick}
      data-name="Casino pill"
    >
      {icon === "search" && <SearchIcon />}
      {icon === "star" && <StarIcon />}
      
      {label && (
        <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[12px] sm:text-[13px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px] whitespace-pre">{label}</p>
        </div>
      )}
    </div>
  );
}

export function CasinoFilters({ selectedFilter, onFilterChange }: CasinoFiltersProps) {
  const filters = [
    { id: "search", icon: "search" as const },
    { id: "favorites", icon: "star" as const },
    { id: "home", label: "Home" },
    { id: "all", label: "All" },
    { id: "crash", label: "Crash" },
    { id: "prizewheel", label: "Prize Wheel" },
    { id: "hotgames", label: "Hot Games" },
    { id: "livecasino", label: "Live Casino" },
    { id: "whatsnew", label: "What's New" },
    { id: "slot", label: "Slot" },
    { id: "scratchcard", label: "Scratch Card" },
  ];

  return (
    <div className="bg-white relative w-full sticky top-[48px] z-30 shadow-sm" data-name="Casino tab">
      <div className="relative w-full">
        <div className="box-border content-stretch flex gap-2 items-start justify-start px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 relative w-full">
          <div className="content-stretch flex gap-2 sm:gap-3 items-start justify-start relative shrink-0 overflow-x-auto scrollbar-hide pb-1 w-full" data-name="Tab">
            {filters.map((filter) => (
              <FilterPill
                key={filter.id}
                label={filter.label}
                icon={filter.icon}
                isActive={selectedFilter === filter.id}
                onClick={() => onFilterChange(filter.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}