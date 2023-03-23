/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from "react";
import Icon from "../../../assets/filter-icon.png";
import "./FilterIcon.css";

function FilterIcon({ setButton }) {
  return (
    <button
      className="filter-button"
      type="button"
      onClick={() => setButton(false)}
    >
      <img src={Icon} alt="filter icon" />
    </button>
  );
}

export default FilterIcon;
