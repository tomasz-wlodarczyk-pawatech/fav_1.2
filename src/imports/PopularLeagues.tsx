import svgPaths from "./svg-lzql1mt57z";

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
        <p className="leading-[24px] whitespace-pre text-sm sm:text-base md:text-lg text-[16px]">Popular Leagues</p>
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

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-4" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #252A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#9ce800] box-border content-stretch flex items-center justify-center pl-2 pr-0.5 py-0.5 relative rounded-[16px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">291</p>
      </div>
      <ChevronRight />
    </div>
  );
}

function Right({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex gap-1 h-full items-center justify-start relative shrink-0 cursor-pointer" 
      data-name="Right"
      onClick={onClick}
    >
      <Badge />
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
    <div className="box-border content-stretch flex flex-col items-start justify-start py-2 relative shrink-0 w-full max-w-none sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-none px-1 sm:px-2" data-name="Section Header">
      <Body onRightClick={onRightClick} />
    </div>
  );
}

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

function Frame1261159377() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <GbEngEngland />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[12px] relative shrink-0 text-[#000000] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Premier</p>
        <p>League</p>
      </div>
    </div>
  );
}

function Frame1261159378() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-10 items-center justify-center p-[8px] relative rounded-[16px] shrink-0">
      <Frame1261159377 />
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

function Frame1261159385() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <ItItaly />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">Serie A</p>
      </div>
    </div>
  );
}

function Frame1261159379() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-10 items-center justify-center p-[8px] relative rounded-[16px] shrink-0">
      <Frame1261159385 />
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

function Frame1261159386() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <EsSpain />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">LA Liga</p>
      </div>
    </div>
  );
}

function Frame1261159380() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-10 items-center justify-center p-[8px] relative rounded-[16px] shrink-0">
      <Frame1261159386 />
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

function Frame1261159387() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <DeGermany />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">Bundesliga</p>
      </div>
    </div>
  );
}

function Frame1261159381() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-10 items-center justify-center p-[8px] relative rounded-[16px] shrink-0">
      <Frame1261159387 />
    </div>
  );
}

function Group59() {
  return (
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
  );
}

function EuEurope() {
  return (
    <div className="bg-blue-900 overflow-clip relative rounded-[13.333px] shrink-0 size-6" data-name="eu-Europe">
      <Group59 />
    </div>
  );
}

function Frame1261159388() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <EuEurope />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[12px] relative shrink-0 text-[#000000] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`UEFA Champions `}</p>
        <p>League</p>
      </div>
    </div>
  );
}

function Frame1261159382() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-10 items-center justify-center p-[8px] relative rounded-[16px] shrink-0">
      <Frame1261159388 />
    </div>
  );
}

function Group60() {
  return (
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
  );
}

function EuEurope1() {
  return (
    <div className="bg-blue-900 overflow-clip relative rounded-[13.333px] shrink-0 size-6" data-name="eu-Europe">
      <Group60 />
    </div>
  );
}

function Frame1261159389() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <EuEurope1 />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[12px] relative shrink-0 text-[#000000] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`UEFA Europa `}</p>
        <p>League</p>
      </div>
    </div>
  );
}

function Frame1261159383() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-10 items-center justify-center p-[8px] relative rounded-[16px] shrink-0">
      <Frame1261159389 />
    </div>
  );
}

function Group61() {
  return (
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
  );
}

function EuEurope2() {
  return (
    <div className="bg-blue-900 overflow-clip relative rounded-[13.333px] shrink-0 size-6" data-name="eu-Europe">
      <Group61 />
    </div>
  );
}

function Frame1261159390() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <EuEurope2 />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[12px] relative shrink-0 text-[#000000] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`UEFA Conference `}</p>
        <p>League</p>
      </div>
    </div>
  );
}

function Frame1261159384() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-10 items-center justify-center p-[8px] relative rounded-[16px] shrink-0">
      <Frame1261159390 />
    </div>
  );
}

function Frame1261159391() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-2 sm:gap-3 md:gap-4 items-center justify-start px-2 sm:px-4 md:px-6 py-0 relative w-full overflow-x-auto scrollbar-hide">
          <Frame1261159378 />
          <Frame1261159379 />
          <Frame1261159380 />
          <Frame1261159381 />
          <Frame1261159382 />
          <Frame1261159383 />
          <Frame1261159384 />
        </div>
      </div>
    </div>
  );
}

export default function PopularLeagues({ onRightClick }: { onRightClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-1 sm:gap-2 items-center justify-start relative w-full mb-4 sm:mb-6 md:mb-8" data-name="Popular Leagues">
      <SectionHeader onRightClick={onRightClick} />
      <Frame1261159391 />
    </div>
  );
}