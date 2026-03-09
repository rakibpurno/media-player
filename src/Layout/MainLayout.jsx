import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MainLayout({ children }) {

  const isEmbed = window.self !== window.top;

  return (

    <>

      {!isEmbed && <Navbar />}

      <main className="container">

        {children}

      </main>

      {!isEmbed && <Footer />}

    </>

  );

}