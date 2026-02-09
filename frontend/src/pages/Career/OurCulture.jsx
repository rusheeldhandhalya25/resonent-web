import imageAssets from "../../assets";

const OurCulture = () => {
    return(
        <section className="bg-backgroundClr px-4 py-20">

            <div className="mx-auto max-w-6xl">

                <div className="relative overflow-hidden rounded-2xl">
                    <img src={imageAssets.ourCulture} 
                         alt=""
                         className="h-[600px] w-full object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-backgroundClr/90 via-backgroundClr/50 to-transparent" />
                    
                    {/* text this is  */}

                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10  text-center px-6">
                        <h2 className="text-3xl md:text-4xl font-heading text-textDefaultClr mb-3">
                            Our Culture
                        </h2>

                        <p className="max-w-2xl text-sm md:text-base text-textDisableClr">
                            We foster a dynamic environment where creativity and teamwork thrive. Join us to innovate and grow together, pushing the boundaries of what’s possible in the IoT space.
                        </p>
                    </div>
                </div>
            </div>   

        </section>
    );
};

export default OurCulture;
