import { FETCH_TEAM_SUCCESS, FETCH_TEAM_ERROR, FETCH_ALL_TEAMS_SUCCESS, FETCH_ALL_TEAMS_ERROR } from '../actions/teams';

const initialState = {
	team: {},
	teams: [],
	error: null
}

export default function reducer(state = initialState, action) {
	if (action.type === FETCH_TEAM_SUCCESS) {
		return Object.assign({}, state, {
			team: action.team
		});
	} else if (action.type === FETCH_TEAM_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	} else if (action.type === FETCH_ALL_TEAMS_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	} else if (action.type === FETCH_ALL_TEAMS_SUCCESS) {
		console.log(action.teams)
		return Object.assign({}, state, {
			teams: action.teams
		});
	}

	return state;
}