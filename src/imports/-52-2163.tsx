import svgPaths from "./svg-zsqho1vn4n";
import imgImage1 from "figma:asset/6ceab9955a6d367464a9eed8a668a214f4bad0db.png";

function IconBetslip() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon_betslip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon_betslip">
          <g id="32x32"></g>
          <path clipRule="evenodd" d={svgPaths.p3035a400} fill="var(--fill-0, #AAAEB0)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame564() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <IconBetslip />
      <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#f4f5f0] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Betslip</p>
      </div>
    </div>
  );
}

function IconArrowDown() {
  return (
    <div className="relative shrink-0 size-3" data-name="icon/arrow_down">
      <div className="absolute bottom-0 left-[-4.39%] right-[-3.95%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
          <g id="icon/arrow_down">
            <path d={svgPaths.p2f94e000} fill="var(--fill-0, white)" id="Layer 4" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame566() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
      <Frame564 />
      <IconArrowDown />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex gap-1 items-start justify-start leading-[0] right-[25px] text-[#f4f5f0] text-[14px] text-nowrap text-right top-[5px]">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre">{`Balance: `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre">GH¢ 882.10</p>
      </div>
    </div>
  );
}

function IconGenericClose() {
  return (
    <div className="relative size-4" data-name="icon/Generic/Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/Generic/Close">
          <path clipRule="evenodd" d={svgPaths.p2055c000} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-7 relative shrink-0 w-[172px]">
      <Frame30 />
      <div className="absolute flex items-center justify-center left-[156px] size-4 top-1.5">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconGenericClose />
        </div>
      </div>
    </div>
  );
}

function Frame565() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-3 top-1/2 translate-y-[-50%] w-[336px]">
      <Frame566 />
      <Frame5 />
    </div>
  );
}

function HeaderBetslip() {
  return (
    <div className="bg-[#252a2d] h-10 overflow-clip relative shrink-0 w-[360px]" data-name="Header/Betslip">
      <Frame565 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <HeaderBetslip />
    </div>
  );
}

function Frame1261159253() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <Frame117 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Heading">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">Booking code:</p>
      </div>
    </div>
  );
}

function TextMain() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="text-main">
      <div className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#8e9499] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[18px] overflow-inherit">Enter booking code</p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[3px] grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="text-container">
      <TextMain />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#ffffff] h-8 relative shrink-0 w-full" data-name="input-field">
      <div aria-hidden="true" className="absolute border border-[#e6e7e2] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[3px] h-8 items-center justify-start px-2.5 py-0 relative w-full">
          <TextContainer />
        </div>
      </div>
    </div>
  );
}

function Frame1261159251() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
      <Heading />
      <InputField />
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Button-text">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">load BETSLIP</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#9ce800] h-9 relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-3 py-0 relative w-full">
          <ButtonText />
        </div>
      </div>
    </div>
  );
}

function Frame1261159252() {
  return (
    <div className="bg-[#f4f5f0] relative shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-[12px] relative w-full">
          <Frame1261159251 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame1261159255() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-[12px] relative w-full">
          <Frame1261159252 />
        </div>
      </div>
    </div>
  );
}

function Frame1261159254() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <Frame1261159253 />
      <Frame1261159255 />
    </div>
  );
}

function Frame1261157545() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#191d21] text-[20px] text-center tracking-[-0.5px] w-[311px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.28]">Betslip is empty</p>
      </div>
    </div>
  );
}

function Frame1261157546() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
      <div className="bg-center bg-cover bg-no-repeat h-[115px] shrink-0 w-[143px]" data-name="image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <Frame1261157545 />
    </div>
  );
}

function Frame1261159260() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-center justify-center relative shrink-0 w-full">
      <Frame1261159254 />
      <Frame1261157546 />
    </div>
  );
}

function Frame1261159261() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame1261159260 />
    </div>
  );
}

function ButtonText1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Button-text">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">Learn how to bet</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#252a2d] h-9 relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-3 py-0 relative w-full">
          <ButtonText1 />
        </div>
      </div>
    </div>
  );
}

function Frame1261159264() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start px-3 py-0 relative w-full">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function ButtonText2() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Button-text">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre">discover more SPORTS</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-9 relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#353b40] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-3 py-0 relative w-full">
          <ButtonText2 />
        </div>
      </div>
    </div>
  );
}

function Frame1261159265() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-0 relative w-full">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Frame1261159268() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-[360px]">
      <Frame1261159264 />
      <Frame1261159265 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-8 items-start justify-start relative size-full" data-name="-">
      <Frame1261159261 />
      <Frame1261159268 />
    </div>
  );
}