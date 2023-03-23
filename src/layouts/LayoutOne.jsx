import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import PublicBar from "../components/PublicBar/PublicBar";
import "./LayoutOne.css";
import UserContext from "../contexts/UserContext";

function LayoutOne({ children }) {
  const { userDetails } = useContext(UserContext);

  return (
    <div className="main">
      <div className="first">
        <Navbar />
      </div>
      <div className="second">
        {userDetails === null ? <PublicBar /> : <ProfileBar />}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default LayoutOne;
