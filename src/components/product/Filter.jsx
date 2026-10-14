"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Filter = () => {
  const [value, setValue] = useState([10, 500]);
  const [openSize, setOpenSize] = useState(true);
  const [openDressStyle, setOpenDressStyle] = useState(true);

  const category = [
    { name: "T-shirts", value: "t-shirts" },
    { name: "Shorts", value: "shorts" },
    { name: "Shirts", value: "shirts" },
    { name: "Hoodie", value: "hoodie" },
    { name: "Jeans", value: "jeans" },
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const styles = [
    { name: "Casual", value: "casual" },
    { name: "Formal", value: "formal" },
    { name: "Party", value: "party" },
    { name: "Gym", value: "gym" },
  ];

  const updateSlider = (value) => {
    console.log(value);
    setValue(value);
  };

  const handleApplyFilter = () => {
    alert("Filter confirmed!");
  };

  return (
    <div className="p-5 border rounded-xl border-black/50">
      <h2 className="text-2xl font-semibold">Filter</h2>
      <hr className="text-black/50 my-5" />

      {/* Category filter */}
      <div className="space-y-3">
        {category?.map((item) => (
          <div className="flex text-black/70 justify-between">
            <span>{item?.name}</span>
            <span>
              <IoIosArrowForward />
            </span>
          </div>
        ))}
      </div>

      {/* Price filter */}
      <div>
        <hr className="text-black/50 my-5" />
        <h2 className="text-2xl font-semibold">Price</h2>
        <RangeSlider max={500} value={value} onInput={updateSlider} />
        <div className="flex text-lg mt-4 font-semibold justify-between">
          <span>${value?.[0]?.toFixed(2)}</span>
          <span>${value?.[1]?.toFixed(2)}</span>
        </div>

        {/* Size filter */}
        <div>
          <hr className="text-black/50 my-5" />
          <div
            onClick={() => setOpenSize(!openSize)}
            className="flex justify-between "
          >
            <h2 className="text-2xl font-semibold">Size</h2>
            <MdOutlineKeyboardArrowUp
              className={`text-3xl duration-300 ${openSize ? "rotate-0" : "rotate-180 "}`}
            />
          </div>
          <div
            className={` ${openSize ? "h-[300px]" : "h-0"} duration-300 overflow-hidden flex gap-4 flex-wrap mt-4`}
          >
            {sizes.map((item) => (
              <div className="p-3 px-5 h-fit inline bg-base-300 rounded-full">
                {item}
              </div>
            ))}
          </div>

          {/* {Dress Style Filter} */}
          <div>
            <hr className="text-black/50 my-5" />
            <div
              onClick={() => setOpenDressStyle(!openDressStyle)}
              className="flex justify-between "
            >
              <h2 className="text-2xl font-semibold">Dress Style</h2>
              <MdOutlineKeyboardArrowUp
                className={`text-3xl duration-300 ${openDressStyle ? "rotate-0" : "rotate-180 "}`}
              />
            </div>

            <div
              className={` ${openDressStyle ? "h-[180px]" : "h-0"} duration-300 overflow-hidden gap-4 mt-5 space-y-3`}
            >
              {styles?.map((item) => (
                <div className="flex text-black/70 justify-between">
                  <span>{item?.name}</span>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleApplyFilter}
          className="btn btn-neutral lg:items-center mt-5 w-full lg:w-auto"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
