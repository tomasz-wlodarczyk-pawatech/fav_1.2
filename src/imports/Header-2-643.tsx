import svgPaths from "./svg-gxzdm9x8do";

function Logo() {
  return (
    <div className="h-3 relative shrink-0 w-[69px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 12">
        <g id="logo">
          <path d={svgPaths.p12f71380} fill="var(--fill-0, #9CE800)" id="Vector" />
          <path d={svgPaths.p28c30100} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p23408800} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2bab7f00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1da59180} fill="var(--fill-0, #9CE800)" id="Vector_5" />
          <path d={svgPaths.p10de8700} fill="var(--fill-0, #9CE800)" id="Vector_6" />
          <path d={svgPaths.p2c7b9000} fill="var(--fill-0, #9CE800)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function ButtonLink() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="button-link">
      <Logo />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Left">
      <div className="flex flex-row items-center self-stretch">
        <ButtonLink />
      </div>
    </div>
  );
}

function IconSearch() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon / Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Search">
          <path d={svgPaths.p14023880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-6" data-name="Search">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative size-6">
          <IconSearch />
        </div>
      </div>
    </div>
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
    <div className="bg-[#9ce800] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[22px]" data-name="Button/primary/rest/true/false">
      <Icon />
    </div>
  );
}

function HeaderDepositButton() {
  return (
    <div className="bg-[#2f3437] box-border content-stretch flex h-[31px] items-center justify-start px-1 py-0 relative rounded-[1000px] shrink-0" data-name="_header/deposit-button">
      <div aria-hidden="true" className="absolute border border-[#484f52] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <ButtonText />
      <ButtonPrimaryRestTrueFalse />
    </div>
  );
}

function Frame1261159245() {
  return (
    <div className="content-stretch flex gap-2 h-8 items-center justify-start relative shrink-0">
      <Search />
      <HeaderDepositButton />
    </div>
  );
}

function LoginJoin() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="login+join">
      <Frame1261159245 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#252a2d] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Left />
          <LoginJoin />
        </div>
      </div>
    </div>
  );
}

export default function Header1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Header">
      <Header />
    </div>
  );
}