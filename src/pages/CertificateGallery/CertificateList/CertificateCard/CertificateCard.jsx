/* eslint-disable no-bitwise */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Badge from "../Badge/Badge";
import "./CertificateCard.css";
import UserContext from "../../../../contexts/UserContext";

function CertificateCard({ certificate }) {
  console.log(certificate)
  const { title, image_url, student_id, creation_date } = certificate;



  return (
    <div className="certificate-card">
      <div className="certificate-container">
        <iframe title="PDF of the certificate" src={image_url} scrolling="no" />
        <Badge certificate={certificate} />
      </div>
      <div className="certificate-information">
        <h3 className="certificate-title">
          {title
            ?.replace(".pdf", "")
            .replace(".png", "")
            .replace(/_/g, " ")
            .replace(/-/g, " ")}
        </h3>
        <p className="uploaded-data">
          {creation_date.slice(0, 10)} - {creation_date.slice(11, 19)}
        </p>
      </div>
    </div>
  );
}

export default CertificateCard;
