import React from "react";

const Social = () => {
  return (
    <div className="d-flex flex-column left-fixed justify-content-center">
      <a
        className="me-4 mt-3 text-white rounded-circle social-media"
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/profile.php?id=100074297456010"
      >
        <i className="fab fa-facebook p-2"></i>
      </a>
      <a
        className="me-4 mt-3 text-white rounded-circle social-media"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/justforbuisiness/"
      >
        <i className="fab fa-instagram p-2"></i>
      </a>
      <a className="me-4 mt-3 text-white rounded-circle social-media" href="/">
        <i className="fab fa-twitter p-2"></i>
      </a>
      <a
        className="me-4 mt-3 text-white rounded-circle social-media"
        target="_blank"
        rel="noreferrer"
        href="https://www.tiktok.com/@abbravei"
      >
        <i className="fab fa-tiktok p-2"></i>
      </a>
    </div>
  );
};

export default Social;
