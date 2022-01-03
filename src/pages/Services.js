import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";
import Craft from "../component/Craft";
import Social from "../component/Social";

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let name = "Services";

  return (
    <>
      <Navbar></Navbar>
      <Social></Social>
      <Hero2 name={name} src="./images/services.svg"></Hero2>
      {/* ======= Services Section =======  */}
      <section id="services" class="services">
        <div class="container" data-aos="fade-up">
          <div class="section-header text-center mb-5">
            <h2 className="fs-1 fw-bold">NOS SERVICES</h2>
          </div>

          <div class="row gy-4">
            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="service-box blue">
                <img src="images/website.svg" alt="fullstack" />
                <h3 className="mt-3 text-capitalize">CRÉATION DE SITE WEB</h3>
                <p className="mt-3">
                  Avoir une conception de site web unique est une partie
                  importante du processus de marketing et de marque de votre
                  entreprise
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="service-box orange">
                <img src="images/retail.svg" alt="" />
                <h3 className="mt-3 text-capitalize">
                  CRÉATION DE SITE <br /> E-COMMERCE
                </h3>
                <p className="mt-3">
                  Vous souhaitez développer vos ventes et votre chiffre
                  d'affaires en ligne ? La création de site e-commerce est faite
                  pour vous
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="service-box green">
                <img src="images/saas.svg" alt="hosting" />
                <h3 className="mt-3 text-capitalize">Hébergement web</h3>
                <p className="mt-3">
                  Besoin d'un hébergement WEB, un nom de domaine, une messagerie
                  professionnelle, ou un certificat SSL ? Nous les fournissons
                  avec un service après-vente d'excellence!
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div class="service-box red">
                <img src="images/web-application.svg" alt="app" />
                <h3 className="mt-3 text-capitalize">DÉVELOPPEMENT D'APPLICATIONS</h3>
                <p className="mt-3">
                  Notre mission est de transformer un défi d’efficacité
                  technologique en applications qui s'intègre à vos logiciels et
                  optimise vos processus
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="service-box purple">
                <img src="images/web-application.svg" alt="app" />
                <h3 className="mt-3 text-capitalize ">Marketing Digital</h3>
                <p className="mt-5">
                  Notre mission est de transformer un défi d’efficacité
                  technologique en applications qui s'intègre à vos logiciels et
                  optimise vos processus
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div class="service-box pink">
                <img src="images/web-application.svg" alt="app" />
                <h3 className="mt-3 text-capitalize">App Devlopmemnt  </h3>
                <p className="mt-5">
                  Notre mission est de transformer un défi d’efficacité
                  technologique en applications qui s'intègre à vos logiciels et
                  optimise vos processus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section  */}
      <Craft></Craft>
      <Footer></Footer>
    </>
  );
};

export default Services;
