const name = "EXERCISE_REDUCER";

export const LOAD_EXERCISE = `${name}/LOAD_EXERCISE`;
export const LOAD_EXERCISE_SUCCESS = `${name}/LOAD_EXERCISE_SUCCESS`;
export const LOAD_EXERCISE_FAILED = `${name}/LOAD_EXERCISE_FAILED`;
export const SINGLE_EXERCISE = `${name}/SINGLE_EXERCISE`;
export const LOAD_SINGLE_EXERCISE_SUCCESS = `${name}/LOAD_SINGLE_EXERCISE_SUCCESS`;
export const LOAD_CATEGORY = `${name}/LOAD_CATEGORY`;
export const LOAD_CATEGORY_SUCCESS = `${name}/LOAD_CATEGORY_SUCCESS`;
export const LOAD_IMAGE = `${name}/LOAD_IMAGE`;
export const LOAD_IMAGE_SUCCESS = `${name}/LOAD_IMAGE_SUCCESS`;
export const LOAD_VIDEO = `${name}/LOAD_VIDEO`;
export const LOAD_VIDEO_SUCCESS = `${name}/LOAD_VIDEO_SUCCESS`;
export const EXERCISE_TO_PLAN = `${name}/EXERCISE_TO_PLAN`;

export const MONDAY = `${name}/MONDAY`;
export const TUESDAY = `${name}/TUESDAY`;
export const WEDNESDAY = `${name}/WEDNESDAY`;
export const THURSDAY = `${name}/THURSDAY`;
export const FRIDAY = `${name}/FRIDAY`;
export const SATURDAY = `${name}/SATURDAY`;
export const SUNDAY = `${name}/SUNDAY`;

export const REMOVE = `${name}/REMOVE`;

export const loadExercise = () => ({
	type: LOAD_EXERCISE,
});

export const loadExercisesSuccess = (data) => ({
	type: LOAD_EXERCISE_SUCCESS,
	payload: data,
});

export const loadExercisesFailed = () => ({
	type: LOAD_EXERCISE_FAILED,
});

export const loadSingleExercise = (id) => ({
	type: SINGLE_EXERCISE,
	payload: id,
});

export const loadSingleExerciseSuccess = (exercise) => ({
	type: LOAD_SINGLE_EXERCISE_SUCCESS,
	payload: exercise,
});

export const loadCategory = (categoryType) => ({
	type: LOAD_CATEGORY,
	payload: categoryType,
});

export const loadCategorySuccess = (category) => ({
	type: LOAD_CATEGORY_SUCCESS,
	payload: category,
});

export const loadImage = (imageId) => ({
	type: LOAD_IMAGE,
	payload: imageId,
});

export const loadImageSuccess = (images) => ({
	type: LOAD_IMAGE_SUCCESS,
	payload: images,
});

export const loadVideo = (vidName) => ({
	type: LOAD_VIDEO,
	payload: vidName,
});

export const loadVideoSuccess = (video) => ({
	type: LOAD_VIDEO_SUCCESS,
	payload: video,
});

export const exerciseToPlan = (name) => ({
	type: EXERCISE_TO_PLAN,
	payload: name,
});

export const monday = (monday) => ({
	type: MONDAY,
	payload: monday,
});

export const tuesday = (tuesday) => ({
	type: TUESDAY,
	payload: tuesday,
});

export const wednesday = (wednesday) => ({
	type: WEDNESDAY,
	payload: wednesday,
});

export const thursday = (thursday) => ({
	type: THURSDAY,
	payload: thursday,
});

export const friday = (friday) => ({
	type: FRIDAY,
	payload: friday,
});

export const saturday = (saturday) => ({
	type: SATURDAY,
	payload: saturday,
});

export const sunday = (sunday) => ({
	type: SUNDAY,
	payload: sunday,
});

export const remove = (remove) => ({
	type: REMOVE,
	payload: remove,
});

const INITIAL_STATE = {
	data: {},
	loading: false,
	error: "",
	exercise: {},
	id: "",
	categoryType: "",
	category: [],
	imageId: "",
	images: [],
	video: [],
	vidName: [],

	name: "",

	monday: "",
	tuesday: "",
	wednesday: "",
	thursday: "",
	friday: "",
	saturday: "",
	sunday: "",

	remove: [],
};

const exerciseReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOAD_EXERCISE: {
			return {
				...state,
				loading: true,
				error: "",
			};
		}
		case LOAD_EXERCISE_SUCCESS: {
			return {
				...state,
				data: action.payload,
				loading: false,
			};
		}
		case LOAD_EXERCISE_FAILED: {
			return {
				...state,
				loading: false,
				error: "LOADING ERROR",
			};
		}
		case SINGLE_EXERCISE: {
			return {
				...state,
				id: action.payload,
			};
		}
		case LOAD_SINGLE_EXERCISE_SUCCESS: {
			return {
				...state,
				loading: false,
				exercise: action.payload,
			};
		}
		case LOAD_CATEGORY: {
			return {
				...state,
				categoryType: action.payload,
			};
		}
		case LOAD_CATEGORY_SUCCESS: {
			return {
				...state,
				category: action.payload,
			};
		}
		case LOAD_IMAGE: {
			return {
				...state,
				imageId: action.payload,
			};
		}
		case LOAD_IMAGE_SUCCESS: {
			return {
				...state,
				images: action.payload,
			};
		}
		case LOAD_VIDEO: {
			return {
				...state,
				vidName: action.payload,
			};
		}
		case LOAD_VIDEO_SUCCESS: {
			return {
				...state,
				video: action.payload,
			};
		}
		case EXERCISE_TO_PLAN: {
			return {
				...state,
				name: action.payload,
			};
		}
		case MONDAY: {
			return {
				...state,
				monday: action.payload,
			};
		}
		case TUESDAY: {
			return {
				...state,
				tuesday: action.payload,
			};
		}
		case WEDNESDAY: {
			return {
				...state,
				wednesday: action.payload,
			};
		}
		case THURSDAY: {
			return {
				...state,
				thursday: action.payload,
			};
		}
		case FRIDAY: {
			return {
				...state,
				friday: action.payload,
			};
		}
		case SATURDAY: {
			return {
				...state,
				saturday: action.payload,
			};
		}
		case SUNDAY: {
			return {
				...state,
				sunday: action.payload,
			};
		}
		case REMOVE: {
			return {
				...state,
				remove: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

export default exerciseReducer;
