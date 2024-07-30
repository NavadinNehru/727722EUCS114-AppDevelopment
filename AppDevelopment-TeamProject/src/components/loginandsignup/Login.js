import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../../context/Usercontext";

const LoginForm = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const clientResponse = await axios.get("http://localhost:5001/clients");
      const providerResponse = await axios.get(
        "http://localhost:5001/providers"
      );

      const clients = clientResponse.data;
      const providers = providerResponse.data;

      const client = clients.find(
        (client) => client.email === email && client.password === password
      );
      const provider = providers.find(
        (provider) => provider.email === email && provider.password === password
      );

      if (email === "admin@gmail.com" && password === "admin") {
        localStorage.setItem("token", "admin-token"); // Simulate storing admin token
        toggle();
        navigate("/admin"); // Redirect to home page or appropriate page based on user role
      } else if (client || provider) {
        setUser(client || provider); // Set user data in context
        localStorage.setItem("token", "user-token"); // Simulate storing user token
        toggle();
        navigate("/user");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("There was an error logging in:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="background-login">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <p>Welcome to LASSO</p>
          <p className="login-paragraph">
            Login for enjoying full functionalities
          </p>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email" class="login-label">
              Email:
            </label>
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
            <label htmlFor="password" className="login-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="register-link">
            <Link to="/register" className="Dont">
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;