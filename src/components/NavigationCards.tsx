import { Link } from "react-router-dom";
import Cherry from "../imports/Cherry-2-962";
import svgPaths from "../imports/svg-9rqumaq6b3";

interface NavigationCardsProps {
  onNavigate?: () => void; // Optional callback when navigation occurs
  liveCount?: number; // Dynamic count for Live card
  virtualsCount?: number; // Dynamic count for Virtuals card
}

export function NavigationCards({ onNavigate, liveCount = 0, virtualsCount = 0 }: NavigationCardsProps) {
  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {/* Sports Card */}
      <Link 
        to="/sports" 
        className="bg-white rounded-3xl p-4 group hover:scale-105 transition-transform"
        onClick={handleNavigate}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-10 h-10 bg-[#9ce800] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p23767f00} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex items-center">
            <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs font-bold">
              2,269
            </span>
          </div>
        </div>
        <div>
          <p className="text-black text-base font-medium">Sports</p>
          <p className="text-gray-600 text-sm">Bet on Matches</p>
        </div>
      </Link>

      {/* Live Card */}
      <Link 
        to="/sports?filter=live" 
        className="bg-white rounded-3xl p-4 group hover:scale-105 transition-transform"
        onClick={handleNavigate}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-10 h-10 bg-[#9ce800] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p20058380} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex items-center">
            <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs font-bold">
              423
            </span>
          </div>
        </div>
        <div>
          <p className="text-black text-base font-medium">Live</p>
          <p className="text-gray-600 text-sm">Bet in play</p>
        </div>
      </Link>

      {/* Casino Card */}
      <Link 
        to="/casino" 
        className="bg-white rounded-3xl p-4 group hover:scale-105 transition-transform"
        onClick={handleNavigate}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-10 h-10 bg-[#9ce800] rounded-full flex items-center justify-center">
            <div className="w-6 h-6 text-black">
              <Cherry />
            </div>
          </div>
          <div className="flex items-center">
            <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs font-bold">
              1,934
            </span>
          </div>
        </div>
        <div>
          <p className="text-black text-base font-medium">Casino</p>
          <p className="text-gray-600 text-sm">Slots & crash games</p>
        </div>
      </Link>

      {/* Virtuals Card */}
      <div 
        className="bg-white rounded-3xl p-4 group hover:scale-105 transition-transform cursor-pointer"
        onClick={handleNavigate}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-10 h-10 bg-[#9ce800] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p8f4d8a8} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d={svgPaths.p3a2a0a00} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex items-center">
            <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs font-bold">
              328
            </span>
          </div>
        </div>
        <div>
          <p className="text-black text-base font-medium">Virtuals</p>
          <p className="text-gray-600 text-sm">24/7 action</p>
        </div>
      </div>
    </div>
  );
}