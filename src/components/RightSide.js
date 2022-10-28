import React from "react";
import { useSelector } from "react-redux";

function RightSide() {
	// video
	const videoExercise = useSelector(
		(state) => state.exerciseReducer.video.data
	);

	const checking =
		videoExercise !== undefined ? videoExercise.items[0].id.videoId : "";

	const videoSrc = `https://www.youtube.com/embed/${checking}`;

	//image

	const image = useSelector((state) => state.exerciseReducer.images);

	// exercise
	const singleExercise = useSelector(
		(state) => state.exerciseReducer.exercise.data
	);

	// equipment

	const equipment = (e) => {
		switch (e) {
			case "1": {
				return "Barbell";
			}
			case "8": {
				return "Bench";
			}
			case "3": {
				return "Dumbbell";
			}
			case "4": {
				return "Gym mat";
			}
			case "9": {
				return "Incline bench";
			}
			case "10": {
				return "Kettlebell";
			}
			case "7": {
				return "none (bodyweight exercise)";
			}
			case "6": {
				return "Pull-up bar";
			}
			case "5": {
				return "Swiss Ball";
			}
			case "2": {
				return "SZ-Bar";
			}
			default: {
				return "";
			}
		}
	};

	// category

	const category = (f) => {
		switch (f) {
			case "10": {
				return "Abs";
			}
			case "8": {
				return "Arms";
			}
			case "12": {
				return "Back";
			}
			case "14": {
				return "Calves";
			}
			case "11": {
				return "Chest";
			}
			case "9": {
				return "Legs";
			}
			case "13": {
				return "Shoulders";
			}
			default: {
				return "not specify";
			}
		}
	};

	return (
		<div>
			<h2 className="normal-margin-bottom">
				{singleExercise ? singleExercise.name : ""}
			</h2>
			<div>
				<iframe title="video player" src={videoSrc} />
			</div>
			<p className="paragraph">
				<strong>Category: </strong>
				{category(`${singleExercise ? singleExercise.category : ""}`)}
			</p>
			<p className="paragraph">
				<strong>Equipment: </strong>
				{equipment(`${singleExercise ? singleExercise.equipment[0] : ""}`)}{" "}
				{equipment(`${singleExercise ? singleExercise.equipment[1] : ""}`)}
			</p>
			<p
				className="paragraph normal-margin-bottom"
				dangerouslySetInnerHTML={{
					__html: `<strong>Description:</strong> ${
						singleExercise ? singleExercise.description : ""
					}`,
				}}
			>
				{/* <strong>Description: </strong>
							{singleExercise
								? singleExercise.description
										.replace(/<p>/g, "")
										.replace(/<\/p>/g, "")
										.replace(/<ol>/g, "")
										.replace(/<\/ol>/g, "")
										.replace(/<li>/g, "")
										.replace(/<\/li>/g, "")
										.replace(/<ul>/g, "")
										.replace(/<\/ul>/g, "")
										.replace(/<strong>/g, "")
										.replace(/<\/strong>/g, "")
										.replace(/<em>/g, "")
										.replace(/<\/em>/g, "")
								: ""} */}
			</p>
			<div className="pictures">
				<div className="left-picture">
					{image[0] === undefined ? (
						""
					) : (
						<img src={image[0].image} alt="Italian Trulli"></img>
					)}
				</div>
				<div className="right-picture">
					{image[1] === undefined ? (
						""
					) : (
						<img src={image[1].image} alt="Italian Trulli"></img>
					)}
				</div>
			</div>
			<p className="paragraph">
				<strong>Comments for this exercise: </strong>
			</p>
			<p className="paragraph">
				<strong>Muscles: </strong>
			</p>
		</div>
	);
}

export default RightSide;
