import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Approach = ({ homeLanguage }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {homeLanguage === "en" ? (
        <section data-aos="zoom-out-down" data-aos-duration="1500">
          <h2 className="text-center fs-2 fw-bold">Our Approach</h2>
          <div className=" mt-5">
            <div className="row mt-5">
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-lightbulb text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">Ideat</h5>
                <p className="mb-0 text-center text-muted lh-base mt-3">
                  Turn Your iDea from concept to Minimum viable product
                </p>
              </div>
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-pen-nib text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">Design</h5>
                <p className="mb-0 text-center text-muted lh-base mt-3">
                  Sketch out the product to align the user need
                </p>
              </div>
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-code text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">Devlop</h5>
                <p className="mb-0 text-center text-muted lh-base mt-3">
                  Convert the design into a live application
                </p>
              </div>
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-server text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">Deploy</h5>
                <p className="mb-0 text-center text-muted lh-base mt-3">
                  Launching the application to the market
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : homeLanguage === "fr" ? (
        <section data-aos="zoom-out-down" data-aos-duration="1500">
          <h2 className="text-center fs-2 fw-bold">Notre approche</h2>
          <div className=" mt-5">
            <div className="row mt-5">
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-lightbulb text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">Id??at</h5>
                <p className="mb-0 text-center text-muted lh-base mt-3">
                  Transformez votre id??e de concept en mvp
                </p>
              </div>
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-pen-nib text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">Conception</h5>
                <p className="mb-0 text-center text-muted lh-base mt-3">
                  Esquissez le produit pour aligner le besoin de l'utilisateur
                </p>
              </div>
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-code text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">D??veloppez</h5>
                <p className="mb-0 text-center text-muted lh-base mt-3">
                  Convertir la conception en une application en direct
                </p>
              </div>
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-server text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">D??ployer</h5>
                <p className="mb-0 text-center text-muted lh-base mt-3">
                  Lancement de l'application sur le march??
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          className="rtl"
          data-aos="zoom-out-down"
          data-aos-duration="1500"
        >
          <h2 className="text-center fs-2 fw-bold">??????????</h2>
          <div className=" mt-5">
            <div className="row mt-5">
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-lightbulb text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">????????</h5>
                <p className="mb-0 text-center text-muted fs-4 lh-base mt-3">
                  ???????? ?????????? ???? ?????????????? ?????? ???????? ???????????? ???? ???????????? ???????????? ??????????????
                </p>
              </div>
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-pen-nib text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">??????????</h5>
                <p className="mb-0 fs-4 text-center text-muted lh-base mt-3">
                  ?????? ???????????? ?????????????? ???????? ????????????????
                </p>
              </div>
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-code text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">??????????</h5>
                <p className="mb-0 text-center text-muted fs-4 lh-base mt-3">
                  ?????????? ?????????????? ?????? ?????????? ?????????? ?????????? ?????????????? ??????????????
                </p>
              </div>
              <div
                className="
                col-md-3 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
              >
                <div className="bg-glass rounded-circle">
                  <i className="fas fa-server text-yellow p-4 fa-2x"></i>
                </div>
                <h5 className="fw-bold mt-3">??????</h5>
                <p className="mb-0 text-center fs-4 text-muted lh-base mt-3">
                  ?????????? ?????????????? ???? ?????????? ???????????? ???? ????????????
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Approach;
