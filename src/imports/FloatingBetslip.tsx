function Frame5() {
  return (
    <div className="bg-[#9ce800] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[5px] py-1 relative rounded-[48px] shrink-0 size-6">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[10px] w-full">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal h-3 relative shrink-0 w-[111px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px]">Add legs for up to a</p>
      </div>
      <div className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] whitespace-pre">1250% Win Bonus.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[111px]">
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-center relative shrink-0">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function FloatingBetslip() {
  return (
    <div className="bg-[#ecf9c5] relative rounded-[48px] size-full" data-name="Floating Betslip">
      <div aria-hidden="true" className="absolute border border-[#c8ed47] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-start p-[8px] relative size-full">
          <Frame6 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}