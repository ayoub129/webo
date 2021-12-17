import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Tech = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <h2 className="text-center fs-1 fw-bold">
        DES <span className="text-violet">TECHNOLOGIES </span> MAÎTRISÉES
      </h2>
      <div className="row mt-5 align-items-center">
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div class="card  border-0 text-white">
            <img
              src="images/node.svg"
              class="card-img p-5 h-100 "
              alt="node.js"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://nodejs.org/en/" className="text-violet">
                  Node.js®
                </a>{" "}
                est un environnement d'exécution JavaScript basé sur le moteur
                JavaScript V8 de Chrome.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div class="card  border-0 text-white">
            <img src="images/php.svg" class="card-img p-5 h-100 " alt="php" />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.php.net/" className="text-violet">
                  PHP
                </a>{" "}
                est un langage de script généraliste populaire particulièrement
                adapté au développement Web.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div class="card  border-0 text-white">
            <img
              src="images/python.svg"
              class="card-img p-5 h-100 "
              alt="python"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.python.org/" className="text-violet">
                  Python
                </a>{" "}
                est une programmation interprétée, orientée objet et de haut
                niveau langage à sémantique dynamique.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div class="card  border-0 text-white">
            <img
              src="images/vue.svg"
              class="card-img p-5 h-100 "
              alt="vue.js"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://vuejs.org/" className="text-violet">
                  Vue.js
                </a>{" "}
                est un framework JavaScript modèle-vue-vue modèle open source
                pour création d'interfaces utilisateur et d'applications d'une
                seule page.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="10000"
        >
          <div class="card  border-0 text-white">
            <img src="images/es.svg" class="card-img p-5 h-100 " alt="ES6.js" />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources"
                  className="text-violet"
                >
                  ECMAScript
                </a>{" "}
                est une version standardisée de JavaScript. ECMAScript 2015
                (appelé ES6) a ajouté de nombreuses nouvelles fonctionnalités à
                JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="10000"
        >
          {" "}
          <div class="card  border-0 text-white">
            <img
              src="images/react.svg"
              class="card-img p-5 h-100 "
              alt="react.js"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://reactjs.org/" className="text-violet">
                  React
                </a>{" "}
                est une bibliothèque JavaScript pour la création d'interfaces
                utilisateur.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="10000"
        >
          <div class="card  border-0 text-white">
            <img
              src="images/wordpress.svg"
              class="card-img p-5 h-100 "
              alt="wordpress"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://wordpress.org/" className="text-violet">
                  Wordpress
                </a>{" "}
                est un système de gestion de contenu basé sur PHP.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="10000"
        >
          <div class="card  border-0 text-white">
            <img
              src="images/bigcommerce.svg"
              class="card-img p-5 h-100 "
              alt="BigCommerce"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.bigcommerce.com/" className="text-violet">
                  BigCommerce
                </a>{" "}
                est une plate-forme de commerce électronique en tant que
                service.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="10000"
        >
          <div class="card  border-0 text-white">
            <img
              src="images/shopify.svg"
              class="card-img p-5 h-100 "
              alt="node.js"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.shopify.com/" className="text-violet">
                  Shopify
                </a>{" "}
                est une plate-forme de commerce électronique pour les magasins
                en ligne.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="10000"
        >
          <div class="card  border-0 text-white">
            <img
              src="images/figma.svg"
              class="card-img p-5 h-100 "
              alt="figma"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <a href="https://www.figma.com/" className="text-violet">
                  Figma
                </a>{" "}
                est un outil de conception d'interface collaborative.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="10000"
        >
          <div class="card  border-0 text-white">
            <img src="images/pwa.svg" class="card-img p-5 h-100 " alt="PWA" />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                <span className="text-violet">PWA</span> sont un type de
                logiciel d'application fourni via le Web, construit à l'aide de
                technologies Web courantes, notamment HTML, CSS et JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4 mt-5"
          data-aos="fade-down"
          data-aos-duration="10000"
        >
          <div class="card  border-0 text-white">
            <img
              src="images/contenstack.svg"
              class="card-img p-5 h-100 "
              alt="contenstack"
            />
            <div class="card-img-overlay tech d-flex align-items-center justify-content-center ">
              <p class="card-text fw-bold w-50  text-center">
                Plateforme de gestion de contenu sans tête basée sur des API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
