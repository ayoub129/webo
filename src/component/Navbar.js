import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  window.addEventListener('scroll' , () => {
    let menu = document.getElementById('navbar')

    if (window.pageYOffset > 0) {
      menu.classList.add('bg')
    } else {
      menu.classList.remove('bg')
    }
  })

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light transition" id="navbar">
        <div className="container">
          <Link className="navbar-brand me-auto ms-2" to="/">
            <img src="images/logo.png" className="img-fluid w-35" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link ms-3 active fw-bold text-hv" to="/">
                  Accueil
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link active fw-bold text-hv" to="/about">
                  À propos de nous
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link active fw-bold text-hv" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link active fw-bold text-hv" to="/pricing">
                  Plan tarifaire
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  className="nav-link active fw-bold text-hv"
                  to="/projects"
                >
                  Projets
                </Link>
              </li>
              <li className="nav-item ms-3">
                <Link
                  className="nav-link active fw-bold text-hv"
                  to="/services"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
