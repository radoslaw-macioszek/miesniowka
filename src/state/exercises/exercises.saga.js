import axios from "axios";
import { takeLatest, put, call, select } from "redux-saga/effects";
import {
	LOAD_EXERCISE,
	SINGLE_EXERCISE,
	loadSingleExerciseSuccess,
	loadCategorySuccess,
	LOAD_CATEGORY,
	LOAD_IMAGE,
	LOAD_VIDEO,
	loadImageSuccess,
	loadVideoSuccess,
} from "./exercises.reducer";
import { loadExercisesSuccess, loadExercisesFailed } from "./exercises.reducer";

function* loadExercises() {
	const response = yield call(
		axios.get,
		"https://wger.de/api/v2/exercise/?limit=690",
		{
			headers: {
				Authorization: "f8ceced8fadd9593f7a85970f85ad5ec67897324",
				// Content-Type: 'multipart/form-data'
			},
		}
	);
	// console.log("dziwka1", response.data);
	if (response.status === 200) {
		yield put(loadExercisesSuccess(response.data));
		return;
	}
	yield put(loadExercisesFailed());
}

function* singleExercise(action) {
	const id = action.payload;

	// console.log("fffakciotn", id);

	const response = yield call(
		axios.get,
		`https://wger.de/api/v2/exercise/${id}`,
		{
			headers: {
				Authorization: "f8ceced8fadd9593f7a85970f85ad5ec67897324",
			},
		}
	);
	// console.log("dziwkaExercise", response.data);
	if (response.status === 200) {
		yield put(loadSingleExerciseSuccess(response));
		return;
	}
	yield put(loadExercisesFailed());
}

function* exerciseCategory(action) {
	const category = action.payload;
	// console.log("action", action);
	const response = yield call(
		axios.get,
		`https://wger.de/api/v2/exercise/?category=${category}&limit=150`,
		{
			headers: {
				Authorization: "f8ceced8fadd9593f7a85970f85ad5ec67897324",
			},
		}
	);
	// console.log("dziwkaCategory", response.data);
	if (response.status === 200) {
		yield put(loadCategorySuccess(response.data.results));
		return;
	}
	yield put(loadExercisesFailed());
}

function* loadImages(action) {
	// console.log("imaszimaszaction", action);
	const imageId = action.payload;
	const response = yield call(
		axios.get,
		`https://wger.de/api/v2/exerciseimage/?exercise=${imageId}`,
		{
			headers: {
				Authorization: "f8ceced8fadd9593f7a85970f85ad5ec67897324",
			},
		}
	);
	// console.log("imageimage", response.data.results);
	if (response.status === 200) {
		yield put(loadImageSuccess(response.data.results));
		return;
	}
	yield put(loadExercisesFailed());
}

function* loadVideos(action) {
	console.log("action", action.payload);
	const vidName = yield select((state) => state.exerciseReducer.exercise);
	console.log("viiiiiiiiiiid", vidName);

	const response = yield call(
		axios.get,
		"https://www.googleapis.com/youtube/v3/search",
		{
			params: {
				part: "snippet",
				maxResults: 5,
				key: "AIzaSyChWQdCsJHxV66Wv778XR7iv3YOGv5qeoM",
				q: `${action.payload} exercise`,
			},
		}
	);

	if (response.status === 200) {
		console.log("video", response);
		yield put(loadVideoSuccess(response));
		return;
	}
	yield put(loadExercisesFailed());
}

export default function* exerciseSaga() {
	yield takeLatest(LOAD_EXERCISE, loadExercises);
	yield takeLatest(SINGLE_EXERCISE, singleExercise);
	yield takeLatest(LOAD_CATEGORY, exerciseCategory);
	yield takeLatest(LOAD_IMAGE, loadImages);
	yield takeLatest(LOAD_VIDEO, loadVideos);
}
