import React, { useState, useContext, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import "./Details.css";
import axios from "axios";
import UserContext from "../../../contexts/UserContext";
import SocialMedia from "../SocialMedia/SocialMedia";
import Copy from "../../../assets/VectorCopy.png";
import Valid from "../../../assets/valid.png";
import Expired from "../../../assets/expired.png";
import Pending from "../../../assets/pending.png";
import Failed from "../../../assets/failed.png";
import Revoked from "../../../assets/revoked.png";
import Checkmark from "../../../assets/check-sign.svg";

function Details(props) {
  const { selectedCertificate } = props;
  const {
    file,
    title,
    status,
    creation_date,
    expiration_date,
    proof_file,
    file_hash,
    image_url,
  } = selectedCertificate;
  const [statusVerify, setStatusVerify] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const [showProof, setShowProof] = useState(false);
  const { certificateID } = useParams();

  
 useEffect(() => {
  const selected = certs.filter((cert) => {
    console.log(cert)
    return cert.id == certificateID
   }  )
   console.log(selected)
  setSelectedCertificate(selected[0]);
 }, [])


  return (
    <div className="body-container">
      <div className="certificate-details-container">
        <div className="certificate-container-display">
          {image_url ? (
            <iframe
              title="PDF of the certificate"
              className="certificate-image-display"
              src={image_url}
            />
          ) : null}
        </div>
        <div className="details-container">
          <div>
            <h1 className="title-certificate">
              {title
                ?.replace(".pdf", "")
                .replace(".png", "")
                .replace(/_/g, " ")
                .replace(/-/g, " ")}
            </h1>
          </div>
          <div className="status-container">
            <h3 className="status-label">Status:</h3>
            {statusVerify ? null : (
              <p className="verify-below">
                Verify below <span>↓</span>
              </p>
            )}
            <div className={statusVerify ? "status-show" : "status-hidden"}>
              <p
                className="actual-status"
                style={{
                  color:
                    (status === "valid" && "#2BC86B") ||
                    (status === "expired" && "#F39D29") ||
                    (status === "pending" && "#3FB6DD") ||
                    (status === "failed" && "#EC4F52") ||
                    (status === "revoked" && "#EC4F52"),
                }}
              >
                {status.charAt(0).toUpperCase() + status.substring(1)}
              </p>
              {status === "valid" && (
                <img
                  className="status-icon"
                  src={Valid}
                  alt="valid certificate badge"
                />
              )}
              {status === "expired" && (
                <img
                  className="status-icon"
                  src={Expired}
                  alt="expired certificate badge"
                />
              )}
              {status === "pending" && (
                <img
                  className="status-icon"
                  src={Pending}
                  alt="pending certificate badge"
                />
              )}
              {status === "failed" && (
                <img
                  className="status-icon"
                  src={Failed}
                  alt="failed certificate badge"
                />
              )}
              {status === "revoked" && (
                <img
                  className="status-icon"
                  src={Revoked}
                  alt="revoked certificate badge"
                />
              )}
            </div>
          </div>
          <div className="information">
            <h3 className="information-label">Uploaded on:</h3>
            <p className="certificate-info">
              {`${creation_date.slice(0, 10)} - ${creation_date.slice(11, 19)}`}
            </p>
            <h3 className="information-label">Expires on:</h3>
            <p className="certificate-info">
              {expiration_date
                ? `${expiration_date?.slice(0, 10)} - ${expiration_date?.slice(
                    11,
                    19
                  )}`
                : "No expiration date"}
            </p>
            <h3 className="information-label hash-label">Transaction Hash</h3>
            <img
              className="copy-button"
              src={Copy}
              alt="Copy icon"
              onClick={() => {
                navigator.clipboard.writeText(file_hash);
                setShowCopy(true);
                setTimeout(() => setShowCopy(false), 2000);
              }}
            />
            {showCopy ? (
              <>
                <img
                  className="checkmark"
                  src={Checkmark}
                  alt="Green checkmark"
                />
                <h5 className="copy-box">Copied</h5>
              </>
            ) : null}
            <p className="certificate-info certificate-hash">
              {file_hash.length > 40
                ? `${file_hash.slice(0, 20)}(...)${file_hash.slice(
                    file_hash.length - 20,
                    file_hash.length
                  )}`
                : `${file_hash}`}
            </p>
            <h3 className="information-label hash-label">Proof File</h3>
            <img
              className="copy-button"
              src={Copy}
              alt="Copy icon"
              onClick={() => {
                navigator.clipboard.writeText(proof_file);
                setShowProof(true);
                setTimeout(() => setShowProof(false), 2000);
              }}
            />
            {showProof ? (
              <>
                <img
                  className="checkmark"
                  src={Checkmark}
                  alt="Green checkmark"
                />
                <h5 className="copy-box">Copied</h5>
              </>
            ) : null}
            <p className="certificate-info certificate-hash">
              {proof_file.length > 40
                ? `${proof_file.slice(0, 20)}(...)${proof_file.slice(
                    proof_file.length - 20,
                    proof_file.length - 1
                  )}`
                : `${proof_file}`}
            </p>
          </div>
          <SocialMedia file={file} title={title} status={status} />
          <div className="verify-certificate">
            <button type="button" className="view-transaction-button">
              View transaction page
            </button>
            <button
              type="button"
              className="verify-button"
              onClick={() => setStatusVerify(true)}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
