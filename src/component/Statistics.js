import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Statistics = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        className="shadow-lg p-5 mb-5 bg-body rounded"
        data-aos="zoom-out-down"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="row">
            <div
              className="
                col-lg-3 col-sm-6 col-12
                mb-5
                d-flex
                flex-column
                align-items-center
                text-center
                justify-content-center
              "
            >
              <div className="bg-glass rounded-circle">
                <i className="far fa-smile-beam p-3 text-blue fa-2x"></i>
              </div>
              <h4 className="text-violet fs-1 fw-bold mt-3">65 +</h4>
              <p className="mb-0">Clients heureux</p>
            </div>
            <div
              className="
                col-lg-3 col-sm-6 col-12
                mb-5
                d-flex
                flex-column
                align-items-center
                text-center
                justify-content-center
              "
            >
              <div className="bg-glass rounded-circle">
                <i className="fas fa-tasks p-3 text-blue fa-2x"></i>
              </div>
              <h4 className="text-violet fs-1 fw-bold mt-3">70 +</h4>
              <p className="mb-0">Projets réalisés</p>
            </div>
            <div
              className="
                col-lg-3 col-sm-6 col-12
                mb-5
                d-flex
                flex-column
                align-items-center
                text-center
                justify-content-center
              "
            >
              <div className="bg-glass rounded-circle">
                <i className="fas fa-file p-3 text-blue fa-2x"></i>
              </div>
              <h4 className="text-violet fs-1 fw-bold mt-3">4450 +</h4>
              <p className="mb-0">Fichier créé</p>
            </div>
            <div
              className="
                col-lg-3 col-sm-6 col-12
                mb-5
                d-flex
                flex-column
                align-items-center
                text-center
                justify-content-center
              "
            >
              <div className="bg-glass rounded-circle">
                <i className="fas fa-briefcase p-3 text-blue fa-2x"></i>
              </div>
              <h4 className="text-violet fs-1 fw-bold mt-3">20 +</h4>
              <p className="mb-0">Projet Start-Ups</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
