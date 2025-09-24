import { useState } from "react";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";
import { FloatingBetslip } from "./FloatingBetslip";
import exampleImage from 'figma:asset/ad6a2fa9460acd08e14b698e209c54a2f04c8765.png';
import svgPaths from "../imports/svg-j2z99k9d1a";
import { 
  Sparkles, 
  TrendingUp, 
  Star, 
  Heart, 
  Calendar,
  Brain,
  Radio,
  Search,
  Gamepad2,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
  Download,
  ChevronRight,
  ChevronLeft,
  Play
} from "lucide-react";

interface AppsProps {
  activeItem: string;
  onAccountClick: () => void;
  onHelpClick: () => void;
  onFiltersClick?: () => void;
  selectedLeagues?: string[];
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

// Categories Slider Component
interface CategoriesSliderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

function CategoriesSlider({ activeCategory, onCategoryChange, favoritesCount }: CategoriesSliderProps & { favoritesCount: number }) {
  const categories = [
    "All",
    "Favorites",
    "Popular Apps",
    "Betting Utilities",
    "Social & Community", 
    "Content & Media",
    "Partner Apps",
    "Innovation",
    "Special Events"
  ];

  return (
    <div className="mb-6">
      <div className="flex gap-2 px-4 overflow-x-auto scrollbar-hide pb-[7px] snap-x snap-proximity touch-pan-x pt-[0px] pr-[14px] pl-[24px] mt-[0px] mr-[0px] mb-[0px] ml-[8px]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 snap-start ${
              activeCategory === category 
                ? 'bg-[#9ce800] text-[#030213]' 
                : 'bg-[#ececf0] text-[#717182] hover:bg-[#e9ebef]'
            }`}
          >
            {category === "Favorites" && (
              <>
                <Star className={`h-3.5 w-3.5 ${
                  activeCategory === category 
                    ? 'fill-[#030213] text-[#030213]' 
                    : 'fill-yellow-400 text-yellow-400'
                }`} />
                <span className={`text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center ${
                  activeCategory === category 
                    ? 'bg-[#030213]/15 text-[#030213]' 
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {favoritesCount}
                </span>
              </>
            )}
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}



// App Card Components
interface AppCardProps {
  id: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  iconBg?: string;
  category: string;
  rating: number;
  reviews: string;
  size?: 'small' | 'medium' | 'large';
  featured?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

function AppCard({ id, title, tagline, icon, iconBg = "bg-gradient-to-br from-gray-100 to-gray-200", category, rating, reviews, size = 'medium', featured = false, isFavorite = false, onFavoriteToggle }: AppCardProps) {
  const cardSize = {
    small: 'w-40',
    medium: 'w-52',
    large: 'w-64'
  };

  return (
    <div className={`${cardSize[size]} bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer flex-shrink-0 ${featured ? 'ring-2 ring-[#9ce800] ring-opacity-50' : ''}`}>
      {/* Desktop layout (361px+) */}
      <div className="w-80:hidden">
        <div className="flex items-center justify-between mb-3">
          <div className={`h-12 w-12 rounded-xl ${iconBg} flex items-center justify-center`}>
            {icon}
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle?.();
              }}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Star 
                className={`h-4 w-4 transition-colors ${
                  isFavorite 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-400 hover:text-yellow-400'
                }`} 
              />
            </button>
            <button className="bg-[#9ce800] text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-[#8bd400] transition-colors">
              OPEN
            </button>
          </div>
        </div>
        
        <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{tagline}</p>
      </div>

