import svgPaths from "../imports/svg-owmx39qpfa";

interface FiltersButtonProps {
  onClick?: () => void;
  hasNotification?: boolean;
}

export function FiltersButton({ onClick, hasNotification = true }: FiltersButtonProps) {
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

  return (
    <div 
      className="bg-[#ffffff] box-border content-stretch flex h-8 items-center justify-center p-[8px] relative rounded-[16px] shrink-0 w-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
      onClick={onClick}
    >
      <IconSlidersVertical />
      {hasNotification && (
        <div className="absolute right-0 size-2 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <circle cx="4" cy="4" fill="var(--fill-0, #CC371B)" id="Ellipse 1" r="4" />
          </svg>
        </div>
      )}
    </div>
  );
}