import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	monday,
	tuesday,
	wednesday,
	thursday,
	friday,
	saturday,
	sunday,
	remove,
} from "../state/exercises/exercises.reducer";

const ExerciseName = (props) => {
	// console.log("exerciseName-props", props);

	const [result, setResult] = useState(0);
	const [rep, setRep] = useState(0);

	console.log("result", result);

	const dispatch = useDispatch();

	const [day, setDay] = useState([]);

	const handleChange = (event) => {
		setDay(event.currentTarget.value);
	};
	// console.log("cokurwa", day);
	useEffect(() => {
		if (day === "Monday") {
			dispatch(monday(props.item));
		} else if (day === "Tuesday") {
			dispatch(tuesday(props.item));
		} else if (day === "Wednesday") {
			dispatch(wednesday(props.item));
		} else if (day === "Thursday") {
			dispatch(thursday(props.item));
		} else if (day === "Friday") {
			dispatch(friday(props.item));
		} else if (day === "Saturday") {
			dispatch(saturday(props.item));
		} else if (day === "Sunday") {
			dispatch(sunday(props.item));
		} else {
			console.log("dupa");
		}
	}, [dispatch, day]);

	// remove
	const [removeItem, setRemoveItem] = useState("");
	const [removeDay, setRemoveDay] = useState("");

	const handleDelete = () => {
		setRemoveItem(props.item);
		setRemoveDay(props.id);
	};

	useEffect(() => {
		if (removeItem !== "") {
			dispatch(remove(props));
		}
	}, [dispatch, removeItem]);

	return (
		<div className="plan-list-item">
			<form className="form-options" onSubmit={(e) => e.preventDefault()}>
				<div className="plan-list-item" key={props.item}>
					<button
						className="delete-button"
						onClick={(props) => handleDelete(props)}
					>
						x
					</button>

					{props.item}
				</div>

				<select
					type="text"
					name="browser"
					className="input-options"
					onChange={handleChange}
				>
					<option value="Monday">Monday</option>
					<option value="Tuesday">Tuesday</option>
					<option value="Wednesday">Wednesday</option>
					<option value="Thursday">Thursday</option>
					<option value="Friday">Friday</option>
					<option value="Saturday">Saturday</option>
					<option value="Sunday">Sunday</option>
				</select>

				{/* <input type="submit" value="sent" onClick={() => console.log(day)} /> */}
			</form>
			<div className="counting">
				<button className="small-button" onClick={() => setResult(result - 1)}>
					-
				</button>
				<span className="span-name">series</span>
				<button className="small-button" onClick={() => setResult(result + 1)}>
					+
				</button>
				<span className="result">{result}</span>x
				<span className="rep">{rep}</span>
				<button className="small-button" onClick={() => setRep(rep - 1)}>
					-
				</button>
				<span className="span-name">repetitions</span>
				<button className="small-button" onClick={() => setRep(rep + 1)}>
					+
				</button>
			</div>
		</div>
	);
};

export default ExerciseName;
