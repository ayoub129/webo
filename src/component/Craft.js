import React from "react";
import { Link } from "react-router-dom";

const Craft = ({ homeLanguage }) => {
  return (
    <>
      {homeLanguage === "en" ? (
        <section className="text-center mb-5">
          <h2 className="fs-1 fw-bold lh-base">
            Craft Your New Website With <br />
            WEBO
          </h2>
          <Link to="/pricing">
            <button className="btn btn-violet px-5 mt-3 py-2">
              Get Started
            </button>
          </Link>
        </section>
      ) : homeLanguage === "fr" ? (
        <section className="text-center mb-5">
          <h2 className="fs-1 fw-bold lh-base">
            Créez votre nouveau site Web avec <br />
            WEBO
          </h2>
          <Link to="/pricing">
            <button className="btn btn-violet px-5 mt-3 py-2">Commencer</button>
          </Link>
        </section>
      ) : (
        <section className="text-center mb-5 rtl">
          <h2 className="fs-1 fw-bold lh-base">
            صياغة موقع الويب الجديد الخاص بك مع <br /> ويبو
          </h2>
          <Link to="/pricing">
            <button className="btn btn-violet px-5 mt-3 py-2">ابدء الان</button>
          </Link>
        </section>
      )}
    </>
  );
};

export default Craft;
