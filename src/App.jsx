// eslint-disable-next-line import/no-named-as-default
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import { CertificatesContextProvider } from "./contexts/CertificatesContext";
import Login from "./pages/Login/Login";
import CertificateGallery from "./pages/CertificateGallery/CertificateGallery";
import CertificateDetails from "./pages/CertificateDetails/CertificateDetails";
import Verify from "./pages/Verify/Verify";
import Dashboard from "./pages/Dashboard/Dashboard";
import MissingCertificate from "./components/MissingCertificate/MissingCertificate";

function App() {
  const { userDetails } = useContext(UserContext);

  useEffect(() => {}, [userDetails]);

  return (
    <div>
      <CertificatesContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<CertificateGallery />} />
          <Route
            path="/gallery/:certificateID"
            element={<CertificateDetails />}
          />
          <Route path="/verify" element={<Verify />} />
          <Route path="/file_not_found" element={<MissingCertificate />} />
        </Routes>
      </CertificatesContextProvider>
    </div>
  );
}

export default App;
