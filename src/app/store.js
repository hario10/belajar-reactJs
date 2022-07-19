
import { applyMiddleware, combineReducers, compose,  legacy_createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./features/Counter/reducer";



let rootReducers = combineReducers({
    counter: counterReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;
let store =  legacy_createStore (rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;