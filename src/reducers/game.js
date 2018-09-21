import { FETCH_GAMES_SUCCESS, FETCH_GAMES_ERROR } from '../actions/games'


const initialState = {
	games: {},
	error: null
}

export default function reducer(state = initialState, action) {
	if (action.type === FETCH_GAMES_SUCCESS) {
		return Object.assign({}, state, {
			games: action.games
		})
	} else if (action.type === FETCH_GAMES_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		})
	}
	return state;
}