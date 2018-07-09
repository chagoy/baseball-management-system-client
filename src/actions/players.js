import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

import {loadAuthToken} from '../local-storage';

export const registerPlayer = player => dispatch => {
	console.log(player);
	//need to get something from square plus add in a transactions table to keep track of who pays
	const authToken = loadAuthToken();

	return fetch(`${API_BASE_URL}/api/players`, {
		method: 'POST', 
		headers: {
			'content-type': 'application/json',
			'Authorization': `Bearer ${authToken}`
		},
		body: JSON.stringify(player)
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.catch(err => {
			const {reason, message, location} = err;
			if (reason === 'ValidationError') {
				return Promise.reject(
					new SubmissionError({
						[location]: message
					})
				);
			}
		});
};

export const togglePaid = id => dispatch => {
	const authToken = loadAuthToken();
	return fetch(`${API_BASE_URL}/api/players/${id}/paid`, {
		method: 'post',
		headers: {
			'content-type': 'application/json', 
			'Authorization': `Bearer ${authToken}`
		}
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.catch(err => {
		const {reason, message, location} = err;
		if (reason === 'ValidationError') {
			return Promise.reject(
				new SubmissionError({
					[location]: message
				})
			);
		}
	})
}