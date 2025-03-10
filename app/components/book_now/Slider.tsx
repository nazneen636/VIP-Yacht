"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function App() {
  return (
    <>
      <div className="sliderBook rounded-[8px] overflow-hidden">
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          className="slider"
        >
          <SwiperSlide>
            <img src="/bookNow.png" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/blog1.png" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/bookNow.png" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/details2.png" className="" />
          </SwiperSlide>
        </Swiper>
        <button className="custom-prev">
          <IoIosArrowBack />
        </button>
        <button className="custom-next">
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
}
