import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <>
      <div className="w-[1920px] h-[829px] py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex justicy-center items-center">
        <div className="w-[656px] h-[361px] gap-[60px] flex flex-col">
          <div className="w-[656px] h-[238px] gap-[24px]">
          <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
            Get More Done with Whitepace{" "}
          </h2>
          <p className="font-normal text-lg text-white w-[656px] h-[60px]">
            {" "}
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks{" "}
          </p>      
          </div>    
          <div className="w-[219px] h-[63px] p-[20px] gap-[10px] rounded-[8px] bg-[#4F9CF9] mt-[20px] flex">
            <p className="w-[159px] h-[23px] text-white text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-left ">Try Whitepace free</p>
            <div className="">
            <Image src='/Icon3.png' alt='arrow' width={16} height={1} className="gap-[4px]"/></div>
            </div>
            
          </div>
        
          <Image src='/hero.png' alt='image' width={824} height={549} className="gap-[4px]"/>
          
        
      </div>
    </>
  );
};

export default Hero;
