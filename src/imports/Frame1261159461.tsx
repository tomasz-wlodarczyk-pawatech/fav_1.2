function Button() {
  return (
    <div className="bg-[#9ce800] box-border content-stretch flex gap-2 items-center justify-center px-4 py-2 relative shrink-0 w-40" data-name="Button">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#252a2d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">APPLY FILTERS</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#2f3437] box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-2 relative shrink-0 w-40" data-name="Button">
      <div className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

export default function Frame1261159461() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <Button />
      <Button1 />
    </div>
  );
}