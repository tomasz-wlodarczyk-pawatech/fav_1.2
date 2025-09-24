import imgImage1 from "figma:asset/dd07988a05d6b80a7209ecf4c08ba71a8232d022.png";

function Frame2085656176() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-start leading-[0] relative shrink-0 text-black w-[67px]">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[14px]">Latest Winning</p>
      </div>
      <div className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">₦452k</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#9ce800] box-border content-stretch flex gap-2 h-8 items-center justify-center px-4 py-2 relative rounded-[48px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">PLAY NOW</p>
      </div>
    </div>
  );
}

function Frame2085656177() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[310px]">
      <Frame2085656176 />
      <Button />
    </div>
  );
}

function Frame2085656178() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-center justify-start relative shrink-0 w-[338px]">
      <div className="aspect-[1500/400] bg-center bg-cover bg-no-repeat shrink-0 w-full" data-name="image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <Frame2085656177 />
    </div>
  );
}

export default function Frame2085656179() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-0 py-0.5 relative rounded-[16px] size-full">
      <Frame2085656178 />
    </div>
  );
}