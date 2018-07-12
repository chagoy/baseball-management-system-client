import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
// import {loadAuthToken} from '../local-storage';
import {SubmissionError} from 'redux-form';

export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
export const fetchTeamSuccess = team => ({
	type: FETCH_TEAM_SUCCESS,
	team
});

export const FETCH_TEAM_ERROR = 'FETCH_TEAM_ERROR';
export const fetchTeamError = error => ({
	type: FETCH_TEAM_ERROR,
	error
})

export const FETCH_ALL_TEAMS_SUCCESS = 'FETCH_ALL_TEAMS_SUCCESS';
export const fetchAllTeamsSuccess = teams => ({
	type: FETCH_ALL_TEAMS_SUCCESS,
	teams
});

export const FETCH_ALL_TEAMS_ERROR = 'FETCH_ALL_TEAMS_ERROR';
export const fetchAllTeamsError = error => ({
	type: FETCH_ALL_TEAMS_ERROR,
	error
})

export const createTeam = team => (dispatch, getState) => {
	const authToken = getState().auth.authToken;

	return fetch(`${API_BASE_URL}/api/teams`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'Authorization': `Bearer ${authToken}`
		},
		body: JSON.stringify(team)
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(team => dispatch(fetchTeamSuccess(team)))
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

export const getAllTeams = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/api/teams`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(data => dispatch(fetchAllTeamsSuccess(data)))
	.catch(err => {
		dispatch(fetchAllTeamsError(err));
	})
}