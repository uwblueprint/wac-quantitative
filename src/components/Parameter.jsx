import React from 'react';
// import PropTypes from 'prop-types';

import '../styles/Parameter.css';

const titlePlaceholder = 'Survey Parameters, e.g. “Gender”'
const columnPlaceholder = 'Excel Column e.g. “B”'
const optionPlaceholder = 'Option 1 e.g. "Female"'
const targetPropotionPlaceholder = 'Target proportion e.g. “50%”'

class Parameter extends React.Component{

  state = {
    parameter: '',
    column: '',
    options: [
      {
        name: '',
        proportion: '',
      },
      {
        name: '',
        proportion: '',
      },
    ],
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleOptionChange(e, i) {
    const currentOption = this.state.options[i];
    currentOption[e.target.id] = e.target.value
    const newOptions = [
      ...this.state.options.slice(0, i),
      currentOption,
      ...this.state.options.slice(i+1)
    ];
    this.setState({ options: newOptions })
  }

  addOption() {
    const newOptions = [
      ...this.state.options.slice(0, this.state.options.length),
      {
        name: '',
        propotion: '',
      }
    ]
    this.setState({ options: newOptions })
  }

  removeOption(i) {
    const newOptions = [
      ...this.state.options.slice(0, i),
      ...this.state.options.slice(i+1)
    ];
    this.setState({ options: newOptions })
  }
  
  render() {
    return (
      <div className="card">
        <input className="title" id="parameter" placeholder={titlePlaceholder} onChange={e => this.handleChange(e)}></input>
        <input className="column" id="column" placeholder={columnPlaceholder} onChange={e => this.handleChange(e)}></input>
        {this.state.options.map((o, i) => {
          return (
            <div className="option" key={i}>
              <input className="name" id="name" placeholder={optionPlaceholder} onChange={e => this.handleOptionChange(e, i)} value={o.name}></input>
              <input className="proportion" id="proportion" placeholder={targetPropotionPlaceholder} onChange={e => this.handleOptionChange(e, i)} value={o.proportion}></input>
              <div className="remove-option" onClick={() => this.removeOption(i)}>+</div>
            </div>
          )})}
        <div className="add-option">
          Add Option
          <div className="add-icon-background">
            <div className="add-icon" onClick={() => this.addOption()}>+</div>
          </div>
        </div> 
      </div>
    );
  }
} 

export default Parameter;