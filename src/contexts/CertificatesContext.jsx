/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-bitwise */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";
import certs from "./certs";

const CertificatesContext = createContext();

export default CertificatesContext;

export function CertificatesContextProvider({ children }) {
  const [certificates, setCertificates] = useState([]);



  const getCertificates = () => {
setCertificates(certs)
  };

  return (
    <CertificatesContext.Provider
      value={{
        certificates,
        getCertificates
      }}
    >
      {children}
    </CertificatesContext.Provider>
  );
}
