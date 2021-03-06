import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ homeLanguage }) => {
  return (
    <>
      {homeLanguage === "en" ? (
        <footer className={`bg-dark text-white p-4 `}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <h3>WEBO</h3>
                <p className="text-muted">
                  &copy; 2021 WEBO. All Right Reserved
                </p>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4 col-6 mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-violet fw-bold">Company</p>
                      </li>
                      <li className="list-group-item">
                        <Link to="/about" className="text-white text-hv">
                          About Us
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/contact" className="text-white text-hv">
                          contact Us
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/pricing" className="text-white text-hv">
                          Pricing
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-violet fw-bold">Support</p>
                      </li>
                      <li className="list-group-item">
                        <Link to="/terms" className="text-white text-hv">
                          Terms of service
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/privacy" className="text-white text-hv">
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/services" className="text-white text-hv">
                          Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-violet">
                        <p className="text-violet fw-bold">Follow Us</p>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/profile.php?id=100074297456010"
                          className="text-white text-hv"
                        >
                          FaceBook
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.instagram.com/justforbuisiness/"
                          className="text-white text-hv"
                        >
                          InstaGram
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.tiktok.com/@abbravei"
                          className="text-white text-hv"
                        >
                          TikTok
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.tiktok.com/@abbravei"
                          className="text-white text-hv"
                        >
                          {" "}
                          Twitter{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : homeLanguage === "fr" ? (
        <footer className={`bg-dark text-white p-4 `}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <h3>WEBO</h3>
                <p className="text-muted">
                  &copy; 2021 WEBO. Tous droits r??serv??s
                </p>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4 col-6 mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-violet fw-bold">Entreprise</p>
                      </li>
                      <li className="list-group-item">
                        <Link to="/about" className="text-white text-hv">
                          ?? propos de nous
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/contact" className="text-white text-hv">
                          contacter Nous
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/pricing" className="text-white text-hv">
                          Plan tarifaire
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-violet fw-bold">Soutien</p>
                      </li>
                      <li className="list-group-item">
                        <Link to="/terms" className="text-white text-hv">
                          Conditions d'utilisation
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/privacy" className="text-white text-hv">
                          Politique de confidentialit??
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/contact" className="text-white text-hv">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-violet">
                        <p className="text-violet fw-bold">Suivez-nous</p>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/profile.php?id=100074297456010"
                          className="text-white text-hv"
                        >
                          FaceBook
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.instagram.com/justforbuisiness/"
                          className="text-white text-hv"
                        >
                          InstaGram
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.tiktok.com/@abbravei"
                          className="text-white text-hv"
                        >
                          TikTok
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.tiktok.com/@abbravei"
                          className="text-white text-hv"
                        >
                          {" "}
                          Twitter{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer className={`bg-dark text-white p-4 rtl`}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <h3>????????</h3>
                <p className="text-muted">
                  &copy; 2021 ???????? . ???????? ???????????? ????????????
                </p>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4 col-6 mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-violet fw-bold">????????????</p>
                      </li>
                      <li className="list-group-item">
                        <Link to="/about" className="text-white text-hv">
                          ?????????????? ??????
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/contact" className="text-white text-hv">
                          ???????? ??????
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/pricing" className="text-white text-hv">
                          ?????? ??????????????
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-violet fw-bold">??????????</p>
                      </li>
                      <li className="list-group-item">
                        <Link to="/terms" className="text-white text-hv">
                          ???????? ????????????
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/privacy" className="text-white text-hv">
                          ?????????? ????????????????
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/contact" className="text-white text-hv">
                          ????????
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-5">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item text-violet">
                        <p className="text-violet fw-bold">????????????</p>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.facebook.com/profile.php?id=100074297456010"
                          className="text-white text-hv"
                        >
                          ????????????????
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.instagram.com/justforbuisiness/"
                          className="text-white text-hv"
                        >
                          ????????????????????
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.tiktok.com/@abbravei"
                          className="text-white text-hv"
                        >
                          ?????? ??????
                        </a>
                      </li>
                      <li className="list-group-item">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.tiktok.com/@abbravei"
                          className="text-white text-hv"
                        >
                          {" "}
                          ??????????{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
