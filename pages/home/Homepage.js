import React from "react";
import Footer from "../../components/Footer";
import Herosection from "../../sections/Home/Hero_section";
import Trendingsection from "../../sections/Home/Trending_section";
const Homepage = () => {
  return (
    <div>
      <Herosection />
      <Trendingsection />
      <Footer />
    </div>
  );
};

export default Homepage;
