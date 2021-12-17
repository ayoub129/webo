import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingPlan = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="container mb-5">
        <div
          className="
        d-flex
        align-items-center
        flex-column
        justify-content-center
        mt-5
        text-center
      "
        >
          <p>Plan tarifaire</p>
          <h2 className="fs-1 fw-bold">
            Choisissez la meilleure offre pour votre
            <span className="text-violet"> entreprise</span>
          </h2>
          <div className="w-25 pt-1 bg-violet mt-5"></div>
        </div>
        <div className="row align-items-center justify-content-between mt-5">
          <div
            className="col-md-3 col-sm-6 col-12 mb-5"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="card text-center p-3">
              <div className="card-body">
                <h5
                  className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-5
                text-violet
              "
                >
                  Landing Page
                </h5>

                <p className="card-text mb-1">1 Siteweb Page</p>
                <p className="card-text mb-1">formulaire de contact</p>
                <p className="card-text mb-1">Optimisé pour les mobiles</p>
                <p className="card-text mb-1">Site WordPress</p>
                <p class="card-text text-secondary mb-1">
                  Référencement avancé
                </p>
                <p class="card-text text-secondary mb-1">
                  Indexation rapide sur Google
                </p>
                <p class="card-text text-secondary mb-1">
                  Contenu personnalisé
                </p>
                <p class="card-text text-secondary mb-1">Support 24/7</p>
                <p class="card-text text-secondary mb-1">
                  Intégration de 2 API
                </p>
                <p class="card-text text-secondary mb-1">Magasins en ligne</p>
                <p class="card-text text-secondary mb-4">application Web</p>
                <button className="btn btn-violet">demande devis</button>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 col-sm-6 col-12 mb-5"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="card text-center p-3">
              <div className="card-body">
                <h5
                  className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-5
                text-violet
              "
                >
                  Website
                </h5>

                <p className="card-text mb-1">Jusqu'à 5 pages de site Web</p>
                <p className="card-text mb-1">formulaire de contact</p>
                <p className="card-text mb-1">Optimisé pour les mobiles</p>
                <p className="card-text mb-1">Site WordPress</p>
                <p class="card-text mb-1">Référencement avancé</p>
                <p class="card-text mb-1">Indexation rapide sur Google</p>
                <p class="card-text mb-1">Contenu personnalisé</p>
                <p class="card-text text-secondary mb-1">Support 24/7</p>
                <p class="card-text text-secondary mb-1">
                  Intégration de 2 API
                </p>
                <p class="card-text text-secondary mb-1">Magasins en ligne</p>
                <p class="card-text text-secondary mb-4">application Web</p>
                <button className="btn btn-violet">demande devis</button>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 col-sm-6 col-12 mb-5"
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            <div className="card text-center p-2">
              <div className="card-body">
                <h5
                  className="
                    card-title
                    text-uppercase
                    fw-bold
                    letter-spacing
                    text-muted
                    mb-5
                    text-violet
                  "
                >
                  Application
                </h5>

                <p className="card-text mb-1">Jusqu'à 25 pages de site Web</p>
                <p className="card-text mb-1">formulaire de contact</p>
                <p className="card-text mb-1">Optimisé pour les mobiles</p>
                <p className="card-text mb-1">Site WordPress</p>
                <p class="card-text mb-1">Référencement avancé</p>
                <p class="card-text mb-1">Indexation rapide sur Google</p>
                <p class="card-text mb-1">Contenu personnalisé</p>
                <p class="card-text mb-1">Support 24/7</p>
                <p class="card-text mb-1">Intégration de 2 API</p>
                <p class="card-text text-secondary mb-1">Magasins en ligne</p>
                <p class="card-text text-secondary mb-4">application Web</p>
                <button className="btn btn-violet">demande devis</button>
              </div>
            </div>
          </div>
          <div
            className="col-md-3 col-sm-6 col-12 mb-5"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="card text-center p-2">
              <div className="card-body">
                <h5
                  className="
                card-title
                text-uppercase
                fw-bold
                letter-spacing
                text-muted
                mb-5
                text-violet
              "
                >
                  E-commerce
                </h5>

                <p className="card-text mb-1">page de site Web illimitée</p>
                <p className="card-text mb-1">formulaire de contact</p>
                <p className="card-text mb-1">Optimisé pour les mobiles</p>
                <p className="card-text mb-1">Site WordPress</p>
                <p class="card-text mb-1">Référencement avancé</p>
                <p class="card-text mb-1">Indexation rapide sur Google</p>
                <p class="card-text mb-1">Contenu personnalisé</p>
                <p class="card-text mb-1">Support 24/7</p>
                <p class="card-text mb-1">intégration d'API illimitée</p>
                <p class="card-text mb-1">Magasins en ligne</p>
                <p class="card-text mb-4">application Web</p>
                <button className="btn btn-violet">demande devis</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlan;
