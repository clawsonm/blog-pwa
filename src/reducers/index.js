import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import postsReducer from './postsReducer';
import postReducer from './postReducer';

export default combineReducers({
	router: routerReducer,
	posts: postsReducer,
	post: postReducer
});
