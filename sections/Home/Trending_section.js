import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Collection_Card_Item from "../../components/Collection_Card_Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Trending_section = () => {
  return (
    <div className="mt-10 px-5 w-full">
      <div>
        <div className="flex flex-wrap justify-between px-2 w-full">
          {/* TITLE */}
          <div className="flex  items-center space-x-2  ">
            <div className="border-[3px] bg-[#0099FA] border-[#0099FA]  h-7 rounded-xl text-white"></div>
            <h1 className="text-white font-bold text-xl">
              Trending Collections
            </h1>
          </div>

          {/* NAVIGATION BTN */}
          <div className="space-x-2 my-5">
            <button className="p-4  focus:rounded-full focus:shadow-lg focus:shadow-black">
              <ArrowLeftIcon className="h-4 w-4 " fill="white" />
            </button>
            <button className="p-4 focus:rounded-full focus:shadow-lg focus:shadow-black ">
              <ArrowRightIcon className="h-4 w-4 " fill="white" />
            </button>
          </div>
        </div>
      </div>

      {/* Collection Cards */}
      <div className="flex justify-between items-center">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={false}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className=""
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <Collection_Card_Item />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trending_section;
