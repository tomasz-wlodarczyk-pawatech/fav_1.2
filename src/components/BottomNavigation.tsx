import { Link, useLocation, useNavigate } from "react-router-dom";
import svgPaths from "../imports/svg-847a84y13z";
import HelpIcon from "../imports/Icon-6-25";
import IconLayoutDashboard from "../imports/IconLayoutDashboard-2022-485";
import { useNavDrawer } from '../contexts/NavDrawerContext';


interface BottomNavigationProps {
  activeItem?: string;
  onHelpClick?: () => void;
  onBetslipClick?: () => void;
  onNavigationClick?: () => void;
}

function ProgressPercentage() {
  return <div className="absolute bg-[#8dc63f] bottom-0 left-0 right-full top-0" data-name="progress-surface" />;
}

function Body() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Add more legs to your betslip to earn up to a</p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Body">
      <div className="basis-0 font-['Roboto:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">500% Win Bonus.</p>
      </div>
    </div>
  );
}

function TextGroupStart() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="text-group-start">
      <Body />
      <Body1 />
    </div>
  );
}

function ProgressBarText() {
  return (
    <div className="box-border content-stretch flex gap-3 h-[25px] items-center justify-start px-3 py-0 relative shrink-0 w-full" data-name="_progress-bar-text">
      <TextGroupStart />
    </div>
  );
}

// Menu Navigation Item
function MenuIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <IconLayoutDashboard />
    </div>
  );
}

function MenuLabel() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#aaaeb0] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Menu</p>
      </div>
    </div>
  );
}

function MenuIconComponent({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0 border-none outline-none cursor-pointer bg-transparent"
      data-name="_icon"
    >
      <MenuIcon />
      <MenuLabel />
    </button>
  );
}

function MenuNavButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 bg-[#252a2d] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="_nav-button">
      <MenuIconComponent onClick={onClick} />
    </div>
  );
}

// Favorites Navigation Item
function FavoritesIcon({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke={isActive ? "#9ce800" : "var(--stroke-0, #AAAEB0)"} strokeWidth="2" fill="none"/>
        </g>
      </svg>
    </div>
  );
}

function FavoritesLabel({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className={`font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap ${isActive ? 'text-[#9ce800]' : 'text-[#aaaeb0]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Favorites</p>
      </div>
    </div>
  );
}

function FavoritesIconComponent({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0 border-none outline-none cursor-pointer bg-transparent"
      data-name="_icon"
    >
      <FavoritesIcon isActive={isActive} />
      <FavoritesLabel isActive={isActive} />
    </button>
  );
}

function FavoritesNavButton({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div className="basis-0 bg-[#252a2d] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="_nav-button">
      <FavoritesIconComponent isActive={isActive} onClick={onClick} />
    </div>
  );
}



// My Bets Navigation Item
function MyBetsIcon({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <div className="relative inline-flex">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="icon">
            <path d={svgPaths.p1694a480} stroke={isActive ? "#9ce800" : "var(--stroke-0, #AAAEB0)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
        {/* Badge "1" */}
        <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-[#9ce800] text-black text-[10px] leading-4 text-center">
          1
        </span>
      </div>
    </div>
  );
}

function MyBetsLabel({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className={`font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap ${isActive ? 'text-[#9ce800]' : 'text-[#aaaeb0]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">My Bets</p>
      </div>
    </div>
  );
}

function MyBetsIconComponent({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0 border-none outline-none cursor-pointer bg-transparent"
      data-name="_icon"
    >
      <MyBetsIcon isActive={isActive} />
      <MyBetsLabel isActive={isActive} />
    </button>
  );
}

function MyBetsNavButton({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div className="basis-0 bg-[#252a2d] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="_nav-button">
      <MyBetsIconComponent isActive={isActive} onClick={onClick} />
    </div>
  );
}

// Help Navigation Item
function HelpIconComponent({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <div style={{ color: isActive ? '#9ce800' : '#aaaeb0' }}>
        <HelpIcon />
      </div>
    </div>
  );
}

function HelpLabel({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className={`font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-nowrap ${isActive ? 'text-[#9ce800]' : 'text-[#aaaeb0]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Help</p>
      </div>
    </div>
  );
}

function HelpIconWrapper({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0 border-none outline-none cursor-pointer bg-transparent"
      data-name="_icon"
    >
      <HelpIconComponent isActive={isActive} />
      <HelpLabel isActive={isActive} />
    </button>
  );
}

function HelpNavButton({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div className="basis-0 bg-[#252a2d] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="_nav-button">
      <HelpIconWrapper isActive={isActive} onClick={onClick} />
    </div>
  );
}

// Betslip Navigation Item
function BetslipIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <path d={svgPaths.p1694a480} stroke="var(--stroke-0, #AAAEB0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BetslipLabel() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#aaaeb0] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Betslip</p>
      </div>
    </div>
  );
}

function BetslipIconComponent({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0 border-none outline-none cursor-pointer bg-transparent"
      data-name="_icon"
    >
      <BetslipIcon />
      <BetslipLabel />
    </button>
  );
}

function BetslipNavButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="basis-0 bg-[#252a2d] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="_nav-button">
      <BetslipIconComponent onClick={onClick} />
    </div>
  );
}

function NavButtons({ 
  onNavigationClick, 
  onBetslipClick, 
  onHelpClick,
  isFavoritesActive,
  isMyBetsActive,
  isHelpActive,
  onFavoritesClick,
  onMyBetsClick
}: { 
  onNavigationClick?: () => void; 
  onBetslipClick?: () => void; 
  onHelpClick?: () => void;
  isFavoritesActive?: boolean;
  isMyBetsActive?: boolean;
  isHelpActive?: boolean;
  onFavoritesClick?: () => void;
  onMyBetsClick?: () => void;
}) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full bg-[#252a2d] h-16" data-name="nav-buttons">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <MenuNavButton onClick={onNavigationClick} />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <FavoritesNavButton isActive={isFavoritesActive} onClick={onFavoritesClick} />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <BetslipNavButton onClick={onBetslipClick} />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <MyBetsNavButton isActive={isMyBetsActive} onClick={onMyBetsClick} />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <HelpNavButton isActive={isHelpActive} onClick={onHelpClick} />
      </div>
    </div>
  );
}

export function BottomNavigation({ activeItem = "home", onHelpClick, onBetslipClick, onNavigationClick }: BottomNavigationProps) {
  const { toggle } = useNavDrawer();
  const location = useLocation();
  const navigate = useNavigate();

  // Route-based active flags (only for these three)
  const isFavoritesActive = location.pathname.startsWith('/favorites');
  const isMyBetsActive   = location.pathname.startsWith('/my-bets') || location.pathname.startsWith('/mybets');
  const isHelpActive     = location.pathname.startsWith('/help');

  // Simple helpers for navigation
  const goFavorites = () => navigate('/favorites');
  const goMyBets    = () => navigate('/my-bets');
  const goHelp      = () => navigate('/help');

  return (
    <div className="bg-[#9ce800] content-stretch flex flex-col items-start justify-start relative w-full" data-name="Bottom Navigation">
      <ProgressPercentage />
      <ProgressBarText />
      <NavButtons 
        onNavigationClick={toggle}
        onBetslipClick={onBetslipClick}
        onHelpClick={onHelpClick}
        isFavoritesActive={isFavoritesActive}
        isMyBetsActive={isMyBetsActive}
        isHelpActive={isHelpActive}
        onFavoritesClick={goFavorites}
        onMyBetsClick={goMyBets}
      />
    </div>
  );
}