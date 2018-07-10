import { FETCH_PLAYER_SUCCESS, FETCH_PLAYER_ERROR, UPDATE_PLAYER_DIVISION } from '../actions/players';

const initialState = {
	player: {},
	error: null
}

export default function reducer(state = initialState, action) {
	if (action.type === FETCH_PLAYER_SUCCESS) {
		console.log(action.player)
		return Object.assign({}, state, {
			player: action.player,
		});
	} else if (action.type === FETCH_PLAYER_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	} else if (action.type === UPDATE_PLAYER_DIVISION) {
		return Object.assign({}, state, {
			player: action.player,
		});
	}
	return state;
}