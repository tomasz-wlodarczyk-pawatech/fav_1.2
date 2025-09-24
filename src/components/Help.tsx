import { useState } from "react";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";
import { FloatingBetslip } from "./FloatingBetslip";

interface HelpProps {
  activeItem: string;
  onAccountClick: () => void;
  onNavigationClick: () => void;
  onHelpClick: () => void;
  onFiltersClick?: () => void;
  onBetslipClick: () => void;
  selectedLeagues?: string[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  onAISearchClick: () => void;
  onSearchWithQuery?: (query: string) => void;
}

export function Help({ activeItem, onAccountClick, onNavigationClick, onHelpClick, onFiltersClick, onBetslipClick, selectedLeagues, isLoggedIn, setIsLoggedIn, onAISearchClick, onSearchWithQuery }: HelpProps) {
  const [isBetslipMinimized, setIsBetslipMinimized] = useState(false);

  const handleBetslipToggle = () => {
    setIsBetslipMinimized(!isBetslipMinimized);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full relative">
      {/* Fixed header at the top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header onAccountClick={onAccountClick} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onAISearchClick={onAISearchClick} onSearchWithQuery={onSearchWithQuery} />
      </div>
      
      {/* Main content with top and bottom padding to account for fixed navigation and floating betslip */}
      <div className="content-stretch flex flex-col items-start justify-start relative w-full pt-[48px] pb-[120px]">
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
        />
      </div>
      
      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeItem={activeItem} onHelpClick={onHelpClick} onBetslipClick={onBetslipClick} onNavigationClick={onNavigationClick} />
      </div>
    </div>
  );
}