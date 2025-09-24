import { Header } from "./Header";
import { ProductUSP } from "./ProductUSP";
import { PopularLeagues } from "./PopularLeagues";
import { Football } from "./Football";
import { Basketball } from "./Basketball";
import { BottomNavigation } from "./BottomNavigation";
import { FloatingBetslip } from "./FloatingBetslip";

interface Homepage_v1Props {
  activeItem: string;
  onAccountClick: () => void;
  onHelpClick: () => void;
  onLeaguesClick?: () => void;
  onFiltersClick?: () => void;
  onBetslipClick: () => void;
  onLeagueSelect?: (leagueName: string) => void;
  selectedLeagues?: string[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

import { useState } from "react";

export function Homepage_v1({ activeItem, onAccountClick, onHelpClick, onLeaguesClick, onFiltersClick, onBetslipClick, onLeagueSelect, selectedLeagues, isLoggedIn, setIsLoggedIn }: Homepage_v1Props) {
  const [isBetslipMinimized, setIsBetslipMinimized] = useState(false);

  const handleBetslipToggle = () => {
    setIsBetslipMinimized(!isBetslipMinimized);
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full relative">
      {/* Fixed header at the top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header onAccountClick={onAccountClick} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      
      {/* Main content with top and bottom padding to account for fixed navigation and floating betslip */}
      <div className="content-stretch flex flex-col items-start justify-start relative w-full pt-[48px] pb-[120px]">
        <ProductUSP />
        <PopularLeagues 
          onLeaguesClick={onLeaguesClick} 
          onLeagueSelect={onLeagueSelect}
        />
        <Football onFiltersClick={onFiltersClick} />
        <Basketball onFiltersClick={onFiltersClick} />
      </div>
      
      {/* Fixed floating betslip above bottom navigation */}
      <div className={`fixed bottom-[68px] z-40 h-12 transition-all duration-300 ${
        isBetslipMinimized 
          ? 'right-4' 
          : 'left-1/2 transform -translate-x-1/2'
      }`}>
        <FloatingBetslip 
          isMinimized={isBetslipMinimized} 
          onToggle={handleBetslipToggle}
          onBetslipClick={onBetslipClick}
        />
      </div>
      
      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeItem={activeItem} onHelpClick={onHelpClick} />
      </div>
    </div>
  );
}