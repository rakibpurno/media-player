import React from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Pricing from "../Components/Pricing";
import About from "../Components/About";

function Home() {
  return (
    <>
      {/* Landing Sections */}
      <Hero/>
      <Features/>
      <Pricing/>
       <About/>
    </>
  );
}

export default Home;