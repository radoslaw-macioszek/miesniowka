import { combineReducers } from "redux";
import exerciseReducer from "./exercises";

const reducers = {
	exerciseReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
