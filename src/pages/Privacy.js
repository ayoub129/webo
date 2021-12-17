import React from "react";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PrivacyText from "../component/PrivacyText";
import Social from "../component/Social";

const Privacy = () => {
  let name = "Privacy Policy";

  return (
    <>
      <Navbar></Navbar>
      <Social></Social>
      <Hero2 name={name} src="./images/privacy.svg"></Hero2>
      <PrivacyText></PrivacyText>
      <Footer></Footer>
    </>
  );
};

export default Privacy;
