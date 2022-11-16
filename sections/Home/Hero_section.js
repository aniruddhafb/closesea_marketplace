import React from "react";
import Image from "next/image";
import ethereum from "../../assets/ethereum.png";
import polygon from "../../assets/polygon.png";
import binance from "../../assets/binance.png";
import nftImage from "../../assets/nftImage.jpg";
import bored1 from "../../assets/bored1.webp";
import bored2 from "../../assets/bored2.webp";
import bored3 from "../../assets/bored3.webp";
import bored4 from "../../assets/bored4.webp";

const Firstsection = () => {
  return (
    <div className="flex flex-wrap justify-evenly items-center">
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
        <div className="flex justify-start gap-x-2">
          <Image src={ethereum} height="30px" width="30px" />
          <Image src={polygon} height="30px" width="30px" />
          <Image src={binance} height="30px" width="30px" />
        </div>
      </div>
      {/* Demo Image */}
      <div className="grid grid-cols-2 gap-5 mt-[50px]">
        <Image src={bored1} />
        <Image src={bored2} />
        <Image src={bored3} />
        <Image src={bored4} />
      </div>
    </div>
  );
};

export default Firstsection;
