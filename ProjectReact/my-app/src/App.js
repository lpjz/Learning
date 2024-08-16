import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Benefits from "./component/Benefits";
import SuccessStories from "./component/SuccessStories";
import JoinNow from "./component/JoinNow";
import Footer from "./component/Footer";
import Admin from "./Admin/Admin";

function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <SuccessStories />
      <JoinNow />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
