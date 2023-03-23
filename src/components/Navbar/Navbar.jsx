/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import UserContext from "../../contexts/UserContext";
import Logo from "../../assets/Logo2.svg";

function Navbar() {
  const { userDetails, searchUser } = useContext(UserContext);

  const location = useLocation();



  const options = [
    {
      label: "Dashboard",
      pathTo: "/dashboard",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
            fill={location.pathname === "/dashboard" ? "#FFFFFF" : "#979797"}
          />
        </svg>
      ),
    },
    {
      label: "Certificates",
      pathTo: "/gallery",
      icon: (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.667 2.50065H11.0003L8.83366 0.333984H2.33366C1.14199 0.333984 0.177826 1.30898 0.177826 2.50065L0.166992 15.5007C0.166992 16.6923 1.14199 17.6673 2.33366 17.6673H19.667C20.8587 17.6673 21.8337 16.6923 21.8337 15.5007V4.66732C21.8337 3.47565 20.8587 2.50065 19.667 2.50065ZM13.167 13.334H4.50033V11.1673H13.167V13.334ZM17.5003 9.00065H4.50033V6.83398H17.5003V9.00065Z"
            fill={location.pathname === "/gallery" ? "#FFFFFF" : "#979797"}
          />
        </svg>
      ),
    },
    {
      label:
        userDetails && userDetails.role === "teacher"
          ? "Issue certificate"
          : "Verify",
      pathTo: "/verify",
      icon: (
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4587 5.75065C8.96366 5.75065 7.75033 6.96398 7.75033 8.45898C7.75033 9.95398 8.96366 11.1673 10.4587 11.1673C11.9537 11.1673 13.167 9.95398 13.167 8.45898C13.167 6.96398 11.9537 5.75065 10.4587 5.75065ZM19.667 0.333984H2.33366C1.14199 0.333984 0.166992 1.30898 0.166992 2.50065V15.5007C0.166992 16.6923 1.14199 17.6673 2.33366 17.6673H19.667C20.8587 17.6673 21.8337 16.6923 21.8337 15.5007V2.50065C21.8337 1.30898 20.8587 0.333984 19.667 0.333984ZM16.1895 15.7282L13.037 12.5757C12.2895 13.0523 11.4012 13.334 10.4478 13.334C7.76116 13.334 5.58366 11.1565 5.58366 8.45898C5.58366 5.76148 7.76116 3.58398 10.4587 3.58398C13.1562 3.58398 15.3337 5.76148 15.3337 8.45898C15.3337 9.41232 15.052 10.2898 14.5753 11.0482L17.7278 14.1898L16.1895 15.7282Z"
            fill={location.pathname === "/verify" ? "#FFFFFF" : "#979797"}
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" className="logo-menu" />
      <div className="list-wrapper">
        <ul className="list">
          {options.map((option, index) => {
            return (
              <li key={index} className="li-item">
                <NavLink
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#f15d22" : "",
                    fontWeight: isActive ? 700 : "",
                    color: isActive ? "white" : "",
                  })}
                  className="nav-link"
                  key={index}
                  to={option.pathTo}
                >
                  <div className="navbar-icon">{option.icon}</div>
                  {option.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
