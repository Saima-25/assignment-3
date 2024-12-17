import Image from "next/image";
export default function OurSponsor() {
  return (
    <div className="w-[1922px] h-[538px] top-[4654px] px-[220px] py-[140px] gap-[100px] flex flex-col justify-center">
      <h1 className="w-[1482px] h-[87px] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-center mt-[80px]">
        Our sponsors
      </h1>
      <div className="w-[1482px] h-[71px] flex space-between justify-between items-center mb-[80px]">
        <Image
          src="/Apple.png"
          alt="AppleBrand"
          width={55.47}
          height={68}
          className="gap-[4px]"
        />

        <Image
          src="/microsoft 1.png"
          alt="Microsoft 1"
          width={287}
          height={62}
          className="gap-[4px]"
        />

        <Image
          src="/Slack.png"
          alt="Microsoft 1"
          width={280}
          height={71}
          className="gap-[4px]"
        />

        <Image
          src="/google.png"
          alt="Microsoft 1"
          width={211}
          height={69.81}
          className="gap-[4px]"
        />
      </div>
    </div>
  );
}
