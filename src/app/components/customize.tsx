import Image from "next/image";
export default function Customize() {
  return (
    <div>
      <div className="w-[1921px] h-[812.09px] top-[3268px] left-[1px] px-[220px] py-[140px] gap-[98px] flex items-center">
        <div className="w-[714px] h-[532.09px] gap-[4px] bg-[#C4DEFD]">
          <Image src="/image2.png" alt="image" width={714} height={532} />
        </div>
        {/* heading */}
        <div className="w-[669px] h-[288px] gap-[24px]">
        <div className="w-[669px] h-[411px] gap-[60px]">
          <h1 className="w-[669px] h-[174px] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] flex jutify-center">
            Customise it to your needs
          </h1>
          <p className="w-[669px] h-[90px] text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          {/* button */}
          <div className="w-[171px] h-[63px] p-[20px_40px] gap-[10px] rounded-[8px] bg-[#4F9CF9] flex items-center">
            <p className="w-[67px] h-[23px] text-white text-[18px] font-medium leading-[23px] tracking-[-0.02em]">Let’s Go</p>
          <div className="w-[14px]h-[14px] gap-[4px]">
<Image src='/Icon3.png' alt='icon'width={14} height={14}/>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
