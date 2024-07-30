import React, { useState } from "react";
import "./FAQSection.css";
import Footer from "../landingpage/Footer";
import Navbar from "../landingpage/Navbar";

const faqData = [
  {
    question: "What is a Logistics Management System?",
    answer:
      "A logistics management system is a software application designed to streamline and optimize the processes involved in managing the movement and storage of goods within a supply chain.",
  },
  {
    question: "How does order management work?",
    answer:
      "Order management facilitates the management of customer orders from order placement to fulfillment. It captures and processes order details, tracks order status, and integrates with other systems to ensure accurate and timely order processing.",
  },
  {
    question: "What features are included in transportation planning?",
    answer:
      "Transportation planning includes functionalities such as route optimization, carrier selection, load planning, and scheduling to help businesses execute transportation activities efficiently.",
  },
  {
    question: "How does the system handle warehouse management?",
    answer:
      "The system provides features for managing warehouse operations, including inventory management, storage location optimization, and order fulfillment.",
  },
  {
    question: "Can I track shipments in real-time?",
    answer:
      "Yes, the system provides real-time visibility into the movement of goods throughout the supply chain, allowing businesses and customers to track shipments and monitor delivery status.",
  },
  {
    question: "What are the benefits of using this system?",
    answer:
      "Using the logistics management system can enhance operational efficiency, reduce costs, improve customer satisfaction, and provide end-to-end visibility and control over logistics activities.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{item.question}</div>
              <div className="faq-answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQSection;
