import { GET_POST, CLEAR_POST, GET_COMMENTS } from '../actions/types';

export default function (state = null, action) {
	switch (action.type) {
		case GET_POST:
			return action.payload;
		case CLEAR_POST:
			return null;
		case GET_COMMENTS:
			return {...state, comments: action.payload };
		default:
			return state;
	}
}
