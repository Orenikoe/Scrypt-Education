/* eslint-disable camelcase */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-restricted-syntax */
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CertificatesContext from "../../../contexts/CertificatesContext";
import CertificateCard from "./CertificateCard/CertificateCard";
import Pagination from "../Pagination/Pagination";
import "./CertificateList.css";

function CertificateList() {
  const {
    search,
    status,
    certificates,
    getCertificates,
    startDate,
    endDate,
    userDetails,
  } = useContext(CertificatesContext);

  // Variables needed to do the pagination
  const [pageNumber, setPageNumber] = useState(0);
  const CertificatesPerPage = 6;
  const pagesVisited = pageNumber * CertificatesPerPage;
  const displayCertificates = certificates.slice(
    pagesVisited,
    pagesVisited + CertificatesPerPage
  );

  useEffect(() => {
    getCertificates();
  }, []);

  return (
    <div className="paginated-certificates">
      <div className="certificates-list">
        {certificates.length > 0 ? (
          displayCertificates?.map((certificate) => (
            <Link
              className="certificate-link"
              key={certificate.id}
              to={`/gallery/${certificate.id}`}
            >
              <CertificateCard key={certificate.id} certificate={certificate} />
            </Link>
          ))
        ) : (
          <p className="no-certification">
            You don't have a certificate yet or any of the certificates match
            the filters in use.
          </p>
        )}
      </div>
      {certificates.length > 6 ? (
        <Pagination
          CertificatesPerPage={CertificatesPerPage}
          setPageNumber={setPageNumber}
        />
      ) : null}
    </div>
  );
}

export default CertificateList;
