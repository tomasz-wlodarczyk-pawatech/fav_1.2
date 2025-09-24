import svgPaths from "./svg-i6ibvkb3dl";

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

export default function ButtonLink() {
  return (
    <div className="relative size-full" data-name="button-link">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-3 py-0 relative size-full">
          <Logo />
        </div>
      </div>
    </div>
  );
}