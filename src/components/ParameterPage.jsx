import React from 'react';

import '../styles/ParameterPage.css';

const titlePlaceholder = 'Survey Parameters, e.g. “Gender”'
const columnPlaceholder = 'Excel Column e.g. “B”'
const optionPlaceholder = 'Option 1 e.g. "Female"'
const targetPropotionPlaceholder = 'Target proportion e.g. “50%”'

const ParameterPage = ({ parameters, changeParameter, changeOption, addOption, removeOption, addParameter }) => {
  return (
    <div>
      {parameters.map((param, id) => {
				return(
					<div className="card" key={id}>
					<input className="title" id="name" placeholder={titlePlaceholder} onChange={e => changeParameter(e, id)}></input>
					<input className="column" id="column" placeholder={columnPlaceholder} onChange={e => changeParameter(e, id)}></input>
					{param.options.map((o, i) => {
						return (
							<div className="option" key={i}>
								<input className="name" id="name" placeholder={optionPlaceholder} onChange={e => changeOption(e, id, i)} value={o.name}></input>
								<input className="proportion" id="proportion" placeholder={targetPropotionPlaceholder} onChange={e => changeOption(e, id, i)} value={o.proportion}></input>
								<div className="remove-option" onClick={() => removeOption(id, i)}>+</div>
							</div>
						)})}
					<div className="add-option">
						Add Option
						<div className="add-icon-background">
							<div className="add-icon" onClick={() => addOption(id)}>+</div>
						</div>
					</div> 
				</div>
				)
			})}
		<button className="primary add-parameter-button" onClick={() => addParameter()}>Add Parameter</button>
    </div>
  );
};

export default ParameterPage;