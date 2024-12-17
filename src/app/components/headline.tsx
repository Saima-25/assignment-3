import Image from "next/image";
export default function Headline() {
  return (
    <div className="w-[1920px] h-[1588px] top-[921px] left-[1px] px-[220px] py-[140px] gap-[100px]">
      <div className=" w-[1480px] h-[547px] gap-[60px] flex items-center">
        <div className="w-[672px] h-[411px] gap-[60px] ">
          
          {/* headlines */}

          <div className="w-[41.7px] h-[29.98px] top-[372.11px] left-[-102.09px]">
            <div className=" text-block w-[672px] h-[288px] gap-[24px]">
              <h1 className="w-[672px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[-2px] text-[#212529] mb-[20px]">
                Project <br /> Management
              </h1>
              <p className="w-[672px] h-[90px] text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-[#212529] ">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
            {/* button */}
            <div className="w-[201px] h-[63px] px-[40px] py-[20px] gap-[10px] rounded-[6px] bg-[#4F9CF9] flex mb-[20px] ">
              <p className="w-[97px] h-[23px] text-[#FFFFFF] text-[18px] font-medium leading-[23px] tracking-[-0.02em] ">
                Get Started
              </p>
              <div className="flex items-center">
                <Image src="/Icon3.png" alt="arrow" width={16} height={1} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/image1.png"
            alt="image"
            width={748}
            height={547}
            className="gap-[4px]"
          />
        </div>
      </div>
      <div className="flex mt-[60px]">
<Image src='/circle.png' alt='image' width={710} height={661} />
      <div className="w-[670px] h-[294px] gap-[60px] ml-[60px]">
        <div className="w-[671px] h-[171px] gap-[24px] mt-[200px]">
          <h1 className="w-[670px] h-[87px] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-[#212529]">
            Work together
          </h1>
          <p className="w-[670px] h-[60px] text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-[#212529] text-left mt-[40px]">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
        </div>
        {/* button */}
        <div className="w-[186px] h-[63px] px-[40px] py-[20px] gap-[10px] rounded-[6px] bg-[#4F9CF9] mt-[40px]">
          <div className="flex items-center">
            <p className="w-[82px] h-[23px] text-white text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-left">
              Try it now
            </p>

            <Image src="/Icon3.png" alt="arrow" width={16} height={1} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
