import React from "react";

const PrivacyText = ({ homeLanguage }) => {
  return (
    <>
      {homeLanguage === "en" ? (
        <section className="container mb-5">
          <p className="w-75 my-5 fw-bold">
            This Privacy Policy describes how WEBO.netlify.com (the “Site” or
            “we”) collects, uses, and discloses your Personal Information when
            you visit or make a purchase from the Site.
          </p>

          <h3 className="fs-2 fw-bold">Collecting Personal Information</h3>
          <p className="text-muted lh-lg">
            When you visit the Site, we collect certain information about your
            device, your interaction with the Site, and information necessary to
            process your purchases. We may also collect additional information
            if you contact us for customer support. In this Privacy Policy, we
            refer to any information that can uniquely identify an individual
            (including the information below) as “Personal Information”. See the
            list below for more information about what Personal Information we
            collect and why.
          </p>

          <h5 className="fs-4 fw-bold mt-3">Device information</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              Examples of Personal Information collected: version of web
              browser, IP address, time zone, cookie information, what sites or
              products you view, search terms, and how you interact with the
              Site.
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
      ) : homeLanguage === "fr" ? (
        <section className="container mb-5">
          <p className="w-75 my-5 fw-bold">
            Cette politique de confidentialité décrit comment WEBO.netlify.com
            (le « Site » ou « nous ») recueille, utilise et divulgue vos
            informations personnelles lorsque vous visitez ou effectuez un achat
            sur le Site.
          </p>

          <h3 className="fs-2 fw-bold">Collecting Personal Information</h3>
          <p className="text-muted lh-lg">
            Lorsque vous visitez le Site, nous collectons certaines informations
            sur votre l'appareil, votre interaction avec le Site et les
            informations nécessaires pour traiter vos achats. Nous pouvons
            également collecter des informations supplémentaires si vous nous
            contactez pour le support client. Dans cette politique de
            confidentialité, nous se référer à toute information qui peut
            identifier de manière unique un individu (y compris les informations
            ci-dessous) comme « Informations personnelles ». Voir le liste
            ci-dessous pour plus d'informations sur les informations
            personnelles que nous collecter et pourquoi.
          </p>

          <h5 className="fs-4 fw-bold mt-3">Informations sur l'appareil</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              Exemples d'informations personnelles collectées : version du site
              Web navigateur, adresse IP, fuseau horaire, informations sur les
              cookies, quels sites ou les produits que vous consultez, les
              termes de recherche et la façon dont vous interagissez avec le
              Placer.
            </li>
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              Finalité de la collecte : charger le Site avec précision pour
              vous, et effectuer des analyses sur l'utilisation du site pour
              optimiser notre site.
            </li>
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              Source de collecte : Collectée automatiquement lorsque vous
              accédez à notre Site utilisant des cookies, des fichiers journaux,
              des balises Web, des balises ou des pixels .
            </li>
          </ul>

          <h5 className="fs-4 fw-bold mt-3">
            Informations d'assistance client
          </h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              But de la collecte : fournir un support client.
            </li>
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              Source de collecte : collectée auprès de vous.
            </li>
          </ul>
        </section>
      ) : (
        <section className="container mb-5 rtl">
          <p className="w-75 my-5 fw-bold">
            تصف سياسة الخصوصية هذه كيفية استخدام WEBO.netlify.com ("الموقع" أو
            "نحن") بجمع معلوماتك الشخصية واستخدامها والإفصاح عنها عندما قمت
            بزيارة أو إجراء عملية شراء من الموقع.
          </p>

          <h3 className="fs-2 fw-bold">جمع المعلومات الشخصية</h3>
          <p className="text-muted lh-lg">
            عندما تزور الموقع ، نقوم بجمع معلومات معينة عنك الجهاز وتفاعلك مع
            الموقع والمعلومات اللازمة لـ معالجة مشترياتك. قد نقوم أيضًا بجمع
            معلومات إضافية إذا اتصلت بنا للحصول على دعم العملاء. في سياسة
            الخصوصية هذه ، نحن تشير إلى أي معلومات يمكن أن تحدد هوية الفرد بشكل
            فريد (بما في ذلك المعلومات أدناه) على أنها "معلومات شخصية". انظر
            القائمة أدناه للحصول على مزيد من المعلومات حول ماهية المعلومات
            الشخصية نحن جمع ولماذا.
          </p>

          <h5 className="fs-4 fw-bold mt-3">معلومات الجهاز</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              أمثلة على المعلومات الشخصية التي تم جمعها: إصدار الويب المتصفح ،
              عنوان IP ، المنطقة الزمنية ، معلومات ملفات تعريف الارتباط ، ما هي
              المواقع أو المنتجات التي تعرضها ، ومصطلحات البحث ، وكيفية تفاعلك
              مع موقع.
            </li>
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              الغرض من التجميع: تحميل الموقع بدقة من أجلك ومن أجل إجراء تحليلات
              على استخدام الموقع لتحسين موقعنا.
            </li>
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              مصدر المجموعة: يتم جمعها تلقائيًا عند الوصول إلى الموقع باستخدام
              ملفات تعريف الارتباط أو ملفات السجل أو إشارات الويب أو العلامات أو
              وحدات البكسل.
            </li>
          </ul>

          <h5 className="fs-4 fw-bold mt-3">معلومات دعم العملاء</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              الغرض من التجميع: تقديم دعم العملاء.
            </li>
            <li className="list-group-item text-secondary p-0 mb-4 w-75 lh-lg">
              مصدر المجموعة: تم جمعها منك.
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default PrivacyText;
