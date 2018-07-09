import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {loadAuthToken} from '../local-storage';

export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS';
export const fetchPlayerSuccess = player => ({
	type: FETCH_PLAYER_SUCCESS,
	player
});

export const FETCH_PLAYER_ERROR = 'FETCH_PLAYER_ERROR';
export const fetchPlayerError = error => ({
	type: FETCH_PLAYER_ERROR,
	error
});

export const fetchPlayer = (playerId) => dispatch => {
	const authToken = loadAuthToken();

	return fetch(`${API_BASE_URL}/api/players/${playerId}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			'Authorization': `Bearer ${authToken}`
		}
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(res => console.log(res))
	.then(player => dispatch(fetchPlayerSuccess(player)))
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
}

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