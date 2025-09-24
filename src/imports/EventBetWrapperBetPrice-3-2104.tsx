import svgPaths from "./svg-8mjce4ue1t";

function PawaFlame() {
  return (
    <div className="relative shrink-0 size-4" data-name="Pawa/flame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Pawa/flame">
          <path d={svgPaths.p12187900} id="Vector" stroke="var(--stroke-0, #CC371B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Odds() {
  return (
    <div className="content-stretch flex gap-0.5 items-center justify-end relative shrink-0 w-[49px]" data-name="odds">
      <PawaFlame />
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">4.35</p>
      </div>
    </div>
  );
}

export default function EventBetWrapperBetPrice() {
  return (
    <div className="bg-slate-100 relative rounded-[6px] size-full" data-name="event-bet-wrapper bet-price">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between overflow-clip p-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px] whitespace-pre">2</p>
          </div>
          <Odds />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}