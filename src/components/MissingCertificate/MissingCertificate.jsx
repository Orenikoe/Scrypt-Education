/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import LayoutOne from "../../layouts/LayoutOne";
import "./MissingCertificate.css";
import FileNotFound from "../../assets/file-not-found.png";

function MissingCertificate() {
  return (
    <LayoutOne>
      <div className="missing-file-container">
        <img
          className="missing-file-image"
          src={FileNotFound}
          alt="File not found"
        />
        <h1>File Not Found</h1>
        <p>The uploaded file doesn't exist, please try again</p>
        <Link to="/verify">
          <button type="button">Verify other document</button>
        </Link>
      </div>
    </LayoutOne>
  );
}

export default MissingCertificate;
