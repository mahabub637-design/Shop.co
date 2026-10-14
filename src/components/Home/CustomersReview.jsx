"use client";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { reviewData } from "../../data/reviewData";
import { FaArrowLeftLong } from "react-icons/fa6";

const SwiperChild = () => {
  const Swiper = useSwiper();
  return (
    <div>
      <button
        onClick={() => Swiper.slidePrev()}
        className="absolute top-0 z-50 right-12 text-xl"
      >
        <FaArrowLeftLong />
      </button>
      <button
        onClick={() => Swiper.slideNext()}
        className="absolute top-0 z-50 right-0 text-xl"
      >
        <FaArrowLeftLong className="rotate-180" />
      </button>
    </div>
  );
};

const CustomersReview = () => {
  return (
    <div className="container mx-auto px-5 my-8">
      <h2 className="text-5xl max-w-150 font-anton -mb-8 relative z-999 font-bold uppercase">
        OUR HAPPY CUSTOMERS
      </h2>

      <Swiper
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{
          delay: 2000,
        }}
        className="mySwiper"
      >
        {reviewData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="p-5 border border-black/50 h-50 rounded-2xl mt-10">
              <Rating
                readonly
                initialValue={item.rating}
                allowFraction={true}
                emptyColor="#ddd"
                size={22}
              />
              <h2 className="text-xl my-3 font-semibold flex gap-2">
                {item.name}
                {item.verified && <img src="/tikmark.svg" alt="Verified" />}
              </h2>
              <p className="text-black/70">"{item.comment}"</p>
            </div>
          </SwiperSlide>
        ))}
        <SwiperChild />
      </Swiper>
    </div>
  );
};

export default CustomersReview;
