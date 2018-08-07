import React from 'react';
import {Field} from 'redux-form';

export const Radio = props => {
	if (props && props.input && props.options) {
		const renderRadioButtons = (key, index) => {
			return (
				<label key={`${index}`} htmlFor={`${props.input.name}-${index}`}>
					<Field id={`${props.input.name}`}
						   className="uk-radio"
					component="input"
					name={props.input.name}
					type="radio"
					value={key}
					/>
					{props.options[key]}
				</label>
			);
		};
		return (
			<div className="uk-margin">
				<div className="uk-form-label">
					{props.label}
				</div>
				<div class="uk-form-controls">
					{props.options && Object.keys(props.options).map(renderRadioButtons)}
				</div>
			</div>
		);
	}
	return <div></div>
}
export default Radio;