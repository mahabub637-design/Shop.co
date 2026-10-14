import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E5E5E5] pt-32 py-20 px-5">
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-15 mx-auto">
        <div className="space-y-2 gap-10 col-span-2 md:col-span-1 lg:col-span-2">
          <div>
            <button className="font-anton tracking-wider text-2xl">
              Shop.co
            </button>

            <p className="text-black/70 max-w-[300px] mt-3">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3 mt-5">
              <div className="bg-black w-8 h-8 flex justify-center items-center border-2 border-[#CCCCCC] rounded-full p-1">
                <FaFacebookF className="text-white" />
              </div>
              <div className="bg-white w-8 h-8 flex justify-center items-center border-2 border-[#CCCCCC] rounded-full p-1">
                <FaInstagram className="text-black" />
              </div>
              <div className="bg-white w-8 h-8 flex justify-center items-center border-2 border-[#CCCCCC] rounded-full p-1">
                <FaTwitter className="text-black" />
              </div>

              <div className="bg-white w-8 h-8 flex justify-center items-center border-2 border-[#CCCCCC] rounded-full p-1">
                <FaLinkedinIn className="text-black" />
              </div>
              <div className="bg-white w-8 h-8 flex justify-center items-center border-2 border-[#CCCCCC] rounded-full p-1">
                <FaGithub className="text-black" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="uppercase text-black font-semibold">COMPANY</h2>
          <ul className="text-black/70 space-y-2 mt-3">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-black font-semibold">Help</h2>
          <ul className="text-black/70 space-y-2 mt-3">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <Link href="/terms">
              <li>Terms & Conditions</li>
            </Link>
            <Link href="/privacy">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="uppercase text-black font-semibold">FAQ</h2>
          <ul className="text-black/70 space-y-2 mt-3">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-black font-semibold">Resources</h2>
          <ul className="text-black/70 space-y-2 mt-3">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <hr className="mt-5 bg-[#CCCCCC]" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between mt-10 items-center gap-5">
        <p className="text-black/70">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <img src="/Card.png" alt="Payment Methods" />
      </div>
    </footer>
  );
};

export default Footer;
