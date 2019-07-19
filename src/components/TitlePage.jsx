import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import logo from "../images/largeLogo.png";
import avatar from "../images/personIcon.png";
import "../styles/_title_page.css";
import "../styles/_buttons.css";
import '../App.css';

const TitlePage = ({ increment }) => {
  return (
        <div className="introText">
          <img style={{ marginBottom: '5%' }} src={logo} alt="Logo" />
          <h3 className="frontPageTitleText">Welcome to the We All Count Quantitative Data Bias Tool</h3>
          <p className="bodyText">
            Welcome to the We All Count Quantitative Bias Assessment Tool for survey data. The purpose of this tool is to provide you with an estimate of how biased the distribution of key subpopulations is within your survey sample data. This tool provides a comparison of the distribution of key subpopulations within your target population and within your survey sample. Large differences indicate a bias issue within your data that needs to be corrected, adjusted, or accounted for in some way. </p>
          <div className="introPic">
            <img src={avatar} alt="Avatar" />
          </div>
          <ButtonGroup />
        </div>
  );
};

const ButtonGroup = (resetData) => {
  return (
    <table >
      <thead>
        <tr>
          <th className="frontPageButtonHeaderText">First time user?</th>
          <p className="frontPageButtonHeaderText returning-user">Returning user?</p>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td >
            <button className="primary first-time-user">
                  How does it work?
            </button>
          </td>
          <td>
            <button className="secondary returning-user">
                  Go to the tool
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TitlePage;

TitlePage.propTypes = {
  increment: PropTypes.func
};
