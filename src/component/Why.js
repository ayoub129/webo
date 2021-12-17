import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Why = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="container">
        <div className="row mt-8 align-items-center">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              src="./images/services.svg"
              alt="about"
              className="img-fluid mt-5"
            />
          </div>
          <div
            className="col-lg-6 mt-5"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className="fs-2 fw-bold">
              {" "}
              NOS SERVICES DE DÉVELOPPEMENT WEB SUR-MESURE
            </h2>
            <p className="text-muted lh-lg w-75">
              Cyber Digital est une entreprise spécialisée dans les services de
              développement web sur-mesure. Elle se charge de la mise en place
              de l’ensemble des fonctionnalités techniques de votre projet web,
              qu’il s’agisse d’une application web, d’une plateforme sur-mesure
              ou bien d’une solution CRM.En fonction des exigences proposées
              dans votre cahier des charges, nos experts web analyseront avec
              précision vos besoins, tout en vous proposant les solutions
              techniques les plus adaptées à votre projet avec un respect des
              deadlines prévues. Par la suite, ils prendront en charge le
              développement des spécifications opérationnelles à travers une
              rédaction des lignes de code.
            </p>
          </div>
        </div>
        <div className="row mt-8 align-items-center">
          <div
            className="col-lg-6 d-lg-none d-block"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              src="./images/mission.svg"
              alt="about 2"
              className="img-fluid"
            />
          </div>
          <div
            className="col-lg-6 mt-5"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="fs-2 fw-bold">Nos MISSION</h2>
            <p className="text-muted lh-lg">
              La mission de notre équipe inclue également les services de
              refonte web, elle est capable de réaliser un diagnostic complet
              d’une plateforme en ligne, tout en détectant les facteurs
              bloquants et proposant les axes d’amélioration à aborder pour
              éliminer les bugs existants.La polyvalence, la réactivité, la
              capacité d’adaptation et le respect des délais sont les qualités
              qui distinguent notre entreprise parmi plusieurs d’autres sur le
              marché.Il vous suffit de partager avec nous vos idées et nous
              transformons tous vos projets web en réalité.
            </p>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              src="./images/mission.svg"
              alt="about 2"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row mt-8 align-items-center">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="./images/history.svg" alt="" className="img-fluid" />
          </div>
          <div
            className="col-lg-6 mt-5"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className="fs-2 fw-bold">NOTRE HISTOIRE</h2>
            <p className="text-muted lh-lg">
              Cyber Digital est au Maroc, basée à Tanger, et fait du WEB
              hyperactivement. Nous avons une approche intégrale. Vous cueillez
              les fleurs, on décortique les pétales et vous léchez le nectar. Et
              croyez-nous, l’association de ces termes ne se réduit pas à un
              mauvais jeu de mots. Notre passion est le leitmotiv de notre
              métier. Et nous sommes là pour donner l’importance que votre
              projet mérite. Nous l’étudions, l’analysons et vous préparons la
              meilleure solution. Il a été dit que nous nous démarquions par le
              vaste éventail de services que nous offrons et par notre rapide
              réactivité, soit concernant vos problèmes techniques ou la
              réalisation immédiate de vos projets. 99,9 % de nos succès sont le
              résultat d’efforts soutenus, d’idées directes ou détournées,
              d’humour, d’analyse fine et d’audace pure.Nous n’essayons pas de
              plaire à tout le monde : seulement à nos clients. Et aux clients
              de nos clients. Parfois même aux clients des clients de nos
              clients. Et aux directeurs de banque de toutes ces personnes, car
              nous croyons à la redistribution des richesses. Nous sommes
              plusieurs à bouger beaucoup et nous sommes assez sages pour tirer
              profit de votre expérience.
            </p>
          </div>
        </div>
        <div className="row mt-8 align-items-center">
          <div
            className="col-lg-6 d-lg-none d-block"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="./images/why.svg" alt="about 2" className="img-fluid" />
          </div>
          <div
            className="col-lg-6 mt-5"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="fs-2 fw-bold">POURQUOI CHOISIR L'AGENCE WEBO</h2>
            <ol className="text-muted lh-lg">
              <li>Les sites Web que nous créons sont optimisés</li>
              <li>
                Notre méthodologie Agile de développement est prouvée et
                efficace
              </li>
              <li> Un accent particulier sur les besoins métier et le ROI</li>
              <li> Aucun compromis sur la qualité du site</li>
              <li> Nous répondons rapidement aux besoins des clients</li>
              <li>
                La prestation des services et des solutions peut se faire à
                votre entreprise
              </li>
              <li>
                Pas de soucis car nous avons une équipe de développement web
                experte
              </li>
              <li> Nos développeurs Web sont expérimentés et certifiés</li>
              <li> Nous créons des sites Web réactifs et dynamiques</li>
              <li> Une vaste expérience en gestion de projet</li>
            </ol>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="./images/why.svg" alt="about 2" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-8 align-items-center">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="./images/value.svg" alt="" className="img-fluid" />
          </div>
          <div
            className="col-lg-6 mt-5"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h2 className="fs-2 fw-bold">NOS VALEURS</h2>
            <p className="text-muted lh-lg">
              <span className="fw-bold">POURQUOI SOMMES-NOUS DIFFÉRENTS ?</span>{" "}
              <br />
              Nous sommes passionnés par notre métier et nous travaillons sans
              compter avec beaucoup d’enthousiasme. Nous prenons du plaisir à
              réaliser des projets fiables, rentables et enrichissants. Notre
              prestation est complète et nous sommes remerciés pour la qualité
              de notre service.Notre relation avec nos clients est basée sur une
              transparence absolue et un grand respect. Nous étudions avant tout
              vos besoins et nous nous adaptons pour les réaliser en vous
              assurant un retour sur investissement et une visibilité unique et
              haut de gamme.
            </p>
          </div>
        </div>
        <div className="row mt-8 align-items-center">
          <div
            className="col-lg-6 d-lg-none d-block"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src="./images/plus.svg" alt="about 2" className="img-fluid" />
          </div>
          <div
            className="col-lg-6 mt-5"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="fs-2 fw-bold">NOS PLUS</h2>
            <p className="text-muted lh-lg">
              <span className="fw-bold">GARANTIE, SUIVI ET ACCOMPAGNEMENT</span>{" "}
              <br />
              Toutes nos réalisations web sont accompagnées d’une formation
              permettant la prise en main du site via son interface
              d’administration (back-office). Nous surveillons le projet et
              assurons les mises à jour si nécessaire. Nous intervenons en moins
              de 48 heures pour réparer tout bug ou tout dysfonctionnement.Vous
              aurez également accès à une interface de support permettant la
              gestion de vos demandes en priorité.
            </p>
          </div>
          <div
            className="col-lg-6 d-lg-block d-none"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src="./images/plus.svg" alt="about 2" className="img-fluid" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;
