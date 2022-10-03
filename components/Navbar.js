import { React, useState, useRef, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Web3Modal from "web3modal";
import ethereumPng from "../assets/ethereum.png";
import polygon from "../assets/polygon.png";
import binance from "../assets/binance.png";
import Image from "next/image";

import {
  BellIcon,
  ShoppingCartIcon,
  Bars3Icon,
  SunIcon,
  UserCircleIcon,
  WalletIcon,
  ArrowRightOnRectangleIcon,
  DocumentDuplicateIcon,
  UserIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { ethers } from "ethers";

const Navbar = () => {
  const web3ModalRef = useRef();
  const [walletConnected, setWalletConnected] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showNetworkPopup, setShowNetworkPopup] = useState(false);

  const [userAddress, setUserAddress] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [chainIdMain, setChainIdMain] = useState(null);

  // on website load
  useEffect(() => {
    const walletStatus = localStorage.getItem("walletStatus");
    setWalletConnected(walletStatus);
    if (!walletConnected) connectWallet();

    // window.ethereum.on("accountsChanged", function (userAddress) {
    //   console.log({ userAddress });
    //   window.location.reload(false);
    // });
  }, [chainIdMain]);

  // login
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

        // get signer
        const signer = web3Provider.getSigner();

        // get wallet address
        const walletAddress = await signer.getAddress();
        setUserAddress(walletAddress);
        localStorage.setItem("walletAddress", walletAddress);

        // get account balance
        const rawWalletBalance = await signer.getBalance();
        const walletBalance = parseFloat(
          ethers.utils.formatEther(rawWalletBalance)
        ).toFixed(2);
        setUserBalance(walletBalance);

        // const sendTransaction = await signer.sendTransaction(data, "test");
        // sendTransaction();

        const { chainId } = await web3Provider.getNetwork();
        setChainIdMain(chainId);

        localStorage.setItem("walletStatus", true);
        setWalletConnected(true);
      }
    } catch (error) {
      walletStatus;
      console.log(error);
    }
  };

  // logout
  const logout = async () => {
    localStorage.removeItem("walletStatus");
    setWalletConnected(false);
  };

  // switch or add chain mainnets
  const switchEthereumChain = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
      setChainIdMain("1");
      setShowNetworkPopup(!showNetworkPopup);
      // window.location.reload(false);
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x1",
                chainName: "Ethereum Mainnet",
                nativeCurrency: {
                  name: "Ethereum",
                  symbol: "ETH",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://etherscan.io"],
                rpcUrls: ["https://mainnet.infura.io/v3/"],
              },
            ],
          });
          setChainIdMain("1");
          setShowNetworkPopup(!showNetworkPopup);
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  };

  const switchBinanceChain = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x38" }],
      });
      setChainIdMain("56");
      setShowNetworkPopup(!showNetworkPopup);
      // window.location.reload(false);
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x38",
                chainName: "Smart Chain",
                nativeCurrency: {
                  name: "Binance",
                  symbol: "BNB",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://bscscan.com"],
                rpcUrls: ["https://bsc-dataseed.binance.org/"],
              },
            ],
          });
          setChainIdMain("56");
          setShowNetworkPopup(!showNetworkPopup);
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  };

  const switchPolygonChain = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x89" }],
      });
      setChainIdMain("137");
      setShowNetworkPopup(!showNetworkPopup);
      // window.location.reload(false);
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x89",
                chainName: "Polygon Mainnet",
                nativeCurrency: {
                  name: "Polygon",
                  symbol: "MATIC",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://polygonscan.com/"],
                rpcUrls: ["https://polygon-rpc.com/"],
              },
            ],
          });
          setChainIdMain("137");
          setShowNetworkPopup(!showNetworkPopup);
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  };

  // profile popup
  const Popup = () => {
    return (
      <>
        <div className="absolute top-14 right-0 bg-[#2c323d] z-10 text-sm shadow-2xl rounded-b-xl">
          <div className="flex items-center w-full p-4 border-b-[1px] border-[#505d66]">
            <div className="flex justify-center mr-4">
              <UserCircleIcon className="h-7 w-7" />
              <b className="mt-1">Unnamed</b>
            </div>

            <div className="text-xs">
              {userAddress.slice(0, 5) + "...." + userAddress.slice(38)}
            </div>
            <div>
              <DocumentDuplicateIcon className="h-5 w-5" />
            </div>
          </div>

          <div className="flex flex-col p-5">
            <button className="flex mb-4">
              <UserIcon className="h-5 w-5 text-gray-300 2xl:h-6 2xl:w-8" />
              <Link href="/users">
                <p className="bold">My Account</p>
              </Link>
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

          {/* Balance by chain  */}
          {chainIdMain == 1 && (
            <div className="mx-5 mb-4 p-5 border-2 border-[#3b4349] rounded-lg flex flex-row justify-around">
              <div className="flex flex-row justify-around">
                <Image src={ethereumPng} height="20px" width="20px" />
                <p>ETH</p>
              </div>
              <div>{userBalance}</div>
            </div>
          )}
          {chainIdMain == 3 && (
            <div className="mx-5 mb-4 p-5 border-2 border-[#3b4349] rounded-lg flex flex-row justify-around">
              <div className="flex flex-row justify-around">
                <Image src={ethereumPng} height="20px" width="20px" />
                <p>ETH</p>
              </div>
              <div>{userBalance}</div>
            </div>
          )}

          {chainIdMain == 80001 && (
            <div className="mx-5 mb-4 p-5 border-2 border-[#3b4349] rounded-lg flex flex-row justify-around">
              <div className="flex flex-row justify-around">
                <Image src={polygon} height="20px" width="20px" />
                <p>MATIC</p>
              </div>
              <div>{userBalance}</div>
            </div>
          )}
          {chainIdMain == 137 && (
            <div className="mx-5 mb-4 p-5 border-2 border-[#3b4349] rounded-lg flex flex-row justify-around">
              <div className="flex flex-row justify-around">
                <Image src={polygon} height="20px" width="20px" />
                <p>MATIC</p>
              </div>
              <div>{userBalance}</div>
            </div>
          )}

          {chainIdMain == 56 && (
            <div className="mx-5 mb-4 p-5 border-2 border-[#3b4349] rounded-lg flex flex-row justify-around">
              <div className="flex flex-row justify-around">
                <Image src={binance} height="20px" width="20px" />
                <p>BNB</p>
              </div>
              <div>{userBalance}</div>
            </div>
          )}
          {chainIdMain == 97 && (
            <div className="mx-5 mb-4 p-5 border-2 border-[#3b4349] rounded-lg flex flex-row justify-around">
              <div className="flex flex-row justify-around">
                <Image src={binance} height="20px" width="20px" />
                <p>BNB</p>
              </div>
              <div>{userBalance}</div>
            </div>
          )}
        </div>
      </>
    );
  };

  // network popup
  const networkPopup = () => {
    return (
      <>
        <div className="flex flex-col justify-center w-[200px] absolute top-25 right-0 mt-7 bg-[#2c323d] z-10 text-sm shadow-4xl rounded-b-lg">
          {chainIdMain != 1 && (
            <div
              className="flex flex-row justify-center mt-4 mb-2"
              onClick={() => switchEthereumChain()}
            >
              <Image src={ethereumPng} height="26px" width="28px" />
              <p className="pl-1 pr-2 font-bold text-[#b8c6dc] text-lg">
                Ethereum
              </p>
            </div>
          )}
          {chainIdMain != 56 && (
            <div
              className="flex flex-row justify-center mt-4 mb-2"
              onClick={() => switchBinanceChain()}
            >
              <Image src={binance} height="26px" width="28px" />
              <p className="pl-1 pr-2 font-bold text-[#b8c6dc] text-lg">
                Binance
              </p>
            </div>
          )}
          {chainIdMain != 137 && (
            <div
              className="flex flex-row justify-center mt-2 mb-4"
              onClick={() => switchPolygonChain()}
            >
              <Image src={polygon} height="26px" width="28px" />
              <p className="pl-1 pr-2 font-bold text-[#b8c6dc] text-lg">
                Polygon
              </p>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="bg-[#0B0C0D] text-white h-[80px] flex items-center px-4 justify-between">
        {/* website logo area  */}
        <div className="flex flex-row justify-around p-4 mr-6">
          <a
            // className="lg:w-1/5 ll:text-xl ll:w-1/4 2xl:text-3xl"
            className="text-2xl mr-4"
            style={{ fontWeight: "bold", paddingLeft: "25px" }}
            href="/"
          >
            CloseSea
          </a>

          {/* network change  */}
          <button className="relative hidden sm:block">
            <div
              className="flex flex-row justify-center w-[200px]"
              onClick={() => setShowNetworkPopup(!showNetworkPopup)}
            >
              {chainIdMain == 1 && (
                <>
                  <Image src={ethereumPng} height="26px" width="28px" />
                  <p className="pl-1 pr-2 font-bold text-[#b8c6dc]">Ethereum</p>
                  <ChevronDownIcon className="h-3 w-3 2xl:h-3 2xl:w-3 mt-2 hover:text-blue-400" />
                </>
              )}
              {chainIdMain == 3 && (
                <>
                  <Image src={ethereumPng} height="26px" width="28px" />
                  <p className="pl-1 pr-2 font-bold text-[#b8c6dc]">
                    Ropsten Testnet
                  </p>
                  <ChevronDownIcon className="h-3 w-3 2xl:h-3 2xl:w-3 mt-2 hover:text-blue-400" />
                </>
              )}
              {chainIdMain == 8001 && (
                <>
                  <Image src={polygon} height="26px" width="28px" />
                  <p className="pl-1 pr-2 font-bold text-[#b8c6dc]">
                    Mumbai Testnet
                  </p>
                  <ChevronDownIcon className="h-3 w-3 2xl:h-3 2xl:w-3 mt-2 hover:text-blue-400" />
                </>
              )}
              {chainIdMain == 137 && (
                <>
                  <Image src={polygon} height="26px" width="28px" />
                  <p className="pl-1 pr-2 font-bold text-[#b8c6dc]">Polygon</p>
                  <ChevronDownIcon className="h-3 w-3 2xl:h-3 2xl:w-3 mt-2 hover:text-blue-400" />
                </>
              )}
              {chainIdMain == 56 && (
                <>
                  <Image src={binance} height="26px" width="28px" />
                  <p className="pl-1 pr-2 font-bold text-[#b8c6dc]">Binance</p>
                  <ChevronDownIcon className="h-3 w-3 2xl:h-3 2xl:w-3 mt-2 hover:text-blue-400" />
                </>
              )}
              {chainIdMain == 97 && (
                <>
                  <Image src={binance} height="26px" width="28px" />
                  <p className="pl-1 pr-2 font-bold text-[#b8c6dc]">
                    Binance Testnet
                  </p>
                  <ChevronDownIcon className="h-3 w-3 2xl:h-3 2xl:w-3 mt-2 hover:text-blue-400" />
                </>
              )}
            </div>
            {showNetworkPopup && networkPopup()}
          </button>
        </div>

        {/* LAPTOP VIEW */}
        <div className="hidden lg:flex justify-between w-full space-x-10 items-center 2xl:text-3xl 2xl:space-x-14">
          {/* searbar  */}
          <div className="w-[50%] p-2 rounded-2xl bg-gray-800 border border-gray-600 outline-none flex space-x-3 items-center 2xl:p-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-300 2xl:h-6 2xl:w-8" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search items, collections, and accounts"
              className="bg-transparent w-full h-[10px] text-gray-600  2xl:text-lg outline-none 2xl:p-3"
            />
          </div>

          {/* other options  */}
          <div className="flex font-bold text-gray-300 space-x-4 2xl:space-x-5 text-xl">
            <a href="">Marketplace</a>
            <a href="">Rankings</a>
            <a href="">Blog</a>
          </div>

          {/* other icons  */}
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
              <>
                <ShoppingCartIcon className="h-5 w-5 2xl:h-6 2xl:w-6" />
                <BellIcon className="h-5 w-5 2xl:h-6 2xl:w-6" />
              </>
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
