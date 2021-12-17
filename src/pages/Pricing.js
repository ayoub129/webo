import React from "react";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import PricingPlan from "../component/PricingPlan";
import Social from "../component/Social";

const Pricing = () => {
  let name = "plan tarifaire";

  return (
    <>
      <Navbar></Navbar>
      <Social></Social>
      <Hero2 name={name} src="./images/payment.svg"></Hero2>
      <PricingPlan></PricingPlan>
      <Footer></Footer>
    </>
  );
};

export default Pricing;
