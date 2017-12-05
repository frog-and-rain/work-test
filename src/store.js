import {applyMiddleware, combineReducers, createStore} from "redux";
// Using Thunk Middleware for Async Actions
import thunk from "redux-thunk";

import {reducer as toastr} from "react-redux-toastr";
import userReducer from 'App/Profile/reducers';
import alertMessage from 'App/Profile/reducers';

// add app reducers here
const appReduces = {
	user: userReducer,
	alert: alertMessage,
};

const NODE_ENV = process ? (process.env ? process.env.NODE_ENV : undefined) : undefined;

let preloadedState =(NODE_ENV !== 'production') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;

export const store = createStore(
	combineReducers({
    toastr,
		...appReduces
	}),
	preloadedState,
	applyMiddleware(thunk)
);