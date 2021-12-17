import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="d-md-flex align-items-center justify-content-between">
        <div className="w-100 d-md-none d-block text-center">
          <img
            src="./images/computer.jpg"
            alt="devlopement computer"
            className="img-skew"
          />
        </div>
        <div className="w-md-50 w-100 mt-5">
          <h1 className="fs-big fs-1 fw-bold text-capitalize">
            Le partenaire durable pour vos projets.
          </h1>
          <p className="mt-3 lh-lg fs-6 text-secondary word-space">
            Nous offrons une large gamme de services de développement Web. Les
            services de l’Agence Cyber Digital comprennent la conception web, le
            développement web, la création des boutiques en ligne, le CMS et
            plus encore...
          </p>
          <Link to="/pricing" className="text-white">
            <button className="btn btn-violet px-5 mt-3 py-2">Commencer</button>
          </Link>
        </div>
        <div
          className="
            text-center
            w-50
            d-lg-flex
            align-items-center
            ms-5
            d-md-block d-none
          "
        >
          <div className="rounded-circle p-5 circle-yellow"></div>
          <div className="w-100">
            <img
              src="./images/computer.jpg"
              alt="devlopement computer"
              className="img-skew"
            />
            <div className="rounded-circle p-5 circle-blue mtl-5 d-lg-block d-none"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
