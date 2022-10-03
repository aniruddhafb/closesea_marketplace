import {
  ClipboardDocumentIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { React, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { ShareIcon } from "@heroicons/react/24/solid";

const menus = [
  "Items",
  "Activity",
  "Swaps Received",
  "Swaps Made",
  "Offers Received",
];

const profile = () => {
  const [userAddress, setUserAddress] = useState("");
  const [nfts, setNfts] = useState([]);

  const fetchNFTs = async () => {
    const response = await fetch(
      `https://api.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:${userAddress}`
    );
    const data = await response.json();
    setNfts(data.items);
    // debugger;
  };

  useEffect(() => {
    const userWallet = localStorage.getItem("walletAddress");
    setUserAddress(userWallet);
    fetchNFTs();
  });

  return (
    <div>
      <Navbar />
      <div>
        {/* HEADER */}
        <div className="h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-bl-full"></div>
        <div className="flex items-center justify-between w-full my-2 px-3 lg:p-6">
          <div className="flex space-between text-white  items-start space-x-2 lg:space-x-5">
            <div className="p-8 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-black lg:p-12 "></div>
            <div className="mx-10">
              <b className="text-3xl">
                {userAddress.slice(0, 5) + "...." + userAddress.slice(38)}
              </b>
              <div className="flex text-xs space-x-2 items-center lg:my-2">
                <p className="text-sm">
                  {userAddress.slice(0, 5) + "...." + userAddress.slice(38)}
                </p>
                <ClipboardDocumentIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div>
            <ShareIcon className="h-8 w-8" fill="white" />
          </div>
        </div>

        {/* LOWER BODY */}
        <div className="flex items-start justify-center text-white space-x-8 px-3  my-14 w-full overflow-x-auto">
          {menus.map((item) => (
            <>
              <button className="text-gray-400 focus:border-b-2 focus:border-red-500 focus:text-white font-bold w-full">
                {item}
              </button>
            </>
          ))}
        </div>
        <div>
          {nfts.map((nft) => {
            return (
              <>
                <p>{nft.meta.name}</p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default profile;
