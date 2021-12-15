import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    props.getLanguage(language);
  });

  return (
    <>
      {/* // navbar */}
      {language === "en" ? (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link
              className="navbar-brand d-block d-lg-none text-uppercase fw-bold"
              to="/"
            >
              WEBO
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active fw-bold text-hv" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active fw-bold text-hv"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active fw-bold text-hv"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active fw-bold text-hv"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
              </ul>
              <Link
                className="navbar-brand d-none d-lg-block fw-bold text-uppercase"
                to="/"
              >
                webo
              </Link>
              <form className="d-flex ms-auto align-items-center">
                <a
                  className="me-4 text-white rounded-circle social-media"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100074297456010"
                >
                  <i className="fab fa-facebook p-2"></i>
                </a>
                <a
                  className="me-4 text-white rounded-circle social-media"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/justforbuisiness/"
                >
                  <i className="fab fa-instagram p-2"></i>
                </a>
                <a
                  className="me-4 text-white rounded-circle social-media"
                  href="/"
                >
                  <i className="fab fa-twitter p-2"></i>
                </a>
                <a
                  className="me-4 text-white rounded-circle social-media"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@abbravei"
                >
                  <i className="fab fa-tiktok p-2"></i>
                </a>
              </form>
              <select
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                value={language}
                id="inputState"
                className="form-select w-5"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
              </select>
            </div>
          </div>
        </nav>
      ) : language === "fr" ? (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link
              className="navbar-brand d-block d-lg-none text-uppercase fw-bold"
              to="/"
            >
              WEBO
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active fw-bold text-hv" to="/about">
                    à propos de nous
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active fw-bold text-hv"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <Link
                className="navbar-brand d-none d-lg-block fw-bold text-uppercase"
                to="/"
              >
                webo
              </Link>
              <form className="d-flex ms-auto align-items-center">
                <a
                  className="me-4 text-white rounded-circle social-media"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100074297456010"
                >
                  <i className="fab fa-facebook p-2"></i>
                </a>
                <a
                  className="me-4 text-white rounded-circle social-media"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/justforbuisiness/"
                >
                  <i className="fab fa-instagram p-2"></i>
                </a>
                <a
                  className="me-4 text-white rounded-circle social-media"
                  href="/"
                >
                  <i className="fab fa-twitter p-2"></i>
                </a>
                <a
                  className="me-4 text-white rounded-circle social-media"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@abbravei"
                >
                  <i className="fab fa-tiktok p-2"></i>
                </a>
              </form>
              <select
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                value={language}
                id="inputState"
                className="form-select w-5"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
              </select>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light rtl">
          <div className="container-fluid">
            <Link
              className="navbar-brand d-block d-lg-none text-uppercase fw-bold"
              to="/"
            >
              ويبو
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active fw-bold text-hv" to="/about">
                    معلومات عنا
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active fw-bold text-hv"
                    to="/contact"
                  >
                    اتصل بنا
                  </Link>
                </li>
              </ul>
              <Link
                className="navbar-brand d-none d-lg-block fw-bold text-uppercase"
                to="/"
              >
                ويبو
              </Link>
              <form className="d-flex me-auto ms-3 align-items-center ">
                <a
                  className="me-4 text-white rounded-circle social-media"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100074297456010"
                >
                  <i className="fab fa-facebook p-2"></i>
                </a>
                <a
                  className="me-4 text-white rounded-circle social-media"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/justforbuisiness/"
                >
                  <i className="fab fa-instagram p-2"></i>
                </a>
                <a
                  className="me-4 text-white rounded-circle social-media"
                  href="/"
                >
                  <i className="fab fa-twitter p-2"></i>
                </a>
                <a
                  className="me-4 text-white rounded-circle social-media"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@abbravei"
                >
                  <i className="fab fa-tiktok p-2"></i>
                </a>
              </form>
              <select
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                value={language}
                id="inputState"
                className="form-select w-5 "
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="ar">AR</option>
              </select>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