      {/* Mobile layout (320px) - 2 rows */}
      <div className="hidden w-80:block">
        {/* First row: Icon, Star, and Button */}
        <div className="flex items-center justify-between mb-3">
          <div className={`h-10 w-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
            {icon}
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle?.();
              }}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Star 
                className={`h-4 w-4 transition-colors ${
                  isFavorite 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-400 hover:text-yellow-400'
                }`} 
              />
            </button>
            <button className="bg-[#9ce800] text-black px-3 py-1 rounded-full text-xs font-medium hover:bg-[#8bd400] transition-colors">
              OPEN
            </button>
          </div>
        </div>

        {/* Second row: Title and Subtitle */}
        <div>
          <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-600 line-clamp-2">{tagline}</p>
        </div>
      </div>
    </div>
  );
}

function AppListItem({ id, title, tagline, icon, iconBg = "bg-gradient-to-br from-gray-100 to-gray-200", category, rating, reviews, isFavorite = false, onFavoriteToggle }: AppCardProps) {
  return (
    <div className="px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col gap-1">
          {/* App Cell - Icon, Title, Button, Star */}
          <div className="h-[76px] relative">
            {/* Icon positioned on left */}
            <div className="absolute left-0 top-[7px]">
              <div className={`${iconBg} rounded-[13px] size-[68px] flex items-center justify-center`}>
                {icon}
              </div>
            </div>
            
            {/* Title and Actions positioned on right */}
            <div className="absolute flex flex-col h-[57px] justify-between left-[85px] top-1.5 right-0">
              {/* Title */}
              <h3 className="font-normal text-black leading-[28px] text-[14px]">{title}</h3>
              
              {/* Button and Star */}
              <div className="flex items-center justify-start gap-1">
                <button className="bg-[#b2f42c] text-[#252a2d] px-[19px] py-1 rounded-full text-base font-bold hover:bg-[#9ce800] transition-colors">
                  Open
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onFavoriteToggle?.();
                  }}
                  className="p-0 hover:opacity-70 transition-opacity"
                >
                  <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path 
                      d={svgPaths.pcd53300} 
                      stroke={isFavorite ? "#fbbf24" : "#252A2D"} 
                      fill={isFavorite ? "#fbbf24" : "none"}
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="px-2 pt-0 pb-[3px]">
            <p className="font-normal text-sm text-[#7a8185] leading-[20px]">{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}



// Section Header Component (iOS Style)
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showSeeAll?: boolean;
  showGoBack?: boolean;
  category?: string;
  onSeeAllClick?: (category: string) => void;
  onGoBackClick?: () => void;
}

function SectionHeader({ title, subtitle, showSeeAll = true, showGoBack = false, category, onSeeAllClick, onGoBackClick }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between px-4 mb-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
      </div>
      {showSeeAll && category && onSeeAllClick && (
        <button 
          onClick={() => onSeeAllClick(category)}
          className="text-blue-500 font-medium text-base hover:text-blue-600 transition-colors flex items-center gap-1"
        >
          See All
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
      {showGoBack && onGoBackClick && (
        <button 
          onClick={onGoBackClick}
          className="text-blue-500 font-medium text-base hover:text-blue-600 transition-colors flex items-center gap-1"
        >
          <ChevronLeft className="h-4 w-4" />
          Go Back
        </button>
      )}
    </div>
  );
}

export function Apps({ activeItem, onAccountClick, onHelpClick, onFiltersClick, selectedLeagues, isLoggedIn, setIsLoggedIn }: AppsProps) {
  const [isBetslipMinimized, setIsBetslipMinimized] = useState(false);
  const [favoriteApps, setFavoriteApps] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleBetslipToggle = () => {
    setIsBetslipMinimized(!isBetslipMinimized);
  };

  const handleFavoriteToggle = (appId: string) => {
    setFavoriteApps(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleGoBack = () => {
    setActiveCategory("All");
  };

  const essentialApps = [
    {
      id: "betting-betmaker-pro",
      title: "BetMaker Pro",
      tagline: "Auto-generate betslips based on risk/reward sliders",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      iconBg: "bg-gradient-to-br from-purple-100 to-purple-200",
      category: "Betting Tools",
      rating: 4.8,
      reviews: "12K"
    },
    {
      id: "betting-cashout-calculator",
      title: "Cashout Calculator",
      tagline: "Simulate potential outcomes and optimal cashout points",
      icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
      iconBg: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      category: "Betting Tools",
      rating: 4.6,
      reviews: "8.5K"
    },
    {
      id: "betting-streak-builder",
      title: "Streak Builder",
      tagline: "Gamifies consistent betting, rewarding streaks",
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      iconBg: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      category: "Betting Tools",
      rating: 4.7,
      reviews: "15K"
    },
    {
      id: "betting-ai-advisor",
      title: "AI Bet Advisor",
      tagline: "Personalised recommendations based on playstyle",
      icon: <Search className="h-8 w-8 text-blue-600" />,
      iconBg: "bg-gradient-to-br from-blue-100 to-blue-200",
      category: "AI Tools",
      rating: 4.5,
      reviews: "6.2K"
    }
  ];

  const socialApps = [
    {
      id: "social-tipster-app",
      title: "Tipster App",
      tagline: "Share predictions, follow top tipsters, leaderboards",
      icon: <Users className="h-8 w-8 text-pink-600" />,
      iconBg: "bg-gradient-to-br from-pink-100 to-pink-200",
      category: "Social",
      rating: 4.4,
      reviews: "22K"
    },
    {
      id: "social-group-bets",
      title: "Group Bets",
      tagline: "Friends combine stakes into one pooled bet",
      icon: <Heart className="h-8 w-8 text-red-600" />,
      iconBg: "bg-gradient-to-br from-red-100 to-red-200",
      category: "Social",
      rating: 4.6,
      reviews: "9.8K"
    },
    {
      id: "social-challenges-app",
      title: "Challenges App",
      tagline: "Turn $1 into $100 community challenges",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      iconBg: "bg-gradient-to-br from-green-100 to-green-200",
      category: "Social",
      rating: 4.3,
      reviews: "18K"
    }
  ];

  const contentApps = [
    {
      id: "content-inplay-video",
      title: "In-Play + Video",
      tagline: "Live stats and video stream integrations",
      icon: <Play className="h-8 w-8 text-red-600" />,
      iconBg: "bg-gradient-to-br from-red-100 to-red-200",
      category: "Content",
      rating: 4.7,
      reviews: "25K"
    },
    {
      id: "content-virtual-sports",
      title: "Virtual Sports Hub",
      tagline: "Always-on simulated events",
      icon: <Gamepad2 className="h-8 w-8 text-indigo-600" />,
      iconBg: "bg-gradient-to-br from-indigo-100 to-indigo-200",
      category: "Content",
      rating: 4.2,
      reviews: "14K"
    },
    {
      id: "content-trivia-predictions",
      title: "Trivia & Predictions",
      tagline: "Free-to-play daily questions, build engagement",
      icon: <Brain className="h-8 w-8 text-orange-600" />,
      iconBg: "bg-gradient-to-br from-orange-100 to-orange-200",
      category: "Content",
      rating: 4.5,
      reviews: "19K"
    }
  ];

  const partnerApps = [
    {
      id: "partner-mini-casino-x",
      title: "Mini-Casino by Partner X",
      tagline: "Slots, cards, roulette by licensed partners",
      icon: <Star className="h-8 w-8 text-amber-600" />,
      iconBg: "bg-gradient-to-br from-amber-100 to-amber-200",
      category: "Partner Apps",
      rating: 4.3,
      reviews: "31K"
    },
    {
      id: "partner-fantasy-sports",
      title: "Fantasy Sports App",
      tagline: "Build fantasy teams, win prizes",
      icon: <Users className="h-8 w-8 text-teal-600" />,
      iconBg: "bg-gradient-to-br from-teal-100 to-teal-200",
      category: "Partner Apps",
      rating: 4.6,
      reviews: "16K"
    },
    {
      id: "partner-lottery-raffles",
      title: "Lottery & Raffles",
      tagline: "Small-entry gamified lottery experiences",
      icon: <Sparkles className="h-8 w-8 text-violet-600" />,
      iconBg: "bg-gradient-to-br from-violet-100 to-violet-200",
      category: "Partner Apps",
      rating: 4.1,
      reviews: "8.7K"
    }
  ];

  // Special event apps (for the "Special Events" category)
  const specialEventApps = [
    {
      id: "special-champions-league",
      title: "Champions League Hub",
      tagline: "Complete UCL betting experience with live stats",
      icon: <Star className="h-8 w-8 text-blue-600" />,
      iconBg: "bg-gradient-to-br from-blue-100 to-blue-200",
      category: "Sports Events",
      rating: 4.7,
      reviews: "5.2K"
    },
    {
      id: "special-premier-league",
      title: "Premier League Insider",
      tagline: "Weekly predictions and analysis for EPL matches",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      iconBg: "bg-gradient-to-br from-green-100 to-green-200",
      category: "League Apps",
      rating: 4.5,
      reviews: "8.9K"
    }
  ];

  // Innovation apps (for the "Innovation" category)
  const innovationApps = [
    {
      id: "innovation-responsible-play",
      title: "Responsible Play App",
      tagline: "Track spend, get insights, manage limits",
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      iconBg: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      category: "Wellness",
      rating: 4.9,
      reviews: "3.2K"
    },
    {
      id: "innovation-rewards-store",
      title: "Merch/Rewards Store",
      tagline: "Redeem loyalty points for real rewards",
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      iconBg: "bg-gradient-to-br from-purple-100 to-purple-200",
      category: "Rewards",
      rating: 4.4,
      reviews: "7.8K"
    }
  ];

  // Popular apps (for the "Popular Apps" section)  
  const popularApps = [
    {
      id: "popular-virtuals",
      title: "Virtuals",
      tagline: "24/7 virtual sports betting with instant results",
      icon: <Gamepad2 className="h-8 w-8 text-blue-600" />,
      iconBg: "bg-gradient-to-br from-blue-100 to-blue-200",
      category: "Virtual Sports",
      rating: 4.6,
      reviews: "18K"
    },
    {
      id: "popular-pawa6",
      title: "Pawa6",
      tagline: "Pick 6 numbers and win big jackpots daily",
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      iconBg: "bg-gradient-to-br from-purple-100 to-purple-200",
      category: "Numbers Game",
      rating: 4.7,
      reviews: "32K"
    },
    {
      id: "popular-mdundo-casino",
      title: "Mdundo Casino",
      tagline: "Play Tekno's favourite slots and casino games.",
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      iconBg: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      category: "Casino Games",
      rating: 4.8,
      reviews: "45K"
    },
    {
      id: "popular-jackpot",
      title: "Jackpot",
      tagline: "Progressive jackpots with massive prize pools",
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      iconBg: "bg-gradient-to-br from-orange-100 to-orange-200",
      category: "Jackpot Games",
      rating: 4.9,
      reviews: "67K"
    }
  ];

  // Get all apps for favorites
  const allApps = [
    ...popularApps,
    ...essentialApps,
    ...socialApps,
    ...contentApps,
    ...partnerApps,
    ...specialEventApps,
    ...innovationApps
  ];

  // Filter favorite apps
  const favoritedApps = allApps.filter(app => favoriteApps.includes(app.id));



  return (
    <div className="min-h-screen bg-white w-full relative">
      {/* Fixed header at the top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header onAccountClick={onAccountClick} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      
      {/* Main content with top and bottom padding to account for fixed navigation and floating betslip */}
      <div className="content-stretch flex flex-col items-start justify-start relative w-full pt-[48px] pb-[120px]">
        
        {/* Categories Slider */}
        <div className="w-full mt-4">
          <CategoriesSlider 
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            favoritesCount={favoriteApps.length}
          />
        </div>



        {/* All Apps Hub - Shows all sections */}
        {activeCategory === "All" && (
          <>
            {/* Popular Apps - Horizontal Cards */}
            <div className="w-full mb-8">
              <SectionHeader 
                title="Popular Apps"
                showSeeAll={true}
                category="Popular Apps"
                onSeeAllClick={handleCategoryChange}
              />
              <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-2">
                {popularApps.map((app) => (
                  <AppCard 
                    key={app.id} 
                    {...app} 
                    size="medium" 
                    isFavorite={favoriteApps.includes(app.id)}
                    onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                  />
                ))}
              </div>
            </div>

            {/* Betting Utilities Apps - Horizontal Cards */}
            <div className="w-full mb-8">
              <SectionHeader 
                title="Betting Utilities"
                showSeeAll={true}
                category="Betting Utilities"
                onSeeAllClick={handleCategoryChange}
              />
              <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-2">
                {essentialApps.map((app) => (
                  <AppCard 
                    key={app.id} 
                    {...app} 
                    size="medium" 
                    isFavorite={favoriteApps.includes(app.id)}
                    onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                  />
                ))}
              </div>
            </div>

            {/* Developer CTA Card */}
            <div className="w-full mb-8">
              <div className="mx-4 bg-gradient-to-r from-[#9ce800] to-[#7dd300] rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-black mb-1">Have an idea?</h3>
                      <p className="text-black/80 text-sm">Start building the future of betting with betPawa</p>
                    </div>
                  </div>
                  <button className="bg-black text-[#9ce800] p-3 rounded-full hover:bg-gray-900 transition-colors flex items-center justify-center">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Social & Community Apps - List Format */}
            <div className="w-full mb-8">
              <SectionHeader 
                title="Social & Community"
                showSeeAll={true}
                category="Social & Community"
                onSeeAllClick={handleCategoryChange}
              />
              <div className="bg-white">
                {socialApps.map((app) => (
                  <AppListItem 
                    key={app.id} 
                    {...app} 
                    isFavorite={favoriteApps.includes(app.id)}
                    onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                  />
                ))}
              </div>
            </div>

            {/* Content & Media Apps - Horizontal Cards */}
            <div className="w-full mb-8">
              <SectionHeader 
                title="Content & Media"
                showSeeAll={true}
                category="Content & Media"
                onSeeAllClick={handleCategoryChange}
              />
              <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-2">
                {contentApps.map((app) => (
                  <AppCard 
                    key={app.id} 
                    {...app} 
                    size="medium" 
                    isFavorite={favoriteApps.includes(app.id)}
                    onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                  />
                ))}
              </div>
            </div>

            {/* Partner Apps - List Format */}
            <div className="w-full mb-8">
              <SectionHeader 
                title="Partner Apps"
                showSeeAll={true}
                category="Partner Apps"
                onSeeAllClick={handleCategoryChange}
              />
              <div className="bg-white">
                {partnerApps.map((app) => (
                  <AppListItem 
                    key={app.id} 
                    {...app} 
                    isFavorite={favoriteApps.includes(app.id)}
                    onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                  />
                ))}
              </div>
            </div>

            {/* Innovation Apps - Large Featured Cards */}
            <div className="w-full mb-8">
              <SectionHeader 
                title="Innovation & Future Tech"
                showSeeAll={true}
                category="Innovation"
                onSeeAllClick={handleCategoryChange}
              />
              <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-2">
                {innovationApps.map((app) => (
                  <AppCard 
                    key={app.id}
                    {...app}
                    size="large" 
                    isFavorite={favoriteApps.includes(app.id)}
                    onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                  />
                ))}
              </div>
            </div>

            {/* Special Events Apps - List Format */}
            <div className="w-full mb-8">
              <SectionHeader 
                title="Special Events"
                showSeeAll={true}
                category="Special Events"
                onSeeAllClick={handleCategoryChange}
              />
              <div className="bg-white">
                {specialEventApps.map((app) => (
                  <AppListItem 
                    key={app.id} 
                    {...app} 
                    isFavorite={favoriteApps.includes(app.id)}
                    onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                  />
                ))}
              </div>
            </div>

          </>
        )}

        {/* Favorites Section */}
        {activeCategory === "Favorites" && (
          <div className="w-full mb-8">
            <SectionHeader 
              title="My Favorites"
              subtitle={favoriteApps.length === 0 ? "No favorites yet. Start favoriting apps to see them here!" : `${favoriteApps.length} favorited apps`}
              showSeeAll={false}
            />
            {favoritedApps.length === 0 ? (
              <div className="mx-4 bg-gray-50 rounded-2xl p-8 text-center">
                <Star className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No favorites yet</h3>
                <p className="text-gray-600 mb-4">Tap the star icon on any app to add it to your favorites</p>
                <button 
                  onClick={() => setActiveCategory("Popular Apps")}
                  className="bg-[#9ce800] text-black px-6 py-2 rounded-full font-medium hover:bg-[#8bd400] transition-colors"
                >
                  Browse Apps
                </button>
              </div>
            ) : (
              <div className="bg-white">
                {favoritedApps.map((app) => (
                  <AppListItem 
                    key={app.id} 
                    {...app} 
                    isFavorite={true}
                    onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Popular Apps Section */}
        {activeCategory === "Popular Apps" && (
          <div className="w-full mb-8">
            <SectionHeader 
              title="Popular Apps"
              subtitle="Most downloaded and highest rated apps"
              showSeeAll={false}
              showGoBack={true}
              onGoBackClick={handleGoBack}
            />
            
            {/* Popular Apps in List Format */}
            <div className="bg-white">
              {popularApps.map((app) => (
                <AppListItem 
                  key={app.id} 
                  {...app} 
                  isFavorite={favoriteApps.includes(app.id)}
                  onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Betting Utilities Section */}
        {activeCategory === "Betting Utilities" && (
          <div className="w-full mb-8">
            <SectionHeader 
              title="Betting Utilities"
              subtitle="Essential tools to enhance your betting experience"
              showSeeAll={false}
              showGoBack={true}
              onGoBackClick={handleGoBack}
            />
            
            {/* Betting Utilities in List Format */}
            <div className="bg-white">
              {essentialApps.map((app) => (
                <AppListItem 
                  key={app.id} 
                  {...app} 
                  isFavorite={favoriteApps.includes(app.id)}
                  onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Social & Community Section */}
        {activeCategory === "Social & Community" && (
          <div className="w-full mb-8">
            <SectionHeader 
              title="Social & Community"
              subtitle="Connect, share, and compete with other users"
              showSeeAll={false}
              showGoBack={true}
              onGoBackClick={handleGoBack}
            />
            
            {/* Social Apps in List Format */}
            <div className="bg-white">
              {socialApps.map((app) => (
                <AppListItem 
                  key={app.id} 
                  {...app} 
                  isFavorite={favoriteApps.includes(app.id)}
                  onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Content & Media Section */}
        {activeCategory === "Content & Media" && (
          <div className="w-full mb-8">
            <SectionHeader 
              title="Content & Media"
              subtitle="Video streams, virtual sports, and interactive content"
              showSeeAll={false}
              showGoBack={true}
              onGoBackClick={handleGoBack}
            />
            
            {/* Content & Media in List Format */}
            <div className="bg-white">
              {contentApps.map((app) => (
                <AppListItem 
                  key={app.id} 
                  {...app} 
                  isFavorite={favoriteApps.includes(app.id)}
                  onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Partner Apps Section */}
        {activeCategory === "Partner Apps" && (
          <div className="w-full mb-8">
            <SectionHeader 
              title="Partner Apps"
              subtitle="Third-party apps and services from our partners"
              showSeeAll={false}
              showGoBack={true}
              onGoBackClick={handleGoBack}
            />
            
            {/* Partner Apps in List Format */}
            <div className="bg-white">
              {partnerApps.map((app) => (
                <AppListItem 
                  key={app.id} 
                  {...app} 
                  isFavorite={favoriteApps.includes(app.id)}
                  onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Innovation Section */}
        {activeCategory === "Innovation" && (
          <div className="w-full mb-8">
            <SectionHeader 
              title="Innovation & Future Tech"
              subtitle="Cutting-edge features and experimental apps"
              showSeeAll={false}
              showGoBack={true}
              onGoBackClick={handleGoBack}
            />
            
            {/* Innovation Apps in List Format */}
            <div className="bg-white">
              {innovationApps.map((app) => (
                <AppListItem 
                  key={app.id} 
                  {...app} 
                  isFavorite={favoriteApps.includes(app.id)}
                  onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Special Events Section */}
        {activeCategory === "Special Events" && (
          <div className="w-full mb-8">
            <SectionHeader 
              title="Special Events"
              subtitle="Event-specific apps and seasonal content"
              showSeeAll={false}
              showGoBack={true}
              onGoBackClick={handleGoBack}
            />
            
            {/* Special Events Apps in List Format */}
            <div className="bg-white">
              {specialEventApps.map((app) => (
                <AppListItem 
                  key={app.id} 
                  {...app} 
                  isFavorite={favoriteApps.includes(app.id)}
                  onFavoriteToggle={() => handleFavoriteToggle(app.id)}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* FloatingBetslip */}
      <FloatingBetslip 
        isMinimized={isBetslipMinimized}
        onToggleMinimize={handleBetslipToggle}
        onAccountClick={onAccountClick}
        onHelpClick={onHelpClick}
      />
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0">
        <BottomNavigation 
          activeItem={activeItem}
          onAccountClick={onAccountClick}
          onHelpClick={onHelpClick}
        />
      </div>
    </div>
  );
}