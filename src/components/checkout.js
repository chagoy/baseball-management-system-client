import React from 'react';
import {CardElement, PostalCodeElement, injectStripe} from 'react-stripe-elements';
import PAYMENT_SERVER_URL from '../server';
import {registerPlayer} from '../actions/players';
import {Redirect} from 'react-router-dom';

class InjectedCheckoutForm extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.state = {
			complete: false,
			name: ''
		};
	}

	async submit(ev) {
		let {token} = await this.props.stripe.createToken({name: 'Name'});

		let response = await fetch(`${PAYMENT_SERVER_URL}/api/stripe`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({token})
		});

		if (response.ok) {
			this.setState({complete: true});
		}
	}

	render() {
		if (this.state.complete) return <Redirect to ='dashboard' />;
		return (
			<div className='checkout'>
				<CardElement />
				<button className="player-button" onClick={this.submit}>Send</button>
			</div>
		)
	}
}

export default injectStripe(InjectedCheckoutForm)