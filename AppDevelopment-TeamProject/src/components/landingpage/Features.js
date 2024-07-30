import React from "react";
import "./Features.css";
import Navbar from "./Navbar";

const features = [
  {
    title: "Order Management",
    description:
      "Manage customer orders from placement to fulfillment with real-time tracking.",
  },
  {
    title: "Transportation Planning",
    description:
      "Optimize routes, select carriers, plan loads, and schedule efficiently.",
  },
  {
    title: "Warehouse Management",
    description:
      "Streamline inventory management, optimize storage, and ensure accurate order fulfillment.",
  },
  {
    title: "Shipment Tracking",
    description:
      "Real-time visibility into the movement of goods throughout the supply chain.",
  },
  {
    title: "Supplier Management",
    description:
      "Track supplier information, monitor performance, and collaborate effectively.",
  },
  {
    title: "Reporting and Analytics",
    description:
      "Gain insights into logistics performance with detailed reports and analytics.",
  },
  {
    title: "Compliance and Documentation",
    description:
      "Ensure regulatory compliance and streamline documentation processes.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>COMMITED TO FINDING A</h2>
      <h2>BETTER WAY</h2>
      <div className="features-cards">
        {features.map((feature, index) => (
          <div
            className={`card ${index % 2 === 0 ? "green-card" : "grey-card"}`}
            key={index}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
