import { fork } from "redux-saga/effects";
import exerciseSaga from "./exercises/exercises.saga";

export default function* rootSaga() {
	yield fork(exerciseSaga);
}
