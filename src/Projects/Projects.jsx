import "./Projects.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import rightArrow from "../assets/rightArrow.svg";
import fillCircle from "../assets/circleFill.svg";
import emptyCircle from "../assets/circleEmpty.svg";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import { ProjectDisplay } from "./Project-Display/Project-Display.jsx";

import colaborativeSkill from "../assets/colaborativeSkill.svg";
import cssSkill from "../assets/cssSkill.svg";
import databaseSkill from "../assets/databaseSkill.svg";
import feedManagementSkill from "../assets/feedManagementSkill.svg";
import machineLearningSkill from "../assets/machineLearningSkill.svg";
import reactSkill from "../assets/reactSkill.svg";
import nodeSkill from "../assets/nodeSkill.svg";
import webScrapeSkill from "../assets/webScrapeSkill.svg";
import restAPISkill from "../assets/restAPISkill.svg";
import javascriptSkill from "../assets/javascriptSkill.svg";
import jsAudioSkill from "../assets/jsAudioSkill.svg";
import jsTimeSkill from "../assets/jsTimeSkill.svg";
import keyframeSkill from "../assets/keyframeSkill.svg";
import uiDesignSkill from "../assets/uiDesignSkill.svg";
import userSkill from "../assets/userSkill.svg";
import homemadeComponentSkill from "../assets/customComponents.svg";
import sessionsSkill from "../assets/sessionsSkill.svg";

