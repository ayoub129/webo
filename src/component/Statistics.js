import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Statistics = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {homeLanguage === "en" ? (
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
                <h4 className="text-violet fs-1 fw-bold mt-3">18 +</h4>
                <p className="mb-0">Happy Clients</p>
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
                <h4 className="text-violet fs-1 fw-bold mt-3">24 +</h4>
                <p className="mb-0">Projects Done</p>
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
                <h4 className="text-violet fs-1 fw-bold mt-3">3450 +</h4>
                <p className="mb-0">File Created</p>
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
                <h4 className="text-violet fs-1 fw-bold mt-3">10 +</h4>
                <p className="mb-0">StartUps Project</p>
              </div>
            </div>
          </div>
        </section>
      ) : homeLanguage === "fr" ? (
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
                <h4 className="text-violet fs-1 fw-bold mt-3">18 +</h4>
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
                <h4 className="text-violet fs-1 fw-bold mt-3">24 +</h4>
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
                <h4 className="text-violet fs-1 fw-bold mt-3">3450 +</h4>
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
                <h4 className="text-violet fs-1 fw-bold mt-3">10 +</h4>
                <p className="mb-0">Projet Start-Ups</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          className="shadow-lg p-5 mb-5 bg-body rounded rtl"
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
                <h4 className="text-violet fs-1 fw-bold mt-3">18 +</h4>
                <p className="mb-0 fs-4">عملاء سعداء</p>
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
                <h4 className="text-violet fs-1 fw-bold mt-3">24 +</h4>
                <p className="mb-0 fs-4">المشاريع المنجزة</p>
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
                <h4 className="text-violet fs-1 fw-bold mt-3">3450 +</h4>
                <p className="mb-0 fs-4"> الملفات المنشاة</p>
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
                <h4 className="text-violet fs-1 fw-bold mt-3">10 +</h4>
                <p className="mb-0 fs-4"> مشاريع مقاولات</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Statistics;
