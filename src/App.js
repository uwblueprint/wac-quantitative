import React from "react";
import TitlePage from "./components/TitlePage";
import AboutThisToolExcel from "./components/AboutThisToolExcel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BarChart from "./components/BarChart";

import "./App.css";
import AboutThisToolMetadata from "./components/AboutThisToolMetadata";

class AppWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      sectionTitle: "Survey Parameters"
    };
  }

  decrement = (numPages = 1) => {
    const { pageNum } = this.state;
    if (pageNum - numPages >= 0) {
      this.setState({ pageNum: pageNum - numPages });
    }
  };

  increment = (numPages = 1) => {
    const { pageNum } = this.state;
    if (pageNum + numPages < this.props.children.length) {
      this.setState({ pageNum: pageNum + numPages });
    }
  };

  updateSectionTitle = title => {
    this.setState({ sectionTitle: title });
  };

  render() {
    const { pageNum, sectionTitle } = this.state;
    return (
      <div>
        {pageNum > 0 && <Header sectionTitle={sectionTitle} />}
        <div className="cardStyle">
          {React.cloneElement(this.props.children[pageNum], {
            increment: this.increment,
            decrement: this.decrement,
            updateSectionTitle: this.updateSectionTitle
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="App">
      <AppWizard>
        <TitlePage />
        <AboutThisToolMetadata />
        <AboutThisToolExcel />
        <div>
          {/*
          ________Sample Use of BarChart__________

          <BarChart
            title="What city are you from?"
            width="100%"
            data={[
              ["New York City, NY", 20, 40],
              ["Los Angeles, CA", 20, 36],
              ["Chicago, IL", 26, 28],
              ["Houston, TX", 20, 19],
              ["Philadelphia, PA", 15, 15]
            ]}
          />
          */}
        </div>
      </AppWizard>
    </div>
  );
};

export default App;
