import imageAssets from "../../assets";

const First = () => {
  return (
    <div className=" relative  bg-backgroundClr flex flex-col items-center justify-center px-4 sm:px-6">

      <img src={imageAssets.About_First_1} 
           alt=""
           className="absolute top-[-15%] left-[25%] z-0 block" />

      <img src={imageAssets.About_First_2} 
           alt=""
           className="absolute top-[75%] left-[-15%] z-0 block" />
      
      
      <img src={imageAssets.About_Star} 
           alt=""
           className="absolute top-40 left-32 z-0 block" />


      <img src={imageAssets.About_Star} 
           alt=""
           className="absolute top-20 right-64 z-0 block" />


      <img src={imageAssets.About_Star} 
           alt=""
           className="absolute bottom-[-10%] left-60 w-[8%] h-[8%]  z-0 block" />


      <img src={imageAssets.About_Star} 
           alt=""
           className="absolute bottom-[-10%] right-36 z-0 block" />
      


      <div className="text-3xl sm:text-4xl lg:text-60 font-heading font-6 text-center text-textDefaultClr mt-[6rem] lg:mt-[13rem] max-w-[900px] leading-tight">
       IoT Solutions That Power
        <br />
        the Connected
        <br />
         World
      </div>

      <p className="font-body text-sm sm:text-[14px] text-center text-textDisableClr max-w-[750px] font-5 mt-4">
        From circuit to cloud, Resonent Technolabs delivers complete IoT product design Hardware, Firmware, Cloud & Mobile Apps all engineered for performance, scalability, and compliance.
      </p>
    </div>
  );
};
export default First;