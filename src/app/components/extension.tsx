import Image from "next/image";
export default function Extension() {
  return (
    <div className="w-[1921px] h-[759px] top-[2509px] left-[1px] py-[140px] px-[220px] gap-[98px] bg-[#043873] flex items-center">
      <div className="w-[697px] h-[294px] gap-[60px] flex flex-col justify-center">
        <div className="w-full h-[171px] gap-[24px]">
          <div className="w-[697px] h-[87px] flex items-center"> 
            <h1 className=" text-6xl font-bold leading-[87.14px] tracking-[-0.02em] text-left text-white mb-[40px]">
              Use as Extension
            </h1>
          </div>
          <div className="w-[697px] h-[60px]">
            <p className=" text-lg font-normal leading-7 tracking-[-0.02em] text-left text-white ">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
          </div>
        </div>
        <div className="w-[171px] h-[63px] px-[40px] py-[20px] gap-[10px] rounded-[6px] bg-[#4F9CF9] flex" >
          <div className="flex items-center justify-center gap-[10px] ">
            <p className="w-[67px] h-[23px] text-[18px] font-medium leading-5 tracking-[-0.02em] text-white text-left ">
              Let’s Go
            </p>
            <Image src="/Icon3.png" alt="Arrow" width={16} height={3} />
          <div className="w-[686px] h-[479px] m-[700px] mt-[500px]">
          <Image src="/image.png" alt="image" width={824} height={549} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
