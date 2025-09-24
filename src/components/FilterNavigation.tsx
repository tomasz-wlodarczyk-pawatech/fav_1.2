import { FilterTabs } from "./FilterTabs";
import { FiltersButton } from "./FiltersButton";

type FilterType = 'popular' | 'live' | 'upcoming';

interface FilterNavigationProps {
  onFilterChange?: (filter: FilterType) => void;
  onFiltersClick?: () => void;
  onLeaguesClick?: () => void;
  selectedLeagues?: string[];
}

export function FilterNavigation({ onFilterChange, onFiltersClick, onLeaguesClick, selectedLeagues }: FilterNavigationProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full h-full">
      <div className="flex-1 mr-2">
        <FilterTabs onFilterChange={onFilterChange} onLeaguesClick={onLeaguesClick} selectedLeagues={selectedLeagues} />
      </div>
      <div className="shrink-0">
        <FiltersButton onClick={onFiltersClick} />
      </div>
    </div>
  );
}