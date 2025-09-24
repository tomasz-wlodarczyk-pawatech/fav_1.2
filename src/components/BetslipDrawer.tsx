import svgPaths from "../imports/svg-zsqho1vn4n";
import imgImage1 from "figma:asset/6ceab9955a6d367464a9eed8a668a214f4bad0db.png";

interface BetslipDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

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
    <div className="content-stretch flex gap-1 items-center justify-end leading-[0] text-[#f4f5f0] text-[12px] sm:text-[14px] text-nowrap text-right">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre hidden sm:inline">{`Balance: `}</p>
        <p className="leading-[18px] text-nowrap whitespace-pre sm:hidden">{`Bal: `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] text-nowrap whitespace-pre">GH¢ 882.10</p>
      </div>
    </div>
  );
}

function IconGenericClose({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative size-4" data-name="icon/Generic/Close">
      <svg 
        className="block size-full cursor-pointer" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 16 16"
        onClick={onClick}
      >
        <g id="icon/Generic/Close">
          <path clipRule="evenodd" d={svgPaths.p2055c000} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame5({ onClose }: { onClose: () => void }) {
  return (
    <div className="h-7 relative shrink-0 flex items-center gap-2">
      <Frame30 />
      <div className="flex items-center justify-center size-4">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconGenericClose onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

function Frame565({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-3 right-3 top-1/2 translate-y-[-50%] w-auto">
      <Frame566 />
      <Frame5 onClose={onClose} />
    </div>
  );
}

function HeaderBetslip({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#252a2d] h-10 overflow-clip relative shrink-0 w-full" data-name="Header/Betslip">
      <Frame565 onClose={onClose} />
    </div>
  );
}

function Frame117({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <HeaderBetslip onClose={onClose} />
    </div>
  );
}

function Frame1261159253({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <Frame117 onClose={onClose} />
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
    <div className="bg-[#ffffff] h-10 sm:h-8 relative shrink-0 w-full rounded-md" data-name="input-field">
      <div aria-hidden="true" className="absolute border border-[#e6e7e2] border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[3px] h-full items-center justify-start px-3 sm:px-2.5 py-0 relative w-full">
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
    <div className="bg-[#9ce800] h-10 sm:h-9 relative shrink-0 w-full rounded-md hover:bg-[#8bd400] transition-colors cursor-pointer" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-full items-center justify-center px-3 py-0 relative w-full">
          <ButtonText />
        </div>
      </div>
    </div>
  );
}

function Frame1261159252() {
  return (
    <div className="bg-[#f4f5f0] relative shrink-0 w-full rounded-lg">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-3 sm:p-[12px] relative w-full">
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
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-3 sm:p-[12px] relative w-full">
          <Frame1261159252 />
        </div>
      </div>
    </div>
  );
}

function Frame1261159254({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <Frame1261159253 onClose={onClose} />
      <Frame1261159255 />
    </div>
  );
}

function Frame1261157545() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#191d21] text-[18px] sm:text-[20px] text-center tracking-[-0.5px] max-w-[311px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.28]">Betslip is empty</p>
      </div>
    </div>
  );
}

function Frame1261157546() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0 px-4">
      <div className="bg-center bg-cover bg-no-repeat h-[100px] sm:h-[115px] shrink-0 w-[125px] sm:w-[143px]" data-name="image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <Frame1261157545 />
    </div>
  );
}

function Frame1261159260({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-8 items-center justify-center relative shrink-0 w-full">
      <Frame1261159254 onClose={onClose} />
      <Frame1261157546 />
    </div>
  );
}

function Frame1261159261({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame1261159260 onClose={onClose} />
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
    <div className="bg-[#252a2d] h-10 sm:h-9 relative shrink-0 w-full rounded-md hover:bg-[#353b40] transition-colors cursor-pointer" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-full items-center justify-center px-3 py-0 relative w-full">
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
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start px-4 sm:px-3 py-0 relative w-full">
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
    <div className="h-10 sm:h-9 relative shrink-0 w-full rounded-md hover:bg-gray-50 transition-colors cursor-pointer" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#353b40] border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-full items-center justify-center px-3 py-0 relative w-full">
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
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 sm:px-3 py-0 relative w-full">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Frame1261159268() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full max-w-[360px] mx-auto">
      <Frame1261159264 />
      <Frame1261159265 />
    </div>
  );
}

export function BetslipDrawer({ isOpen, onClose }: BetslipDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out
        w-full sm:w-[400px] md:w-[420px] lg:w-[440px] xl:w-[460px] max-w-full
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-[#ffffff] content-stretch flex flex-col gap-4 sm:gap-6 md:gap-8 items-start justify-start relative size-full overflow-y-auto" data-name="-">
          <Frame1261159261 onClose={onClose} />
          <div className="w-full">
            <Frame1261159268 />
          </div>
        </div>
      </div>
    </>
  );
}