import { useState } from 'react';
import { X } from 'lucide-react';

interface QuickAccessTooltipProps {
  show: boolean;
  onDismiss: (dontShowAgain?: boolean) => void;
}

export function QuickAccessTooltip({ show, onDismiss }: QuickAccessTooltipProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  if (!show) return null;

  const handleDismiss = () => {
    onDismiss(dontShowAgain);
  };

  return (
    <div className="absolute top-full left-0 mt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-300">
      {/* Arrow pointing to the icon */}
      <div className="absolute -top-1 left-2 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45 transform"></div>
      
      {/* Tooltip content */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 min-w-[240px] max-w-[280px]">
        <div className="flex items-start gap-2 mb-3">
          <div className="flex-1">
            <p className="text-xs text-gray-600 leading-relaxed">
              Quick access to Sports, Live, Casino & Virtuals
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-0.5 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Dismiss tooltip"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
        
        {/* Checkbox option */}
        <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
          <input
            type="checkbox"
            id="dont-show-again"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
            className="w-3 h-3 text-gray-600 rounded border-gray-300 focus:ring-gray-500 focus:ring-1"
          />
          <label
            htmlFor="dont-show-again"
            className="text-xs text-gray-500 cursor-pointer select-none"
          >
            Don't show this again
          </label>
        </div>
      </div>
    </div>
  );
}