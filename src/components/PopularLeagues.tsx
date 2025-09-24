import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-lzql1mt57z";
import { SectionBadge } from "./SectionBadge";

interface PopularLeaguesProps {
  onLeaguesClick?: () => void;
  onLeagueSelect?: (leagueName: string) => void;
}

function Trophy() {
  return (
    <div className="relative shrink-0 size-5" data-name="trophy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_6582)" id="football-ball">
          <path d={svgPaths.p2fb36640} id="Vector" stroke="var(--stroke-0, #252A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
        <defs>
          <clipPath id="clip0_1_6582">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Heading">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-sm sm:text-base md:text-lg text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <h3>Popular Leagues</h3>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-2 sm:gap-3 items-center justify-start relative shrink-0" data-name="Left">
      <Trophy />
      <Heading />
    </div>
  );
}

function Right({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-1 h-full items-center justify-start relative shrink-0" data-name="Right">
      <SectionBadge count={291} onClick={onClick} />
    </div>
  );
}

function Body({ onRightClick }: { onRightClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full px-2 sm:px-4 md:px-6 lg:px-8" data-name="Body">
      <Left />
      <div className="flex flex-row items-center self-stretch overflow-x-auto scrollbar-hide">
        <Right onClick={onRightClick} />
      </div>
    </div>
  );
}

function SectionHeader({ onRightClick }: { onRightClick?: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start py-2 relative shrink-0 w-full max-w-none sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-none px-6" data-name="Section Header">
      <Body onRightClick={onRightClick} />
    </div>
  );
}

