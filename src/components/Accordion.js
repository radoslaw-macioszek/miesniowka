import React, { useState, useRef } from "react";

import "./Accordion.css";
import Chevron from "./Chevron";

function Accordion(props) {
	const [setActive, setActiveState] = useState("");
	const [setHeight, setHeightState] = useState("0px");
	const [setRotate, setRotateState] = useState("accordian-icon");

	const content = useRef(null);

	function toggleAccordion() {
		setActiveState(setActive === "" ? "active" : "");
		setHeightState(
			setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
		);
		setRotateState(
			setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
		);
	}

	return (
		<div className="accordion-section">
			<button
				className={`accordion-button ${setActive}`}
				onClick={toggleAccordion}
			>
				<p className="accordion-title">{props.title}</p>
				<Chevron className={`${setRotate}`} width={10} fill={"#777"} />
			</button>
			<div
				ref={content}
				style={{ maxHeight: `${setHeight}` }}
				className="accordion-content"
			>
				<ol
					className="accordion-text"
					// dangerouslySetInnerHTML={{ __html: props.content }}
				>
					{props.content}
				</ol>
			</div>
		</div>
	);
}

export default Accordion;
