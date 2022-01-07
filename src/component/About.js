import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {homeLanguage === "en" ? (
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
            <h3 className="fw-bold">About</h3>
            <p className="text-muted word-space lh-lg w-lg-75 w-100">
              Cyber Digital est une entreprise spécialisée dans les services de développement web sur-mesure. Elle se charge de la mise en place de l’ensemble des fonctionnalités techniques de votre projet web, qu’il s’agisse d’une application web, d’une plateforme sur-mesure ou bien d’une solution CRM.En fonction des exigences proposées dans votre cahier des charges, nos experts web analyseront avec précision vos besoins, tout en vous proposant les solutions techniques les plus adaptées à votre projet avec un respect des deadlines prévues. Par la suite, ils prendront en charge le développement des spécifications opérationnelles à travers une rédaction des lignes de code.


            </p>
            <Link to="/about" className="text-violet text-hv">
              Know More <i className="ms-1 mt-1 fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>
      ) : homeLanguage === "fr" ? (
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
            <h3 className="fw-bold">À propos de nous</h3>
            <p className="text-muted word-space lh-lg w-lg-75 w-100">
              Nous fournissons des solutions web (e-commerce, Landing-Pages,
              Portfolio, Blogging, Wordpress, site CMS, e-tourisme, application
              web spécifique, système de gestion administrative du secteur
              public ou privé, Social Media Marketing, etc.)
            </p>
            <Link to="/about" className="text-violet text-hv">
              Savoir plus <i className="ms-1 mt-1 fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>
      ) : (
        <section className="d-md-flex align-items-center justify-content-between rtl">
          <div
            className="w-md-50 w-100"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              src="./images/girl.jpg"
              alt="about us "
              className="img-fluid rounded"
            />
          </div>
          <div
            className="me-md-5 mt-5 w-md-50 w-100"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h3 className="fw-bold">معلومات عنا</h3>
            <p className="text-muted word-space lh-lg fs-5 w-lg-75 w-100">
              نحن نقدم حلول الويب (التجارة الإلكترونية ، الصفحات المقصودة ،
              المحفظة ، التدوين ، Wordpress ، موقع CMS ، السياحة الإلكترونية ،
              الويب المحدد التطبيق ، الإدارة الإدارية للقطاع العام أو الخاص
              النظام ، التسويق عبر وسائل التواصل الاجتماعي ، إلخ.)
            </p>
            <Link to="/about" className="text-violet text-hv">
              تعرف أكثر <i className="ms-1 mt-1 fas fa-arrow-left"></i>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
