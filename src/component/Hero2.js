import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero2 = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let classN = "";

  if (props.homeLanguage === "ar") {
    classN = "rtl";
  }

  return (
    <div className={`bg-violet ${classN} `}>
      <div className="container my-5 p-5">
        <section className="d-lg-flex align-items-center justify-content-between">
          <div
            className="w-lg-50 w-100"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1 className="fs-1 fw-bold text-white text-capitalize mb-5">
              {props.name}
            </h1>
          </div>
          <div
            className="w-lg-50 w-100"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
          >
            <img
              src={props.src}
              alt="devlopement computer"
              className="img-fluid"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero2;
