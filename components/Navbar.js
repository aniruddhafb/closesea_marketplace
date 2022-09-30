import { React, useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Web3Modal from "web3modal";

import {
  BellIcon,
  ShoppingCartIcon,
  Bars3Icon,
  SunIcon,
  UserCircleIcon,
  WalletIcon,
  ArrowLeftOnRectangleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";
import { ethers } from "ethers";

const Navbar = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

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

        if (chainId !== 3) {
          window.alert("please select ROPSTEN network!!!");
        }
        setWalletConnected(true);
        localStorage("walletStatus", walletConnected);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // connectWallet();
    const walletStatus = localStorage.getItem("walletStatus");
    if (!walletStatus) {
      connectWallet();
    }
  }, []);

  const Popup = () => {
    return (
      <>
        <div className="absolute top-10 right-0 bg-black p-3 z-10 text-sm w">
          <div className="flex items-center w-full">
            <div>
              <UserCircleIcon className="h-7 w-7" />
            </div>
            <b>Unnamed</b>

            <div className="text-xs">0x0000...7d</div>
            <div>
              <DocumentDuplicateIcon className="h-5 w-5" />
            </div>
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
              <MagnifyingGlassIcon className="h-6 w-6 2xl:h-7 2xl:w-7" />
            )}
            {walletConnected && (
              <ShoppingCartIcon className="h-6 w-6 2xl:h-7 2xl:w-7" />
            )}
            {walletConnected && (
              <ArrowLeftOnRectangleIcon className="h-5 w-5 2xl:h-7 2xl:w-7" />
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
