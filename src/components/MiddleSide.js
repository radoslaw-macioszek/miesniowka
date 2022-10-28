import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Accordion from "./Accordion";

import ExerciseList from "./ExerciseList";
import ExerciseName from "./ExerciseName";

function MiddleSide() {
	const remove = useSelector((state) => state.exerciseReducer.remove);
	console.log("reeeeemove", remove);

	//monday
	const [monday, setMonday] = useState([]);
	const mondayPlan = useSelector((state) => state.exerciseReducer.monday);

	useEffect(() => {
		if (mondayPlan !== "" && remove.id !== "Monday") {
			setMonday((prev) => [...prev, mondayPlan]);
		}
	}, [mondayPlan]);

	useEffect(() => {
		if (remove.id === "Monday") {
			const filteredMonday = monday.filter(
				(element) => !element.includes(remove.item)
			);
			setMonday(filteredMonday);
		}
	}, [remove]);

	const newMonday = monday.map((item) => {
		return <ExerciseName id="Monday" key={item} item={item} />;
	});

	//tuesday
	//
	//
	const [tuesday, setTuesday] = useState([]);
	const tuesdayPlan = useSelector((state) => state.exerciseReducer.tuesday);

	useEffect(() => {
		if (tuesdayPlan !== "" && remove.id !== "Tuesday") {
			setTuesday((prev) => [...prev, tuesdayPlan]);
		}
	}, [tuesdayPlan]);

	useEffect(() => {
		if (remove.id === "Tuesday") {
			const filteredTuesday = tuesday.filter(
				(element) => !element.includes(remove.item)
			);
			setTuesday(filteredTuesday);
		}
	}, [remove]);

	const newTuesday = tuesday.map((item) => {
		return <ExerciseName id="Tuesday" key={item} item={item} />;
	});

	//wednesday
	//
	//
	const [wednesday, setWednesday] = useState([]);
	const wednesdayPlan = useSelector((state) => state.exerciseReducer.wednesday);

	useEffect(() => {
		if (wednesdayPlan !== "" && remove.id !== "Wednesday") {
			setWednesday((prev) => [...prev, wednesdayPlan]);
		}
	}, [wednesdayPlan]);

	useEffect(() => {
		if (remove.id === "Wednesday") {
			const filteredWednesday = wednesday.filter(
				(element) => !element.includes(remove.item)
			);
			setWednesday(filteredWednesday);
		}
	}, [remove]);

	const newWednesday = wednesday.map((item) => {
		return <ExerciseName id="Wednesday" key={item} item={item} />;
	});

	//thursday
	//
	//
	const [thursday, setThursday] = useState([]);
	const thursdayPlan = useSelector((state) => state.exerciseReducer.thursday);

	useEffect(() => {
		if (thursdayPlan !== "" && remove.id !== "Thursday") {
			setThursday((prev) => [...prev, thursdayPlan]);
		}
	}, [thursdayPlan]);

	useEffect(() => {
		if (remove.id === "Thursday") {
			const filteredThursday = thursday.filter(
				(element) => !element.includes(remove.item)
			);

			setThursday(filteredThursday);
		}
	}, [remove]);

	const newThursday = thursday.map((item) => {
		return <ExerciseName id="Thursday" key={item} item={item} />;
	});

	//friday
	//
	//

	const [friday, setFriday] = useState([]);
	const fridayPlan = useSelector((state) => state.exerciseReducer.friday);

	useEffect(() => {
		if (fridayPlan !== "" && remove.id !== "Friday") {
			setFriday((prev) => [...prev, fridayPlan]);
		}
	}, [fridayPlan]);

	useEffect(() => {
		if (remove.id === "Friday") {
			const filteredFriday = friday.filter(
				(element) => !element.includes(remove.item)
			);
			setFriday(filteredFriday);
		}
	}, [remove]);

	const newFriday = friday.map((item) => {
		return <ExerciseName id="Friday" key={item} item={item} />;
	});

	//saturday
	//
	//
	const [saturday, setSaturday] = useState([]);
	const saturdayPlan = useSelector((state) => state.exerciseReducer.saturday);

	useEffect(() => {
		if (saturdayPlan !== "" && remove.id !== "Saturday") {
			setSaturday((prev) => [...prev, saturdayPlan]);
		}
	}, [saturdayPlan]);

	useEffect(() => {
		if (remove.id === "Saturday") {
			const filteredSaturday = saturday.filter(
				(element) => !element.includes(remove.item)
			);
			setSaturday(filteredSaturday);
		}
	}, [remove]);

	const newSaturday = saturday.map((item) => {
		return <ExerciseName id="Saturday" key={item} item={item} />;
	});

	//sunday
	//
	//

	const [sunday, setSunday] = useState([]);
	const sundayPlan = useSelector((state) => state.exerciseReducer.sunday);

	useEffect(() => {
		if (sundayPlan !== "" && remove.id !== "Sunday") {
			setSunday((prev) => [...prev, sundayPlan]);
		}
	}, [sundayPlan, remove]);

	useEffect(() => {
		if (remove.id === "Sunday") {
			const filteredSunday = sunday.filter(
				(element) => !element.includes(remove.item)
			);
			setSunday(filteredSunday);
		}
	}, [remove]);

	const newSunday = sunday.map((item) => {
		return <ExerciseName id="Sunday" key={item} item={item} />;
	});

	return (
		<div>
			<ExerciseList />
			<Accordion title="Monday" content={newMonday} />
			<Accordion title="Tuesday" content={newTuesday} />
			<Accordion title="Wednesday" content={newWednesday} />
			<Accordion title="Thursday" content={newThursday} />
			<Accordion title="Friday" content={newFriday} />
			<Accordion title="Saturday" content={newSaturday} />
			<Accordion title="Sunday" content={newSunday} />
		</div>
	);
}

export default MiddleSide;
