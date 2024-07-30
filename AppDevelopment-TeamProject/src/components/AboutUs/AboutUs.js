import React from "react";
import Footer from "../landingpage/Footer";
import "./AboutUs.css";
import Navbar from "../landingpage/Navbar";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Welcome to the Logistics Management System. Our mission is to
          streamline and optimize the processes involved in managing the
          movement and storage of goods within a supply chain. We provide
          end-to-end visibility, control, and coordination of logistics
          activities, enabling businesses to enhance operational efficiency,
          reduce costs, and improve customer satisfaction.
        </p>
        <p>
          Our system includes features like order management, transportation
          planning, warehouse management, shipment tracking, supplier and vendor
          management, reporting and analytics, and compliance and documentation.
          We are committed to providing scalable and customizable solutions to
          meet the specific needs of businesses of different sizes and
          industries.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
