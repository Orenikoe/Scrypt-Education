/* eslint-disable react/prop-types */
import React from "react";
import Valid from "../../../../assets/valid.png";
import Expired from "../../../../assets/expired.png";
import Pending from "../../../../assets/pending.png";
import Failed from "../../../../assets/failed.png";
import Revoked from "../../../../assets/revoked.png";
import "./Badge.css";

function Badge({ certificate }) {
  const { status } = certificate;

  return (
    <div className="badge-container">
      {status === "valid" && <img src={Valid} alt="valid certificate badge" />}
      {status === "expired" && (
        <img src={Expired} alt="expired certificate badge" />
      )}
      {status === "pending" && (
        <img src={Pending} alt="pending certificate badge" />
      )}
      {status === "failed" && (
        <img src={Failed} alt="failed certificate badge" />
      )}
      {status === "revoked" && (
        <img src={Revoked} alt="revoked certificate badge" />
      )}
    </div>
  );
}

export default Badge;
