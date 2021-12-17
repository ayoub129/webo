import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Projects from "../component/Projects";
import Craft from "../component/Craft";
import Testimonials from "../component/Testimonials";
import Hero2 from "../component/Hero2";
import Social from "../component/Social";

const Home = () => {
  let name = "Projets";
  return (
    <>
      <div className="circle-violet rounded-circle d-lg-block d-none"></div>
      <Navbar></Navbar>
      <Social></Social>
      <Hero2 name={name} src="./images/projects.svg"></Hero2>
      <div className="container">
        <Projects></Projects>
        <Craft></Craft>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
