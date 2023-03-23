/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import CertificatesContext from "../../../contexts/CertificatesContext";
import "./FilterItems.css";
import "react-datepicker/dist/react-datepicker.css";
import Cancel from "../../../assets/cancel.svg";

export default function FilterItems({ setButton }) {
  const {
    search,
    setSearch,
    status,
    setStatus,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useContext(CertificatesContext);

  const [closeFilters, setCloseFilters] = useState(false);

  const possibleStatus = ["valid", "expired", "pending", "failed", "revoked"];

  return (
    <div
      className={closeFilters ? "close-filter-container" : "filter-container"}
    >
      <div>
        <h2 className="filter-title">Document title</h2>
        <input
          className="filter-by-title"
          type="text"
          name="search"
          id="search"
          placeholder="Search by document title"
          required
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div>
        <h2 className="filter-title">Status</h2>
        <select
          value={status}
          className="toggle-status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">---</option>
          {possibleStatus.map((chosenStatus) => (
            <option value={chosenStatus}>{chosenStatus}</option>
          ))}
        </select>
      </div>
      <div>
        <h2 className="filter-title">Date</h2>
        <div className="calendars-container">
          <DatePicker
            selected={startDate}
            className={!startDate ? "with-calendar" : "without-calendar"}
            placeholderText="Start"
            dateFormat="yyyy-MM-dd"
            closeOnScroll={(e) => e.target === document}
            onChange={(date) => setStartDate(date)}
            showYearDropdown
            scrollableMonthYearDropdown
            showDisabledMonthNavigation
          />
          <p className="to-word">To</p>
          <DatePicker
            selected={endDate}
            className={!endDate ? "with-calendar" : "without-calendar"}
            placeholderText="Finish"
            dateFormat="yyyy-MM-dd"
            closeOnScroll={(e) => e.target === document}
            onChange={(date) => setEndDate(date)}
            showYearDropdown
            scrollableMonthYearDropdown
            showDisabledMonthNavigation
          />
        </div>
      </div>
      <div className="clear-button-container">
        <button
          className="clear-filters-button"
          type="button"
          onClick={() => {
            setSearch("");
            setStatus("");
            setStartDate(null);
            setEndDate(null);
          }}
        >
          Clear
        </button>
      </div>
      <button
        onClick={() => {
          setCloseFilters(true);
          const interval = setInterval(() => {
            setButton(true);
            setCloseFilters(false);
          }, 1300);
          setInterval(() => {
            clearInterval(interval);
          }, 1350);
        }}
        type="button"
        className="closing-button"
      >
        <img src={Cancel} alt="cancel icon" />
      </button>
    </div>
  );
}
