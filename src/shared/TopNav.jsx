"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoCloseSharp } from 'react-icons/io5';

const TopNav = () => {

    const [isShown , setIsShown] = useState(false)

    const handleClose = () => {
        setIsShown(false)
        localStorage.setItem("topNav" , false)
    }


    useEffect(() => {
      const topNav = localStorage.getItem("topNav")
      console.log(topNav);

      if(topNav == "false") {
          setIsShown(topNav)
      }
    } , [])



    return (
        <div className="bg-black">
        {
            !isShown && <div className="container flex items-center mx-auto w-full text-white font-jakarta text-center py-2 ">
          <p className="flex-1">
            {" "}
            Sign up and get 20% off to your first order. {" "}
            <Link href={"/signup"} className="font-semibold border-b-2 pb-1 ">
            Sign Up Now
            </Link>
            </p>
          <IoCloseSharp onClick={() => setIsShown(true)} className="text-white " />
        </div>
        }
      </div>
    );
};

export default TopNav;