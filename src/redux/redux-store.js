import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import loginFormReducer from "./loginForm-reducer";
import registrationFormReducer from "./registrationForm-reducer";
import AppReducer from "./app-reducer";



// import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


// branch - reducer
let reducers = combineReducers({
    loginForm: loginFormReducer,
    registrationForm: registrationFormReducer,
    form: formReducer, 
    App: AppReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

window.__store__ = store;

export default store;

