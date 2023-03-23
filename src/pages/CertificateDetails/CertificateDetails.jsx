/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./CertificateDetails.css";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import LayoutOne from "../../layouts/LayoutOne";
import Arrow from "../../assets/BackIcon.png";
import Details from "./Details/Details";
import certs from '../../contexts/certs'

function CertificateDetails() {
  const [selectedCertificate, setSelectedCertificate] = useState([]);
  const [loading, setLoading] = useState(false);
  const { certificateID } = useParams();


  const getCertificatesById =  () => {
    const selected = certs.filter((cert) => {
      console.log(cert)
      return cert.id == certificateID
     }  )
     console.log(selected)
    setSelectedCertificate(selected[0]);
  };

  useEffect(() => {
    getCertificatesById();
  }, []);

  return (
    <LayoutOne>
      <div className="main-container-details">
        <div className="back-container-details">
          <NavLink to="/gallery" className="button-back-details">
            <img
              src={Arrow}
              alt="Arrow to go back to the certificates gallery"
            />
          </NavLink>
          <h1 className="certificate-details-title">Certificate details</h1>
        </div>
        <hr className="break-line" />     
          <Details selectedCertificate={selectedCertificate} />
      </div>
    </LayoutOne>
  );
}

export default CertificateDetails;
