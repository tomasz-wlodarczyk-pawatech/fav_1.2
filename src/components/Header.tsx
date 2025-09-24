import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import svgPaths from "../imports/svg-i6ibvkb3dl";
import IconLayoutGrid from "../imports/IconLayoutGrid-2029-439";
import Cherry from "../imports/Cherry-2-962";
import { NavigationCards } from "./NavigationCards";            // unchanged (used elsewhere)
import { QuickAccessTooltip } from "./QuickAccessTooltip";
import NavigationDrawer from "./NavigationDrawer";
// import AISearchHeaderPanel from "./AISearchHeaderPanel";

/* ---------------- existing helpers unchanged ---------------- */

function Logo() {
  return (
    <div className="h-[15.2px] relative shrink-0 w-[88.244px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89 16">
        <g id="logo">
          <path d={svgPaths.p28f705f0} fill="var(--fill-0, #9CE800)" id="Vector" />
          <path d={svgPaths.p27b3a000} fill="var(--fill-0, #F2F2F3)" id="Vector_2" />
          <path d={svgPaths.pf060380} fill="var(--fill-0, #F2F2F3)" id="Vector_3" />
          <path d={svgPaths.pf969cf0} fill="var(--fill-0, #F2F2F3)" id="Vector_4" />
          <path d={svgPaths.p3896caf0} fill="var(--fill-0, #9CE800)" id="Vector_5" />
          <path d={svgPaths.p2b989900} fill="var(--fill-0, #9CE800)" id="Vector_6" />
          <path d={svgPaths.p26a06b00} fill="var(--fill-0, #9CE800)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function ButtonLink({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative size-full hover:opacity-80 transition-opacity cursor-pointer" data-name="button-link">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-3 py-0 relative size-full">
          <Logo />
        </div>
      </div>
    </button>
  );
}

function Left({
  onLogoClick,
}: {
  onLogoClick: () => void;
}) {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0 ml-2" data-name="Left">
      <ButtonLink onClick={onLogoClick} />
    </div>
  );
}

function IconSearch() { return <SearchIcon className="w-5 h-5 text-white" strokeWidth={2} />; }

function Search({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative rounded-[8px] shrink-0 h-8 w-8 flex items-center justify-center hover:bg-[#3a4043] transition-colors" data-name="Search">
      <IconSearch />
    </button>
  );
}

function ButtonText() {
  return (
    <div className="box-border content-stretch flex items-start justify-start px-2 py-0 relative shrink-0" data-name="Button-text">
      <div className="font-['Roboto:Bold',_'Noto_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#e4e6e7] text-[14px] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">GH₵ 882.10</p>
      </div>
    </div>
  );
}
function Icon() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path d={svgPaths.p36bdefc0} id="Vector" stroke="var(--stroke-0, #353B40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
function ButtonPrimaryRestTrueFalse() {
  return (
    <div className="bg-[#9ce800] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 h-[22px] px-2 min-w-[22px]" data-name="Button/primary/rest/true/false">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[10px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">ACCOUNT</p>
      </div>
    </div>
  );
}
function HeaderDepositButton({ onAccountClick }: { onAccountClick: () => void }) {
  return (
    <button onClick={onAccountClick} className="bg-[#2f3437] box-border content-stretch flex h-[31px] items-center justify-start px-1 py-0 relative rounded-[1000px] shrink-0 hover:bg-[#3a4043] transition-colors" data-name="_header/deposit-button">
      <div aria-hidden="true" className="absolute border border-[#484f52] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <ButtonText />
      <ButtonPrimaryRestTrueFalse />
    </button>
  );
}
function LoggedInContent({ onAccountClick, onHeaderSearchClick }: { onAccountClick: () => void; onHeaderSearchClick: () => void }) {
  return (
    <div className="content-stretch flex gap-2 h-8 items-center justify-start relative shrink-0">
      <Search onClick={onHeaderSearchClick} />
      <HeaderDepositButton onAccountClick={onAccountClick} />
    </div>
  );
}
function LoginButton({ onLogin }: { onLogin: () => void }) {
  return (
    <button onClick={onLogin} className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-2 relative rounded-[8px] shrink-0 hover:bg-[#3a4043] transition-colors" data-name="login">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">LOGIN</p>
      </div>
    </button>
  );
}
function JoinButton() {
  return (
    <button className="bg-[#9ce800] box-border content-stretch flex gap-2 h-8 items-center justify-center px-4 py-2 relative shrink-0 hover:bg-[#8ac400] transition-colors" data-name="join">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">JOIN NOW</p>
      </div>
    </button>
  );
}
function LoggedOutContent({ onLogin, onHeaderSearchClick }: { onLogin: () => void; onHeaderSearchClick: () => void }) {
  return (
    <div className="content-stretch flex gap-1 sm:gap-2 items-center justify-start relative shrink-0" data-name="login+join">
      <Search onClick={onHeaderSearchClick} />
      <div className="hidden sm:block"><LoginButton onLogin={onLogin} /></div>
      <JoinButton />
    </div>
  );
}

/* ---------------- main header ---------------- */

interface HeaderProps {
  onAccountClick: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export function Header({ onAccountClick, isLoggedIn, setIsLoggedIn }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderSearchOpen, setIsHeaderSearchOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // measure header height so overlay/panel start below header
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Show hamburger menu on non-home pages
  const showHamburgerMenu = location.pathname !== '/';

  return (
    <div className="relative">
      {/* Main Header */}
      <div ref={headerRef} className="bg-[#252a2d] px-4 py-2 relative z-30" data-name="Header">
        <div className="flex items-center justify-between">
          <Left 
            onLogoClick={handleLogoClick}
          />
          {isLoggedIn ? (
            <LoggedInContent onAccountClick={onAccountClick} onHeaderSearchClick={() => setIsHeaderSearchOpen(true)} />
          ) : (
            <LoggedOutContent onLogin={handleLogin} onHeaderSearchClick={() => setIsHeaderSearchOpen(true)} />
          )}
        </div>
      </div>
      
      <NavigationDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      {/* AISearchHeaderPanel disabled
      <AISearchHeaderPanel
        isOpen={isHeaderSearchOpen}
        topOffset={headerHeight}
        onClose={() => setIsHeaderSearchOpen(false)}
      />
      */}
    </div>
  );
}
