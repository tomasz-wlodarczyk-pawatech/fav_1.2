import { useEffect } from "react";
import svgPaths from "../imports/svg-oils74kz5b";

interface HelpDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function IconContent() {
  return (
    <div className="relative shrink-0 size-3" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-content">
          <path d={svgPaths.p189f7200} fill="var(--fill-0, #E6E7E2)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function CloseX({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#353b40] box-border content-stretch flex items-center justify-end p-[3px] relative rounded-[2px] shrink-0 hover:bg-[#404651] transition-colors" 
      data-name="close-x"
    >
      <IconContent />
    </button>
  );
}

function Frame1261159458({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-end relative shrink-0">
      <CloseX onClick={onClose} />
    </div>
  );
}

function IconContent1() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <g id="shape">
            <path d={svgPaths.p2850df0} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p23e14080} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p12a66900} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p19e084c0} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.pc98f580} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p38109000} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p227da800} fill="var(--fill-0, #AAAEB0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Megaphone() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="megaphone">
      <IconContent1 />
    </div>
  );
}

function Frame1261158881() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Support Chat</p>
      </div>
    </div>
  );
}

function Frame1261158968() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 flex-1">
      <Megaphone />
      <Frame1261158881 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ff7a00] box-border content-stretch flex h-[18px] items-center justify-center min-w-[18px] px-1 py-0 relative rounded-[1200px] shrink-0" data-name="badge">
      <Body />
    </div>
  );
}

function Frame1261158884() {
  return (
    <button className="bg-[#ffffff] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full hover:bg-[#f8f9fa] transition-colors">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Frame1261158968 />
          <Badge />
        </div>
      </div>
    </button>
  );
}

function IconContent2() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <g id="shape">
            <path d={svgPaths.p3351d00} fill="var(--fill-0, #AAAEB0)" />
            <path d={svgPaths.p2d922ff0} fill="var(--fill-0, #AAAEB0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MyAccount() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="my-account">
      <IconContent2 />
    </div>
  );
}

function Frame1261158110() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-0.5 grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-left">Free Callback</p>
      </div>
    </div>
  );
}

function Frame1261158972() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-start justify-start min-h-px min-w-px relative shrink-0">
      <MyAccount />
      <Frame1261158110 />
    </div>
  );
}

function IconContent3() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <path d={svgPaths.pfcb9700} fill="var(--fill-0, #252A2D)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="content-stretch flex items-center justify-center relative" data-name="chevron-right">
      <IconContent3 />
    </div>
  );
}

function Component5() {
  return (
    <button className="bg-[#ffffff] relative shrink-0 w-full hover:bg-[#f8f9fa] transition-colors" data-name="Component 5">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-2 items-start justify-start p-[12px] relative w-full">
          <Frame1261158972 />
          <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
            <div className="flex-none rotate-[90deg]">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function IconContent4() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <g id="shape">
            <path clipRule="evenodd" d={svgPaths.p274927f0} fill="var(--fill-0, #AAAEB0)" fillRule="evenodd" />
            <path d={svgPaths.p239edc00} fill="var(--fill-0, #AAAEB0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MyBets() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="my-bets">
      <IconContent4 />
    </div>
  );
}

function Frame1261158882() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Help Center</p>
      </div>
    </div>
  );
}

function Frame1261158973() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <MyBets />
      <Frame1261158882 />
    </div>
  );
}

function IconContent5() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <path d={svgPaths.pfcb9700} fill="var(--fill-0, #252A2D)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="chevron-right">
      <IconContent5 />
    </div>
  );
}

function Frame1261158886() {
  return (
    <button className="bg-[#ffffff] relative shrink-0 w-full hover:bg-[#f8f9fa] transition-colors">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Frame1261158973 />
          <ChevronRight1 />
        </div>
      </div>
    </button>
  );
}

function IconContent6() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <path clipRule="evenodd" d={svgPaths.p2c72ea80} fill="var(--fill-0, #AAAEB0)" fillRule="evenodd" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function Statement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="statement">
      <IconContent6 />
    </div>
  );
}

function Frame1261158883() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">More on betPawa</p>
      </div>
    </div>
  );
}

function Frame1261158974() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <Statement />
      <Frame1261158883 />
    </div>
  );
}

function IconContent7() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon-content">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-content">
          <path d={svgPaths.pfcb9700} fill="var(--fill-0, #252A2D)" id="shape" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="chevron-right">
      <IconContent7 />
    </div>
  );
}

function Frame1261158885() {
  return (
    <button className="bg-[#ffffff] relative shrink-0 w-full hover:bg-[#f8f9fa] transition-colors">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Frame1261158974 />
          <ChevronRight2 />
        </div>
      </div>
    </button>
  );
}

function Frame1261158943() {
  return (
    <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-full">
      <Frame1261158884 />
      <Component5 />
      <Frame1261158886 />
      <Frame1261158885 />
    </div>
  );
}

function Frame1261158941() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#8e9499] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Help</p>
      </div>
      <Frame1261158943 />
    </div>
  );
}

export function HelpDrawer({ isOpen, onClose }: HelpDrawerProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[9998] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full bg-[#f4f5f0] transform transition-transform duration-300 ease-in-out z-[9999] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-end relative size-full">
          <div className="box-border content-stretch flex flex-col gap-3 items-end justify-start pb-8 pt-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative size-full max-w-2xl ml-auto">
            <Frame1261159458 onClose={onClose} />
            <Frame1261158941 />
          </div>
        </div>
      </div>
    </>
  );
}