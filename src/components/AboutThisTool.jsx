import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import '../App.css';
import QuestionnaireHeader from "./Header";

const AboutThisTool = ({ resetData }) => {
  return (
    <div>
      <QuestionnaireHeader></QuestionnaireHeader>
      <div className="cardStyle">
        <div className="introText">
          <h3 className="frontPageTitleText">About This Tool</h3>
          <p className="text subheader">Part 1</p>
          <p className="bodyText">
            In order to successfully use this tool you will need two things. First, you need an estimate of the distribution of your key subpopulations within your target population. For example, if you are collecting data from your city and you want to check how biased your sample is by specific age groups you need to know what proportion of the people living in your city and under the age of 40, between the ages of 41 and 64, and 65 and over. 
          </p>
          <div>
            <button className="secondary bottom-button prev-button">
              Previous
            </button>
            <button className="primary bottom-button right-button">
              Next
            </button>
				</div>
        </div>
      </div>
      <Footer />
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
              <Link to={{ pathname: `/about-this-tool` }} onClick={resetData}>
                  How does it work?
              </Link>
            </button>
          </td>
          <td>
            <button className="secondary returning-user">
              <Link to={{ pathname: `/questionnaire` }} onClick={resetData}>
                  Go to the tool
              </Link>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AboutThisTool;

AboutThisTool.propTypes = {
  resetData: PropTypes.func,
};
