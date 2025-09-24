interface SectionBadgeProps {
  count: number;
  onClick?: () => void;
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

export function SectionBadge({ count, onClick }: SectionBadgeProps) {
  return null;
}