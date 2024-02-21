import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-section">
      <div className="container nav-wrapper mx-auto">
        <div className="nav-items">
          <span className="nav-links" onClick={() => navigate("/")}>
            HOME PAGE
          </span>
        </div>
        <div className="nav-items">
          <span className="nav-links" onClick={() => navigate("/create")}>
            Create Post +
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
