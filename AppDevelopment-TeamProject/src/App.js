import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQSection from "./components/FAQSection/FAQSection";
import LoginForm from "./components/loginandsignup/Login";
import "./App.css"; // Import the CSS file
import RegisterType from "./components/loginandsignup/RegisterType";
import ClientRegistrationForm from "./components/loginandsignup/Client";
import ProviderRegistrationForm from "./components/loginandsignup/TrasportationProviders";
import ContactUs from "./components/contactus/ContactUs";
import AdminPortal from "./components/admin/Admin";
import UserPortal from "./components/user/User";
import { UserProvider } from "./context/Usercontext";

const App = () => {
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedin(true);
    }
  }, []);

  const toggle = () => {
    setLoggedin(true);
    console.log(loggedin);
  };

  return (
    <UserProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/faq" element={<FAQSection />} />
            <Route path="/login" element={<LoginForm toggle={toggle} />} />
            <Route path="/register" element={<RegisterType />} />
            <Route
              path="/admin/*"
              element={loggedin ? <AdminPortal /> : <LandingPage />}
            />
            <Route
              path="/user/*"
              element={loggedin ? <UserPortal /> : <Navigate to="/login" />}
            />
            <Route
              path="/register/client"
              element={<ClientRegistrationForm />}
            />
            <Route
              path="/register/provider"
              element={<ProviderRegistrationForm />}
            />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
