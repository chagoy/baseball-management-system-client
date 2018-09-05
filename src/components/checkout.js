import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import PAYMENT_SERVER_URL from '../server';

class InjectedCheckoutForm extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.state = {complete: false};
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
			console.log(this.state);
		}


	}

	render() {
		if (this.state.complete) return <h1>purchase complete</h1>;
		return (
			<div className='checkout'>
				<CardElement />
				<button onClick={this.submit}>Send</button>
			</div>
		)
	}
}

export default injectStripe(InjectedCheckoutForm)