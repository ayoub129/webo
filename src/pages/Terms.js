import React from "react";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import TermsText from "../component/TermsText";
import Social from "../component/Social";

const Terms = () => {
  let name = "Terms Of Services";

  return (
    <>
      <Navbar></Navbar>
      <Social></Social>
      <Hero2 name={name} src="./images/terms.svg"></Hero2>
      <TermsText></TermsText>
      <Footer></Footer>
    </>
  );
};

export default Terms;
