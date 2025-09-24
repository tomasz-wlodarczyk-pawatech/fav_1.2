import svgPaths from "./svg-kcue7xbd78";

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

function Logo1() {
  return (
    <div className="content-stretch flex gap-2 h-full items-center justify-start relative shrink-0" data-name="logo">
      <ButtonLink />
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

function Login() {
  return (
    <div className="box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-2 relative rounded-[8px] shrink-0" data-name="login">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">LOGIN</p>
      </div>
    </div>
  );
}

function Join() {
  return (
    <div className="bg-[#9ce800] box-border content-stretch flex gap-2 h-8 items-center justify-center px-4 py-2 relative shrink-0" data-name="join">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">JOIN NOW</p>
      </div>
    </div>
  );
}

function LoginJoin() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="login+join">
      <Search />
      <Login />
      <Join />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#252a2d] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Logo1 />
          </div>
          <LoginJoin />
        </div>
      </div>
    </div>
  );
}

export default function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Header">
      <Header />
    </div>
  );
}