import React from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Pricing from "../Components/Pricing";
import About from "../Components/About";

export default function LandingPage() {
  return (
    <div>
      <section id="home" className="section">
        <Hero />
      </section>

      <section id="features" className="section">
        <Features />
      </section>

      <section id="pricing" className="section">
        <Pricing />
      </section>

      <section id="about" className="section">
        <About />
      </section>
    </div>
  );
}