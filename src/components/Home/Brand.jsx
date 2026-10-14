import React from 'react';


const Brand = () => {
    return (
        <div className="bg-black py-5 ">
            <div className=" flex gap-5 flex-wrap justify-center lg:justify-between container mx-auto px-4 py-8 gap-8 items-center">
                <div className="h-6"><img src="/Logo/Versace.png" alt="Versace" /></div>
                <div className="h-6"><img src="/Logo/Zara.png" alt="Zara" /></div>
                <div className="h-6"><img src="/Logo/Gucci.png" alt="Gucci" /></div>
                <div className="h-6"><img src="/Logo/Prada.png" alt="Prada" /></div>
                <div className="h-6"><img src="/Logo/Calvin.png" alt="Calvin" /></div>
            </div>
        </div>
    );
};

export default Brand;