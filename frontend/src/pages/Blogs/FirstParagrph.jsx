import imageAssets from "../../assets";

const FirstParagraph = () =>{
    return(
      <div className="relative ">

        <img src={imageAssets.aboutFirst1} 
           alt=""
           className="absolute top-[-15%] left-[25%] z-0 block" />

      <img src={imageAssets.aboutFirst2} 
           alt=""
           className="absolute top-[55%] left-[-15%] z-0 block" />
      
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
           className="absolute bottom-[10%] left-[15%] w-[8%] h-[8%]  z-0 block" />


      <img src={imageAssets.aboutStar} 
           alt=""
           className="absolute bottom-[20%] right-[10%] z-0 block" />
      

        <div className="bg-backgroundClr flex flex-col items-center justify-center px-4 sm:px-6 pb-20 py-10">
      <div className="text-40 md:text-60 font-heading font-6 text-center text-textDefaultClr mt-[6rem] lg:mt-[10rem] max-w-[900px] leading-tight">
       Designing reliable IoT hardware for real products
      </div>

      <p className="font-body text-19 text-center text-textDisableClr max-w-[750px] font-5 mt-4 mb-10">
        A practical guide explaining key hardware principles, safety considerations, testing methods, and best practices needed to build stable, long-lasting IoT devices.
      </p>
    </div>
      </div>
    )
}

export default FirstParagraph;
