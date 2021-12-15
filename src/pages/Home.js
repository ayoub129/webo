import React, { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Statistics from "../component/Statistics";
import About from "../component/About";
import Approach from "../component/Approach";
import Projects from "../component/Projects";
import Tech from "../component/Tech";
import Methodology from "../component/Methodology";
import Craft from "../component/Craft";
import Testimonials from "../component/Testimonials";
import ContactForm from "../component/ContactForm";

const Home = () => {
  const [homeLanguage, setHomeLanguage] = useState("");
  const getLanguage = (language) => {
    setHomeLanguage(language);
  };

  return (
    <>
      {homeLanguage !== "ar" && (
        <div className="circle-violet rounded-circle d-lg-block d-none"></div>
      )}
      <div className="container">
        <Navbar getLanguage={getLanguage}></Navbar>
        <Hero homeLanguage={homeLanguage}></Hero>
        <Statistics homeLanguage={homeLanguage}></Statistics>
        <About homeLanguage={homeLanguage}></About>
        <Approach homeLanguage={homeLanguage}></Approach>
        <Projects homeLanguage={homeLanguage}></Projects>
        <Tech homeLanguage={homeLanguage}></Tech>
        <Methodology homeLanguage={homeLanguage}></Methodology>
        <ContactForm homeLanguage={homeLanguage}></ContactForm>
        <Craft homeLanguage={homeLanguage}></Craft>
      </div>
      <Testimonials homeLanguage={homeLanguage}></Testimonials>
      <Footer homeLanguage={homeLanguage}></Footer>
    </>
  );
};

export default Home;
