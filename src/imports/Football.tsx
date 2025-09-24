import svgPaths from "./svg-qkutqz7892";

function FootballBall() {
  return (
    <div className="relative shrink-0 size-5" data-name="football-ball">
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
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">Football</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Left">
      <FootballBall />
      <Heading />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#9ce800] box-border content-stretch flex gap-2.5 items-center justify-center px-2.5 py-0.5 relative rounded-[6px] shrink-0" data-name="Badge">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">291</p>
      </div>
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

function Right() {
  return (
    <div className="content-stretch flex gap-1 h-full items-center justify-start relative shrink-0" data-name="Right">
      <Badge />
      <ChevronRight />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Body">
      <Left />
      <div className="flex flex-row items-center self-stretch">
        <Right />
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="bg-[#f2f2f3] relative shrink-0 w-full" data-name="Section Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[8px] relative w-full">
          <Body />
        </div>
      </div>
    </div>
  );
}

function Activity() {
  return (
    <div className="relative shrink-0 size-4" data-name="activity">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_6576)" id="activity">
          <path d={svgPaths.p2d09d900} id="Vector" stroke="var(--stroke-0, #FF7A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_6576">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Live() {
  return (
    <div className="content-stretch flex gap-[17px] items-center justify-start relative shrink-0" data-name="Live">
      <Activity />
    </div>
  );
}

function Timestamp() {
  return (
    <div className="content-stretch flex gap-[17px] items-center justify-start relative shrink-0" data-name="Timestamp">
      <Live />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Roboto:Bold',_sans-serif] font-bold gap-0.5 items-center justify-center leading-[0] relative shrink-0 text-[16px] w-full">
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[#252a2d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">St George Willawong FC</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ff7a00] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Roboto:Bold',_sans-serif] font-bold items-center justify-between leading-[0] relative shrink-0 text-[16px] w-full">
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[#252a2d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Olympic FC Brisbane</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#ff7a00] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Teams() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Teams">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Odds() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-end relative shrink-0 w-[49px]" data-name="odds">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">4.35</p>
      </div>
    </div>
  );
}

function EventBetWrapperBetPrice() {
  return (
    <div className="basis-0 bg-[#f2f2f3] grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="event-bet-wrapper bet-price">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">1</p>
          </div>
          <Odds />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Odds1() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-end relative shrink-0 w-[49px]" data-name="odds">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">4.35</p>
      </div>
    </div>
  );
}

function EventBetWrapperBetPrice1() {
  return (
    <div className="basis-0 bg-[#f2f2f3] grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="event-bet-wrapper bet-price">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">X</p>
          </div>
          <Odds1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Odds2() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-end relative shrink-0 w-[49px]" data-name="odds">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">4.35</p>
      </div>
    </div>
  );
}

function EventBetWrapperBetPrice2() {
  return (
    <div className="basis-0 bg-[#f2f2f3] grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="event-bet-wrapper bet-price">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">2</p>
          </div>
          <Odds2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function BetlineList() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="betline-list">
      <EventBetWrapperBetPrice />
      <EventBetWrapperBetPrice1 />
      <EventBetWrapperBetPrice2 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative size-4" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #252A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0.5 py-0 relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">83</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ChevronRight1 />
        </div>
      </div>
    </div>
  );
}

function BetlineCountButton() {
  return (
    <div className="bg-[#ffffff] relative rounded-[6px] shrink-0" data-name="betline-count-button">
      <div className="box-border content-stretch flex gap-[38px] items-center justify-center overflow-clip px-1 py-2 relative">
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Betline() {
  return (
    <div className="content-stretch flex gap-2 h-9 items-start justify-start relative shrink-0 w-full" data-name="betline">
      <BetlineList />
      <BetlineCountButton />
    </div>
  );
}

function MatchcardDefault() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="matchcard_default">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-[8px] relative w-full">
          <Timestamp />
          <Teams />
          <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#2f3437] text-[12px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Football / Australia / Queensland NPL</p>
          </div>
          <Betline />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Timestamp1() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start leading-[0] relative shrink-0 text-[#2f3437] text-[12px] text-nowrap" data-name="Timestamp">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">10.30</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] text-nowrap whitespace-pre">Wed 28/05</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0">
      <Timestamp1 />
    </div>
  );
}

function Component2Up() {
  return (
    <div className="absolute left-px size-[18px] top-px" data-name="2up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="2up">
          <path d={svgPaths.p1938ff00} fill="var(--fill-0, #FF7A00)" id="Vector" />
          <path d={svgPaths.p2b92de70} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p138db700} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function BestOdds() {
  return (
    <div className="absolute inset-0 rounded-[100px]" data-name="best odds">
      <Component2Up />
    </div>
  );
}

function Boosted() {
  return (
    <div className="relative shrink-0 size-5" data-name="boosted">
      <BestOdds />
    </div>
  );
}

function Component2Up1() {
  return (
    <div className="absolute left-px size-[18px] top-px" data-name="2up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="2up">
          <path d={svgPaths.p1938ff00} fill="var(--fill-0, #6915BE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BestOdds1() {
  return (
    <div className="absolute aspect-[20/20] left-0 right-0 rounded-[100px] top-0" data-name="best odds">
      <Component2Up1 />
    </div>
  );
}

function ChevronsUp() {
  return (
    <div className="absolute inset-[20%]" data-name="chevrons-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevrons-up">
          <path d={svgPaths.p2b92a180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function BestOdds2() {
  return (
    <div className="relative shrink-0 size-5" data-name="best-odds">
      <BestOdds1 />
      <ChevronsUp />
    </div>
  );
}

function Badges() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="badges">
      <Boosted />
      <BestOdds2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
      <Frame6 />
      <Badges />
    </div>
  );
}

function Teams1() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Bold',_sans-serif] font-bold items-start justify-start leading-[0] relative shrink-0 text-[#252a2d] text-[16px] w-[173px]" data-name="Teams">
      <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">St George Willawong FC</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Olympic FC Brisbane</p>
      </div>
    </div>
  );
}

function Odds3() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-end relative shrink-0 w-[49px]" data-name="odds">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">4.35</p>
      </div>
    </div>
  );
}

function EventBetWrapperBetPrice3() {
  return (
    <div className="basis-0 bg-[#f2f2f3] grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="event-bet-wrapper bet-price">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">1</p>
          </div>
          <Odds3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Odds4() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-end relative shrink-0 w-[49px]" data-name="odds">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">4.35</p>
      </div>
    </div>
  );
}

function EventBetWrapperBetPrice4() {
  return (
    <div className="basis-0 bg-[#f2f2f3] grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="event-bet-wrapper bet-price">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">X</p>
          </div>
          <Odds4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Odds5() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-end relative shrink-0 w-[49px]" data-name="odds">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">4.35</p>
      </div>
    </div>
  );
}

function EventBetWrapperBetPrice5() {
  return (
    <div className="basis-0 bg-[#f2f2f3] grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="event-bet-wrapper bet-price">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">2</p>
          </div>
          <Odds5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function BetlineList1() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="betline-list">
      <EventBetWrapperBetPrice3 />
      <EventBetWrapperBetPrice4 />
      <EventBetWrapperBetPrice5 />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative size-4" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #252A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0.5 py-0 relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">83</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ChevronRight2 />
        </div>
      </div>
    </div>
  );
}

function BetlineCountButton1() {
  return (
    <div className="bg-[#ffffff] relative rounded-[6px] shrink-0" data-name="betline-count-button">
      <div className="box-border content-stretch flex gap-[38px] items-center justify-center overflow-clip px-1 py-2 relative">
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Betline1() {
  return (
    <div className="content-stretch flex gap-2 h-9 items-start justify-start relative shrink-0 w-full" data-name="betline">
      <BetlineList1 />
      <BetlineCountButton1 />
    </div>
  );
}

function MatchcardDefault1() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="matchcard_default">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-[8px] relative w-full">
          <Frame7 />
          <Teams1 />
          <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#2f3437] text-[12px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Football / Australia / Queensland NPL</p>
          </div>
          <Betline1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconRightBan() {
  return (
    <div className="relative shrink-0 size-5" data-name="IconRight / Ban">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="IconRight / Ban">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #252A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-2 relative w-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] underline whitespace-pre">View more Boosted 291</p>
          </div>
          <IconRightBan />
        </div>
      </div>
    </div>
  );
}

export default function Football() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative size-full" data-name="Football">
      <SectionHeader />
      <MatchcardDefault />
      {[...Array(2).keys()].map((_, i) => (
        <MatchcardDefault1 key={i} />
      ))}
      <Button />
    </div>
  );
}