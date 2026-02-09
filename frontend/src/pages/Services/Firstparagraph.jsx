import imageAssets from "../../assets";

const First = () => {
  return (
    <div className=" relative  bg-backgroundClr flex flex-col items-center justify-center px-4 sm:px-6 pb-10">

      <img src={imageAssets.aboutFirst1} 
           alt=""
           className="absolute top-[-15%] left-[25%] z-0 block" />

      <img src={imageAssets.aboutFirst2} 
           alt=""
           className="absolute top-[75%] left-[-15%] z-0 block" />


      <img src={imageAssets.aboutStar} 
                 alt=""
                 className="absolute top-[15%] left-[6%] w-8 h-8 sm:top-[20%] sm:left-[8%] sm:w-12 sm:h-12 lg:left-[10%] lg:w-auto lg:h-auto z-0 block" />
      
      
            <img src={imageAssets.aboutStar} 
                 alt=""
                 className="absolute top-[10%] right-[4%] w-8 h-8 sm:top-[20%] sm:right-[15%] sm:w-12 sm:h-12 lg:right-[18%] lg:w-auto lg:h-auto z-0 block" />


      <img src={imageAssets.aboutStar} 
           alt=""
           className="absolute bottom-[-11%] left-[15%] w-8 h-8 sm:bottom-[-8%] sm:left-[15%] sm:w-12 sm:h-12 lg:bottom-[-10%] lg:left-60 lg:w-[8%] lg:h-[8%] z-0 block" />


      <img src={imageAssets.aboutStar} 
           alt=""
           className="absolute bottom-[1%] right-[10%] w-8 h-8 sm:bottom-[-8%] sm:right-[15%] sm:w-12 sm:h-12 lg:bottom-[-10%] lg:right-36 lg:w-[8%] lg:h-[8%] z-0 block" />
      


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