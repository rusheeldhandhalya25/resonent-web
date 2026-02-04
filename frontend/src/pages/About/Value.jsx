import React from 'react'
import imageAssets from '../../assets';
import ExpertiseCard from '../../components/ExpertiseCard';

function Value() {
  return (
        <div className='relative isolate '>


            <img src={imageAssets.About_Value}  
                 alt=""
                 className='absolute top-[-10%] right-0 z-0 block pointer-events-none' />


              <div className='relative z-10'>
                <h3 className="font-heading text-textDefaultClr font-6 text-3xl md:text-4xl flex items-center justify-center mb-10 mt-5 text-center">
                Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-20 z-10 ">

                <ExpertiseCard icon={imageAssets.HardwareDesign}
                                title="Integrity"
                                description="We create fresh ideas that turn technology challenges into solutions"/>
                
                <ExpertiseCard icon={imageAssets.FirmwareDevelopment}
                                title="Innovation"
                                description="We create fresh ideas that turn technology challenges into solutions"/>
                
                <ExpertiseCard icon={imageAssets.CloudWeb}
                                title="Collaboration"
                                description="Working together to achieve smarter solutions and shared success always"/>
                
                <ExpertiseCard icon={imageAssets.MobileApp}
                                title="Sustainability"
                                description="Smart engineering for a cleaner planet with lasting positive impact"/>

              </div>
              </div>
            </div>
  )
}

export default Value;