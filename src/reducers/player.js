import { FETCH_PLAYER_SUCCESS, FETCH_PLAYER_ERROR } from '../actions/players';

const initialState = {
	player: '',
	error: null
}

export default function reducer(state = initialState, action) {
	console.log(action);
	if (action.type === FETCH_PLAYER_SUCCESS) {
		return Object.assign({}, state, {
			player: action.player,
		});
	} else if (action.type === FETCH_PLAYER_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
}