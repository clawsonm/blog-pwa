import { GET_POSTS } from '../actions/types';

export default function (state = null, action) {
	switch (action.type) {
		case GET_POSTS:
			return action.payload;
		default:
			return state;
	}
}
