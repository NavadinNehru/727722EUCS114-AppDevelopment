import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Navbar from "./components/landingpage/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQSection from "./components/FAQSection/FAQSection";
import LoginForm from "./components/loginandsignup/Login";
import "./App.css"; // Import the CSS file
import RegisterType from "./components/loginandsignup/RegisterType";
import ClientRegistrationForm from "./components/loginandsignup/Client";
import ProviderRegistrationForm from "./components/loginandsignup/TrasportationProviders";
import ContactUs from "./components/contactus/ContactUs";
import HeroSection from "./components/landingpage/Hero";
import Entry from "./components/entry/Entry";

const App = () => {
  return (
    <>
      <video src="/background1.mp4" autoPlay loop muted id="background-video" />
      <Router>
        <div>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/" element={<Entry />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/faq" element={<FAQSection />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterType />} />
            <Route
              path="/register/client"
              element={<ClientRegistrationForm />}
            />
            <Route
              path="/register/provider"
              element={<ProviderRegistrationForm />}
            />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
