/* eslint-disable no-bitwise */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./Button.css";
import UserContext from "../../contexts/UserContext";

function Button({
  className,
  functionality,
  loginCredentials,
  neededResources,
  style,
}) {
  const { userDetails } = useContext(UserContext);

  return (
    <button
      type="button"
      style={style}
      onClick={() => {
        functionality();
      }}
      className={
        (loginCredentials?.email !== "") &
          (loginCredentials?.password !== "") &
          (loginCredentials?.password.length >= 8) ||
        (userDetails === null || userDetails?.role === "student"
          ? neededResources?.missing_file === false
          : null) ||
        (userDetails?.role === "teacher"
          ? (neededResources?.missing_student === false) &
            (neededResources?.missing_file === false)
          : null)
          ? "can-submit"
          : "button"
      }
    >
      {className}
    </button>
  );
}

export default Button;
