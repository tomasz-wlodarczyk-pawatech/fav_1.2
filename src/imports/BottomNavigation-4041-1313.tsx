import { imgIcon, imgIcon1, imgLeft, imgRight, imgIcon2, imgIcon3 } from "./svg-87c9z";

function ProgressPercentage() {
  return <div className="absolute bg-[#8dc63f] bottom-0 left-0 right-full top-0" data-name="progress-surface" />;
}

function Body() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Body">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Add 3 legs to your betslip to earn up to a</p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Body">
      <div className="basis-0 font-['Roboto:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">1000% Win Bonus.</p>
      </div>
    </div>
  );
}

function TextGroupStart() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="text-group-start">
      <Body />
      <Body1 />
    </div>
  );
}

function ProgressBarText() {
  return (
    <div className="box-border content-stretch flex gap-3 h-[25px] items-center justify-start px-3 py-0 relative shrink-0 w-80" data-name="_progress-bar-text">
      <TextGroupStart />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <img className="block max-w-none size-full" src={imgIcon} />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#aaaeb0] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Menu</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0" data-name="_icon">
      <Icon />
      <Label />
    </div>
  );
}

function NavButton() {
  return (
    <div className="basis-0 bg-[#252a2d] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="_nav-button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <img className="block max-w-none size-full" src={imgIcon1} />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#aaaeb0] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Sports</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0" data-name="_icon">
      <Icon2 />
      <Label1 />
    </div>
  );
}

function NavButton1() {
  return (
    <div className="basis-0 bg-[#252a2d] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="_nav-button">
      <Icon3 />
    </div>
  );
}

function Ellipses() {
  return (
    <div className="basis-0 content-stretch flex grow h-16 items-start justify-start min-h-px min-w-px relative shrink-0" data-name="ellipses">
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="left">
        <img className="block max-w-none size-full" src={imgLeft} />
      </div>
      <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] size-full">
          <div className="relative size-full" data-name="right">
            <img className="block max-w-none size-full" src={imgRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <img className="block max-w-none size-full" src={imgIcon2} />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#aaaeb0] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">My Bets</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0" data-name="_icon">
      <Icon4 />
      <Label2 />
    </div>
  );
}

function NavButton2() {
  return (
    <div className="basis-0 bg-[#252a2d] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="_nav-button">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <img className="block max-w-none size-full" src={imgIcon3} />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#aaaeb0] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Account</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0" data-name="_icon">
      <Icon6 />
      <Label3 />
    </div>
  );
}

function NavButton3() {
  return (
    <div className="basis-0 bg-[#252a2d] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" data-name="_nav-button">
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon">
      <img className="block max-w-none size-full" src={imgIcon2} />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="label">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#aaaeb0] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Betslip</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[3px] items-center justify-center pb-[3px] pt-0 px-0 relative shrink-0" data-name="_icon">
      <Icon8 />
      <Label4 />
    </div>
  );
}

function NavButton4() {
  return (
    <div className="basis-0 bg-[#252a2d] box-border content-stretch flex grow h-full items-center justify-center min-h-px min-w-px pb-0 pt-1 px-0 relative rounded-[1000px] shrink-0" data-name="_nav-button">
      <div aria-hidden="true" className="absolute border-4 border-[#2f3437] border-solid inset-[-4px] pointer-events-none rounded-[1004px]" />
      <Icon9 />
    </div>
  );
}

function BetslipButton() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-1/2 size-14 translate-x-[-50%] translate-y-[-50%]" data-name="betslip_button" style={{ top: "calc(50% - 3px)" }}>
      <NavButton4 />
    </div>
  );
}

function NavButtons() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="nav-buttons">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <NavButton />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <NavButton1 />
      </div>
      <Ellipses />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <NavButton2 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <NavButton3 />
      </div>
      <BetslipButton />
    </div>
  );
}

export default function BottomNavigation() {
  return (
    <div className="bg-[#9ce800] content-stretch flex flex-col items-start justify-start relative size-full" data-name="Bottom Navigation">
      <ProgressPercentage />
      <ProgressBarText />
      <NavButtons />
    </div>
  );
}