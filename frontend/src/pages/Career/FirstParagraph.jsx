import imageAssets from "../../assets";

const FirstParagraph = () => {
    return(
       <div className="relative">

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

         <div className="bg-backgroundClr flex flex-col items-center justify-center px-4 sm:px-6 mb-10">
      <div className="text-3xl sm:text-4xl lg:text-60 font-heading font-6 text-center text-textDefaultClr mt-[8rem] lg:mt-[13rem] max-w-[900px] leading-tight">
        Build the Future of 
        <br />
        Connected Technology
        
      </div>

      <p className="font-body text-sm sm:text-[14px] text-center text-textDisableClr max-w-[750px] font-5 mt-4 mb-10">
       join our innovates team and grow your career while shaping samrter IOT solution for industries,people and global impact sndfowndfwnf
      </p>
    </div>
       </div>
    )
}

export default FirstParagraph;