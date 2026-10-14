"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import TopNav from "./TopNav";

const Nav = () => {

   const [isLoggedIn, setIsLoggedIn] = useState(true); 

    
  return (
    <>
      <TopNav />

      <div className="sticky top-0 bg-white z-[99]">
        <div className="max-lg:collapse container mx-auto border-b w-full">
          <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
          <label
            htmlFor="navbar-1-toggle"
            className="fixed inset-0 hidden max-lg:peer-checked:block"
          ></label>
          <div className="collapse-title navbar">
            <div className="navbar-start w-auto shrink">
              <label
                htmlFor="navbar-1-toggle"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <Link href={"/"}>
                <button className=" text-2xl font-anton tracking-wider">
                  SHOP.CO
                </button>
              </Link>
            </div>
            <div className="navbar-center shrink hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <Link href={"/products"}>
                  <li>
                    {" "}
                    <details>
                      <summary>Shop</summary>
                      <ul className="p-2 bg-white w-40 z-1">
                        <li>
                          <button>T-shirts</button>
                        </li>
                        <li>
                          <button>Shorts</button>
                        </li>
                        <li>
                          <button>Shirts</button>
                        </li>
                        <li>
                          <button>Hoodie</button>
                        </li>
                        <li>
                          <button>Jeans</button>
                        </li>
                      </ul>
                    </details>
                  </li>
                </Link>
                <li>
                  <button>On Sale</button>
                </li>
                <li>
                  <button>New Arrivals</button>
                </li>
                <li>
                  <button>Brands</button>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex-1">
              <div className="bg-gray-300 hidden lg:flex flex-1 gap-2 px-4 py-2 text-2xl items-center rounded-full">
                <CiSearch />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="text-base"
                />
              </div>
              
              {isLoggedIn ? (
                <>
                {" "}
                  <Link href={"/cart"}>
                  {" "}
                    <BiCart className="text-xl ml-2" />
                  </Link>
                  <CgProfile className="text-xl ml-2" />
                </>
              ) : (
                <Link className="ml-5" href={"/login"}>Login</Link>
              )}
            </div>
          </div>

          <div className="collapse-content !p-0 lg:hidden z-1">
            <ul className="menu absolute bg-white w-full p-2 text-black">
              <li>
                {" "}
                <details>
                  <summary>Shop</summary>
                  <ul className="p-2 bg-white w-40 z-1">
                    <li>
                      <button>T-shirts</button>
                    </li>
                    <li>
                      <button>Shorts</button>
                    </li>
                    <li>
                      <button>Shirts</button>
                    </li>
                    <li>
                      <button>Hoodie</button>
                    </li>
                    <li>
                      <button>Jeans</button>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <button>On Sale</button>
              </li>
              <li>
                <button>New Arrivals</button>
              </li>
              <li>
                <button>Brands</button>
              </li>
            </ul>
          </div>
          <div className="bg-gray-300 lg:hidden flex gap-2 px-4 py-2 text-2xl items-center w-full rounded mx-1">
            <CiSearch />
            <input
              type="text"
              placeholder="Search for products..."
              className="text-base"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
