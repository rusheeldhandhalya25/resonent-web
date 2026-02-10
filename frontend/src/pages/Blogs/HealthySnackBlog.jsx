import React from 'react'
import imageAssets from '../../assets';
import { useNavigate } from 'react-router-dom';

function HealthySnackBlog() {
  const navigate = useNavigate();

  return (
    <div className='bg-backgroundClr px-4 sm:px-6 lg:px-24 py-12 flex flex-col items-center'>
     
        {/* Back Icon */}
        <div className='w-full max-w-[1000px] pt-15 mb-6'>
            <button 
                onClick={() => navigate('/blogs')}
                className='transition-transform hover:scale-110'
            >
                <img src={imageAssets.backIcon} alt="Back" className="w-12 h-12" />
            </button>
        </div>

     {/* heading text  */}
        <div className='flex flex-col gap-5 items-center max-w-[800px] text-center'>
                <div className='flex flex-row items-center gap-2'>
                        <img src={imageAssets.calendarIcon}
                            alt="date"
                            className="w-4 h-4"
                        />
                        <p className="text-textDisableClr text-sm font-body font-5">
                            26 July, 2025
                        </p>
                </div>

                <h2 className='font-heading font-6 text-textDefaultClr text-3xl sm:text-4xl lg:text-5xl leading-tight'>
                    Healthy and Satisfying Snacks to Keep You on Track
                </h2>

                <p className='font-body font-5 text-textDisableClr text-base leading-relaxed'>
                    Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works. Misinformation about weight loss is everywhere. You’ve probably heard advice like “just eat less” or “carbs are bad”, but how much of it is actually true?
                </p>
        </div>


        {/* image  */}
        <div className="w-full mt-10 max-w-[1000px]">
            <img src={imageAssets.factoryImg} 
                 alt=""
                 className='w-full h-auto object-cover rounded-2xl' />
        </div>
    </div>
  )
}

export default HealthySnackBlog