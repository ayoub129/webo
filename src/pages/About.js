import React, { useState } from "react";
import Approach from "../component/Approach";
import Craft from "../component/Craft";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import Why from "../component/Why";

const About = () => {
  const [homeLanguage, setHomeLanguage] = useState("");
  const getLanguage = (language) => {
    setHomeLanguage(language);
  };

  let name = "About US";

  if (homeLanguage === "fr") {
    name = " À propos de nous";
  } else if (homeLanguage === "ar") {
    name = "معلومات عنا";
  }

  return (
    <>
      <div className="container">
        <Navbar getLanguage={getLanguage}></Navbar>
      </div>
      <Hero2
        homeLanguage={homeLanguage}
        name={name}
        src="./images/about.svg"
      ></Hero2>
      <Why homeLanguage={homeLanguage}></Why>
      <Approach homeLanguage={homeLanguage}></Approach>
      <Craft homeLanguage={homeLanguage}></Craft>
      <Footer homeLanguage={homeLanguage}></Footer>
    </>
  );
};

export default About;
