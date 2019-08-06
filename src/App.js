import React from 'react';
import TitlePage from './components/TitlePage';
import AboutThisToolExcel from './components/AboutThisToolExcel'
import Header from './components/Header';
import Footer from './components/Footer';
import ParameterPage from './components/ParameterPage'

import "./App.css"
import AboutThisToolMetadata from './components/AboutThisToolMetadata';

class AppWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      sectionTitle: "Survey Parameters",
    };
  }

  decrement = (numPages = 1) => {
    const { pageNum } = this.state;
    if (pageNum - numPages >= 0) {
      this.setState({ pageNum: pageNum - numPages });
    }
  }

  increment = (numPages = 1) => {
    const { pageNum } = this.state;
    if (pageNum + numPages < this.props.children.length) {
      this.setState({ pageNum: pageNum + numPages });
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0,
      sectionTitle: "Survey Parameters",
      parameters: [{
        name: '',
        column: '',
        options: [
          {
            name: '',
            proportion: '',
          }
        ],
      }],
    };
  }

  changeParameter = (e, i) => {
    let currentParam = this.state.parameters[i];
    currentParam[e.target.id] = e.target.value
    const newParams = [
      ...this.state.parameters.slice(0, i),
      currentParam,
      ...this.state.parameters.slice(i+1)
    ];
    this.setState({ parameters: newParams })
  }

  changeOption = (e, id, i) => {
    let currentParam = this.state.parameters[id];
    let currentOption = currentParam.options[i];
    currentOption[e.target.id] = e.target.value
    const newOptions = [
      ...currentParam.options.slice(0, i),
      currentOption,
      ...currentParam.options.slice(i+1)
    ];
    currentParam.options = newOptions
    const newParams = [
      ...this.state.parameters.slice(0, i),
      currentParam,
      ...this.state.parameters.slice(i+1)
    ];
    this.setState({ parameters: newParams })
  }

  addOption = (i) => {
    let currentParam = this.state.parameters[i];
    const newOptions = [
      ...currentParam.options.slice(0, currentParam.options.length),
      {
        name: '',
        propotion: '',
      }
    ]
    currentParam.options = newOptions
    const newParams = [
      ...this.state.parameters.slice(0, i),
      currentParam,
      ...this.state.parameters.slice(i+1)
    ];
    this.setState({ parameters: newParams })
  }

  removeOption = (id, i) => {
    let currentParam = this.state.parameters[id];
    const newOptions = [
      ...currentParam.options.slice(0, i),
      ...currentParam.options.slice(i+1)
    ];
    currentParam.options = newOptions
    const newParams = [
      ...this.state.parameters.slice(0, id),
      currentParam,
      ...this.state.parameters.slice(id+1)
    ];
    this.setState({ parameters: newParams })
  }

  addParameter = () => {
    const newParams = [
      ...this.state.parameters.slice(0, this.state.parameters.length),
      {
        name: '',
        column: '',
        options: [
          {
            name: '',
            proportion: '',
          }
        ],
      }
    ];
    this.setState({ parameters: newParams })
  }
  
  render() {
    const { parameters } = this.state;
    return(
      <div className="App">
        <AppWizard>
          <TitlePage />
          <AboutThisToolMetadata/>
          <AboutThisToolExcel/>
          <ParameterPage 
            parameters={parameters} 
            changeParameter={this.changeParameter} changeOption={this.changeOption}
            addOption={this.addOption} removeOption={this.removeOption}
            addParameter={this.addParameter}
          />
        </AppWizard>
      </div>
    )
  }
}

export default App;
