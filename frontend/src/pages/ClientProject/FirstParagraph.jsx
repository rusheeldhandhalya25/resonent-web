const FirstParagraph = () =>{
    return(
      <div className="bg-backgroundClr flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="text-3xl sm:text-4xl lg:text-60 font-heading font-6 text-center text-textDefaultClr mt-[8rem] lg:mt-[13rem] max-w-[900px] leading-tight">
        Smart Factory
        <br />
        gateway boosting
        <br />
        uptime
      </div>

      <p className="font-body text-sm sm:text-[14px] text-center text-textDisableClr max-w-[750px] font-5 mt-4 mb-10">
        Smart gateway collects machine data in real time, enabling predictive maintenance and better OEE to reduce downtime.
      </p>
    </div>
    )
}

export default FirstParagraph;