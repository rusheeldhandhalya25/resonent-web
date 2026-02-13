import React from 'react'
import imageAssets from '../../assets';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../../components/cards/BlogCard';


const blogs = [
  {
    id: 1,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises from HIIT to walking.",
    image: imageAssets.gasSensorImg,
    date: "26 July, 2025",
  },
  {
    id: 2,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works.",
    image: imageAssets.smartEnergyImg,
    date: "26 July, 2025",
  },
  {
    id: 3,
    title: "The Best Exercises For Fat Burn",
    excerpt:
      "Looking to burn fat effectively? This guide explores the best fat-burning exercises from HIIT to walking.",
    image: imageAssets.edgeVendingImg,
    date: "26 July, 2025",
  },
  {
    id: 4,
    title: "Healthy And Satisfying Snacks",
    excerpt:
      "Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works.",
    image: imageAssets.fatBurn,
    date: "26 July, 2025",
  },
];

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
                        <p className="text-textDisableClr text-[14px] font-body font-5">
                            26 July, 2025
                        </p>
                </div>

                <h2 className='font-heading font-6 text-textDefaultClr text-40 md:text-60 leading-tight'>
                    Healthy and Satisfying Snacks to Keep You on Track
                </h2>

                <p className='font-body font-5 text-textDisableClr text-19 leading-relaxed'>
                    Are weight loss myths slowing you down? Let’s clear them up so you can focus on what actually works. Misinformation about weight loss is everywhere. You’ve probably heard advice like “just eat less” or “carbs are bad”, but how much of it is actually true?
                </p>
        </div>


        {/* image  */}
        <div className="w-full mt-10 mx-20">
            <img src={imageAssets.factoryImg} 
                 alt=""
                 className='w-full h-auto object-cover rounded-2xl' />
        </div>


        {/* text and blog grid  */}
        <div className='grid grid-cols-1 md:grid-cols-[65%_35%] gap-5 py-16 mx-1'>
            <div className='bg-backgroundClr flex flex-col gap-5'>  
                
                {/* firsr paragraph */}
                <div className='flex flex-col gap-2'>
                    <h3 className='text-textDefaultClr text-30 font-body font-5'>
                    Lorem ipsum dolor sit 
                    </h3>

                    <p className='text-textDisableClr text-19 font-body font-5 text-justify '>
                        Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment.
                    </p>

                    <p className='text-textDisableClr text-19 font-body font-5 text-justify '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/* second paragraph  */}
                <div className='flex flex-col gap-2'>
                    <h3 className='text-textDefaultClr text-30 font-body font-5'>
                    Lorem ipsum dolor sit amet
                    </h3>

                    <p className='text-textDisableClr text-19 font-body font-5 text-justify '>
                        Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment.
                    </p>

                     <ul className='list-disc pl-5 text-textDisableClr text-19 font-body font-5 space-y-2'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</li>
                    </ul>
                </div>

                {/* third paragraph */}
                 <div className='flex flex-col gap-2'>
                    <h3 className='text-textDefaultClr text-30 font-body font-5'>
                    Lorem ipsum dolor sit amet , ceonsectetur
                    </h3>

                    <p className='text-textDisableClr text-19 font-body font-5 text-justify '>
                        Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment.
                    </p>

                    <p className='text-textDisableClr text-19 font-body font-5 text-justify '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/* fourth paragraph */}

                 <div className='flex flex-col gap-2'>
                    <h3 className='text-textDefaultClr text-30 font-body font-5'>
                    Lorem ipsum dolor 
                    </h3>

                    <p className='text-textDisableClr text-19 font-body font-5 text-justify '>
                        Resonent Technolabs is a complete IoT innovation partner, seamlessly integrating electronic design, embedded firmware development, and cloud engineering within a single ecosystem. We specialize in turning conceptual ideas into robust, production-ready IoT solutions that meet industry standards and compliance requirements. From prototype to mass manufacturing, our multidisciplinary team ensures every product is intelligent, scalable, and reliable for real-world deployment.
                    </p>

                     <ul className='list-disc pl-5 text-textDisableClr text-19 font-body font-5 space-y-2'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</li>
                    </ul>
                </div>

            </div>
            


            {/* right side blogs */}
            <div className="flex flex-col gap-4">
                    <p className="text-textDefaultClr font-6 text-30 font-heading">
                    Other Featured Post
                    </p>
                    {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
        
        </div>



    </div>
  )
}

export default HealthySnackBlog