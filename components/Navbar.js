import { React, useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Web3Modal from "web3modal";
import ethereum from "../assets/ethereum.png";
import Image from "next/image";

import {
  BellIcon,
  ShoppingCartIcon,
  Bars3Icon,
  SunIcon,
  UserCircleIcon,
  WalletIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  DocumentDuplicateIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { ethers } from "ethers";

const Navbar = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const web3ModalRef = useRef();

  const connectWallet = async () => {
    try {
      if (!walletConnected) {
        web3ModalRef.current = new Web3Modal({
          network: "ropsten",
          providerOptions: {},
          disableInjectedProvider: false,
        });
        const provider = await web3ModalRef.current.connect();

        const web3Provider = new ethers.providers.Web3Provider(provider);

        const { chainId } = await web3Provider.getNetwork();

        localStorage.setItem("walletStatus", true);
        setWalletConnected(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    localStorage.removeItem("walletStatus");
    setWalletConnected(false);
  };

  useEffect(() => {
    const walletStatus = localStorage.getItem("walletStatus");
    console.log({ walletStatus });
    setWalletConnected(walletStatus);
    // if (!walletConnected) connectWallet();
  }, []);

  const Popup = () => {
    return (
      <>
        <div className="absolute top-14 right-0 bg-[#2c323d] z-10 text-sm shadow-2xl rounded-b-xl">
          <div className="flex items-center w-full p-4 border-b-[1px] border-[#505d66]">
            <div className="flex justify-center mr-4">
              <UserCircleIcon className="h-7 w-7" />
              <b className="mt-1">Unnamed</b>
            </div>

            <div className="text-xs">0x0000...7d</div>
            <div>
              <DocumentDuplicateIcon className="h-5 w-5" />
            </div>
          </div>

          <div className="flex flex-col p-5">
            <button className="flex mb-4">
              <UserIcon className="h-5 w-5 text-gray-300 2xl:h-6 2xl:w-8" />
              <p className="bold">My Account</p>
            </button>
            <button className="flex mb-4">
              <Cog6ToothIcon className="h-5 w-5 text-gray-300 2xl:h-6 2xl:w-8" />
              <p className="bold">Preferences</p>
            </button>
            <button className="flex" onClick={logout}>
              <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-300 2xl:h-6 2xl:w-8" />
              <p className="bold">Logout</p>
            </button>
          </div>

          <div className="mx-5 mb-4 p-5 border-2 border-[#3b4349] rounded-lg flex flex-row justify-around">
            <div className="flex flex-row justify-around">
              <Image src={ethereum} height="20px" width="20px" />
              <p> ETH</p>
            </div>
            <div>2.14</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="bg-[#0B0C0D] text-white h-[80px] flex items-center px-4 justify-between">
        <div
          className="lg:w-1/5 ll:text-xl ll:w-1/4 2xl:text-3xl"
          style={{ fontWeight: "bold", paddingLeft: "25px" }}
        >
          CloseSea
        </div>

        {/* LAPTOP VIEW */}
        <div className="hidden lg:flex justify-between w-full space-x-10 items-center 2xl:text-3xl 2xl:space-x-14">
          <div className="w-[50%] p-2 rounded-2xl bg-gray-800 border border-gray-600 outline-none flex space-x-3 items-center 2xl:p-3">
            {/* <label htmlFor="search"> */}
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-300 2xl:h-6 2xl:w-8" />
            {/* </label> */}
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search items, collections, and accounts"
              className="bg-transparent w-full h-[10px] text-gray-600  2xl:text-lg outline-none 2xl:p-3"
            />
          </div>
          <div className="flex font-bold text-gray-300 space-x-4 2xl:space-x-5 text-xl">
            <a href="">Marketplace</a>
            <a href="">Rankings</a>
            <a href="">Blog</a>
          </div>
          <div className="flex space-x- items-center space-x-3 2xl:space-x-5  cursor-pointer">
            {/* before connecting wallet  */}
            {!walletConnected && (
              <WalletIcon
                className="h-6 w-6 2xl:h-7 2xl:w-7"
                onClick={connectWallet}
              />
            )}

            {/* After connecting wallet  */}
            {walletConnected && (
              <ShoppingCartIcon className="h-5 w-5 2xl:h-6 2xl:w-6" />
            )}
            {walletConnected && (
              <BellIcon className="h-5 w-5 2xl:h-6 2xl:w-6" />
            )}
            <SunIcon className="h-5 w-5 2xl:h-7 2xl:w-7" />
            {walletConnected && (
              <>
                <div className="relative">
                  <UserCircleIcon
                    className="h-6 w-6 2xl:h-7 2xl:w-7"
                    onClick={() => setShowPopup(!showPopup)}
                  />
                  {showPopup && Popup()}
                </div>
              </>
            )}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="flex space-x- lg:hidden space-x-2">
          <MagnifyingGlassIcon className="h-6 w-6 ll:h-8 ll:w-8" />
          <BellIcon className="h-6 w-6 ll:h-8 ll:w-8" />
          <ShoppingCartIcon className="h-6 w-6 ll:h-8 ll:w-8" />
          <Bars3Icon className="h-6 w-6 ll:h-8 ll:w-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
