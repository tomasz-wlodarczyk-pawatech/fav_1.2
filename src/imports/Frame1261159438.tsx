function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1261159436() {
  return (
    <div className="bg-[#9ce800] box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[5px] py-1 relative rounded-[48px] shrink-0 size-6">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Frame1261159437() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <Icon />
      <Frame1261159436 />
    </div>
  );
}

export default function Frame1261159438() {
  return (
    <div className="bg-[#ecf9c5] relative rounded-[48px] size-full">
      <div aria-hidden="true" className="absolute border border-[#c8ed47] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start p-[8px] relative size-full">
          <Frame1261159437 />
        </div>
      </div>
    </div>
  );
}