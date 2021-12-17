import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Approach = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section data-aos="zoom-out-down" data-aos-duration="1500">
        <h2 className="text-center fs-2 fw-bold">NOTRE PROCESSUS</h2>
        <div className=" mt-5">
          <div className="row mt-5">
            <div
              className="
                col-md-4 col-sm-6 col-12
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
              <h5 className="fw-bold mt-3">ÉCOUTE</h5>
              <p className="mb-0 text-center text-muted lh-base w-75 mx-auto mt-3">
                Collecte d'un maximum d'informations sur votre entreprise, votre
                projet et vos clients
              </p>
            </div>
            <div
              className="
                col-md-4 col-sm-6 col-12
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
              <h5 className="fw-bold mt-3">PLANIFICATION</h5>
              <p className="mb-0 text-center text-muted lh-base w-75 mx-auto mt-3">
                L'équipe de l'Agence Cyber Digital analyse votre projet et vos
                demandes pour bien planifier les jalons et la date de livraison
              </p>
            </div>
            <div
              className="
                col-md-4 col-sm-6 col-12
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
              <h5 className="fw-bold mt-3">DESIGN</h5>
              <p className="mb-0 text-center text-muted lh-base w-75 mx-auto mt-3">
                Cadrage du projet en fonction de vos objectifs et création des
                maquettes{" "}
              </p>
            </div>
            <div
              className="
                col-md-4 col-sm-6 col-12
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
              <h5 className="fw-bold mt-3">DÉVELOPPEMENT</h5>
              <p className="mb-0 text-center text-muted lh-base w-75 mx-auto mt-3">
                Intégration des maquettes et des modules, développement de vos
                spécificités produits/métier{" "}
              </p>
            </div>
            <div
              className="
                col-md-4 col-sm-6 col-12
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
              <h5 className="fw-bold mt-3">LIVRAISON </h5>
              <p className="mb-0 text-center text-muted lh-base w-75 mx-auto mt-3">
                Après avoir testé toutes les fonctionnalités de votre site et
                corrections de tous les bugs on vous le livre. Tout vous
                appartient désormais à 100%{" "}
              </p>
            </div>
            <div
              className="
                col-md-4 col-sm-6 col-12
                d-flex
                mt-5
                flex-column
                align-items-center
                justify-content-center
              "
            >
              <div className="bg-glass rounded-circle">
                <i className="fas fa-tools text-yellow p-4 fa-2x"></i>
              </div>
              <h5 className="fw-bold mt-3">MAINTENANCE</h5>
              <p className="mb-0 text-center text-muted lh-base w-75 mx-auto mt-3">
                Une fois lancé, nous serons en mesure de gérer toutes les
                demandes, compléments ou amélioration pour la vie de votre site
                web.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approach;
