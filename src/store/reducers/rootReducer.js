import { combineReducers } from "redux";
import foodReducer from './foodReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    food: foodReducer
});

export default rootReducer;