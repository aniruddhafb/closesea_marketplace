import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import polygon from "../../assets/polygon.png";
import ethereum from "../../assets/ethereum.png";
import binance from "../../assets/binance.png";
import nftImage from "../../assets/nftImage.jpg";
const Homepage = () => {
  return (
    <div className="bg-[#1D222A] text-white">
      <Navbar />
      <div className="flex justify-center w-full">
        <div className="md:w-[400px] lg:w-full lg:flex lg:justify-around items-center">
          <div className="mt-[6vh] p-2 px-4 text-xl flex-col">
            <h1 className="text-[55px] font-bold  leading-[4rem]">
              All <span className="text-blue-500">NFTs</span> <br /> One
              Platform
            </h1>
            <p className="my-6 text-gray-500">
              Create, but, sell, swap and earn NFTs
            </p>
            <div className="flex justify-between text-center w-full  space-x-2 text-sm ">
              <button className="p-3 font-semibold bg-white text-black rounded-xl w-full">
                Discover
              </button>
              <button className="p-3 font-semibold text-white rounded-xl w-full border-[3px] border-white ">
                Create
              </button>
            </div>
            {/* cryptos */}

            {/* <div className="flex w-full justify-between">
          <Image src={polygon} />
          <Image src={ethereum} />
          <Image src={binance} />
        </div> */}
          </div>
          <div className="my-6 lg:w-1/3">
            <Image src={nftImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
