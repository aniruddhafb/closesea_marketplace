import React, {useState} from "react";
import Footer from "../../components/Footer";
import Herosection from "../../sections/Home/Hero_section";
import Trendingsection from "../../sections/Home/Trending_section";
import SidebarContext from "../../navContext";
import { useContext } from "react";
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import Link from "next/link";

const SideBar = () => {
  const dropdownStyle = "flex w-full justify-between px-4 "
  return <>
  <div className="fixed z-10 bg-black h-full w-full text-white">

    <div>
      <div >
        <div className={dropdownStyle}>
          <b>Marketplace</b>
          <ChevronDownIcon className="h-5 w-5"/>
        </div>
      </div>
      <div className={dropdownStyle}>
        <b>Marketplace</b>
        <ChevronDownIcon className="h-5 w-5"/>
      </div>
      <div className={dropdownStyle}>
        <b>Marketplace</b>
        <ChevronDownIcon className="h-5 w-5"/>
      </div>

    </div>
    
  </div>
  </>
}

const Homepage = () => {
  const {sidebarStatus} = useContext(SidebarContext)
  console.log({sidebarStatus})
  return (
      <div>
        {sidebarStatus && SideBar()}
        <div className={`${sidebarStatus && 'hidden'}`}>
          <Herosection />
          <Trendingsection />
        </div>
        
      </div>
  );
};

export default Homepage;
