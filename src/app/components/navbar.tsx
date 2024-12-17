import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="w-[1920px] h-[92px] px-[220px] py-4 bg-[#043873] flex justify-between items-center">
        <div className="w-[191px] h-[34px] ">
          <Image
            src="/Logo.png"
            alt="Image"
            width={191} height={34}
            />
        </div>
        <div className="w-[727.5px] h-[60px] flex justify-between items-center ">
          <div className="w-[549px] h-[23px] flex-end">
            <ul className="flex  justify-between text-white">
              <li> Products</li>
              <li> Solutions</li>
              <li> Resources</li>
              <li> Pricing</li>
            </ul>
          </div>
          <div className="w-[126px] h-[60px]">
            <button className="px-10 py-4 rounded-lg bg-[#FEE492] ">
              {" "}
              Login{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
