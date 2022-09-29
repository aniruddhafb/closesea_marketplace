import React from "react";
import Image from "next/image";
import ethereum from "../../assets/ethereum.png";
import polygon from "../../assets/polygon.png";
import binance from "../../assets/binance.png";
import nftImage from "../../assets/nftImage.jpg";

const Firstsection = () => {
  return (
    <div className="flex  flex-wrap justify-center items-center">
      <div className="text-white p-6 md:w-[500px]">
        <h1 className="text-[3rem] font-bold">
          All Chains <br /> One <br className="md:hidden" /> Platform
        </h1>
        <p className="text-gray-400">Create, buy, sell, swap and earn NFTs</p>

        {/* Buttons */}
        <div className="flex w-full justify-between my-6 text-center text-black font-semibold space-x-2">
          <button className="p-2 px-3 bg-white rounded-xl  w-full">
            Discover
          </button>
          <button className="p-2 px-3 border-2 bg-black border-white rounded-xl text-white w-full">
            Create
          </button>
        </div>

        {/* Icons */}
        <div className="flex justify-evenly">
          <Image src={ethereum} height="30px" width="30px" />
          <Image src={polygon} height="30px" width="30px" />
          <Image src={binance} height="30px" width="30px" />
        </div>
      </div>

      {/* Demo Image */}
      <div className="md:px-20">
        <Image src={nftImage} height="500px" width="500px" />
      </div>
    </div>
  );
};

export default Firstsection;
