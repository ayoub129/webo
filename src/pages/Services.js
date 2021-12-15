import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../component/Footer";
import Hero2 from "../component/Hero2";
import Navbar from "../component/Navbar";

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [homeLanguage, setHomeLanguage] = useState("");
  const getLanguage = (language) => {
    setHomeLanguage(language);
  };

  let name = "Services";

  if (homeLanguage === "fr") {
    name = "Services";
  } else if (homeLanguage === "ar") {
    name = "خدماتنا";
  }
  return (
    <>
      <div className="container">
        <Navbar getLanguage={getLanguage}></Navbar>
      </div>
      <Hero2
        homeLanguage={homeLanguage}
        name={name}
        src="./images/about.svg"
      ></Hero2>
      <section id="services" className="services mb-5">
        {/* <!-- ======= Services Section ======= --> */}
        <div className="container " data-aos="fade-up">
          <header className="section-header">
            <h2>Services</h2>
            <p>Veritatis et dolores facere numquam et praesentium</p>
          </header>

          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-box blue">
                <i className="ri-discuss-line icon"></i>
                <h3>Nesciunt Mete</h3>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur.
                </p>
                <p className="read-more cursor">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-box orange">
                <i className="ri-discuss-line icon"></i>
                <h3>Eosle Commodi</h3>
                <p>
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto
                  sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
                <p className="read-more cursor">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-box green">
                <i className="ri-discuss-line icon"></i>
                <h3>Ledo Markt</h3>
                <p>
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                  Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
                <p className="read-more cursor">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-box red">
                <i className="ri-discuss-line icon"></i>
                <h3>Asperiores Commodi</h3>
                <p>
                  Non et temporibus minus omnis sed dolor esse consequatur.
                  Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
                <p className="read-more cursor">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-box purple">
                <i className="ri-discuss-line icon"></i>
                <h3>Velit Doloremque.</h3>
                <p>
                  Cumque et suscipit saepe. Est maiores autem enim facilis ut
                  aut ipsam corporis aut. Sed animi at autem alias eius labore.
                </p>
                <p className="read-more cursor">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-box pink">
                <i className="ri-discuss-line icon"></i>
                <h3>Dolori Architecto</h3>
                <p>
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                  neque non et debitis iure. Corrupti recusandae ducimus enim.
                </p>
                <p className="read-more cursor">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Services Section --> */}
      </section>
      <Footer homeLanguage={homeLanguage}></Footer>
    </>
  );
};

export default Services;
