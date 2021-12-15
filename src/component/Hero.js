import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Hero = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {homeLanguage === "en" ? (
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
              we make your dream website
            </h1>
            <p className="mt-3 lh-lg fs-6 text-secondary word-space">
              So You Are A Business Owner And You Want To Grow Your Business Up
              Or Maybe You Have A Great Idea But You Just Don't Know Where And
              How To Start , You Just Came To The Best Possible Place .
            </p>
            <Link to="/pricing" className="text-white">
              <button className="btn btn-violet px-5 mt-3 py-2">
                Get Started
              </button>
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
      ) : homeLanguage === "fr" ? (
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
              Nous créons le site de vos rêves
            </h1>
            <p className="mt-3 lh-lg fs-6 text-secondary word-space">
              Vous êtes donc propriétaire d'une entreprise et vous souhaitez
              développer votre entreprise Ou peut-être avez-vous une idée
              géniale, mais vous ne savez tout simplement pas où et Comment
              commencer, vous venez d'arriver au meilleur endroit possible.
            </p>
            <Link to="/pricing" className="text-white">
              <button className="btn btn-violet px-5 mt-3 py-2">
                Commencer
              </button>
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
      ) : (
        <section className="d-md-flex align-items-center justify-content-between rtl">
          <div className="w-100 d-md-none d-block text-center">
            <img
              src="./images/computer.jpg"
              alt="devlopement computer"
              className="img-skew"
            />
          </div>
          <div className="w-md-50 w-100 mt-5">
            <h1 className="fs-big fs-1 fw-bold text-capitalize">
              نحن نصنع موقع أحلامك
            </h1>
            <p className="mt-3 lh-lg fs-4 text-dark word-space">
              إذن أنت صاحب عمل وتريد تنمية أعمالك أو ربما لديك فكرة عظيمة لكنك
              لا تعرف أين و كيف تبدأ ، لقد أتيت للتو إلى أفضل مكان ممكن.
            </p>
            <Link to="/pricing" className="text-white">
              <button className="btn btn-violet px-5 mt-3 py-2">
                ابدء الآن
              </button>
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
      )}
    </>
  );
};

export default Hero;
