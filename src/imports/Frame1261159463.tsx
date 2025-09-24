import svgPaths from "./svg-j2z99k9d1a";
import imgImage202 from "figma:asset/b1b2d0f29c1d774ae9379d6d4b1c606d1e912539.png";

function AppIcon() {
  return (
    <div className="bg-lime-100 relative rounded-[12.677px] shrink-0 size-[68px]" data-name="App Icon">
      <div className="absolute bg-center bg-cover bg-no-repeat size-[55px] translate-x-[-50%] translate-y-[-50%]" data-name="image 202" style={{ top: "calc(50% + 0.5px)", left: "calc(50% - 0.5px)", backgroundImage: `url('${imgImage202}')` }} />
    </div>
  );
}

function Frame1261159462() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-2 py-0 top-[7px] w-80">
      <AppIcon />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#b2f42c] h-[29px] relative rounded-[100px] shrink-0 w-[74px]" data-name="Button">
      <div className="absolute font-['Roboto:Bold',_sans-serif] font-bold h-[21px] leading-[0] left-[37px] text-[#252a2d] text-[16px] text-center top-1 translate-x-[-50%] w-[38px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Open</p>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-6" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="star">
          <path d={svgPaths.pcd53300} id="Vector" stroke="var(--stroke-0, #252A2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1261159464() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-end relative shrink-0 w-[104px]">
      <Button />
      <Star />
    </div>
  );
}

function Frame1261159465() {
  return (
    <div className="absolute content-stretch flex flex-col h-[57px] items-start justify-between left-[85px] top-1.5 w-[198px]">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#000000] text-[18px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Bet Maker Pro</p>
      </div>
      <Frame1261159464 />
    </div>
  );
}

function AppCell() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="App cell">
      <Frame1261159462 />
      <Frame1261159465 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-[3px] pt-0 px-2 relative shrink-0 w-[312px]">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] mb-[-3px] relative shrink-0 text-[#7a8185] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Share predictions, follow top tipsters, leaderboards</p>
      </div>
    </div>
  );
}

export default function Frame1261159463() {
  return (
    <div className="bg-[#ffffff] relative rounded-[16px] size-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-1 py-2 relative size-full">
          <AppCell />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}