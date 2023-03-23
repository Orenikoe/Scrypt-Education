import React, { useContext, useState } from "react";
import "./PublicBar.css";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import logo from "../../assets/Scrypt-Education.png";

function ProfileBar() {
  const { userDetails } = useContext(UserContext);
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    localStorage.clear();
  };

  return (
    <div className="profile-bar">
      <div
        className="icons-wrapper"
        style={
          userDetails
            ? { display: "flex", justifyContent: "flex-end", height: "30px" }
            : {
                display: "flex",
                justifyContent: "space-between",
              }
        }
      >
        <Link to="/login">
          <img src={logo} alt="Scrypt Education logo" />
        </Link>
        <svg
          width="27"
          height="27"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.985 0C6.705 0 0 6.72 0 15C0 23.28 6.705 30 14.985 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 14.985 0ZM25.38 9H20.955C20.475 7.125 19.785 5.325 18.885 3.66C21.645 4.605 23.94 6.525 25.38 9ZM15 3.06C16.245 4.86 17.22 6.855 17.865 9H12.135C12.78 6.855 13.755 4.86 15 3.06ZM3.39 18C3.15 17.04 3 16.035 3 15C3 13.965 3.15 12.96 3.39 12H8.46C8.34 12.99 8.25 13.98 8.25 15C8.25 16.02 8.34 17.01 8.46 18H3.39ZM4.62 21H9.045C9.525 22.875 10.215 24.675 11.115 26.34C8.355 25.395 6.06 23.49 4.62 21ZM9.045 9H4.62C6.06 6.51 8.355 4.605 11.115 3.66C10.215 5.325 9.525 7.125 9.045 9ZM15 26.94C13.755 25.14 12.78 23.145 12.135 21H17.865C17.22 23.145 16.245 25.14 15 26.94ZM18.51 18H11.49C11.355 17.01 11.25 16.02 11.25 15C11.25 13.98 11.355 12.975 11.49 12H18.51C18.645 12.975 18.75 13.98 18.75 15C18.75 16.02 18.645 17.01 18.51 18ZM18.885 26.34C19.785 24.675 20.475 22.875 20.955 21H25.38C23.94 23.475 21.645 25.395 18.885 26.34ZM21.54 18C21.66 17.01 21.75 16.02 21.75 15C21.75 13.98 21.66 12.99 21.54 12H26.61C26.85 12.96 27 13.965 27 15C27 16.035 26.85 17.04 26.61 18H21.54Z"
            fill="#323232"
          />
        </svg>
      </div>
    </div>
  );
}

export default ProfileBar;
