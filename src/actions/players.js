import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {loadAuthToken} from '../local-storage';
import {fetchProtectedData as fetchPlayers} from './protected-data';
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

export const UPDATE_PLAYER_DIVISION = 'UPDATE_PLAYER_DIVISION';
export const updatePlayerDivision = player => ({
	type: UPDATE_PLAYER_DIVISION,
	player
});

export const UPDATE_TEAM_SUCCESS = 'UPDATE_TEAM_SUCCESS';
export const updateTeamSuccess = team => ({
	type: UPDATE_TEAM_SUCCESS,
	team
});

export const updateTeam = (id, team) => dispatch => {
	const authToken = loadAuthToken();
	console.log(team.team)
	return fetch(`${API_BASE_URL}/api/players/${id}/team`, {
		method: 'PUT', 
		headers: {
			'content-type': 'application/json',
			'Authorization': `Bearer ${authToken}`
		},
		body: JSON.stringify({
			'team': team.team
		})
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(data => {
		dispatch(fetchPlayerSuccess(data));
		dispatch(updateTeamSuccess(data.team));
	})
	.catch(err => console.error(err));
}

export const updateDivision = (playerId, {division}) => dispatch => {
	const authToken = loadAuthToken();
	console.log(division);
	return fetch(`${API_BASE_URL}/api/players/${playerId}/division`, {
		method: 'PUT', 
		headers: {
			'content-type': 'application/json',
			'Authorization': `Bearer ${authToken}`
		},
		body: JSON.stringify({
			"division": division
		})
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(data => dispatch(updatePlayerDivision(data)))
	.catch(err => {
		console.error(err);
	})

}

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
	.then((player) => {
		dispatch(fetchPlayerSuccess(player))
		dispatch(updateTeamSuccess(player.team))
	})
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

export const togglePaid = (id, value) => dispatch => {
	console.log(value);
	const newPaidValue = !value;
	console.log(newPaidValue);
	const authToken = loadAuthToken();
	return fetch(`${API_BASE_URL}/api/players/${id}/paid`, {
		method: 'post',
		headers: {
			'content-type': 'application/json', 
			'Authorization': `Bearer ${authToken}`
		},
		body: JSON.stringify({'paid': newPaidValue})
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(res => dispatch(fetchPlayers()))
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