import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	loadExercise,
	loadCategory,
} from "../state/exercises/exercises.reducer";
import Exercises from "../components/Exercise";

import MiddleSide from "../components/MiddleSide";
import RightSide from "../components/RightSide";

const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.exerciseReducer.loading);
	const prevent = useSelector((state) => state.exerciseReducer.data.results);

	const [searchTerm, setSearchTerm] = useState("");
	const [currentCategory, setCategory] = useState("");

	useEffect(() => {
		if (!prevent) {
			dispatch(loadExercise());
		}
	}, [dispatch]);

	useEffect(() => {
		if (currentCategory > 0) {
			dispatch(loadCategory(currentCategory));
		}
	}, [dispatch, currentCategory]);

	if (isLoading) {
		return <div>loading</div>;
	}

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div className="container">
			<div className="form">
				<div className="header">
					<h1>Exercises</h1>
				</div>
				<div className="sider">
					<div className="left-side">
						<input
							type="text"
							placeholder="Search.."
							value={searchTerm}
							onChange={handleChange}
							className="search-input"
						/>
						<div className="buttons">
							<button onClick={() => setCategory("")}>All</button>
							<button onClick={() => setCategory(10)}>ABS</button>
							<button onClick={() => setCategory(8)}>Arms</button>
							<button onClick={() => setCategory(12)}>Back</button>
							<button onClick={() => setCategory(14)}>Calves</button>
							<button onClick={() => setCategory(11)}>Chest</button>
							<button onClick={() => setCategory(9)}>Legs</button>
							<button onClick={() => setCategory(13)}>Shoulders</button>
						</div>
						<Exercises
							searchTerm={searchTerm}
							currentCategory={currentCategory}
						/>
					</div>
					<div className="middle-side">
						<MiddleSide />
					</div>
					<div className="right-side">
						<RightSide />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
