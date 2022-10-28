import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	loadSingleExercise,
	loadImage,
	loadVideo,
	exerciseToPlan,
} from "../state/exercises/exercises.reducer";

const Exercises = (props) => {
	const dispatch = useDispatch();

	const isLoading = useSelector((state) => state.exerciseReducer.loading);
	const exercises = useSelector((state) => state.exerciseReducer.data);
	const category = useSelector((state) => state.exerciseReducer.category);

	const vidName = useSelector((state) => state.exerciseReducer.exercise);
	const currenCategory = props.currentCategory;

	const [currentId, setCurrentId] = useState(0);

	// probowanko

	const [addName, setAddName] = useState("");
	console.log("aaddd", addName);

	// const name = useRef(addName);

	// lista poszczegolnych

	const singleCategory =
		category &&
		category
			.filter((exercise) => exercise.name)
			.reduce((acc, exercise) => {
				return { ...acc, [exercise.name]: exercise };
			}, {});

	const categoryList = Object.values(singleCategory)
		.map((exercise) => {
			return (
				<li key={exercise.id} className="list-item">
					<a className="list-item-a" onClick={() => setCurrentId(exercise.id)}>
						{exercise.name}
					</a>
				</li>
			);
		})
		.filter((value) => {
			return value.props.children.props.children
				.toLowerCase()
				.includes(props.searchTerm.toLowerCase());
		});

	// lista wszystkich

	const uniqList =
		exercises.results &&
		exercises.results
			.filter((exercise) => exercise.name)
			.reduce((acc, exercise) => {
				return {
					...acc,
					[exercise.name]: exercise,
				};
			}, {});
	const list = uniqList
		? Object.values(uniqList)
				.map((exercise) => {
					return (
						<li key={exercise.id} className="list-item">
							<a
								className="list-item-a"
								onClick={() => setCurrentId(exercise.id)}
							>
								{exercise.name}
							</a>
							<button
								className="add-button"
								onClick={() => setAddName(exercise.name)}
							>
								+
							</button>
						</li>
					);
				})
				.filter((value) => {
					return value.props.children[0].props.children
						.toLowerCase()
						.includes(props.searchTerm.toLowerCase());
				})
		: "dupsko";

	// wywolania
	useEffect(() => {
		if (addName.length !== 0) {
			dispatch(exerciseToPlan(addName));
		}
	}, [dispatch, addName]);

	useEffect(() => {
		if (currentId > 0) {
			dispatch(loadSingleExercise(currentId));
			dispatch(loadImage(currentId));
		}
	}, [dispatch, currentId]);

	useEffect(() => {
		if (vidName.data !== undefined) {
			dispatch(loadVideo(vidName.data.name));
		}
	}, [dispatch, vidName]);

	// /////////////////////////////

	return isLoading ? (
		<div>Loading</div>
	) : (
		<div>
			<ul className="list">{currenCategory === "" ? list : categoryList}</ul>
		</div>
	);
};

export default Exercises;
