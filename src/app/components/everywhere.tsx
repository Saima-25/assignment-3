import Image from "next/image"
export default function EveryWhere(){
    return(
        <div className="w-[1921px] h-[574px] top-[4080px] left-[1px] py-[140px] px-[220px] bg-[#043873]">
<div className="w-[1481px] h-[294px] gap-[60px] flex flex-col items-center space-between">
    <div className="w-[1064px] h-[171px] gap-[24px]">
        <h1 className="w-[1064px] h-[87px] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-white flex justify-center">Your work, everywhere you are</h1>
    <p className="w-[1064px] h-[60px] text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center text-white mt-[20px]">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
    
    <div className="flex justify-center mt-[70px]">
        <div className="w-[195px] h-[63px] rounded-[8px] py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9] flex items-center">
        <p className="w-[91px] h-[23px] text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-center text-white">Try Taskey</p>
                <div className="w-[14px] h-[7px]">
                <Image src="/Icon3.png" alt="Arrow" width={16} height={3} />
                </div>
                </div>
                </div>
    </div>
</div>
</div>   
    )
}