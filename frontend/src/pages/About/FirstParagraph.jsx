import imageAssets from "../../assets";

const First = () => {
  return (
    <div className= " relative   bg-backgroundClr flex flex-col items-center justify-center px-4 sm:px-6 mb-7">

          
      <img src={imageAssets.aboutFirst1} 
           alt=""
           className="absolute top-[-15%] left-[25%] z-0 block" />

      <img src={imageAssets.aboutFirst2} 
           alt=""
           className="absolute top-[75%] left-[-15%] z-0 block" />
      
           {/* top 2 star  */}
      <img src={imageAssets.aboutStar} 
           alt=""
           className="absolute top-[18%] left-[6%] w-8 h-8 sm:top-[20%] sm:left-[8%] sm:w-12 sm:h-12 lg:left-[10%] lg:w-auto lg:h-auto z-0 block" />


      <img src={imageAssets.aboutStar} 
           alt=""
           className="absolute top-[12%] right-[4%] w-8 h-8 sm:top-[20%] sm:right-[15%] sm:w-12 sm:h-12 lg:right-[18%] lg:w-auto lg:h-auto z-0 block" />

            {/* bottom 2 star  */}
      <img src={imageAssets.aboutStar} 
           alt=""
           className="absolute bottom-[-10%] left-[20%] w-[8%] h-[8%]  z-0 block" />


      <img src={imageAssets.aboutStar} 
           alt=""
           className="absolute bottom-[-10%] right-[10%] z-0 block" />
      
      
      
      
      

      

      <div className="text-60  md:text-80 font-heading font-6 text-center text-textDefaultClr mt-[6rem] lg:mt-[13rem] max-w-[900px] leading-tight">
        Engineering the
        <br />
        Connected Future
      </div>

      <p className="font-body text-19 text-center text-textDisableClr max-w-[750px] font-5 mt-4 mb-10">
        From circuit to cloud, Resonent Technolabs delivers complete IoT product design Hardware, Firmware, Cloud & Mobile Apps all engineered for performance, scalability, and compliance.
      </p>
    </div>
  );
};
export default First;