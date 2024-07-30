import React, { useState } from "react";
import "./ContactUs.css";
import Footer from "../landingpage/Footer";
import Navbar from "../landingpage/Navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <section className="contact-us">
        <div className="contact-container">
          <div className="contact-form-container">
            <h2 style={{ color: "rgb(10, 24, 59)"}}>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="firstName" className="fname">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="lname">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company / Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-info-container">
            <h2>Contact Information</h2>
            <p>
              <strong>Address:</strong> 123 Logistics Street, Supply City, 45678
            </p>
            <p>
              <strong>Email:</strong> info@logistics.com
            </p>
            <p>
              <strong>Mobile:</strong> +1 (234) 567-890
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
