import React from "react";
import "./style.css";

const Pagination = ({ page, setPage }) => {
  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="btn-wrapper">
      <button
        className="page-btn"
        disabled={page === 1}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button className="page-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