/* ---------- Flags ---------- */
function GbEngEngland() {
  return (
    <div className="relative shrink-0 size-6" data-name="gb-eng-England">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="gb-eng-England">
          <g clipPath="url(#clip0_6_1669)">
            <rect fill="var(--fill-0, #F5F5F5)" height="24" rx="12" width="24" />
            <path clipRule="evenodd" d={svgPaths.p719ed00} fill="var(--fill-0, #EF4444)" fillRule="evenodd" id="Union" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_1669">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ItItaly() {
  return (
    <div className="relative shrink-0 size-6" data-name="it-Italy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="it-Italy">
          <g clipPath="url(#clip0_6_1661)">
            <path d="M0 0H8V24H0V0Z" fill="var(--fill-0, #22C55E)" id="Rectangle 10" />
            <path d="M8 0H16V24H8V0Z" fill="var(--fill-0, #F5F5F5)" id="Rectangle 12" />
            <path d="M16 0H24V24H16V0Z" fill="var(--fill-0, #EF4444)" id="Rectangle 11" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_1661">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EsSpain() {
  return (
    <div className="relative shrink-0 size-6" data-name="es-Spain">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="es-Spain">
          <g clipPath="url(#clip0_6_1638)">
            <path d="M0 0H24V6H0V0Z" fill="var(--fill-0, #EF4444)" id="Rectangle 10" />
            <path d="M0 6H24V12H0V6Z" fill="var(--fill-0, #FBBF24)" id="Rectangle 13" />
            <path d="M0 12H24V18H0V12Z" fill="var(--fill-0, #FBBF24)" id="Rectangle 15" />
            <path d="M0 18H24V24H0V18Z" fill="var(--fill-0, #EF4444)" id="Rectangle 14" />
            <g id="Group 72">
              <path d={svgPaths.p1b280700} fill="var(--fill-0, #EF4444)" id="Vector" />
              <path d={svgPaths.p2f625000} fill="var(--fill-0, #EF4444)" id="Vector_2" />
              <path d={svgPaths.p26a6fc80} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
              <path d={svgPaths.p2bd2b200} fill="var(--fill-0, #EF4444)" id="Vector_4" />
              <path d={svgPaths.p18f50a00} fill="var(--fill-0, #EF4444)" id="Vector_5" />
              <path d={svgPaths.p2315e5c0} fill="var(--fill-0, #FBBF24)" id="Vector_6" />
              <path d={svgPaths.p3e45c00} fill="var(--fill-0, #FBBF24)" id="Vector_7" />
              <path d={svgPaths.p1bf4fe00} fill="var(--fill-0, #EF4444)" id="Vector_8" />
              <path d={svgPaths.p26758f40} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
              <path d={svgPaths.p3c743180} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
              <path d={svgPaths.p14581500} fill="var(--fill-0, #EF4444)" id="Vector_11" />
              <path d={svgPaths.p3f993492} fill="var(--fill-0, #EF4444)" id="Vector_12" />
              <path d={svgPaths.p26b67600} fill="var(--fill-0, #FBBF24)" id="Vector_13" />
              <path d={svgPaths.p15fab1e0} fill="var(--fill-0, #FBBF24)" id="Vector_14" />
              <path d={svgPaths.p2917700} fill="var(--fill-0, #FBBF24)" id="Vector_15" />
              <path d={svgPaths.pc86a000} fill="var(--fill-0, #3B82F6)" id="Vector_16" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_1638">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DeGermany() {
  return (
    <div className="relative shrink-0 size-6" data-name="de-Germany">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="de-Germany">
          <g clipPath="url(#clip0_6_1672)">
            <path d="M0 0H24V8H0V0Z" fill="var(--fill-0, #262626)" id="Rectangle 12" />
            <path d="M0 8H24V16H0V8Z" fill="var(--fill-0, #EF4444)" id="Rectangle 10" />
            <path d="M0 16H24V24H0V16Z" fill="var(--fill-0, #FBBF24)" id="Rectangle 11" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_6_1672">
            <rect fill="white" height="24" rx="12" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EuEurope() {
  return (
    <div className="bg-blue-900 overflow-clip relative rounded-[13.333px] shrink-0 size-6" data-name="eu-Europe">
      <div className="absolute inset-[22.22%_21.81%_22.22%_22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group 59">
            <path d={svgPaths.p165daf00} fill="var(--fill-0, #FBBF24)" id="Vector" />
            <path d={svgPaths.p19e84800} fill="var(--fill-0, #FBBF24)" id="Vector_2" />
            <path d={svgPaths.p39595280} fill="var(--fill-0, #FBBF24)" id="Vector_3" />
            <path d={svgPaths.pb2702f0} fill="var(--fill-0, #FBBF24)" id="Vector_4" />
            <path d={svgPaths.pd802000} fill="var(--fill-0, #FBBF24)" id="Vector_5" />
            <path d={svgPaths.p287e6f00} fill="var(--fill-0, #FBBF24)" id="Vector_6" />
            <path d={svgPaths.pdab3f00} fill="var(--fill-0, #FBBF24)" id="Vector_7" />
            <path d={svgPaths.p2b1d2f00} fill="var(--fill-0, #FBBF24)" id="Vector_8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ---------- League pills ---------- */
interface LeagueButtonProps {
  leagueName: string;
  flag: React.ReactNode;
  onClick?: () => void;
}

function LeagueButton({ leagueName, flag, onClick }: LeagueButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center gap-2 shrink-0 snap-start
        px-3 py-1.5 rounded-full
        bg-white border border-[#9CE800]/50
        text-[#1f2c37] text-[15px] font-semibold tracking-tight
        hover:bg-white focus:outline-none
      "
      aria-label={leagueName}
    >
      <span className="w-[18px] h-[18px] inline-flex items-center justify-center">{flag}</span>
      <span className="whitespace-nowrap">{leagueName}</span>
    </button>
  );
}

function LeagueButtons({ onLeagueSelect }: { onLeagueSelect?: (leagueName: string) => void }) {
  const navigate = useNavigate();

  const handleLeagueClick = (leagueName: string) => {
    onLeagueSelect?.(leagueName);
    navigate('/sports');
  };

  return (
    <div
      className="
        box-border flex items-center justify-start
        gap-2 sm:gap-2.5
        w-full overflow-x-auto overflow-y-hidden scrollbar-hide
        snap-x snap-mandatory
        pl-4 pr-4 sm:pl-6 sm:pr-6
        scroll-px-4 sm:scroll-px-6
      "
    >
      {/* start spacer so first pill doesn't touch edge */}
      <div className="shrink-0 w-1 sm:w-2" />

      <LeagueButton leagueName="Premier League" flag={<GbEngEngland />} onClick={() => handleLeagueClick('Premier League')} />
      <LeagueButton leagueName="Serie A" flag={<ItItaly />} onClick={() => handleLeagueClick('Serie A')} />
      <LeagueButton leagueName="LA Liga" flag={<EsSpain />} onClick={() => handleLeagueClick('La Liga')} />
      <LeagueButton leagueName="Bundesliga" flag={<DeGermany />} onClick={() => handleLeagueClick('Bundesliga')} />
      <LeagueButton leagueName="UEFA Champions League" flag={<EuEurope />} onClick={() => handleLeagueClick('UEFA Champions League')} />
      <LeagueButton leagueName="UEFA Europa League" flag={<EuEurope />} onClick={() => handleLeagueClick('UEFA Europa League')} />
      <LeagueButton leagueName="UEFA Conference League" flag={<EuEurope />} onClick={() => handleLeagueClick('UEFA Conference League')} />

      {/* end spacer so last pill has breathing room */}
      <div className="shrink-0 w-1 sm:w-2" />
    </div>
  );
}

export function PopularLeagues({ onLeaguesClick, onLeagueSelect }: PopularLeaguesProps) {
  return (
    <div className="content-stretch flex flex-col gap-1 sm:gap-2 items-center justify-start relative w-full mb-4 sm:mb-6 md:mb-8" data-name="Popular Leagues">
      <SectionHeader onRightClick={onLeaguesClick} />
      <LeagueButtons onLeagueSelect={onLeagueSelect} />
    </div>
  );
}
