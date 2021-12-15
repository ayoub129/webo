import React, { useState } from "react";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PrivacyText from "../component/PrivacyText";

const Privacy = () => {
  const [homeLanguage, setHomeLanguage] = useState("");
  const getLanguage = (language) => {
    setHomeLanguage(language);
  };

  let name = "Privacy Policy";

  if (homeLanguage === "fr") {
    name = "Politique de confidentialité";
  } else if (homeLanguage === "ar") {
    name = "سياسة الخصوصية";
  }
  return (
    <>
      <div className="container">
        <Navbar getLanguage={getLanguage}></Navbar>
      </div>
      <Hero2
        homeLanguage={homeLanguage}
        name={name}
        src="./images/privacy.svg"
      ></Hero2>
      <PrivacyText homeLanguage={homeLanguage}></PrivacyText>
      <Footer homeLanguage={homeLanguage}></Footer>
    </>
  );
};

export default Privacy;
