import React from 'react';


const Banner = () => {
    return (
       <div className="bg-[#F2F0F1]">
         <div className="flex flex-col lg:flex-row container mx-auto px-4 py-8 gap-8 items-center">
            <div className="flex-1 mt-10 lg:mt-0">
                <h2 className="text-4xl lg:text-6xl font-syne font-bold">FIND CLOTHES<br/> THAT MATCHES<br/> YOUR STYLE</h2>
                <p className='text-black/70 my-5 w-full lg:max-w-[560px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="btn bg-black text-white px-8 rounded-full">Shop Now</button>
                <div className="flex gap-5 lg:gap-10 mt-10">
                    <div className="border-r-1 border-r-black/70 pr-5 lg:pr-10">
                        <h3 className="text-2xl md:text-3xl font-semibold">200+</h3>
                        <p className="text-black/70 font-syne text-sm md">International Brands</p>
                    </div>
                    <div className="border-r-1 border-r-black/70 pr-5 lg:pr-10">
                        <h3 className="text-2xl md:text-3xl font-semibold">2,000+</h3>
                        <p className="text-black/70 font-syne text-sm md">High-Quality Products</p>
                    </div>
                    <div className="">
                        <h3 className="text-2xl md:text-3xl font-semibold">30,000+</h3>
                        <p className="text-black/70 font-syne text-sm md:text-base">Happy Customers</p>
                    </div>

                </div>
            </div>
            <div className="flex-1 relative">
                <img src="/Banner.png" alt="Banner" />
                <img src="/Vector.svg" alt="Vector" className='absolute w-10 h-10 lg:w-auto lg:h-auto top-20 right-10 ' />
                <img src="/Vector.svg" alt="Vector" className='absolute top-1/2 left-16 w-10 -translate-y-1/2 ' />
            </div>
        </div>
       </div>
    );
};

export default Banner;