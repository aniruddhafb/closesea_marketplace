import {
  ClipboardDocumentIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
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
              <b className="text-xl">0x392...77db</b>
              <div className="flex text-xs space-x-2 items-center lg:my-2">
                <p className="">0x392...77db</p>
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
      </div>
    </div>
  );
};

export default profile;
