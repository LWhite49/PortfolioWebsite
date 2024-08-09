import "./Projects.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import rightArrow from "../assets/rightArrow.svg";
import { useState } from "react";
import Banana from "../assets/Banana.gif";
import { ProjectDisplay } from "./Project-Display/Project-Display.jsx";

export const Projects = () => {
	const { MemoizedAeroBubbles } = useContext(AppContext);

	// Initialize Slider Indexs:
	// 0 = Invis / No Animation after 2 or 3
	// 1 = Bounce In / Vis
	// 2 = Bounce Out High / Invis Reshuffle
	// 3 = Bounce Out / Invis No Reshuffle

	const [projectVisibility, setProjectVisibility] = useState([1, 0, 0, 0, 0]);

	// Increment Slider Index
	const incrementSliderIndex = () => {
		setProjectVisibility((prev) => {
			// Find the index of the current visible project
			const currentIndex = prev.indexOf(1);
			// Check for shuffle edge case
			if (currentIndex === projectVisibility.length - 1) {
				return prev.map((_, index) => {
					if (index === 0) return 1;
					if (index === projectVisibility.length - 1) return 2;
					return 0;
				});
			}
			// Otherwise
			else {
				// Identify the next project index
				const nextIndex = (currentIndex + 1) % projectVisibility.length;
				// Construct new state
				const newState = prev.map((_, index) => {
					if (index === nextIndex) return 1;
					return 0;
				});
				return newState;
			}
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

			<div className="Slider-Wrap">
				<ProjectDisplay
					projectName="Outfit Generator"
					completedAt="Work in Progress"
					bulletPoints={[
						"Fullstack Application that generates outfits comprised of secondhand clothing by utilizing Machine Learning and Data Analysis",
						"Content Feed of Outfits generated by a Custom REST API Backend to user specifications, and is then managed by a React Frontend",
						"NoSQL Mongo Database stores Web Scraped Clothing Items as well as Rating Data to train the Machine Learning Models in real time",
					]}
					bounceStage={projectVisibility[0]}
					clockSVG={0}
				/>
				<ProjectDisplay
					projectName="Personal Portfolio"
					completedAt="August 2024"
					bulletPoints={[
						"Frontend Application that showcases my technical skills and personal projects as an Undergraduate Software Developer",
						"Stylish Animations and Responsive Design through React and CSS for a engaging modern User Experience",
						"Modular Design allows for easy updates and additions to the Portfolio as new projects are completed or as my techstack evolves",
					]}
					bounceStage={projectVisibility[1]}
					clockSVG={1}
				/>
				<ProjectDisplay
					projectName="Album Chart Server"
					completedAt="January 2024"
					bulletPoints={[
						"Backend Application that allows users to create and manage their own Album Charts by interacting with a REST API",
						"User Authentication and Authorization with Express Sessions allow for synchronous and secure modification of Data",
						"NoSQL Mongo Database stores Album Data obtained by Web Scraping, as well as User Data and Encrypted Passwords",
					]}
					bounceStage={projectVisibility[2]}
					clockSVG={1}
				/>
				<ProjectDisplay
					projectName="Custom News Client"
					completedAt="November 2023"
					bulletPoints={[
						"Frontend Application that uses Vanilla JavaScript to make a News Client that allows users to store favorite topics",
						"News Feed is sourced from News API, where Axios is used to manage API requests reflecting User Preferences",
						"User Interface is rendered dynamically based on the favorite topics stored in Local Storage",
					]}
					bounceStage={projectVisibility[3]}
					clockSVG={1}
				/>
				<ProjectDisplay
					projectName="Music Benchmark"
					completedAt="September 2023"
					bulletPoints={[
						"Frontend Application that uses Vanilla JavaScript to host tools for training user musical skills",
						"Playable Piano made from scratch uses JavaScript Audio to test user's ability to identify pitch intervals",
						"Tempo Trainer utilizes JavaScript Time and Math to grade a user accuracy and varaince while matching a variable tempo",
					]}
					bounceStage={projectVisibility[4]}
					clockSVG={1}
				/>
			</div>
			<div className="Slider-Nav-Wrapper">
				<button
					className="Slider-Next"
					onClick={() => {
						incrementSliderIndex();
					}}>
					<img className="Right-Arrow" src={rightArrow} />
				</button>
			</div>
		</div>
	);
};
