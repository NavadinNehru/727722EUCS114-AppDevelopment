import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const clientResponse = await axios.get("http://localhost:5001/clients");
      const providerResponse = await axios.get(
        "http://localhost:5001/providers"
      );

      const clients = clientResponse.data;
      const providers = providerResponse.data;

      const user = [...clients, ...providers].find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        navigate("/home"); // Redirect to home page or appropriate page based on user role
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("There was an error logging in:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
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
        <button type="submit">Login</button>
        <div className="register-link">
          <Link to="/register">Don't have an account? Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
