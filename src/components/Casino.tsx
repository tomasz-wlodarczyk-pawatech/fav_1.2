import { useState } from "react";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";
import { CasinoFilters } from "./CasinoFilters";
import { Star, Filter } from "lucide-react";
import svgPaths from "../imports/svg-2ushenpsbn";
import Frame2085656179 from "../imports/Frame2085656179";
import img51Ebe223HacksawGamingRustyCurly400X400 from "figma:asset/3e522eca74bd6883348a9aa8c10b62147b17f145.png";
import img400X400 from "figma:asset/fa58ce0bf7a5fdac87410506f68c9f2201e731e4.png";
import imgBetPawaBrandedFootballX from "figma:asset/dcff96b8a51f5501de7e516fab0239bf8aebbbea.png";
import img008A90E2HacksawGamingMightyMasks400X400 from "figma:asset/dca96b105262a2c50e0116c734100e61fc176c5f.png";
import img0A8294E1HacksawGamingTempleOfTorment400X400 from "figma:asset/7cecf4a1df0518a544cd5d9dedae504fea73606c.png";
import img400X400CricketCrash from "figma:asset/750cac870edfb7573ecf3bc68cc0d38241a91030.png";
import img1X1499X499WildsAndGods1 from "figma:asset/cd89373bd14d07368e9ee1967c302f429983f0b3.png";
import imgE45D85DaTurbogamesAero400X400 from "figma:asset/51662b3782bf46164c2f631dcd568969800bcd4c.png";
import imgF18Df63ARedRakeGamingHotWin400X400 from "figma:asset/ce800054f24ca5f43c010122d0b06cc9894ca76d.png";
import imgM888T2Vfv636Ky730N6Qml6Gkt767X2522 from "figma:asset/edc1a59c90ccae7fca98c01be2e01f72fa1b3e12.png";
import imgC4E565907777GamingJungleConquest400X400 from "figma:asset/da748a79fe5fed2a68de8e924f9b1ca2410cf04b.png";
import img1X1499X499JetX1 from "figma:asset/4d144ccf2f7820767435a3172705c3b18a12294c.png";
import img86Eb8638GamingCorpsRagingZeus400X400 from "figma:asset/28985371a49626d4a2b031dbfd20597156d242b0.png";
import imgD8Cbe1C6PragmaticPlaySpaceman400X400 from "figma:asset/4cf39851c3de4d46d93511e2d60250f017b68972.png";
import imgC307Ff387777GamingHawaii400X400 from "figma:asset/1f1b5b8111e900a5ce10f7c02165ca55496c5a7d.png";
import imgBeb173D9GamingCorpsLukeEChanceAndTheBookOfLuck400X400 from "figma:asset/39520badc566dbc54f03e188ec7f815e21a9cc48.png";
import imgImage197 from "figma:asset/f379b2f706a97fbaff029dc104fda839c02b3f2a.png";
import imgImage191 from "figma:asset/867d4b20938f6a3408fdea66d8f7942b4bb1681a.png";
import imgImage198 from "figma:asset/dd2adb887f266ec00e32c74fea048d6c10c4f5a7.png";
import imgImage196 from "figma:asset/8faa5dff595dcab98c63b17d7df82e28621ab46f.png";
import imgImage192 from "figma:asset/a549c42e347aae74f81d115712dd43ff1db65ff4.png";
import imgImage189 from "figma:asset/a0f4e05b4ca385c9f56680f297c968635747a6df.png";
import imgBonbonbonanza400X400 from "figma:asset/6f71f754595be8b123bb4015862f79f1f65affcb.png";
import imgBalloon from "figma:asset/10f3a4426915973f94b600b2101365fd9359e0ef.png";
import img12250817PragmaticPlayBigBassDayAtTheRaces400X400 from "figma:asset/87585c455c2cdc9ee2be245bc9279fa5d80c604c.png";
import imgImage from "figma:asset/416d53dbc19b0befe0d2d888c00b4c357ad4277a.png";
import imgImage1 from "figma:asset/40d84d1b5c237f2607a7ac659e654034e374f145.png";
import imgImage2 from "figma:asset/de6cbb655819e4b3d98bdd35eb2fdc68d7ef15d7.png";

