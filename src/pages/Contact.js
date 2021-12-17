import React from "react";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import ContactForm from "../component/ContactForm";
import Social from "../component/Social";

const Contact = () => {
  let name = "Contact Nous";

  return (
    <>
      <Navbar></Navbar>
      <Social></Social>
      <Hero2 name={name} src="./images/contact.svg"></Hero2>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
};

export default Contact;
