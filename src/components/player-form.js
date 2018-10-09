import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import Radio from './radio';
import Input from './input';
import Select from './select';
import File from './file-input';
import {registerPlayer} from '../actions/players';
import Contract from './contract';
import {required, nonEmpty, length, isTrimmed, maxValue, number, matches} from '../validators';
import {Elements, StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './checkout';
const monthMax = maxValue(12);
const dayMax = maxValue(31);

export class PlayerForm extends React.Component {
	constructor() {
    super();
    this.state = {stripe: null};
  }

  componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_test_IhxMpbX9u86ohjhQccb2vh3p')});
    } else { 
      document.querySelector('#stripe-js').addEventListener('load', () => {
        this.setState({stripe: window.Stripe('pk_test_IhxMpbX9u86ohjhQccb2vh3p')});
      });
    }
  }

	onSubmit(values) {
		return this.props.dispatch(registerPlayer(values));
	}

	render() {
		return (
			<StripeProvider stripe={this.state.stripe}>
				<Elements>
					<form 
							role="form"
							className="player-form"
							onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
							id="player-reg">
						<h3 className="form-head">Register New Player</h3>

						<label htmlFor="firstName">First Name</label>
						<Field component={Input}
								inputClass='player-input' 
								type="text" 
								name="firstName" 
								validators={[required, nonEmpty, isTrimmed]}
								warn={[required, nonEmpty, isTrimmed]}
						/>
						<label htmlFor="lastName">Last Name</label>
						<Field component={Input}
								inputClass='player-input' 
								type="text" 
								name="lastName" 
								validators={[required, nonEmpty, isTrimmed]}
								warn={[required, nonEmpty, isTrimmed]}
						/>
						<label htmlFor="month">Month</label>
						<Field component={Input}
								inputClass='player-input' 
								type="integer" 
								name="month" 
								validators={[required, nonEmpty, monthMax, number]}
								warn={[required, nonEmpty, monthMax, number]}
						/>
						<label htmlFor="day">Day</label>
						<Field component={Input}
								inputClass='player-input' 
								type="integer" 
								name="day" 
								validators={[required, nonEmpty, dayMax, number]}
								warn={[required, nonEmpty, dayMax, number]}
						/>
						<label htmlFor="year">Year</label>
						<Field component={Input}
								inputClass='player-input' 
								type="integer" 
								name="year" 
								validators={[required, nonEmpty, number]}
								warn={[required, nonEmpty, number]}
						/>
						<label className="label-control" htmlFor="certificate">Birth Certificate</label>
						<Field name="certificate"
								component={File}
								fileClass="file-upload"
						/>
						<label className="label-control" htmlFor="sport">Baseball or softball?</label>
						<Field name="sport" 
								component={Radio} 
								options={{baseball: 'Baseball', softball: 'Softball'}} 
								checked={true}
						/>
						<label htmlFor="division">Division</label>
						<Field component={Select} 
								selectInput='player-select'
								name="division" 
								options={{shetland: 'Shetland 6U', pinto: 'Pinto 8U', mustang: 'Mustang 10U', bronco: 'Bronco 12U', pony: 'Pony 14u'}} 
								validators={[required]}
								warn={[required]}
						/>
						<label htmlFor="team">Team</label>
						<Field component={Input}
								inputClass='player-input' 
								type="text" 
								name="team" 
						/>
						<Contract />
						<label htmlFor="contract">Please enter your full name below to acknolwedge signing this waiver</label>
						<Field component={Input}
								inputClass='player-input' 
								type="text" 
								name="waiver" 
								validators={[required, isTrimmed, nonEmpty, ]}
								warn={[required, isTrimmed, nonEmpty, ]}
						/> 
						<div className="checkout-form">
							<InjectedCheckoutForm />
						</div>
						{/*<button aria-label="submit" type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>*/}
					</form>
				</Elements>
			</StripeProvider>
		)
	}
}

const afterSubmit = (result, dispatch) => dispatch(reset('player'));

export default reduxForm({
	form: 'player',
	onSubmitSuccess: afterSubmit
	// onSubmitFail: (errors, dispatch) => dispatch(focus('player', Object.keys(errors)[0]))
})(PlayerForm)