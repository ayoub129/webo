import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="d-md-flex align-items-center justify-content-between">
        <div
          className="w-md-50 w-100"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <img
            src="./images/girl.jpg"
            alt="about us "
            className="img-fluid rounded"
          />
        </div>
        <div
          className="ms-md-5 mt-5 w-md-50 w-100"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h3 className="fw-bold">À propos</h3>
          <p className="text-muted word-space lh-lg w-lg-75 w-100">
            WEBO est une entreprise spécialisée dans les services de
            développement web sur-mesure. Elle se charge de la mise en place de
            l’ensemble des fonctionnalités techniques de votre projet web, qu’il
            s’agisse d’une application web, d’une plateforme sur-mesure ou bien
            d’une solution CRM.
          </p>
          <Link to="/about" className="text-violet text-hv">
            Savoir plus <i className="ms-1 mt-1 fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
