import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Methodology = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <h1 className="text-center lh-base mb-3 fs-1 fw-bold ">
        Développement de logiciels personnalisés Méthodologies
      </h1>

      <div className="row">
        <div
          className="col-12 col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card p-4 border-0 text-center" style={{ width: "100%" }}>
            <img
              src="images/icn-agile.svg"
              class="card-img-top w-50 mx-auto hv-scale"
              alt="agile"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">Agile</h5>
              <p class="card-text">
                C'est notre pratique standard pour les projets orientés
                services, le code et les livrables de conception. En Agile,
                l'implication du client et la flexibilité pour s'adapter aux
                conditions changeantes sont essentiel.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card p-4 border-0 text-center" style={{ width: "100%" }}>
            <img
              src="images/icn-lean.svg"
              class="card-img-top w-40 mx-auto hv-scale"
              alt="agile"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">Lean</h5>
              <p class="card-text">
                Des équipes orientées Lean réalisent des projets complexes sur
                des des horaires. Nos ingénieurs Lean travaillent aussi
                efficacement que possible et sont des experts pour éviter le
                gaspillage de ressources.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card p-4 border-0 text-center" style={{ width: "100%" }}>
            <img
              src="images/icn-devops-color-circle-blue.svg"
              class="card-img-top w-50 mx-auto hv-scale"
              alt="agile"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">DevOps</h5>
              <p class="card-text">
                Ce qui peut être mesuré peut être amélioré. Notre transversalité
                les équipes de développement gardent un œil attentif sur chaque
                KPI pertinent tout en embrassant également l'innovation et la
                transparence.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card p-4 border-0 text-center" style={{ width: "100%" }}>
            <img
              src="images/icn-waterfall.svg"
              class="card-img-top w-50 mx-auto hv-scale"
              alt="agile"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">Cascade</h5>
              <p class="card-text">
                Il s'agit d'une méthodologie hautement structurée qui convient
                le mieux aux des projets exigeant des normes de qualité élevées
                grâce à une organisation rigoureuse et ponctuelle.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card p-4 border-0 text-center" style={{ width: "100%" }}>
            <img
              src="images/icn-scrum.svg"
              class="card-img-top w-50 mx-auto hv-scale"
              alt="agile"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">Mêlée</h5>
              <p class="card-text">
                Chaque équipe de développement est dirigée par un Scrum Master
                certifié, qui est en charge de hiérarchiser les tâches, de
                répartir les responsabilités efficacement et en chronométrant
                chaque élément.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="card p-4 border-0 text-center" style={{ width: "100%" }}>
            <img
              src="images/icn-prototype-color-line.svg"
              class="card-img-top w-50 mx-auto hv-scale"
              alt="agile"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">Prototype</h5>
              <p class="card-text">
                La méthode Prototype privilégie l'implication et les retours des
                utilisateurs pour créer des produits avec une grande
                interaction, excellent interface et une expérience utilisateur
                sans friction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
