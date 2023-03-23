/* eslint-disable import/no-unresolved */
import React, { useState, useContext, useEffect } from "react";
import FilterIcon from "./Filter/FilterIcon";
import CertificateList from "./CertificateList/CertificateList";
import "./CertificateGallery.css";
import LayoutOne from "../../layouts/layoutOne";
import FilterItems from "./Filter/FilterItems";

function CertificateGallery() {
  const [button, setButton] = useState(true);



  return (
    <LayoutOne>
      <div className="certificate-page-container">
        <div className="certificates-gallery">
          <h1 className="certificates-gallery-title">Certificates</h1>
          <hr className="separation-line" />
          {button ? (
            <FilterIcon setButton={setButton} />
          ) : (
            <FilterItems setButton={setButton} />
          )}
          <CertificateList />
        </div>
      </div>
    </LayoutOne>
  );
}

export default CertificateGallery;
