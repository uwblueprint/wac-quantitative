import React from "react";
import PropTypes from 'prop-types';

import logo from "../images/largeLogo.png";
import "../styles/header.css";

const Header = ({ sectionTitle }) => (
  <div className="header-container">
    <div>
      <img className="logo" src={logo} alt="Logo" />
    </div>
    <h2 className="text header">Dataset Bias Assessment Tool</h2>
    <h1>
      Quantitative Tool
    </h1>
    <p className="text subheader">
      {sectionTitle}
    </p>
  </div>
);

export default Header;

Header.propTypes = {
  sectionTitle: PropTypes.string
};
