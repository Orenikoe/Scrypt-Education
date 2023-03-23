/* eslint-disable react/prop-types */
import React from "react";
import "./WarningMessage.css";
import Warning from "../../assets/warning-icon.png";

function WarningMessage(props) {
  const { setDuplicatedCertificate } = props;

  return (
    <div className="warning-container">
      <div className="warning-header">
        <svg
          onClick={() => setDuplicatedCertificate(false)}
          width="20"
          height="20"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="#FFF"
          />
        </svg>
        <img className="warning-icon" src={Warning} alt="Warning icon" />
        <h1>WARNING!</h1>
      </div>
      <div className="warning-info">
        <p className="paragraph">
          This certificate was already issued in the past.
        </p>
        <p className="paragraph">Choose a different file, please.</p>
      </div>
    </div>
  );
}

export default WarningMessage;
