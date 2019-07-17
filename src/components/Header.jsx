import React from "react";
import PropTypes from 'prop-types';

import logo from "../images/logo.png";
import "../styles/header.css";

const QuestionnaireHeader = ({ sectionTitle }) => (
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

export default QuestionnaireHeader;

QuestionnaireHeader.propTypes = {
  sectionTitle: PropTypes.string
};