interface CasinoProps {
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

interface GameCardProps {
  image: string;
  badge?: string;
  badgeColor?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

function GameCard({ image, badge, badgeColor = "#cc371b", isFavorite = false, onFavoriteToggle }: GameCardProps) {
  return (
    <div className="relative w-full aspect-square max-w-[130px] sm:max-w-[120px] md:max-w-[110px] lg:max-w-[104px] rounded-[4px] overflow-hidden border border-[#e6e7e2] flex-shrink-0 mx-auto">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url('${image}')` }} 
      />
      
      {/* Favorite button */}
      <button 
        onClick={onFavoriteToggle}
        className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center"
      >
        <Star 
          className="w-4 h-4" 
          fill={isFavorite ? "#fbbf24" : "#F4F5F0"} 
          stroke={isFavorite ? "#fbbf24" : "#F4F5F0"} 
        />
      </button>

      {/* Badge */}
      {badge && (
        <div 
          className="absolute top-0 left-0 px-1 py-0.5 rounded-br-[8px] text-[10px] font-medium leading-[14px]"
          style={{ backgroundColor: badgeColor }}
        >
          <span className={badgeColor === "#ffffff" ? "text-[#252a2d]" : "text-white"}>
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}

function SectionHeader({ title, count, onViewAll }: { title: string; count?: number; onViewAll?: () => void }) {
  return (
    <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-0 w-full">
      <h3 className="text-[#252a2d]">{title}</h3>
      {count && onViewAll && (
        <button onClick={onViewAll} className="flex items-center gap-1 text-[#252a2d] hover:opacity-80 transition-opacity">
          <span className="text-[14px] font-normal">View All</span>
          <span className="text-[14px] font-bold">{count}</span>
          <div className="w-3 h-3 flex items-center justify-center">
            <svg className="w-3 h-3 rotate-[270deg]" fill="none" viewBox="0 0 12 12">
              <path d={svgPaths.p36349400} fill="#252A2D" stroke="#252A2D" strokeWidth="0.2" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}

function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const featuredGames = [
    { id: "rusty-curly", image: img51Ebe223HacksawGamingRustyCurly400X400, badge: "Hot", badgeColor: "#cc371b" },
    { id: "game-2", image: img400X400, badge: "New", badgeColor: "#76ac08" },
    { id: "football-x", image: imgBetPawaBrandedFootballX },
    { id: "mighty-masks", image: img008A90E2HacksawGamingMightyMasks400X400 },
  ];

  const handleFavoriteToggle = (gameId: string) => {
    setFavorites(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };

  return (
    <div className="py-2">
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-0 mb-2">
        <h3 className="text-[#252a2d]">Featured</h3>
        <Filter className="w-6 h-6 text-[#252a2d] hover:opacity-80 transition-opacity cursor-pointer" />
      </div>

      {/* Featured Game Card - Aviator Style */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-4">
        <div className="max-w-sm mx-auto">
          <Frame2085656179 />
        </div>
      </div>

      {/* Carousel */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-2">
        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide sm:justify-start md:justify-center lg:justify-center">
          {featuredGames.map((game) => (
            <GameCard
              key={game.id}
              image={game.image}
              badge={game.badge}
              badgeColor={game.badgeColor}
              isFavorite={favorites.includes(game.id)}
              onFavoriteToggle={() => handleFavoriteToggle(game.id)}
            />
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center pt-2">
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-[5.9px] h-[5.9px] rounded-full transition-colors cursor-pointer ${
                index === currentIndex ? 'bg-[#9CE800]' : 'bg-[#E6E7E2] hover:bg-[#9CE800]/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HotGames() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const hotGames = [
    { id: "mighty-masks-2", image: img008A90E2HacksawGamingMightyMasks400X400 },
    { id: "temple-torment", image: img0A8294E1HacksawGamingTempleOfTorment400X400, badge: "Low Data", badgeColor: "#ffffff" },
    { id: "cricket-crash", image: img400X400CricketCrash },
    { id: "wilds-gods", image: img1X1499X499WildsAndGods1 },
    { id: "aero", image: imgE45D85DaTurbogamesAero400X400 },
    { id: "hot-win", image: imgF18Df63ARedRakeGamingHotWin400X400 },
  ];

  const handleFavoriteToggle = (gameId: string) => {
    setFavorites(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };

  return (
    <div className="py-2" id="hotgames-section">
      <SectionHeader title="🔥 Hot" />
      <div className="bg-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2 sm:gap-3 md:gap-4 justify-items-center">
          {hotGames.map((game) => (
            <GameCard
              key={game.id}
              image={game.image}
              badge={game.badge}
              badgeColor={game.badgeColor}
              isFavorite={favorites.includes(game.id)}
              onFavoriteToggle={() => handleFavoriteToggle(game.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProvidersSection() {
  const providers = [
    { id: "provider-1", image: imgImage197 },
    { id: "provider-2", image: imgImage191 },
    { id: "provider-3", image: imgImage198 },
    { id: "provider-4", image: imgImage196 },
    { id: "provider-5", image: imgImage192 },
    { id: "provider-6", image: imgImage189 },
  ];

  return (
    <div className="bg-white p-2 sm:p-3 md:p-4 lg:p-6">
      <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide sm:justify-start md:justify-center lg:justify-center sm:flex-wrap sm:overflow-visible">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="w-[88px] sm:w-[90px] md:w-[100px] lg:w-[110px] h-10 sm:h-11 md:h-12 bg-white rounded-[8px] border border-[#e6e7e2] flex items-center justify-center flex-shrink-0 hover:border-[#9CE800] hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          >
            <div 
              className="w-full h-full bg-contain bg-center bg-no-repeat px-2"
              style={{ backgroundImage: `url('${provider.image}')` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function GameSection({ title, games, showBanner = false }: { 
  title: string; 
  games: Array<{ id: string; image: string; badge?: string; badgeColor?: string }>; 
  showBanner?: boolean;
}) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFavoriteToggle = (gameId: string) => {
    setFavorites(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };

  return (
    <div className="py-2" id={`${title.toLowerCase().replace(' ', '').replace('&', '')}-section`}>
      <SectionHeader title={title} count={40} />
      
      {showBanner && (
        <div className="px-0 py-2">
          <div 
            className="w-full h-[119px] sm:h-[140px] md:h-[160px] lg:h-[180px] bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-90 transition-opacity"
            style={{ backgroundImage: `url('${imgM888T2Vfv636Ky730N6Qml6Gkt767X2522}')` }}
          />
          <div className="flex justify-center pt-2">
            <div className="flex gap-2">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-[5.9px] h-[5.9px] rounded-full transition-colors cursor-pointer ${
                    index === 0 ? 'bg-[#9CE800]' : 'bg-[#E6E7E2] hover:bg-[#9CE800]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2 sm:gap-3 md:gap-4 justify-items-center">
          {games.map((game) => (
            <GameCard
              key={game.id}
              image={game.image}
              badge={game.badge}
              badgeColor={game.badgeColor}
              isFavorite={favorites.includes(game.id)}
              onFavoriteToggle={() => handleFavoriteToggle(game.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Casino({ activeItem, onAccountClick, onNavigationClick, onHelpClick, onFiltersClick, onBetslipClick, selectedLeagues, isLoggedIn, setIsLoggedIn, onAISearchClick, onSearchWithQuery }: CasinoProps) {
  const [selectedFilter, setSelectedFilter] = useState("home");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    
    // Calculate offset for sticky header (48px header + filter height ~60px)
    const scrollOffset = 110;
    
    // Scroll to the relevant section based on filter
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - scrollOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (filter === "crash") {
      scrollToSection("crash-section");
    } else if (filter === "slot") {
      scrollToSection("slot-section");
    } else if (filter === "prizewheel") {
      scrollToSection("prizewheel-section");
    } else if (filter === "livecasino") {
      scrollToSection("livecasino-section");
    } else if (filter === "whatsnew") {
      scrollToSection("whatsnew-section");
    } else if (filter === "scratchcard") {
      scrollToSection("scratchcard-section");
    } else if (filter === "hotgames") {
      scrollToSection("hotgames-section");
    } else if (filter === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Game data for different sections
  const crashGames = [
    { id: "jungle-conquest", image: imgC4E565907777GamingJungleConquest400X400, badge: "Exclusive", badgeColor: "#cb950a" },
    { id: "jetx", image: img1X1499X499JetX1 },
    { id: "raging-zeus", image: img86Eb8638GamingCorpsRagingZeus400X400 },
    { id: "spaceman", image: imgD8Cbe1C6PragmaticPlaySpaceman400X400 },
    { id: "hawaii", image: imgC307Ff387777GamingHawaii400X400 },
    { id: "book-luck", image: imgBeb173D9GamingCorpsLukeEChanceAndTheBookOfLuck400X400 },
  ];

  const slotGames = [
    { id: "bonbon", image: imgBonbonbonanza400X400 },
    { id: "balloon", image: imgBalloon },
    { id: "big-bass", image: img12250817PragmaticPlayBigBassDayAtTheRaces400X400 },
    { id: "butterfly", image: imgImage },
    { id: "clover", image: imgImage1 },
    { id: "black-hawk", image: imgImage2 },
  ];

  const prizeWheelGames = [
    { id: "rusty-curly-2", image: img51Ebe223HacksawGamingRustyCurly400X400 },
    { id: "game-400", image: img400X400 },
    { id: "hawaii-2", image: imgC307Ff387777GamingHawaii400X400 },
    { id: "cricket-crash-2", image: img400X400CricketCrash },
    { id: "bonbon-2", image: imgBonbonbonanza400X400 },
    { id: "wilds-gods-2", image: img1X1499X499WildsAndGods1 },
  ];

  const liveCasinoGames = [
    { id: "mighty-masks-live", image: img008A90E2HacksawGamingMightyMasks400X400 },
    { id: "temple-live", image: img0A8294E1HacksawGamingTempleOfTorment400X400, badge: "Low Data", badgeColor: "#ffffff" },
    { id: "cricket-live", image: img400X400CricketCrash },
    { id: "wilds-live", image: img1X1499X499WildsAndGods1 },
    { id: "aero-live", image: imgE45D85DaTurbogamesAero400X400 },
    { id: "hot-win-live", image: imgF18Df63ARedRakeGamingHotWin400X400 },
  ];

  const whatsNewGames = [
    { id: "balloon-new", image: imgBalloon },
    { id: "big-bass-new", image: img12250817PragmaticPlayBigBassDayAtTheRaces400X400 },
    { id: "butterfly-new", image: imgImage },
    { id: "clover-new", image: imgImage1 },
    { id: "black-hawk-new", image: imgImage2 },
    { id: "bonbon-new", image: imgBonbonbonanza400X400 },
  ];

  const scratchCardGames = [
    { id: "mighty-scratch", image: img008A90E2HacksawGamingMightyMasks400X400 },
    { id: "temple-scratch", image: img0A8294E1HacksawGamingTempleOfTorment400X400, badge: "Low Data", badgeColor: "#ffffff" },
    { id: "cricket-scratch", image: img400X400CricketCrash },
    { id: "wilds-scratch", image: img1X1499X499WildsAndGods1 },
    { id: "aero-scratch", image: imgE45D85DaTurbogamesAero400X400 },
    { id: "hot-scratch", image: imgF18Df63ARedRakeGamingHotWin400X400 },
  ];

  const tableCardGames = [
    { id: "rusty-table", image: img51Ebe223HacksawGamingRustyCurly400X400 },
    { id: "game-table", image: img400X400 },
    { id: "hawaii-table", image: imgC307Ff387777GamingHawaii400X400 },
    { id: "cricket-table", image: img400X400CricketCrash },
    { id: "bonbon-table", image: imgBonbonbonanza400X400 },
    { id: "wilds-table", image: img1X1499X499WildsAndGods1 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full relative flex flex-col overflow-x-hidden">
      {/* Fixed header at the top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Header onAccountClick={onAccountClick} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onAISearchClick={onAISearchClick} onSearchWithQuery={onSearchWithQuery} />
      </div>
      
      {/* Main content with top and bottom padding */}
      <div className="flex-1 flex flex-col pt-[48px] pb-[120px]">
        {/* Casino Filters */}
        <CasinoFilters 
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
        
        {/* Casino content */}
        <div className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto bg-gray-50 min-h-full px-0">
          <div className="bg-white">
            <FeaturedCarousel />
            <HotGames />
            <ProvidersSection />
          </div>
          
          <div id="crash-section" className="bg-white mt-2">
            <GameSection title="Crash" games={crashGames} showBanner />
          </div>
          
          <div id="slot-section" className="bg-white mt-2">
            <GameSection title="Slot" games={slotGames} />
          </div>
          
          <div id="prizewheel-section" className="bg-white mt-2">
            <GameSection title="Prize Wheel" games={prizeWheelGames} />
          </div>
          
          <div id="livecasino-section" className="bg-white mt-2">
            <GameSection title="Live Casino" games={liveCasinoGames} />
          </div>
          
          <div id="whatsnew-section" className="bg-white mt-2">
            <GameSection title="What's New" games={whatsNewGames} />
          </div>
          
          <div id="scratchcard-section" className="bg-white mt-2">
            <GameSection title="Scratch Card" games={scratchCardGames} />
          </div>
          
          <div className="bg-white mt-2">
            <GameSection title="Table & Card" games={tableCardGames} />
          </div>
          
          {/* View All Games footer */}
          <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-2.5 sm:py-3 md:py-4 flex flex-col items-center gap-2 mt-2">
            <div className="flex flex-col items-center sm:items-start gap-0.5">
              <button className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer group">
                <span className="text-[#252a2d] text-[14px] sm:text-[15px] md:text-[16px] font-normal">View All Games</span>
                <div className="flex items-center gap-0.5">
                  <span className="text-[#252a2d] text-[14px] sm:text-[15px] md:text-[16px] font-bold">818</span>
                  <div className="w-2.5 h-2.5 flex items-center justify-center rotate-180 scale-y-[-1] group-hover:translate-y-[-1px] transition-transform">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 10">
                      <path d={svgPaths.p3e97b300} fill="#252A2D" />
                    </svg>
                  </div>
                </div>
              </button>
              <div className="bg-[#252a2d] h-px w-full min-w-[120px] sm:min-w-[140px] md:min-w-[160px]" />
            </div>
          </div>
        </div>
      </div>
      

      
      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNavigation activeItem={activeItem} onHelpClick={onHelpClick} onBetslipClick={onBetslipClick} onNavigationClick={onNavigationClick} />
      </div>
    </div>
  );
}