import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ExerciseName from "./ExerciseName";

function ExerciseList(props) {
	const remove = useSelector((state) => state.exerciseReducer.remove);

	// console.log("exerciseList-props", props);

	const [planList, setPlanList] = useState([]);
	const planElement = useSelector((state) => state.exerciseReducer.name);

	useEffect(() => {
		if (planElement !== "" && remove.id !== "neutral") {
			setPlanList((prev) => [...prev, planElement]);
		}
	}, [planElement, remove]);

	useEffect(() => {
		if (remove.id === "neutral") {
			const filteredPlan = planList.filter(
				(element) => !element.includes(remove.item)
			);
			setPlanList(filteredPlan);
		}
	}, [remove]);

	const newList = planList.map((item) => {
		return <ExerciseName id="neutral" key={item} item={item} />;
	});

	return (
		<div>
			<div>
				<h3>Create Your Work Plan:</h3>
				<hr />
			</div>
			<div className="plan-list">
				{newList}
				<hr />
			</div>
		</div>
	);
}

export default ExerciseList;
