import { useState, useEffect, useRef, useMemo } from "react";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";

import { Tooltip } from "./Tooltip";
import { ProductQuickBar } from "./ProductQuickBar";
import HomeFavoritesWidget from "./HomeFavoritesWidget";

import { Link, useNavigate } from "react-router-dom";
import { MatchCard } from "./MatchCard";
import { getSportsMatchData } from "./SportsMatchData";
import { PopularLeagues } from "./PopularLeagues";
import { SectionBadge } from "./SectionBadge";
import { NavigationCards } from "./NavigationCards";
import { 
  Flame,
  Sparkles,
  TrendingUp,
  Heart,
  Brain,
  BarChart3,
  Users,
  Play,
  Gamepad2,
  Zap,
  Trophy,
  DollarSign,
  Clock,
  Check,
  UserPlus,
  Sliders,
  GripVertical,
  X,
  Plus,
  Save,
  Settings,
  MessageSquare,
  Minus,
  Calculator,
  Target,
  Star,
  Gift
} from "lucide-react";

import imgJetxThumbnailNewMin1 from "figma:asset/7f31af3b9fed694e1a8e19fefd7c9460f7ecb824.png";
import imgAirAce200X2001 from "figma:asset/fde6ccb801bde126e1e795ff74c16a71b42f67d4.png";
import imgFm2Thumbnail11Min11 from "figma:asset/e489fa49c263dc14bb6a983cb4686a5b00d8f849.png";
import imgPandaBao from "figma:asset/4594cf57201c1cdf2c6547bec230bb0a5956a4f2.png";
import imgVortex from "figma:asset/43e87db50329aa2128ba88fe43d5b2198cc6d089.png";
import imgAero from "figma:asset/f47ddb5f280f4a53ea9365df034f9ecada0dd689.png";
import exampleImage from 'figma:asset/baa1dd38ecfecffff4150d82d9dd539a7ec543cd.png';
import aviatorBanner from 'figma:asset/dd07988a05d6b80a7209ecf4c08ba71a8232d022.png';
import { CustomBadge } from "./CustomBadge";
import Frame2085656179 from "../imports/Frame2085656179-2022-455";

