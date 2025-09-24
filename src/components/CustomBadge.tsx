import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CustomBadgeProps {
  count: number;
  onClick?: () => void;
  navigateToApps?: boolean;
  tabName?: string;
}

export function CustomBadge({ count, onClick, navigateToApps = false, tabName = "Popular Apps" }: CustomBadgeProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateToApps) {
      navigate(`/apps?tab=${encodeURIComponent(tabName)}`);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className="w-12 h-6 cursor-pointer" onClick={handleClick}>
      <div className="content-stretch flex gap-0 items-center justify-center relative size-full">
        <div className="bg-[#9ce800] rounded-[12px] size-full">
          <div className="box-border content-stretch flex items-center justify-center pl-2 pr-0.5 py-0.5 relative size-full">
            <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[16px] whitespace-pre">{count}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#252a2d]" />
          </div>
        </div>
      </div>
    </div>
  );
}