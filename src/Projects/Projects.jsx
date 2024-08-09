import "./Projects.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import { useState } from "react";
import Banana from "../assets/Banana.gif";
import { ProjectDisplay } from "./Project-Display/Project-Display.jsx";

export const Projects = () => {
	const { MemoizedAeroBubbles } = useContext(AppContext);

	// Initialize Slider Indexs:
	// 0 = Bounce In
	// 1 = Vis
	// 2 = Bounce Out
	// 3 = Invis

	const [projectVisibility, setProjectVisibility] = useState([1, 0, 0, 0, 0]);

	// Increment Slider Index
	const incrementSliderIndex = () => {
		setProjectVisibility((prev) => {
			// Find the index of the current visible project
			const currentIndex = prev.indexOf(1);
			// Identify the next project index
			const nextIndex = (currentIndex + 1) % projectVisibility.length;
			// Construct new state
			const newState = prev.map((_, index) => {
				if (index === nextIndex) return 1;
				return 0;
			});
			return newState;
		});
	};

	// Decrement Slider Index
	const decrementSliderIndex = () => {
		setProjectVisibility((prev) => {
			// Find the index of the current visible project
			const currentIndex = prev.indexOf(1);
			// Identify the next project index
			const nextIndex =
				currentIndex === 0
					? projectVisibility.length - 1
					: currentIndex - 1;

			// Construct new state
			const newState = prev.map((_, index) => {
				if (index === nextIndex) return 1;
				return 0;
			});
			return newState;
		});
	};
	return (
		<div className="Projects">
			<MemoizedAeroBubbles
				background="#B47EAB"
				node="#000000"
				links="#000000"
			/>
			<div className="Projects-Header-Wrapper">
				<img className="Banana" src={Banana} />

				<h1 className="Projects-Header">Project Hall</h1>
			</div>

			<button
				className="Slider-Prev"
				onClick={() => {
					decrementSliderIndex();
				}}>
				<img className="Left-Arrow" src={leftArrow} />
			</button>
			<div className="Slider-Wrap">
				<ProjectDisplay
					projectName="Outfit Generator"
					completedAt="Ongoing"
					bulletPoints={[
						"Fullstack Application that generates second-hand outfits based on user preferences by utilizing Mach",
						"",
					]}
					bounceStage={projectVisibility[0]}
				/>
				<ProjectDisplay
					projectName="Personal Portfolio"
					completedAt="August 2024"
					bulletPoints={[
						"React Router for Navigation",
						"Responsive Design with React",
					]}
					bounceStage={projectVisibility[1]}
				/>
				<ProjectDisplay
					projectName="Album Chart Server"
					completedAt="January 2024"
					bulletPoints={[
						"Express.js for Server",
						"User Authentications with Node Sessions",
					]}
					bounceStage={projectVisibility[2]}
				/>
				<ProjectDisplay
					projectName="Custom News Client"
					completedAt="November 2023"
					bulletPoints={[
						"API Mangament with Axios",
						"Local Storage for User Preferences",
					]}
					bounceStage={projectVisibility[3]}
				/>
				<ProjectDisplay
					projectName="Music Benchmark"
					completedAt="September 2023"
					bulletPoints={[
						"API Mangament with Axios",
						"Local Storage for User Preferences",
					]}
					bounceStage={projectVisibility[4]}
				/>
			</div>
			<button
				className="Slider-Next"
				onClick={() => {
					incrementSliderIndex();
				}}>
				<img className="Right-Arrow" src={rightArrow} />
			</button>
		</div>
	);
};
