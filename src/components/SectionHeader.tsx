import { ReactNode } from 'react';

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

function Badge({ count }: { count: number }) {
  return (
    <div className="bg-[#9ce800] box-border content-stretch flex gap-2.5 items-center justify-center px-2.5 py-0.5 relative rounded-[6px] shrink-0" data-name="Badge">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">{count}</p>
      </div>
    </div>
  );
}

function Heading({ title }: { title: string }) {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Heading">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">{title}</p>
      </div>
    </div>
  );
}

function Left({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Left">
      {icon}
      <Heading title={title} />
    </div>
  );
}

function Right({ count, onClick }: { count: number; onClick?: () => void }) {
  return (
    <div 
      className="content-stretch flex gap-1 h-full items-center justify-start relative shrink-0 cursor-pointer" 
      data-name="Right"
      onClick={onClick}
    >
      <Badge count={count} />
      <ChevronRight />
    </div>
  );
}

function Body({ icon, title, count, onClick }: { 
  icon: ReactNode; 
  title: string; 
  count: number; 
  onClick?: () => void;
}) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Body">
      <Left icon={icon} title={title} />
      <div className="flex flex-row items-center self-stretch">
        <Right count={count} onClick={onClick} />
      </div>
    </div>
  );
}

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  count: number;
  onClick?: () => void;
}

export function SectionHeader({ icon, title, count, onClick }: SectionHeaderProps) {
  return (
    <div className="bg-[#f2f2f3] relative shrink-0 w-full" data-name="Section Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[8px] relative w-full">
          <Body icon={icon} title={title} count={count} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}