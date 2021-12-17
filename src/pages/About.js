import React from "react";
import Approach from "../component/Approach";
import Craft from "../component/Craft";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import Why from "../component/Why";
import Social from "../component/Social";

const About = () => {
  let name = " À propos de nous";

  return (
    <>
      <Navbar></Navbar>
      <Social></Social>
      <Hero2 name={name} src="./images/about.svg"></Hero2>
      <Why></Why>
      <div className="container">
        <Approach></Approach>
      </div>
      <Craft></Craft>
      <Footer></Footer>
    </>
  );
};

export default About;
