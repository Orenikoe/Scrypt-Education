/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import CertificatesContext from "../../../contexts/CertificatesContext";
import "./Pagination.css";

function Pagination({ setPageNumber, CertificatesPerPage }) {
  const { certificates } = useContext(CertificatesContext);

  const pageCount = Math.ceil(certificates.length / CertificatesPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      pageCount={pageCount}
      onPageChange={pageChange}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      containerClassName="pagination-buttons"
      pageLinkClassName="pages-buttons"
      previousLinkClassName="previous-button"
      nextLinkClassName="next-button"
      breakLinkClassName="break-pagination"
      disabledLinkClassName="disabled-button"
      activeLinkClassName="active-link"
    />
  );
}

export default Pagination;
