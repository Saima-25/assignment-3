import Image from "next/image";
export default function Footer() {
  return (
    <div
      className="w-[1920px] h-[461px] top-[5195px] left-[1px] px-[220px] 
    pt-[140px] pb-[32px] gap-[200px] bg-[#043873] ">
      <div className="w-[1480px] h-[289px] gap-[100px] flex justify-center items-center space-between m-auto relative top-[-50px]">
        {/* info */}
        <div className="w-[1480px] h-[169px] gap-[100px] flex ">
          <div className="w-[295px] h-[169px] gap-[15px] flex flex-col space-between">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={295}
            height={169}
          />
          <p className="w-[240px] h-[120px] text-[#F7F7EE] text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left">
            whitepace was created for <br />
             the new ways we live and work. We make a
            better workspace around the world
          </p>
          </div>
          {/* product */}
        <div className="flex m-auto mb-[10px]">
        <div className="w-[295px] h-[127px] gap-[15px] flex flex-col space-between">
          <p className="w-[68px] h-[22px] text-[18px] font-bold leading-[21.78px] tracking-[-0.02em] text-left text-white">Product</p>
          <p className="w-[70px] h-[20px] text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left text-[#FFE492]">Overview</p>
          <p className="w-[50px] h-[20px] text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left text-white">Pricing</p>
          <p className="w-[177px] h-[20px]text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left text-white">Customer stories</p>
        </div>
       {/* resources */}
        <div className="w-[295px] h-[130px] gap-[16px] flex flex-col space-between">
        <p className="w-[91px]h-[22px] text-[18px] font-bold leading-[21.78px] tracking-[-0.02em] text-left text-white">Resources</p>
        <p className="w-[33px] h-[20px] text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left text-white">Blog</p>
        <p className="w-[128px] h-[20px] text-white text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left">Guides & tutorials</p>
        <p className="w-[130px] h-[20px] text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left text-white">Help center</p>
        </div>

        {/* company */}
        <div className="w-[295px] h-[130px] gap-[16px] flex flex-col space-between">
          <p className="w-[83px] h-[22px] text-white text-[18px] font-bold leading-[21.78px] tracking-[-0.02em] text-left">Company</p>
          <p className="w-[66px] h-[22px] text-white text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left">About us</p>
          <p className="w-[62px] h-[22px] text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left text-white">Careers</p>
          <p className="w-[99px] h-[20px] text-white text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left">Media kit</p>
        </div>
        </div>
        </div>
        </div> 
        <hr className="w-[1480px] border border-[#2E4E73] relative top-[-30px]"/>         
        
        
  <div className="w-[1480px] h-[20px] flex justify-center items-center ">
    <p className="w-[169px] h-[20px] text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-white relative top-[-10px]">©2021 Whitepace LLC.</p>

  
      
    </div>
    </div>
  );
}
