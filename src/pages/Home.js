import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Statistics from "../component/Statistics";
import About from "../component/About";
import Approach from "../component/Approach";
import Tech from "../component/Tech";
import Methodology from "../component/Methodology";
import Craft from "../component/Craft";
import Testimonials from "../component/Testimonials";
import ContactForm from "../component/ContactForm";
import Social from "../component/Social";

const Home = () => {
  return (
    <div className="position-reative">
      <div className="circle-violet rounded-circle d-lg-block d-none"></div>
      <Navbar></Navbar>
      <Social></Social>
      <div className="container">
        <Hero></Hero>
        <Statistics></Statistics>
        <About></About>
        <Approach></Approach>
        <Tech></Tech>
        <Methodology></Methodology>
        <ContactForm></ContactForm>
        <Craft></Craft>
      </div>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
