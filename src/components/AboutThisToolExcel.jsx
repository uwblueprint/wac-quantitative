import React from "react";
import PropTypes from "prop-types";
import '../styles/_about_this_tool.css';
import '../styles/_title_page.css';
import ExcelSheetUploadImage from '../images/excel_sheet_upload.png'
import BottomNavigationButtons from './BottomNavigationButtons';
import ProgressIndicator from "./ProgressIndicator";

const AboutThisToolExcel = ({decrement, increment}) => {
  return (
    <div>
      <div className="aboutThisToolContainer">
          <h3 className="frontPageTitleText">Excel Sheet Upload</h3>
          <p className="text subheader">Part 1</p>
          <p className="text textBold"> Metadata</p>
          <div className="pieChartImageContainer">
            <img className="pieChartImage" src={ExcelSheetUploadImage} alt="Guy with pie chart"/>
          </div>
          <p className="bodyText">
          Then you need to upload your survey sample data to the tool, and we will calculate a comparison for those age groups to see if your sample data accurately reflects your population targets. In this example, the tool can tell you, for instance, if 20% of your city is under the age of 40 but only 15% of your survey data is from people under the age of 40. This means you could have a bias that needs to be accounted for.
          </p>
          <div className="aboutThisToolProgressBarContainer">
            <div className="aboutThisToolProgressBar">
              <ProgressIndicator pageNum={3}/>
            </div>
          </div>
          <BottomNavigationButtons decrement={decrement} increment={increment}/>
          <p className="skipTutorial">Skip tutorial </p>
      </div>
    </div>
  );
};

export default AboutThisToolExcel;

AboutThisToolExcel.propTypes = {
  resetData: PropTypes.func,
};