export const Projects = () => {
	const { MemoizedAeroBubbles, projectsImages } = useContext(AppContext);

	// Source Images
	const OGImg = projectsImages[0];
	const PPImg = projectsImages[1];
	const ACImg = projectsImages[2];
	const CNCImg = projectsImages[3];
	const RBImg = projectsImages[4];
	const Banana = projectsImages[5];

	// Initialize Slider Indexs:
	// 0 = Invis / No Animation after 2 or 3
	// 1 = Bounce In / Vis
	// 2 = Bounce Out High / Invis Reshuffle
	// 3 = Bounce Out / Invis No Reshuffle

	const [sliderIndex, setSliderIndex] = useState(0);
	const [projectVisibility, setProjectVisibility] = useState([1, 0, 0, 0, 0]);

	// Increment Slider Index
	const incrementSliderIndex = () => {
		setProjectVisibility((prev) => {
			// Find the index of the current visible project
			const currentIndex = prev.indexOf(1);
			// Check for shuffle edge case
			if (currentIndex === projectVisibility.length - 1) {
				setSliderIndex(0);
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
				setSliderIndex(nextIndex);
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
				<img className="Banana" src={Banana.src} />

				<h1 className="Projects-Header">Project Hall</h1>
			</div>

			<div className="Slider-Wrap">
				<ProjectDisplay
					projectName="Wardrobe Wizard"
					completedAt="October 2024"
					bulletPoints={[
						"Fullstack Application that generates outfits comprised of secondhand clothing by utilizing Machine Learning and Data Analysis",
						"Content Feed of Outfits generated by a Custom REST API Backend to user specifications, and is then managed by a React Frontend",
						"NoSQL Mongo Database stores Web Scraped Clothing Items as well as Rating Data to train the Machine Learning Models in real time",
					]}
					bounceStage={projectVisibility[0]}
					clockSVG={1}
					demonstrationLink="https://wardrobewizard.app/"
					projectImg={OGImg.src}
					projectSkills={[
						{
							name: "React",
							svg: reactSkill,
							use: "Frontend Applicaiton Website is built with React",
						},
						{
							name: "Feed Management",
							svg: feedManagementSkill,
							use: "Sourcing and Managing a Content Feed from the Frontend",
						},
						{
							name: "UI Design",
							svg: uiDesignSkill,
							use: "Informed Design to ensure Stylish, Funcitonal User Experience",
						},
						{
							name: "Node.js",
							svg: nodeSkill,
							use: "Backend Application is built with Node as a REST API",
						},
						{
							name: "Database Management",
							svg: databaseSkill,
							use: "Data Storage and Management with MongoDB and MongooseJS",
						},
						{
							name: "Web Scraping",
							svg: webScrapeSkill,
							use: "Database sources new clothing with Node Puppeteer Web Scraper",
						},

						{
							name: "Colaborative",
							svg: colaborativeSkill,
							use: "Team of Three Undergraduate Developers working on the Project",
						},
						{
							name: "Machine Learning",
							svg: machineLearningSkill,
							use: "Content Algorithm is trained by User Ratings with Scikit-Learn",
						},
					]}
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
					demonstrationLink="https://github.com/LWhite49/PortfolioWebsite"
					projectImg={PPImg.src}
					projectSkills={[
						{
							name: "React",
							svg: reactSkill,
							use: "Portfolio Website is built with React and Vite Tooling",
						},
						{
							name: "CSS",
							svg: cssSkill,
							use: "Component Styling done with vanilla CSS",
						},
						{
							name: "Keyframe Animation",
							svg: keyframeSkill,
							use: "Custom Animations for Components with CSS Keyframes",
						},
						{
							name: "UI Design",
							svg: uiDesignSkill,
							use: "Informed Design to ensure Stylish Presentation and User Interface",
						},
						{
							name: "Modular Design",
							svg: homemadeComponentSkill,
							use: "Modular Design enables easy updates to Portfolio or Tech Stack",
						},
					]}
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
					demonstrationLink="https://www.linkedin.com/posts/lwhite49_for-a-while-i-viewed-nodejs-as-something-activity-7143681848290848768-n405?utm_source=share&utm_medium=member_desktop"
					projectImg={ACImg.src}
					projectSkills={[
						{
							name: "Node.js",
							svg: nodeSkill,
							use: "Backend Application is built with Node as a Complex Server",
						},
						{
							name: "Rest API",
							svg: restAPISkill,
							use: "Rest API Services User Logins and Database Updates",
						},
						{
							name: "Web Scraping",
							svg: webScrapeSkill,
							use: "Database sources new albums with Node Puppeteer Web Scraper",
						},
						{
							name: "Database Management",
							svg: databaseSkill,
							use: "User and Data Management through MongoDB and MongooseJS",
						},
						{
							name: "User Authorization",
							svg: userSkill,
							use: "Server can Create and Delete Users with MongooseJS Schemas",
						},
						{
							name: "Express Sessions",
							svg: sessionsSkill,
							use: "Express Sessions allow for Clients to Synchronously Modify Data ",
						},
					]}
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
					demonstrationLink="https://www.linkedin.com/posts/lwhite49_as-i-am-preparing-to-build-my-personal-portfolio-activity-7199450197100228608-qYfz?utm_source=share&utm_medium=member_desktop"
					projectImg={CNCImg.src}
					projectSkills={[
						{
							name: "Vanilla JavaScript",
							svg: javascriptSkill,
							use: "Frontend built by Vanilla Javascript",
						},
						{
							name: "CSS",
							svg: cssSkill,
							use: "Element Styling done with Vanilla CSS",
						},
						{
							name: "Axios",
							svg: restAPISkill,
							use: "Communication with News API done by Axios",
						},
						{
							name: "Local Storage",
							svg: sessionsSkill,
							use: "Local Storage for Client Preferences between sessions",
						},
					]}
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
					demonstrationLink="https://www.linkedin.com/posts/lwhite49_as-i-am-preparing-to-build-my-personal-portfolio-activity-7198762368783241216-x3MT?utm_source=share&utm_medium=member_desktop"
					projectImg={RBImg.src}
					projectSkills={[
						{
							name: "Vanilla JavaScript",
							svg: javascriptSkill,
							use: "Frontend built by Vanilla Javascript",
						},
						{
							name: "CSS",
							svg: cssSkill,
							use: "Element Styling done with Vanilla CSS",
						},
						{
							name: "JS Audio",
							svg: jsAudioSkill,
							use: "Playable Piano utilizes JavaScript Audio Module",
						},
						{
							name: " JS Time",
							svg: jsTimeSkill,
							use: "Tempo Training utilizes JavaScript Time Module",
						},
						{
							name: "UI Design",
							svg: uiDesignSkill,
							use: "Informed Design to ensure a Functional User Experience",
						},
						{
							name: "Custom Components",
							svg: homemadeComponentSkill,
							use: "Custom Components for a Unique User Experience",
						},
					]}
				/>
			</div>
			<div className="Slider-Nav-Wrapper">
				<div
					className="Slider-Nav-Indicators"
					data-tooltip-id="slider-indicator">
					<img
						className="Slider-Indicator"
						src={sliderIndex === 0 ? fillCircle : emptyCircle}
					/>
					<img
						className="Slider-Indicator"
						src={sliderIndex === 1 ? fillCircle : emptyCircle}
					/>
					<img
						className="Slider-Indicator"
						src={sliderIndex === 2 ? fillCircle : emptyCircle}
					/>
					<img
						className="Slider-Indicator"
						src={sliderIndex === 3 ? fillCircle : emptyCircle}
					/>
					<img
						className="Slider-Indicator"
						src={sliderIndex === 4 ? fillCircle : emptyCircle}
					/>
				</div>
				<button
					className="Slider-Next"
					data-tooltip-id="next-arrow"
					onClick={() => {
						incrementSliderIndex();
					}}>
					<img className="Right-Arrow" src={rightArrow} />
				</button>
			</div>
			<Tooltip
				id="next-arrow"
				place="top"
				effect="solid"
				content="See Next Project"
				style={{ backgroundColor: "#550994" }}
			/>
			<Tooltip
				id="slider-indicator"
				place="top"
				effect="solid"
				content={`Project ${sliderIndex + 1} of ${
					projectVisibility.length
				}`}
				style={{ backgroundColor: "#550994" }}
			/>
		</div>
	);
};
