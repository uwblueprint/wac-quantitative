import React from "react";
import PropTypes from "prop-types";
import '../styles/_about_this_tool.css';
import '../styles/_title_page.css';
import GuyWithPieChart from '../images/guy_with_pie_chart.png'
import BottomNavigationButtons from './BottomNavigationButtons';
import ProgressIndicator from "./ProgressIndicator";

const AboutThisToolMetadata = ({decrement, increment}) => {
  return (
    <div>
      <div className="aboutThisToolContainer">
          <h3 className="frontPageTitleText">About This Tool</h3>
          <p className="text subheader">Part 1</p>
          <p className="text textBold"> Metadata</p>
          <div className="pieChartImageContainer">
            <img className="pieChartImage" src={GuyWithPieChart} alt="Guy with pie chart"/>
          </div>
          <p className="bodyText">
            In order to successfully use this tool you will need two things. First, you need an estimate of the distribution of your key subpopulations within your target population. For example, if you are collecting data from your city and you want to check how biased your sample is by specific age groups you need to know what proportion of the people living in your city and under the age of 40, between the ages of 41 and 64, and 65 and over. 
          </p>
          <div className="aboutThisToolProgressBarContainer">
            <div className="aboutThisToolProgressBar">
              <ProgressIndicator pageNum={2}/>
            </div>
          </div>
          <BottomNavigationButtons decrement={decrement} increment={increment}/>
          <p className="skipTutorial">Skip tutorial </p>
      </div>
    </div>
  );
};

export default AboutThisToolMetadata;

AboutThisToolMetadata.propTypes = {
  resetData: PropTypes.func,
};
