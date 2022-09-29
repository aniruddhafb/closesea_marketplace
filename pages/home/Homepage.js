import React from "react";
import Navbar from "../../components/Navbar";
import Firstsection from "../../sections/first_section";

const Homepage = () => {
  return (
    <div className="bg-[#1D222A] text-white">
      <Navbar />
      {/* 1st SECTION */}
      <Firstsection />
    </div>
  );
};

export default Homepage;
