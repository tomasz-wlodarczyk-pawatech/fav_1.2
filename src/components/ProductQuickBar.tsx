import React from "react";
import Cherry from "../imports/Cherry-2-962";

type ProductQuickBarProps = {
  visible: boolean;
  top: number; // exact offset under header
  onNavigate: (path: string) => void;
};

const IconBall = () => (
  <svg className="w-4 h-4 text-[#9CE800]" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" />
  </svg>
);
const IconBolt = () => (
  <svg className="w-4 h-4 text-[#9CE800]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);
const IconCherry = () => (
  <div className="w-4 h-4 text-[#9CE800]">
    <Cherry />
  </div>
);
const IconGrid = () => (
  <svg className="w-4 h-4 text-[#9CE800]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
  </svg>
);

export function ProductQuickBar({ visible, top, onNavigate }: ProductQuickBarProps) {
  return (
    <div
      className={[
        "fixed left-0 right-0 z-40",
        "border-b border-gray-200",
        "transition-all duration-200",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      ].join(" ")}
      style={{ top, background: "#FFFFFF" }} // fully opaque and flush under header
      aria-hidden={!visible}
    >
      <div className="px-4 py-2">
        {/* Horizontal scroll on small screens; grid on >=sm */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar sm:grid sm:grid-cols-4 sm:overflow-x-visible">
          <button
            onClick={() => onNavigate("/sports")}
            className="flex-none sm:flex-auto inline-flex items-center justify-center gap-2 rounded-full bg-gray-100 h-9 px-3 text-sm font-medium active:opacity-90"
            aria-label="Sports"
          >
            <IconBall /><span>Sports</span>
          </button>
          <button
            onClick={() => onNavigate("/sports?filter=live")}
            className="flex-none sm:flex-auto inline-flex items-center justify-center gap-2 rounded-full bg-gray-100 h-9 px-3 text-sm font-medium active:opacity-90"
            aria-label="Live"
          >
            <IconBolt /><span>Live</span>
          </button>
          <button
            onClick={() => onNavigate("/casino")}
            className="flex-none sm:flex-auto inline-flex items-center justify-center gap-2 rounded-full bg-gray-100 h-9 px-3 text-sm font-medium active:opacity-90"
            aria-label="Casino"
          >
            <IconCherry /><span>Casino</span>
          </button>
          <button
            onClick={() => onNavigate("/virtuals")}
            className="flex-none sm:flex-auto inline-flex items-center justify-center gap-2 rounded-full bg-gray-100 h-9 px-3 text-sm font-medium active:opacity-90"
            aria-label="Virtuals"
          >
            <IconGrid /><span>Virtuals</span>
          </button>
        </div>
      </div>
    </div>
  );
}