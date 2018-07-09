import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Select from './select';
// import { changeDivision } from '../actions/players';

export class DivisionForm extends React.Component {
	onSubmit(event) {

	}

	render() {
		return (
			<td>
			{/*	<form onSubmit={this.props.changeDivision(values => this.onSubmit(values))}>*/}
			<form>
					<Field placeholder={this.props.division} component={Select} name="division" options={{shetland: 'Shetland 6U', pinto: 'Pinto 8U', mustang: 'Mustang 10U', bronco: 'Bronco 12U', pony: 'Pony 14u'}} />
				</form>
			</td>
		);
	}
}


export default reduxForm({
	form: 'division',
	// onSubmitFail: (errors, dispatch) => dispatch(focus('player', Object.keys(errors)[0]))
})(DivisionForm)