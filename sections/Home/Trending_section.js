<<<<<<< HEAD
import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Collection_Card_Item from "../../components/Collection_Card_Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import image from "../../assets/nftImage.jpg";
import bored1 from "../../assets/bored1.webp";
import bored2 from "../../assets/bored2.webp";
import bored3 from "../../assets/bored3.webp";
import bored4 from "../../assets/bored4.webp";

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
              <ArrowLeftIcon className="h-4 w-4 left-arrow" fill="white" />
            </button>
            <button className="p-4 focus:rounded-full focus:shadow-lg focus:shadow-black ">
              <ArrowRightIcon className="h-4 w-4 right-arrow" fill="white" />
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
          navigation={{
            nextEl: ".right-arrow",
            prevEl: ".left-arrow",
          }}
          modules={[FreeMode, Pagination]}
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
            <Collection_Card_Item
              image={image}
              name={"Bored Ape Club"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored1}
              name={"Bored Ape Diamond"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored2}
              name={"Bored Ape Jungle"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored3}
              name={"Funny Ape Club"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored4}
              name={"Fatty Guys"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={image}
              name={"Real Regin"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored1}
              name={"Cool Boys Collection"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trending_section;
=======
import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Collection_Card_Item from "../../components/Collection_Card_Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import image from "../../assets/nftImage.jpg";
import bored1 from "../../assets/bored1.webp";
import bored2 from "../../assets/bored2.webp";
import bored3 from "../../assets/bored3.webp";
import bored4 from "../../assets/bored4.webp";

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
              <ArrowLeftIcon className="h-4 w-4 left-arrow" fill="white" />
            </button>
            <button className="p-4 focus:rounded-full focus:shadow-lg focus:shadow-black ">
              <ArrowRightIcon className="h-4 w-4 right-arrow" fill="white" />
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
          navigation={{
            nextEl: ".right-arrow",
            prevEl: ".left-arrow",
          }}
          modules={[FreeMode, Pagination]}
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
            <Collection_Card_Item
              image={image}
              name={"Bored Ape Club"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored1}
              name={"Bored Ape Diamond"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored2}
              name={"Bored Ape Jungle"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored3}
              name={"Funny Ape Club"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored4}
              name={"Fatty Guys"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={image}
              name={"Real Regin"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Collection_Card_Item
              image={bored1}
              name={"Cool Boys Collection"}
              description={"Lorem ipsum dolor sit amet consectetur sample..."}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trending_section;
>>>>>>> main
