import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
