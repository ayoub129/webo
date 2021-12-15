import React, { useState } from "react";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import PricingPlan from "../component/PricingPlan";

const Pricing = () => {
  const [homeLanguage, setHomeLanguage] = useState("");
  const getLanguage = (language) => {
    setHomeLanguage(language);
  };

  let name = "Pricing Plans";

  if (homeLanguage === "fr") {
    name = "Plans de tarification";
  } else if (homeLanguage === "ar") {
    name = "خطط التسعير";
  }

  return (
    <>
      <div className="container">
        <Navbar getLanguage={getLanguage}></Navbar>
      </div>
      <Hero2
        homeLanguage={homeLanguage}
        name={name}
        src="./images/payment.svg"
      ></Hero2>

      <PricingPlan homeLanguage={homeLanguage}></PricingPlan>
      <Footer homeLanguage={homeLanguage}></Footer>
    </>
  );
};

export default Pricing;
