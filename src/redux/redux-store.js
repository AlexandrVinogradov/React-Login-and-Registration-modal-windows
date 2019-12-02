import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reducer"
import newsReducer from "./news-reducer"


import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


// branch - reducer
let reducers = combineReducers({
    profilePage: profileReducer,
    newsPage: newsReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
