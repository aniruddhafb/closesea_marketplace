import React from "react";
import Image from "next/image";
import instagram from "../assets/instagram.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#101214] pt-16">
      <div className="lg:grid grid-cols-3 items-start">
        {/* 1st */}
        <div className="col-end-4">
          <h1 className="text-center text-white font-bold text-sm">
            Join The Community
          </h1>
          <div className="flex justify-center my-6 gap-x-4">
            <Image src={instagram} height="25px" width="25px" />
            <Image src={discord} height="25px" width="25px" />
            <Image src={twitter} height="25px" width="25px" />
          </div>
        </div>

        {/* 2nd */}
        <div className="row-start-1">
          <div className="text-center text-white font-bold my-10 text-3xl">
            CloseSea
          </div>
          <p className="text-xs px-7 text-center text-gray-400 lg:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            deleniti ex praesentium labore! Ad possimus nam, est quasi magnam
            natus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            impedit placeat velit ipsum nesciunt magnam soluta maiores quaerat
            doloribus non.
          </p>
        </div>

        {/* 3rd */}
        <div className="col-end-3 row-start-1">
          <div className="flex text-center text-white w-full my-16 px-4 text-sm justify-between lg:mt-0">
            <div>
              <h1 className="font-bold ">Trade & Swap</h1>
              <div className="flex flex-col text-gray-500 space-y-3 my-3">
                <a href="">All NFTs</a>
                <a href="">Swaps</a>
                <a href="">Create</a>
                <a href="">Top Collections</a>
                <a href="">Activity</a>
              </div>
            </div>
            <div>
              <h1 className="font-bold ">Features</h1>
              <div className="flex flex-col text-gray-500 space-y-3 my-3">
                <a href="">NFT Aggregator</a>
                <a href="">Multi-Chain + Cross-Chain</a>
                <a href="">NFT Farming</a>
                <a href="">Escrowed P2P Swaps</a>
                <a href="">Social Features</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <hr />
        <div className="md:flex lg:flex-row-reverse justify-between items-center ">
          <div className="text-xs flex flex-wrap text-[10px] justify-center space-x-3 text-white text-left my-5 gap-y-5 w-full lg:justify-end">
            <a href="">Privacy policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Helo & FAQ</a>
          </div>
          <div className="text-white text-[10px] text-center w-full md:text-right lg:text-left  ">
            &#169; 2022 All Rights Reserved
            <span className="text-blue-500"> CloseSea</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
