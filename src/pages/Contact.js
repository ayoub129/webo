import React, { useState } from "react";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  const [homeLanguage, setHomeLanguage] = useState("");
  const getLanguage = (language) => {
    setHomeLanguage(language);
  };

  let name = "Contact US";

  if (homeLanguage === "fr") {
    name = " Contact nous";
  } else if (homeLanguage === "ar") {
    name = "اتصل بنا";
  }

  return (
    <>
      <div className="container">
        <Navbar getLanguage={getLanguage}></Navbar>
      </div>
      <Hero2
        homeLanguage={homeLanguage}
        name={name}
        src="./images/contact.svg"
      ></Hero2>
      <ContactForm homeLanguage={homeLanguage}></ContactForm>
      <Footer homeLanguage={homeLanguage}></Footer>
    </>
  );
};

export default Contact;
