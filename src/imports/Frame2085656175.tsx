import imgJetxThumbnailNewMin1 from "figma:asset/7f31af3b9fed694e1a8e19fefd7c9460f7ecb824.png";
import imgAirAce200X2001 from "figma:asset/fde6ccb801bde126e1e795ff74c16a71b42f67d4.png";
import imgFm2Thumbnail11Min11 from "figma:asset/e489fa49c263dc14bb6a983cb4686a5b00d8f849.png";

function Frame2085656174() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[308px]">
      <div className="flex flex-col font-['SF_Compact:Semibold',_sans-serif] font-[656.2] justify-center leading-[0] relative shrink-0 text-[18px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Popular Games</p>
      </div>
    </div>
  );
}

function Frame2085656130() {
  return (
    <div className="content-stretch flex gap-1.5 h-3.5 items-center justify-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-1.5">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #FB1F8D)" id="Ellipse 48" r="3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Compact:Semibold',_sans-serif] font-[656.2] justify-center leading-[0] relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#fb1f8d]">512</span> <span className="font-['SF_Compact:Regular',_sans-serif] font-[457.9]">playing</span>
        </p>
      </div>
    </div>
  );
}

function Frame2085656165() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-center relative shrink-0 w-[102px]">
      <div className="bg-center bg-cover bg-no-repeat h-[118px] rounded-[12px] shrink-0 w-[102px]" data-name="Jetx Thumbnail new-min 1" style={{ backgroundImage: `url('${imgJetxThumbnailNewMin1}')` }} />
      <Frame2085656130 />
    </div>
  );
}

function Frame2085656131() {
  return (
    <div className="content-stretch flex gap-1.5 h-3.5 items-center justify-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-1.5">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #FB1F8D)" id="Ellipse 48" r="3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Compact:Semibold',_sans-serif] font-[656.2] justify-center leading-[0] relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#fb1f8d]">321</span> <span className="font-['SF_Compact:Regular',_sans-serif] font-[457.9]">playing</span>
        </p>
      </div>
    </div>
  );
}

function Frame2085656166() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-[102px]">
      <div className="bg-center bg-cover bg-no-repeat h-[118px] rounded-[12px] shrink-0 w-full" data-name="Air Ace 200x200 1" style={{ backgroundImage: `url('${imgAirAce200X2001}')` }} />
      <Frame2085656131 />
    </div>
  );
}

function Frame2085656132() {
  return (
    <div className="content-stretch flex gap-1.5 h-3.5 items-center justify-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-1.5">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #FB1F8D)" id="Ellipse 48" r="3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['SF_Compact:Semibold',_sans-serif] font-[656.2] justify-center leading-[0] relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#fb1f8d]">21</span> <span className="font-['SF_Compact:Regular',_sans-serif] font-[457.9]">playing</span>
        </p>
      </div>
    </div>
  );
}

function Frame2085656167() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-[104px]">
      <div className="bg-center bg-cover bg-no-repeat h-[118px] rounded-[12px] shrink-0 w-full" data-name="FM2 Thumbnail_1 (1)-min_1 1" style={{ backgroundImage: `url('${imgFm2Thumbnail11Min11}')` }} />
      <Frame2085656132 />
    </div>
  );
}

function Frame2085656168() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-[332px]">
      <Frame2085656165 />
      <Frame2085656166 />
      <Frame2085656167 />
    </div>
  );
}

export default function Frame2085656175() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative size-full">
      <Frame2085656174 />
      <Frame2085656168 />
    </div>
  );
}