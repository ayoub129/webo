import React from "react";

const PrivacyText = () => {
  return (
    <>
      <section className="container mb-5">
        <p className="w-75 my-5 fw-bold">
          This Privacy Policy describes how WEBO.netlify.com (the “Site” or
          “we”) collects, uses, and discloses your Personal Information when you
          visit or make a purchase from the Site.
        </p>

        <h3 className="fs-2 fw-bold">Collecting Personal Information</h3>
        <p className="text-muted lh-lg">
          When you visit the Site, we collect certain information about your
          device, your interaction with the Site, and information necessary to
          process your purchases. We may also collect additional information if
          you contact us for customer support. In this Privacy Policy, we refer
          to any information that can uniquely identify an individual (including
          the information below) as “Personal Information”. See the list below
          for more information about what Personal Information we collect and
          why.
        </p>

        <h5 className="fs-4 fw-bold mt-3">Device information</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
            Examples of Personal Information collected: version of web browser,
            IP address, time zone, cookie information, what sites or products
            you view, search terms, and how you interact with the Site.
          </li>
          <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
            Purpose of collection: to load the Site accurately for you, and to
            perform analytics on Site usage to optimize our Site.
          </li>
          <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
            Source of collection: Collected automatically when you access our
            Site using cookies, log files, web beacons, tags, or pixels .
          </li>
        </ul>

        <h5 className="fs-4 fw-bold mt-3">Customer support information</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
            Purpose of collection: to provide customer support.
          </li>
          <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
            Source of collection: collected from you.
          </li>
        </ul>
      </section>
    </>
  );
};

export default PrivacyText;
