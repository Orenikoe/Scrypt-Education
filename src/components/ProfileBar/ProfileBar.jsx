/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../../assets/ProfileMenu.png";
import Settings from "../../assets/Settings.png";
import LogOutIcon from "../../assets/LogOutIcon.png";
import "./ProfileBar.css";

function ProfileBar() {
  const [animation, setAnimation] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="profile-bar">
      <div className="icons-profile-wrapper">
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.125 17H14.5625V9.03125C14.5625 5.72422 12.118 2.99141 8.9375 2.53672V1.625C8.9375 1.10703 8.51797 0.6875 8 0.6875C7.48203 0.6875 7.0625 1.10703 7.0625 1.625V2.53672C3.88203 2.99141 1.4375 5.72422 1.4375 9.03125V17H0.875C0.460156 17 0.125 17.3352 0.125 17.75V18.5C0.125 18.6031 0.209375 18.6875 0.3125 18.6875H5.375C5.375 20.1359 6.55156 21.3125 8 21.3125C9.44844 21.3125 10.625 20.1359 10.625 18.6875H15.6875C15.7906 18.6875 15.875 18.6031 15.875 18.5V17.75C15.875 17.3352 15.5398 17 15.125 17ZM8 19.8125C7.37891 19.8125 6.875 19.3086 6.875 18.6875H9.125C9.125 19.3086 8.62109 19.8125 8 19.8125ZM3.125 17V9.03125C3.125 7.72813 3.63125 6.50469 4.55234 5.58359C5.47344 4.6625 6.69688 4.15625 8 4.15625C9.30313 4.15625 10.5266 4.6625 11.4477 5.58359C12.3687 6.50469 12.875 7.72813 12.875 9.03125V17H3.125Z"
            fill="#445C61"
            fillOpacity="0.5"
          />
        </svg>

        <svg
          width="1"
          height="30"
          viewBox="0 0 1 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="-2.18557e-08"
            x2="0.500001"
            y2="30"
            stroke="#445C61"
            strokeOpacity="0.5"
          />
        </svg>
        <svg
          className="user-logo"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setAnimation(!animation);
            const interval = setInterval(() => {
              setMenu(!menu);
            }, 800);
            setInterval(() => {
              clearInterval(interval);
            }, 805);
          }}
        >
          <path
            d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 4.5C17.49 4.5 19.5 6.51 19.5 9C19.5 11.49 17.49 13.5 15 13.5C12.51 13.5 10.5 11.49 10.5 9C10.5 6.51 12.51 4.5 15 4.5ZM15 25.8C11.25 25.8 7.935 23.88 6 20.97C6.045 17.985 12 16.35 15 16.35C17.985 16.35 23.955 17.985 24 20.97C22.065 23.88 18.75 25.8 15 25.8Z"
            fill="#445C61"
            fillOpacity="0.5"
          />
        </svg>
        {menu && (
          <>
            <div className={animation ? "triangle" : "triangle-gone"} />
            <div
              className={animation ? "drop-down-menu" : "drop-down-menu-gone"}
            >
              <div className="drop-container">
                <img
                  className="settings-drop-down-menu"
                  src={ProfileMenu}
                  alt="ProfileMenu"
                />
                <h5>Profile</h5>
              </div>
              <div className="drop-container">
                <img
                  className="settings-drop-down-menu"
                  src={Settings}
                  alt="Settings"
                />
                <h5>Settings</h5>
              </div>
              <div className="drop-container">
                <img
                  className="settings-drop-down-menu"
                  src={LogOutIcon}
                  alt="LogOutIcon"
                />
                <h5 onClick={() => logout()}>Log Out</h5>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileBar;
