import React from 'react';
import TitlePage from './components/TitlePage';
import Header from './components/Header';
import Footer from './components/Footer';

import "./App.css"

class AppWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      sectionTitle: "Survey Parameters",
    };
  }

  decrement = () => {
    const { pageNum } = this.state;
    if (pageNum > 0) {
      this.setState({ pageNum: pageNum - 1 });
    }
  }

  increment = () => {
    const { pageNum } = this.state;
    if (pageNum < this.props.children.length - 1) {
      this.setState({ pageNum: pageNum + 1 });
    }
  }

  updateSectionTitle = (title) => {
    this.setState({ sectionTitle: title })
  }

  render() {
    const { pageNum, sectionTitle } = this.state;
    return (
      <div>
        {pageNum > 0 && <Header sectionTitle={sectionTitle} />}
        <div className="cardStyle">
          {React.cloneElement(
            this.props.children[pageNum],
            { 
              increment: this.increment,
              decrement: this.decrement,
              updateSectionTitle: this.updateSectionTitle
            }
          )}
        </div>
        <Footer />
      </div>
    )
  }
}

const App = () => {
  return (
    <div className="App">
      <AppWizard>
        <TitlePage />
        <div>test: add your components here</div>
      </AppWizard>
    </div>
  );
}

export default App;
