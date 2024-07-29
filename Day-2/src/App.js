import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/loginandsignup/Login";
import "./App.css"; // Import the CSS file
import RegisterType from "./components/loginandsignup/RegisterType";
import ClientRegistrationForm from "./components/loginandsignup/Client";
import ProviderRegistrationForm from "./components/loginandsignup/TrasportationProviders";
import Entry from "./components/entry/Entry";

const App = () => {
  return (
    <>
      <video src="/background1.mp4" autoPlay loop muted id="background-video" />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Entry />} />
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
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
