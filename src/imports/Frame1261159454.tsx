import svgPaths from "./svg-owmx39qpfa";

function Frame1261159377() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">Popular</p>
      </div>
    </div>
  );
}

function Frame1261159379() {
  return (
    <div className="bg-[#ecf9c5] box-border content-stretch flex flex-col gap-2.5 h-8 items-center justify-center p-[8px] relative rounded-[16px] shrink-0 w-[69px]">
      <div aria-hidden="true" className="absolute border border-[#c8ed47] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1261159377 />
    </div>
  );
}

function Frame1261159378() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">Live</p>
      </div>
    </div>
  );
}

function Frame1261159385() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-8 items-center justify-center p-[8px] relative rounded-[16px] shrink-0 w-[50px]">
      <Frame1261159378 />
    </div>
  );
}

function Frame1261159380() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">Upcoming</p>
      </div>
    </div>
  );
}

function Frame1261159386() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-8 items-center justify-center p-[8px] relative rounded-[16px] shrink-0 w-[69px]">
      <Frame1261159380 />
    </div>
  );
}

function Frame1261159404() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-start relative shrink-0">
      <Frame1261159379 />
      <Frame1261159385 />
      <Frame1261159386 />
    </div>
  );
}

function IconSlidersVertical() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon / SlidersVertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / SlidersVertical">
          <path d={svgPaths.p1a56a1f0} id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1261159381() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <IconSlidersVertical />
    </div>
  );
}

function Frame1261159387() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex h-8 items-center justify-between p-[8px] relative rounded-[16px] shrink-0 w-[77px]">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">Filters</p>
      </div>
      <Frame1261159381 />
      <div className="absolute left-[69px] size-2 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #CC371B)" id="Ellipse 1" r="4" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame1261159454() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <Frame1261159404 />
      <Frame1261159387 />
    </div>
  );
}