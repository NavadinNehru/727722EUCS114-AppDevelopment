import React, { useState } from "react";
import axios from "axios";
import "./Client.css";
import { useNavigate } from "react-router-dom";

const ClientRegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientData = { name, email, password, company };

    try {
      const response = await axios.post(
        "http://localhost:5001/clients",
        clientData
      );
      console.log("Client registered successfully:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("There was an error registering the client:", error);
    }
  };

  return (
    <div className="client-background">
      <div className="registration-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>Client Registration</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter your company name"
              required
            />
          </div>
          <button type="submit" className="button1">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientRegistrationForm;
