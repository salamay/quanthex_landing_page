import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AssetsStrip from "./components/sections/AssetsStrip";
import Features from "./components/sections/Features";
import Showcase from "./components/sections/Showcase";
import HowItWorks from "./components/sections/HowItWorks";
import Security from "./components/sections/Security";
import FAQ from "./components/sections/FAQ";
import DownloadCTA from "./components/sections/DownloadCTA";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AssetsStrip />
        <Features />
        <Showcase />
        <HowItWorks />
        <Security />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
