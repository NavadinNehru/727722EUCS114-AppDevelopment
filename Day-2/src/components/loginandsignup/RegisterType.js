import React from "react";
import { Link } from "react-router-dom";
import "./RegisterType.css";

const RegisterType = () => {
  return (
    <div className="register-type-container">
      <h2>REGISTER AS</h2>
      <div className="register-options">
        <Link to="/register/client" className="register-option client-option">
          <div className="option-icon">
            <i className="fas fa-user"></i>
          </div>
          <div className="option-text">Client</div>
        </Link>
        <Link
          to="/register/provider"
          className="register-option provider-option"
        >
          <div className="option-icon">
            <i className="fas fa-truck"></i>
          </div>
          <div className="option-text">Transportation Provider</div>
        </Link>
      </div>
    </div>
  );
};

export default RegisterType;
