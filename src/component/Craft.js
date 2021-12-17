import React from "react";
import { Link } from "react-router-dom";

const Craft = () => {
  return (
    <>
      <section className="text-center mb-5">
        <h2 className="fs-1 fw-bold lh-base">
          Nous vous aiderons à atteindre vos objectifs et à développer{" "}
          <br className="d-none-sm" /> votre entreprise.
        </h2>
        <Link to="/pricing">
          <button className="btn btn-violet px-5 mt-3 py-2">Commence</button>
        </Link>
      </section>
    </>
  );
};

export default Craft;
