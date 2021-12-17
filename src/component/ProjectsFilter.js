import React, { useState } from "react";
import Isotope from "isotope-layout";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ProjectsFilter = () => {
  // init one ref to store the future isotope object
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const project = [
    "./images/project2.png",
    "./images/blog1.png",
    "./images/tasks.png",
    "./images/portfolio1.png",
    "./images/store1.jfif",
    "./images/store-react.png",
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li
              className={filterKey === "*" ? "filter-active" : ""}
              onClick={handleFilterKeyChange("*")}
            >
              Afficher tout
            </li>
            <li
              className={filterKey === "react" ? "filter-active" : ""}
              onClick={handleFilterKeyChange("react")}
            >
              Afficher react Apps
            </li>
            <li
              className={filterKey === "php" ? "filter-active" : ""}
              onClick={handleFilterKeyChange("php")}
            >
              Afficher php Apps
            </li>
            <li
              className={filterKey === "wordpress" ? "filter-active" : ""}
              onClick={handleFilterKeyChange("wordpress")}
            >
              Afficher wordpress Apps
            </li>
            <li
              className={filterKey === "node" ? "filter-active" : ""}
              onClick={handleFilterKeyChange("node")}
            >
              Afficher Node.js Apps
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row  text-center filter-container">
        <div className="col-lg-4 col-md-6 portfolio-item filter-item mb-5 react php">
          <div className="portfolio-wrap">
            <img src={project[0]} className="img-fluid h-300" alt="" />
            <div className="portfolio-info">
              <h4>Application de gestion des stocks</h4>
              <p>React - PHP</p>
              <div className="portfolio-links">
                {isOpen && (
                  <Lightbox
                    mainSrc={project[photoIndex]}
                    nextSrc={project[(photoIndex + 1) % project.length]}
                    prevSrc={
                      project[
                        (photoIndex + project.length - 1) % project.length
                      ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + project.length - 1) % project.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % project.length)
                    }
                  />
                )}
                <div
                  className="portfokio-lightbox cursor p-4"
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(0);
                  }}
                >
                  <i className="fas fa-plus" title="open"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-item mb-5 wordpress php">
          <div className="portfolio-wrap">
            <img src={project[1]} className="img-fluid h-300" alt="" />
            <div className="portfolio-info">
              <h4>Football Blog</h4>
              <p>Wordpress - php</p>
              <div className="portfolio-links">
                {isOpen && (
                  <Lightbox
                    mainSrc={project[photoIndex]}
                    nextSrc={project[(photoIndex + 1) % project.length]}
                    prevSrc={
                      project[
                        (photoIndex + project.length - 1) % project.length
                      ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + project.length - 1) % project.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % project.length)
                    }
                  />
                )}
                <div
                  className="portfokio-lightbox cursor p-4"
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(1);
                  }}
                >
                  <i className="fas fa-plus" title="open"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-item mb-5 react node">
          <div className="portfolio-wrap">
            <img src={project[2]} className="img-fluid h-300" alt="" />
            <div className="portfolio-info">
              <h4>Application de gestion des tâches</h4>
              <p>react - Node.js</p>
              <div className="portfolio-links">
                {isOpen && (
                  <Lightbox
                    mainSrc={project[photoIndex]}
                    nextSrc={project[(photoIndex + 1) % project.length]}
                    prevSrc={
                      project[
                        (photoIndex + project.length - 1) % project.length
                      ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + project.length - 1) % project.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % project.length)
                    }
                  />
                )}
                <div
                  className="portfokio-lightbox cursor p-4"
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(2);
                  }}
                >
                  <i className="fas fa-plus" title="open"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-item mb-5 php">
          <div className="portfolio-wrap">
            <img src={project[3]} className="img-fluid h-300" alt="" />
            <div className="portfolio-info">
              <h4>Portfolio</h4>
              <p>React - Php</p>
              <div className="portfolio-links">
                {isOpen && (
                  <Lightbox
                    mainSrc={project[photoIndex]}
                    nextSrc={project[(photoIndex + 1) % project.length]}
                    prevSrc={
                      project[
                        (photoIndex + project.length - 1) % project.length
                      ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + project.length - 1) % project.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % project.length)
                    }
                  />
                )}
                <div
                  className="portfokio-lightbox cursor p-4"
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(3);
                  }}
                >
                  <i className="fas fa-plus" title="open"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-item mb-5 wordpress php">
          <div className="portfolio-wrap">
            <img src={project[4]} className="img-fluid h-300" alt="" />
            <div className="portfolio-info">
              <h4>Magasin Woocommerce</h4>
              <p>Wordpress - php </p>
              <div className="portfolio-links">
                {isOpen && (
                  <Lightbox
                    mainSrc={project[photoIndex]}
                    nextSrc={project[(photoIndex + 1) % project.length]}
                    prevSrc={
                      project[
                        (photoIndex + project.length - 1) % project.length
                      ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + project.length - 1) % project.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % project.length)
                    }
                  />
                )}
                <div
                  className="portfokio-lightbox cursor p-4"
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(4);
                  }}
                >
                  <i className="fas fa-plus" title="open"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-item mb-5 react node">
          <div className="portfolio-wrap">
            <img src={project[5]} className="img-fluid h-300" alt="" />
            <div className="portfolio-info">
              <h4>Boutique de commerce électronique</h4>
              <p>React - Node.js</p>
              <div className="portfolio-links">
                {isOpen && (
                  <Lightbox
                    mainSrc={project[photoIndex]}
                    nextSrc={project[(photoIndex + 1) % project.length]}
                    prevSrc={
                      project[
                        (photoIndex + project.length - 1) % project.length
                      ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + project.length - 1) % project.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % project.length)
                    }
                  />
                )}
                <div
                  className="portfokio-lightbox cursor p-4"
                  onClick={() => {
                    setIsOpen(true);
                    setPhotoIndex(5);
                  }}
                >
                  <i className="fas fa-plus" title="open"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsFilter;
