
import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {taskReducer} from "./reducer/taskReducer";
import {userReducer} from "./reducer/userReducer";

export const store = createStore(combineReducers({
    tasks: taskReducer,
    user: userReducer
}), composeWithDevTools())