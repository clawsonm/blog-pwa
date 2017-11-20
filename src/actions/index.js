import { GET_POSTS, GET_POST, GET_COMMENTS, CLEAR_POST } from './types';
import axios from 'axios';
// import postsData from '../mocks/posts.json';
// import postData from '../mocks/post.json';

const BASE_PATH = 'https://ialm248aoi.execute-api.us-east-2.amazonaws.com/dev';

export const get_posts = () => async dispatch => {
	const res = await axios.get(`${BASE_PATH}/posts`);
	dispatch({ type: GET_POSTS, payload: res.data });
}

export const get_post = (slug) => async dispatch => {
	dispatch({ type: CLEAR_POST });
	const res = await axios.get(`${BASE_PATH}/posts/${slug}`);
	dispatch({ type: GET_POST, payload: res.data });
	const res2 = await axios.get(`${BASE_PATH}/posts/${slug}/comments`);
	dispatch({ type: GET_COMMENTS, payload: res2.data });
}
