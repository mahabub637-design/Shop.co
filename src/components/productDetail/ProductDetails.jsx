"use client";
import ReviewCard from "@/components/productDetail/ReviewCard";
import { reviewData } from "@/data/reviewData";
import { ratingData, reviews } from "@/data/ratingData";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
import ProductCard from "@/shared/ProductCard";
import { recommendedProducts } from "@/data/alsoLike";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(
    "/productDetails/image 1.png",
  );

  const [selectedColor, setSelectedColor] = useState("#2D4944");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedQuantity, setSelectedQuantity] = useState("1");
  const [selectedReviewFilter, setSelectedReviewFilter] = useState("Latest");

  const handleChangeQuantity = (symbol) => {
    const newQuantity =
      symbol === "-"
        ? selectedQuantity > 1
          ? selectedQuantity - 1
          : 1
        : selectedQuantity + 1;
    setSelectedQuantity(newQuantity);
  };

  const [activeTab, setActiveTab] = useState("reviews");

  const tabs = [
    { id: "details", label: "Product Details" },
    { id: "reviews", label: "Rating & Reviews" },
    { id: "faqs", label: "FAQs" },
  ];
  const styles = {
    container: {
      width: "100%",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    tabList: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "0 16px",
    },
    tabButton: {
      background: "none",
      border: "none",
      padding: "12px 24px",
      fontSize: "14px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      outline: "none",
      marginBottom: "-1px",
    },
    divider: {
      width: "100%",
      height: "1px",
      backgroundColor: "#E5E5E5",
      marginTop: "-1px",
    },
  };

  const onClick = () => {};

  return (
    <div className="container py-10 mx-auto">
      {/* left side */}
      <div className="flex mt-5 gap-5 ">
        <div className="flex gap-5 items-start">
          <div className="space-y-4">
            <img
              src="/productDetails/image 1.png"
              width={130}
              height={130}
              alt=""
              onClick={() => setSelectedImage("/productDetails/image 1.png")}
            />

            <img
              src="/productDetails/image 5.png"
              width={150}
              height={100}
              alt=""
              onClick={() => setSelectedImage("/productDetails/image 5.png")}
            />

            <img
              src="/productDetails/image 6.png"
              width={150}
              height={100}
              alt=""
              onClick={() => setSelectedImage("/productDetails/image 6.png")}
            />
          </div>

          <div className="w-[550px] aspect-square relative">
            <img
              src={selectedImage}
              alt=""
              layout="fill"
              className="w-full h-full"
            />
          </div>
        </div>

        {/*Right side*/}
        <div className="space-y-5">
          <h1 className="text-3xl font-syne font-bold">
            One Life Graphic T-shirt
          </h1>

          <div className="mb-5">
            <div className="flex mb-5 items-center ">
              <Rating
                readonly
                initialValue={4.5}
                allowFraction={true}
                emptyColor="#ddd"
                size={22}
              />
              <span className="ml-1">{4.5}/5</span>
            </div>

            <div className="flex mb-5 gap-3">
              <p className="font-semibold text-3xl">$250</p>
              <p className="font-semibold text-3xl text-black/50 line-through">
                $300
              </p>
              <p className="bg-red-100 text-xl text-red-500 px-4 py-1 rounded-full  ">
                -40%
              </p>
            </div>
            <p className="text-black/70 mb-5">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and <br /> breathable fabric, it offers superior
              comfort and style.
            </p>

            <hr className="text-black/40" />

            <p className="mt-5">Select Colors</p>

            <div className="flex mt-5 mb-5 gap-3">
              {["#4E4530", "#2D4944", "#2D2F48"].map((item) => (
                <div
                  onClick={() => setSelectedColor(item)}
                  style={{ backgroundColor: item }}
                  className={`w-10 flex justify-center items-center h-10 rounded-full`}
                >
                  {selectedColor == item && <FaCheck className="text-white" />}
                </div>
              ))}
            </div>

            <hr className="text-black/40" />

            <p className="mt-5">Choose Size</p>

            <div className="flex gap-5 flex-wrap mt-4 mb-4">
              {["Small", "Medium", "Large", "X-Large"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedSize(item)}
                  className={`p-3 px-5 h-fit rounded-full ${
                    selectedSize === item
                      ? "bg-black text-white"
                      : "bg-base-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <hr className="text-black/40" />

          <div className="flex mt-5 gap-5">
            <div className="w-[150px] px-5 py-2 flex justify-between items-center rounded-full bg-base-300">
              <FaMinus onClick={() => handleChangeQuantity("-")} />
              <span>{selectedQuantity}</span>
              <FaPlus onClick={() => handleChangeQuantity("+")} />
            </div>
            <Link href="/cart">
              <button className="px-5 py-2 bg-black text-white flex-1 rounded-full">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" w-full mt-10">
        <div style={styles.container}>
          <div style={styles.tabList}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    ...styles.tabButton,
                    color: isActive ? "#000000" : "#8A8A8A",
                    fontWeight: isActive ? "500" : "400",
                    borderBottom: isActive
                      ? "2px solid #000000"
                      : "2px solid transparent",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div style={styles.divider} />
        </div>
      </div>

      <div className="flex justify-between start-end items-center mt-5">
        <h2 className="text-lg font-anton">All Reviews (120)</h2>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="">
            Latest <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm "
          >
            {["Latest", "High", "Low"].map((item) => (
              <li onClick={() => setSelectedReviewFilter(item)}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {reviews?.map((item) => (
          <ReviewCard item={item} s />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={onClick}
          className="rounded-full border border-gray-200 bg-white px-12 py-4 text-base font-medium text-black transition hover:bg-gray-200 active:scale-95"
        >
          Load More Reviews
        </button>
      </div>
      <div className="mt-2">
        <h2 className="text-4xl md:text-5xl text-center font-anton py-10 uppercase">
          You might also like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {recommendedProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
