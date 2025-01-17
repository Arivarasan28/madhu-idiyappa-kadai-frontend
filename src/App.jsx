import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import OurBusiness from "./pages/ourbusiness/OurBusiness";
import LandingPage from "./pages/landingpage/LandingPage";
import Footer from "./components/footer/Footer";
import JoinWith from "./pages/Join-With/JoinWith";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/our-business" element={<OurBusiness />} />
        <Route path="/join-with" element={<JoinWith />} />
        {/* Add more routes if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