interface HomeProps {
  activeItem: string;
  onAccountClick: () => void;
  onNavigationClick: () => void;
  onHelpClick: () => void;
  onLeaguesClick?: () => void;
  onFiltersClick?: () => void;
  onBetslipClick: () => void;
  onLeagueSelect?: (leagueName: string) => void;
  selectedLeagues?: string[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  onAISearchClick: () => void;
  onSearchWithQuery?: (query: string) => void;
}

// Module types for drag and drop
type ModuleType = 'popular-leagues' | 'my-favorites' | 'trending-apps' | 'featured-events' | 'aviator-banner' | 'popular-games' | 'top-winners' | 'betting-utilities' | 'social-community' | 'live-scores' | 'promotions';

interface Module {
  id: ModuleType;
  title: string;
  component: React.ReactNode;
}

interface DraggableModuleProps {
  module: Module;
  index: number;
  isEditMode: boolean;
  moveModule: (dragIndex: number, hoverIndex: number) => void;
  onRemove: (moduleId: ModuleType) => void;
}

interface AvailableModule {
  id: ModuleType;
  title: string;
  description: string;
  icon: React.ReactNode;
  isEnabled: boolean;
  isComingSoon?: boolean;
}

// Draggable Module Wrapper Component
function DraggableModule({ module, index, isEditMode, moveModule, onRemove }: DraggableModuleProps) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'module',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: isEditMode,
  });

  const [, drop] = useDrop({
    accept: 'module',
    hover: (item: { index: number }, monitor) => {
      if (!monitor.isOver({ shallow: true })) return;
      
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      moveModule(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = (node: HTMLDivElement | null) => {
    if (isEditMode) {
      drag(drop(node));
      preview(node);
    }
  };

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-200 ${
        isDragging ? 'opacity-50 scale-95' : ''
      } ${isEditMode ? 'cursor-move' : ''}`}
    >
      {isEditMode && (
        <div className="absolute top-2 right-2 z-10 flex gap-1">
          <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm cursor-move touch-manipulation">
            <GripVertical className="w-4 h-4 text-gray-400" />
          </div>
          <button
            onClick={() => onRemove(module.id)}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 p-3 shadow-sm transition-colors touch-manipulation"
          >
            <Minus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      )}
      {module.component}
    </div>
  );
}

// Edit Mode Header Component
function EditModeHeader({ onSave, onAddModules }: { onSave: () => void; onAddModules: () => void }) {
  return (
    <div className="bg-[#9ce800]/10 border-t border-b border-[#9ce800]/20 px-4 py-3 mx-4 mb-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-[#9ce800]" />
          <h2 className="text-gray-900 font-medium">Edit Home Page</h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onAddModules}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors touch-manipulation"
          >
            <Plus className="w-3 h-3" />
            <span className="text-sm">Add</span>
          </button>
          <button
            onClick={onSave}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#9ce800] text-black rounded-lg hover:bg-[#8ac400] transition-colors"
          >
            <Save className="w-4 h-4" />
            <span className="text-sm font-medium">Save</span>
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-600 mt-1">Drag and drop modules to customize your feed</p>
    </div>
  );
}



// Hero Section with Figma Design - Custom Responsive Implementation
function HeroSection({ isEditMode, onEditClick, coreRef }: { isEditMode: boolean; onEditClick: () => void; coreRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="py-6 mb-[18px] px-[8px] pt-[16px] pr-[0px] pb-[8px] pl-[0px] mt-[0px] mr-[0px] ml-[0px]">
      <div className="max-w-sm mx-auto space-y-6">
        {/* Header with greeting and notification */}
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-1 text-[24px]">Hey, Kwame</h1>
            <p className="text-sm text-gray-700">myPawa is your personal betting hub. Start with Sports, Live, Casino or explore more below.</p>
          </div>
          <button 
            onClick={onEditClick}
            className="relative group"
          >
            <div className={`px-3 py-2 rounded-full border flex items-center justify-center transition-colors ${
              isEditMode 
                ? 'border-[#9ce800] bg-[#9ce800]/10 group-hover:bg-[#9ce800]/20' 
                : 'border-gray-200 bg-white group-hover:bg-gray-50'
            }`}>
              <span className={`text-sm font-medium transition-colors ${
                isEditMode ? 'text-[#9ce800]' : 'text-gray-700'
              }`}>Edit Widgets</span>
            </div>
          </button>
        </div>

        {/* Core Products (keep existing card markup exactly as-is) */}
        <section id="core-products" ref={coreRef} className="px-4">
          <NavigationCards />
        </section>

      </div>
    </div>
  );
}

// MyApps (2x2) — replaces TrendingAppsComponent

function AppTile({
  to,
  external,
  icon,
  label,
}: {
  to: string;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  const classes =
    "flex items-center gap-2 px-3 py-3 rounded-xl bg-white border border-[#9CE800]/50 " +
    "text-[#1f2c37] font-medium hover:bg-gray-50 transition-colors";
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
      {icon}
      <span className="text-[15px] font-semibold">{label}</span>
    </a>
  ) : (
    <Link to={to} className={classes}>
      {icon}
      <span className="text-[15px] font-semibold">{label}</span>
    </Link>
  );
}

function TrendingAppsComponent() {
  return (
    <div className="bg-white rounded-2xl mx-4 mb-6 border border-gray-100">
      <div className="p-4">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
              <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
              <rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
            </svg>
            <h3 className="text-gray-900">MyApps</h3>
          </div>
        </div>

        {/* 2×2 grid, no scrolling */}
        <div className="grid grid-cols-2 gap-3">
          {/* BetMaker Pro */}
          <AppTile
            to="/apps"
            icon={<Brain className="w-5 h-5 text-purple-600" />}
            label="BetMaker Pro"
          />

          {/* Pawa6 (external deep link kept as example) */}
          <AppTile
            to="https://www.betpawa.ug/pawa6"
            external
            icon={<Sparkles className="w-5 h-5 text-fuchsia-600" />}
            label="Pawa6"
          />

          {/* Chat2Bet */}
          <AppTile
            to="/apps"
            icon={<MessageSquare className="w-5 h-5 text-emerald-600" />}
            label="Chat2Bet"
          />

          {/* pawaScore */}
          <AppTile
            to="/apps"
            icon={<BarChart3 className="w-5 h-5 text-blue-600" />}
            label="pawaScore"
          />
        </div>

        {/* Footer CTA to AppStore */}
        <div className="mt-3">
          <Link
            to="/apps"
            className="w-full inline-flex items-center justify-center h-9 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200"
          >
            Open AppStore
          </Link>
        </div>
      </div>
    </div>
  );
}

// Featured Events Component - Vertical List of 3 Sports-style Cards
function FeaturedEventsComponent() {
  const [favoriteMatches, setFavoriteMatches] = useState<string[]>([]);
  const navigate = useNavigate();

  // Get featured matches from different sports for variety
  const footballMatches = getSportsMatchData('football').slice(0, 4);
  const basketballMatches = getSportsMatchData('basketball').slice(0, 3);
  const tennisMatches = getSportsMatchData('tennis').slice(0, 3);
  
  // Combine all events
  const events = [...footballMatches, ...basketballMatches, ...tennisMatches];

  const handleFavoriteToggle = (matchId: string) => {
    setFavoriteMatches(prev => 
      prev.includes(matchId) 
        ? prev.filter(id => id !== matchId)
        : [...prev, matchId]
    );
  };

  return (
    <section className="bg-white rounded-2xl border border-gray-200 mx-4 mb-6">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-orange-500">🔥</span>
          <h3 className="text-base font-semibold">Popular Events</h3>
        </div>
        <span className="inline-flex items-center px-2 py-0.5 text-xs bg-[#e8f7b0] rounded-full text-gray-900">
          {events.length}
        </span>
      </div>

      <div className="px-3 pb-3 flex flex-col gap-3">
        {events.slice(0, 3).map(ev => (
          <MatchCard
            key={ev.id}
            isLive={ev.isLive}
            teams={ev.teams}
            league={ev.league}
            odds={ev.odds}
            oddsValues={ev.oddsValues}
            betCount={ev.betCount}
            timestamp={ev.timestamp}
            badges={ev.badges}
            boostedOddsIndex={ev.boostedOddsIndex}
            isFavorite={favoriteMatches.includes(ev.id)}
            onFavoriteToggle={() => handleFavoriteToggle(ev.id)}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-none hover:shadow-none"
          />
        ))}
        {events.length > 3 && (
          <button
            onClick={() => {
              navigate('/sports?tab=popular');
              window.scrollTo(0, 0);
            }}
            className="w-full mt-1 h-9 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 text-center"
          >
            View All Popular Events
          </button>
        )}
      </div>
    </section>
  );
}

// Aviator Banner Component
function AviatorBannerComponent() {
  return (
    <div className="bg-white rounded-2xl mx-4 mb-6 border border-gray-100">
      <div className="p-4">
        {/* Aviator Banner */}
        <Frame2085656179 />
      </div>
    </div>
  );
}

function PopularGamesComponent() {
  const popularGames = [
    {
      id: 1,
      name: "JetX",
      image: imgJetxThumbnailNewMin1,
      playingCount: 512,
    },
    {
      id: 2,
      name: "Air Ace",
      image: imgAirAce200X2001,
      playingCount: 321,
    },
    {
      id: 3,
      name: "Fortune Miner 2",
      image: imgFm2Thumbnail11Min11,
      playingCount: 221,
    },
    {
      id: 4,
      name: "Panda Bao",
      image: imgPandaBao,
      playingCount: 189,
    },
    {
      id: 5,
      name: "Vortex",
      image: imgVortex,
      playingCount: 156,
    },
    {
      id: 6,
      name: "Aero",
      image: imgAero,
      playingCount: 134,
    },
    {
      id: 7,
      name: "Lucky Slots",
      image: imgJetxThumbnailNewMin1,
      playingCount: 98,
    },
    {
      id: 8,
      name: "Blackjack Pro",
      image: imgAirAce200X2001,
      playingCount: 87,
    },
    {
      id: 9,
      name: "Gold Rush",
      image: imgFm2Thumbnail11Min11,
      playingCount: 76,
    },
    {
      id: 10,
      name: "Poker Master",
      image: imgPandaBao,
      playingCount: 45,
    }
  ];

  return (
    <div className="bg-white rounded-2xl mx-4 mb-6 border border-gray-100">
      <div className="p-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-purple-600" />
            <h3 className="text-gray-900">Top 10 Casino Games</h3>
          </div>
        </div>

        {/* Game Cards */}
        <div className="-mx-4 px-4">
          <div className="flex gap-3 items-center justify-start overflow-x-auto scrollbar-hide">
            {popularGames.map((game) => (
              <div key={game.id} className="content-stretch flex flex-col gap-2 items-center justify-center relative shrink-0 w-[102px]">
                {/* Game Image */}
                <div 
                  className="bg-center bg-cover bg-no-repeat h-[118px] rounded-[12px] shrink-0 w-[102px]" 
                  style={{ backgroundImage: `url('${game.image}')` }} 
                />
                
                {/* Playing Count */}
                <div className="content-stretch flex gap-1.5 h-3.5 items-center justify-center relative shrink-0 w-full">
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="flex-none scale-y-[-100%]">
                      <div className="relative size-1.5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                          <circle cx="3" cy="3" fill="#FB1F8D" r="3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['SF_Compact:Semibold',_sans-serif] font-[656.2] justify-center leading-[0] relative shrink-0 text-[12px] text-black text-nowrap">
                    <p className="leading-[normal] whitespace-pre">
                      <span className="text-[#fb1f8d]">{game.playingCount}</span> <span className="font-['SF_Compact:Regular',_sans-serif] font-[457.9]">playing</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Top Winners Section Component
function TopWinnersComponent() {
  const winners = [
    {
      id: 1,
      name: "Adunni Okafor",
      image: "https://images.unsplash.com/photo-1596959997582-78c0ce90c720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2ODk0NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Premier League specialist with 87% win rate on weekend matches",
      totalWins: "₦2.4M",
      recentWin: "₦285k",
      recentMatch: "Arsenal vs Chelsea - Over 2.5 Goals",
      followers: 12400,
      winStreak: 8,
      isVerified: true
    },
    {
      id: 2, 
      name: "Chike Nwankwo",
      image: "https://images.unsplash.com/photo-1618051438543-9f85cab01c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Njg5NDQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Aviator master who cashed out at 45.2x multiplier yesterday",
      totalWins: "₦1.8M",
      recentWin: "₦452k",
      recentMatch: "Aviator - 45.2x Multiplier",
      followers: 8500,
      winStreak: 12,
      isVerified: true
    },
    {
      id: 3,
      name: "Fatima Aliyu", 
      image: "https://images.unsplash.com/photo-1645092708550-2632c574bbfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTY4OTQ0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Hit the Daily Jackpot twice this month, specializes in slot games",
      totalWins: "₦3.1M",
      recentWin: "₦1.2M",
      recentMatch: "Daily Jackpot - Fortune Wheel",
      followers: 15200,
      winStreak: 6,
      isVerified: true
    },
    {
      id: 4,
      name: "Emeka Okoro",
      image: "https://images.unsplash.com/photo-1612214070582-5f980dd16bf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2ODk0NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Live betting expert who won big on Man City vs Real Madrid",
      totalWins: "₦1.9M",
      recentWin: "₦195k",
      recentMatch: "Man City vs Real - Next Goal Scorer",
      followers: 9800,
      winStreak: 5,
      isVerified: true
    },
    {
      id: 5,
      name: "Ngozi Okonkwo",
      image: "https://images.unsplash.com/photo-1668815092058-12bef53157a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMGJ1c2luZXNzJTIwd29tYW58ZW58MXx8fHwxNzU2ODk0NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Combines sports betting with Aviator, won ₦340k on 28.7x today",
      totalWins: "₦2.7M",
      recentWin: "₦340k",
      recentMatch: "Aviator - 28.7x + Liverpool Win",
      followers: 11700,
      winStreak: 9,
      isVerified: true
    },
    {
      id: 6,
      name: "Ibrahim Sani",
      image: "https://images.unsplash.com/photo-1571429682044-fbf7dfc72c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMGVudHJlcHJlbmV1ciUyMG1hbnxlbnwxfHx8fDE3NTY4OTQ0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Underdog specialist, hit 15-fold accumulator on lower league games", 
      totalWins: "₦2.2M",
      recentWin: "₦680k",
      recentMatch: "15-Fold Acca - Nigerian League",
      followers: 7300,
      winStreak: 4,
      isVerified: true
    }
  ];

  return (
    <div className="bg-white rounded-2xl mx-4 mb-6 border border-gray-100">
      <div className="p-4">
        {/* Section Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-900">🏆 Top Winners</h3>
          </div>
        </div>
        
        <div className="-mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {winners.map((winner) => (
              <div key={winner.id} className="w-72 max-w-72 flex-shrink-0">
                <div className="bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden hover:bg-gray-100 transition-all duration-300">
                  {/* Card Content */}
                  <div className="px-4 py-6 pt-[16px] pr-[8px] pb-[0px] pl-[8px]">
                    {/* Profile Avatar */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
                        <img 
                          src={winner.image} 
                          alt={winner.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Name with verification */}
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-gray-900 font-semibold text-lg">{winner.name}</h3>
                      {winner.isVerified && (
                        <div className="w-5 h-5 bg-[#9ce800] rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-black" />
                        </div>
                      )}
                    </div>

                    {/* Recent Win Badge */}
                    <div className="bg-[#9ce800]/10 border border-[#9ce800]/20 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Latest Win</p>
                          <p className="text-[rgba(0,0,0,1)] font-bold text-lg">{winner.recentWin}</p>
                        </div>
                        <div className="text-right">
                          <div className="w-8 h-8 bg-[#9ce800]/20 rounded-full flex items-center justify-center">
                            <Trophy className="w-4 h-4 text-[#9ce800]" />
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{winner.recentMatch}</p>
                    </div>

                  </div>
                </div>  
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



// CompactMatchRow component for vertical list
function CompactMatchRow({
  match,
  onClick,
  onStarToggle,
}: {
  match: {
    id: string;
    teams: [{ name: string; score?: number }, { name: string; score?: number }];
    league: string;
    oddsValues: [string, string, string]; // 1, X, 2 already formatted
    isFavorite?: boolean;
    isLive?: boolean;
    badges?: string[];
  };
  onClick: () => void;
  onStarToggle: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 active:bg-gray-100 transition-colors"
    >
      <div className="flex items-start gap-2">
        {/* Left rail: live pulse or sport glyph */}
        <div className="mt-0.5">
          {match.isLive ? (
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          ) : (
            <span className="inline-block w-2 h-2 rounded-full bg-gray-300" />
          )}
        </div>

        {/* Middle content */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="text-[13px] leading-[16px] text-gray-900">
              <div className="font-medium truncate">{match.teams[0].name}</div>
              <div className="truncate">{match.teams[1].name}</div>
            </div>

            {/* Favorite star */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onStarToggle(); }}
              aria-label="Toggle favorite"
              className="shrink-0 -mr-1 p-1 rounded hover:bg-gray-100"
            >
              {/* Use existing star svg; filled if favorite */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill={match.isFavorite ? '#fbbf24' : 'none'} stroke="#fbbf24" strokeWidth="2">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </button>
          </div>

          {/* League line */}
          <div className="mt-1 text-[11px] text-gray-500">{match.league}</div>

          {/* Odds row */}
          <div className="mt-2 flex gap-2">
            {(['1','X','2'] as const).map((label, i) => (
              <span
                key={label}
                className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-2 py-1 text-[12px] leading-none text-gray-900 bg-white"
              >
                <span className="text-[10px] text-gray-500">{label}</span>
                {match.oddsValues[i]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

export function Home({ activeItem, onAccountClick, onNavigationClick, onHelpClick, onLeaguesClick, onFiltersClick, onBetslipClick, onLeagueSelect, selectedLeagues, isLoggedIn, setIsLoggedIn, onAISearchClick, onSearchWithQuery }: HomeProps) {

  const [isEditMode, setIsEditMode] = useState(false);
  const [isAddModulesModalOpen, setIsAddModulesModalOpen] = useState(false);
  const [modules, setModules] = useState<Module[]>([]);
  
  // NEW
  const coreRef = useRef<HTMLDivElement | null>(null);
  const [showQuickBar, setShowQuickBar] = useState(false);
  
  // measure header height (no gap)
  const [quickBarTop, setQuickBarTop] = useState(48);
  const navigate = useNavigate();

  const createModuleComponent = (moduleId: ModuleType): React.ReactNode => {
    switch (moduleId) {
      case 'popular-leagues':
        return (
          <div className="bg-white rounded-2xl mx-4 mb-6 border border-gray-100">
            <PopularLeagues 
              onLeaguesClick={onLeaguesClick}
              onLeagueSelect={onLeagueSelect}
            />
          </div>
        );
      case 'my-favorites':
        return <HomeFavoritesWidget />;
      case 'trending-apps':
        return <TrendingAppsComponent />;
      case 'featured-events':
        return <FeaturedEventsComponent />;
      case 'aviator-banner':
        return <AviatorBannerComponent />;
      case 'popular-games':
        return <PopularGamesComponent />;
      case 'top-winners':
        return <TopWinnersComponent />;
      case 'betting-utilities':
      case 'social-community':
      case 'live-scores':
      case 'promotions':
        // Placeholder for coming soon modules
        return (
          <div className="bg-white rounded-2xl mx-4 mb-6 border border-gray-100 p-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-3">
                {getAllAvailableModules().find(m => m.id === moduleId)?.icon}
              </div>
              <h3 className="text-gray-900 font-medium mb-2">
                {getAllAvailableModules().find(m => m.id === moduleId)?.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {getAllAvailableModules().find(m => m.id === moduleId)?.description}
              </p>
              <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full border border-orange-200">
                Coming Soon
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Initialize modules with default layout or load from localStorage
  useEffect(() => {
    const savedModules = localStorage.getItem('homepageModules');
    
    const defaultModules = [
      { id: 'popular-leagues' as ModuleType, title: 'Popular Leagues' },
      { id: 'my-favorites' as ModuleType, title: 'My Favorites' },
      { id: 'trending-apps' as ModuleType, title: 'Trending Apps' },
      { id: 'featured-events' as ModuleType, title: 'Featured Events' },
      { id: 'aviator-banner' as ModuleType, title: 'Aviator' },
      { id: 'popular-games' as ModuleType, title: 'Top 10 Casino Games' },
      { id: 'top-winners' as ModuleType, title: 'Top Winners' }
    ];

    const modulesToLoad = savedModules ? JSON.parse(savedModules) : defaultModules;

    const loadedModules = modulesToLoad.map((moduleData: { id: ModuleType; title: string }) => ({
      id: moduleData.id,
      title: moduleData.title,
      component: createModuleComponent(moduleData.id)
    }));

    setModules(loadedModules);
  }, []);

  // Header height measurement
  useEffect(() => {
    const headerEl = document.querySelector('[data-name="Header"]') as HTMLElement | null;
    if (!headerEl) return;
    const setTop = () => setQuickBarTop(Math.round(headerEl.getBoundingClientRect().height));
    setTop();
    const ro = new ResizeObserver(setTop);
    ro.observe(headerEl);
    window.addEventListener("orientationchange", setTop);
    window.addEventListener("resize", setTop);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", setTop);
      window.removeEventListener("resize", setTop);
    };
  }, []);

  // IntersectionObserver for ProductQuickBar
  useEffect(() => {
    if (!coreRef.current) return;
    const target = coreRef.current;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // show quick bar when less than 20% of the core section is visible
        setShowQuickBar(entry.intersectionRatio < 0.2);
      },
      { threshold: [0, 0.2, 1] }
    );

    io.observe(target);
    return () => io.disconnect();
  }, []);

  // All available modules including those not currently active
  const getAllAvailableModules = (): AvailableModule[] => {
    const activeModuleIds = modules.map(m => m.id);
    
    const allModules = [
      {
        id: 'popular-leagues' as ModuleType,
        title: 'Popular Leagues',
        description: 'Trending sports leagues and competitions',
        icon: <Trophy className="w-5 h-5 text-yellow-600" />,
        isEnabled: activeModuleIds.includes('popular-leagues')
      },
      {
        id: 'my-favorites' as ModuleType,
        title: 'My Favorites',
        description: 'Your favorite teams, leagues, and games',
        icon: <Star className="w-5 h-5 text-[#9ce800]" />,
        isEnabled: activeModuleIds.includes('my-favorites')
      },
      {
        id: 'trending-apps' as ModuleType,
        title: 'Trending Apps',
        description: 'Popular betting apps and games',
        icon: <Sparkles className="w-5 h-5 text-purple-600" />,
        isEnabled: activeModuleIds.includes('trending-apps')
      },
      {
        id: 'featured-events' as ModuleType,
        title: 'Popular Events',
        description: 'Featured matches with boosted odds',
        icon: <Flame className="w-5 h-5 text-orange-500" />,
        isEnabled: activeModuleIds.includes('featured-events')
      },
      {
        id: 'aviator-banner' as ModuleType,
        title: 'Aviator',
        description: 'Aviator game promotional banner',
        icon: <Play className="w-5 h-5 text-blue-600" />,
        isEnabled: activeModuleIds.includes('aviator-banner')
      },
      {
        id: 'popular-games' as ModuleType,
        title: 'Top 10 Casino Games',
        description: 'Most popular casino games',
        icon: <Gamepad2 className="w-5 h-5 text-purple-600" />,
        isEnabled: activeModuleIds.includes('popular-games')
      },
      {
        id: 'top-winners' as ModuleType,
        title: 'Top Winners',
        description: 'Recent big winners and success stories',
        icon: <Users className="w-5 h-5 text-green-600" />,
        isEnabled: activeModuleIds.includes('top-winners')
      },
      {
        id: 'betting-utilities' as ModuleType,
        title: 'Betting Utilities',
        description: 'Bet calculators, odds converter, and tools',
        icon: <Calculator className="w-5 h-5 text-blue-500" />,
        isEnabled: activeModuleIds.includes('betting-utilities'),
        isComingSoon: true
      },
      {
        id: 'social-community' as ModuleType,
        title: 'Social & Community',
        description: 'Connect with other bettors and share tips',
        icon: <MessageSquare className="w-5 h-5 text-green-500" />,
        isEnabled: activeModuleIds.includes('social-community'),
        isComingSoon: true
      },
      {
        id: 'live-scores' as ModuleType,
        title: 'Live Scores',
        description: 'Real-time match scores and statistics',
        icon: <Target className="w-5 h-5 text-red-500" />,
        isEnabled: activeModuleIds.includes('live-scores'),
        isComingSoon: true
      },
      {
        id: 'promotions' as ModuleType,
        title: 'Promotions & Bonuses',
        description: 'Exclusive offers and bonus opportunities',
        icon: <Gift className="w-5 h-5 text-pink-500" />,
        isEnabled: activeModuleIds.includes('promotions'),
        isComingSoon: true
      }
    ];

    return allModules;
  };



  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSave = () => {
    // Save to localStorage for persistence
    localStorage.setItem('homepageModules', JSON.stringify(modules.map(m => ({ id: m.id, title: m.title }))));
    setIsEditMode(false);
    setIsAddModulesModalOpen(false);
  };

  const moveModule = (dragIndex: number, hoverIndex: number) => {
    const dragModule = modules[dragIndex];
    const newModules = [...modules];
    newModules.splice(dragIndex, 1);
    newModules.splice(hoverIndex, 0, dragModule);
    setModules(newModules);
  };

  const handleRemoveModule = (moduleId: ModuleType) => {
    setModules(prev => prev.filter(m => m.id !== moduleId));
  };

  const handleToggleModule = (moduleId: ModuleType) => {
    const availableModule = getAllAvailableModules().find(m => m.id === moduleId);
    
    // Don't allow toggling coming soon modules
    if (availableModule?.isComingSoon) {
      return;
    }
    
    const moduleExists = modules.some(m => m.id === moduleId);
    
    if (moduleExists) {
      // Remove module
      setModules(prev => prev.filter(m => m.id !== moduleId));
    } else {
      // Add module
      const moduleTitle = availableModule?.title || '';
      const newModule: Module = {
        id: moduleId,
        title: moduleTitle,
        component: createModuleComponent(moduleId)
      };
      setModules(prev => [...prev, newModule]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50 w-full relative flex flex-col">
        {/* Fixed header at the top */}
        <div className="fixed top-0 left-0 right-0 z-40">
          <Header onAccountClick={onAccountClick} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onAISearchClick={onAISearchClick} onSearchWithQuery={onSearchWithQuery} />
        </div>
        
        {/* Product Quick Bar */}
        <ProductQuickBar visible={showQuickBar} top={quickBarTop} onNavigate={(p) => navigate(p)} />
        
        {/* Main content - Opera style */}
        <div className="flex-1 flex flex-col pt-[48px] pb-[120px]">

          {/* Hero Section with Figma Design */}
          <HeroSection isEditMode={isEditMode} onEditClick={handleEditClick} coreRef={coreRef} />

          {/* Divider + tighter spacing */}
          <div className="mt-3">
            <hr className="border-t border-gray-200" />
          </div>

          {/* Edit Mode Header */}
          {isEditMode && <EditModeHeader onSave={handleSave} onAddModules={() => setIsAddModulesModalOpen(true)} />}

          {/* First personalized module and other draggable modules */}
          <div className="pt-3">
            {/* Draggable Modules */}
            {modules.map((module, index) => {
              // Recreate component on each render to ensure fresh props
              const moduleWithComponent = {
                ...module,
                component: createModuleComponent(module.id)
              };
              
              return (
                <DraggableModule
                  key={module.id}
                  module={moduleWithComponent}
                  index={index}
                  isEditMode={isEditMode}
                  moveModule={moveModule}
                  onRemove={handleRemoveModule}
                />
              );
            })}

            {/* Add Modules Button in Edit Mode */}
            {isEditMode && (
              <div className="mx-4 mb-6 text-center">
                <button
                  onClick={() => setIsAddModulesModalOpen(true)}
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors touch-manipulation"
                >
                  + Add more modules
                </button>
              </div>
            )}
          </div>
        </div>
        

        
        {/* Fixed bottom navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <BottomNavigation activeItem={activeItem} onHelpClick={onHelpClick} onBetslipClick={onBetslipClick} onNavigationClick={onNavigationClick} />
        </div>

        {/* Add Modules Modal */}
        <AddModulesModal
          isOpen={isAddModulesModalOpen}
          onClose={() => setIsAddModulesModalOpen(false)}
          availableModules={getAllAvailableModules()}
          onToggleModule={handleToggleModule}
        />
      </div>
    </DndProvider>
  );
}

// AddModulesModal Component
interface AddModulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableModules: AvailableModule[];
  onToggleModule: (moduleId: ModuleType) => void;
}

function AddModulesModal({
  isOpen,
  onClose,
  availableModules,
  onToggleModule
}: AddModulesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Edit Widgets</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          <p className="text-sm text-gray-600 mb-4">
            Choose which widgets to display on your homepage
          </p>
          
          <div className="space-y-3">
            {availableModules.map((module) => (
              <div
                key={module.id}
                className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  module.isEnabled 
                    ? 'border-[#9ce800] bg-[#9ce800]/5' 
                    : 'border-gray-200 hover:border-gray-300'
                } ${
                  module.isComingSoon ? 'opacity-50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">
                      {module.title}
                      {module.isComingSoon && (
                        <span className="ml-2 text-xs text-gray-500">(Coming Soon)</span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-600">{module.description}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => onToggleModule(module.id)}
                  disabled={module.isComingSoon}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-colors ${
                    module.isEnabled
                      ? 'bg-[#9ce800] border-[#9ce800]'
                      : 'border-gray-300 hover:border-gray-400'
                  } ${
                    module.isComingSoon ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {module.isEnabled && (
                    <Check className="h-3 w-3 text-black m-auto" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-[#9ce800] text-black py-2 px-4 rounded-lg font-medium hover:bg-[#8bd400] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}