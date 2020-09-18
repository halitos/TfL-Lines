import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* <img src="/tfl-logo2.png" alt="image" className="tfl-logo"></img> */}
      <div className="header-text">
        <h1>Transport for London</h1>
        <h4>Line Information</h4>
      </div>
    </div>
  );
};

export default Header;
