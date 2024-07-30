import React from "react";

import HeroSection from "./Hero";
import FeaturesSection from "./Features";
import Footer from "./Footer";
import "./LandingPage.css";
import TransportationPartners from "./Transportationpartner";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TransportationPartners />
      <Footer />
    </div>
  );
};

export default LandingPage;
