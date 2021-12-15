import React, { useState } from "react";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import TermsText from "../component/TermsText";

const Terms = () => {
  const [homeLanguage, setHomeLanguage] = useState("");
  const getLanguage = (language) => {
    setHomeLanguage(language);
  };

  let name = "Terms Of Services";

  if (homeLanguage === "fr") {
    name = "Conditions de services";
  } else if (homeLanguage === "ar") {
    name = "شروط الخدمة";
  }

  return (
    <>
      <div className="container">
        <Navbar getLanguage={getLanguage}></Navbar>
      </div>
      <Hero2
        homeLanguage={homeLanguage}
        name={name}
        src="./images/terms.svg"
      ></Hero2>
      <TermsText homeLanguage={homeLanguage}></TermsText>
      <Footer homeLanguage={homeLanguage}></Footer>
    </>
  );
};

export default Terms;
