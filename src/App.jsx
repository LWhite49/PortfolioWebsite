import "./App.css";
import { useState, useEffect, createContext, memo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import subpages
import { Home } from "./Home/Home";
import { HomeMobile } from "./HomeMobile/HomeMobile";
import { Education } from "./Education/Education";
import { EducationMobile } from "./EducationMobile/EducationMobile";
import { Projects } from "./Projects/Projects";
import { ProjectsMobile } from "./ProjectsMobile/ProjectsMobile";
import { Techstack } from "./Techstack/Techstack";
import { TechstackMobile } from "./TechstackMobile/TechstackMobile";
import { Loading } from "./Loading/Loading";

// Import background components
import { AeroBubbles } from "./AeroBubbles/AeroBubbles.jsx";

// Home Images
import LWImg from "./assets/homeVital/LWIMG.avif";
import FrutArrowCurve from "./assets/homeVital/FrutigerAeroArrow.png";
import AltArrowCurve from "./assets/homeVital/AeroArrow2.png";
import Cherries3D from "./assets/homeVital/Cherries.gif";
import Grapes3D from "./assets/homeVital/Grapesgif.gif";

// Education Images
import USFBull from "./assets/educationVital/USFBull.avif";
import ICPCLogo from "./assets/educationVital/ICPC-Group.avif";
import ICPCTag from "./assets/educationVital/ICPC-Tag.avif";
import USFLogo from "./assets/educationVital/USF-Logo.avif";
import Strawberry from "./assets/educationVital/Strawberry.gif";

// Project Images
import OGImg from "./assets/projectsVital/OGImg.png";
import PPImg from "./assets/projectsVital/PPImg.png";
import ACImg from "./assets/projectsVital/ACImg.png";
import CNCImg from "./assets/projectsVital/CNCImg.png";
import RBImg from "./assets/projectsVital/RBImg.png";
import Banana from "./assets/projectsVital/Banana.gif";

// Techstack Images
import Apple from "./assets/techstackVital/Apple.gif";
import Bowl from "./assets/techstackVital/Bowl.gif";
// Create app context
export const AppContext = createContext();

// Memoize components
const MemoizedAeroBubbles = memo(AeroBubbles);
const MemoizedHome = memo(Home);
const MemoizedHomeMobile = memo(HomeMobile);
const MemoizedEducation = memo(Education);
const MemoizedEducationMobile = memo(EducationMobile);
const MemoizedProjects = memo(Projects);
const MemoizedProjectsMobile = memo(ProjectsMobile);
const MemoizedTechstack = memo(Techstack);
const MemoizedTechstackMobile = memo(TechstackMobile);

// Create arrays for each subpage vital images for load balancing

let homeImagesImp = [
	AltArrowCurve,
	Cherries3D,
	FrutArrowCurve,
	Grapes3D,
	LWImg,
];
let educationImagesImp = [USFBull, ICPCLogo, ICPCTag, USFLogo, Strawberry];
let projectsImagesImp = [OGImg, PPImg, ACImg, CNCImg, RBImg, Banana];
let techstackImagesImp = [Apple, Bowl];

// Map each array to an array of image objects
let homeImages = homeImagesImp.map((img) => {
	const image = new Image();
	image.src = img;
	return image;
});
let educationImages = educationImagesImp.map((img) => {
	const image = new Image();
	image.src = img;
	return image;
});
let projectsImages = projectsImagesImp.map((img) => {
	const image = new Image();
	image.src = img;
	return image;
});
let techstackImages = techstackImagesImp.map((img) => {
	const image = new Image();
	image.src = img;
	return image;
});

function UnroutedApp() {
	// Create an isLoading state, which becomes false in 1 second
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			clearTimeout();
		}, 1000);
	}, []);

	// Create a windowWidth state
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// useEffect that sets an event listener on the window object to listen for the resize event
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Create a navigation menu display state
	const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

	// Create a state for current subpage used for conditional rendering of navbar
	const [currSubpage, setCurrSubpage] = useState(() => {
		if (
			localStorage.getItem("subPage") &&
			Date.now() - localStorage.getItem("lastLoad") < 600000
		) {
			return localStorage.getItem("subPage");
		}
		return "Home";
	});

	// Create function that modifies the theme color meta tag
	const setThemeColor = (color) => {
		const metaThemeColor = document.querySelector("meta[name=theme-color]");
		metaThemeColor.setAttribute("content", color);
	};

	// Create a useEffect that stores the subpage in local storage when it changes, and updates lastLoad on page closing
	useEffect(() => {
		localStorage.setItem("subPage", currSubpage);
		localStorage.setItem("lastLoad", Date.now());
	}, [currSubpage]);

	return (
		<AppContext.Provider
			value={{
				windowWidth,
				isMenuDisplayed,
				MemoizedAeroBubbles,
				homeImages,
				educationImages,
				projectsImages,
				techstackImages,
			}}>
			{isLoading ? (
				<Loading />
			) : (
				<div className="App">
					<Routes>
						<Route
							path="/"
							element={
								windowWidth > 839 ? (
									<MemoizedHome />
								) : (
									<MemoizedHomeMobile />
								)
							}
						/>
						<Route
							path="/education"
							element={
								windowWidth > 839 ? (
									<MemoizedEducation />
								) : (
									<MemoizedEducationMobile />
								)
							}
						/>
						<Route
							path="/projects"
							element={
								windowWidth > 839 ? (
									<MemoizedProjects />
								) : (
									<MemoizedProjectsMobile />
								)
							}
						/>
						<Route
							path="/techstack"
							element={
								windowWidth > 839 ? (
									<MemoizedTechstack />
								) : (
									<MemoizedTechstackMobile />
								)
							}
						/>
					</Routes>
					<button
						className="Navbar-Expand-Button"
						onMouseEnter={() => {
							setIsMenuDisplayed(true);
						}}
						onMouseLeave={() => {
							setIsMenuDisplayed(false);
						}}>
						<div
							className={
								isMenuDisplayed
									? "Navbar-Container"
									: "Navbar-Invis"
							}>
							<Link
								className={
									currSubpage === "Home"
										? "Navbar-Link-Active"
										: "Navbar-Link"
								}
								to="/"
								onClick={() => {
									setCurrSubpage("Home");
									setThemeColor("#e6d6eb");
								}}>
								<p className={"Navbar-Text"}>Home</p>
							</Link>
							<Link
								className={
									currSubpage === "Education"
										? "Navbar-Link-Active"
										: "Navbar-Link"
								}
								to="/education"
								onClick={() => {
									setCurrSubpage("Education");
									setThemeColor("#006c43");
								}}>
								<p className="Navbar-Text">Education</p>
							</Link>
							<Link
								className={
									currSubpage === "Projects"
										? "Navbar-Link-Active"
										: "Navbar-Link"
								}
								to="/projects"
								onClick={() => {
									setCurrSubpage("Projects");
									setThemeColor("#b47eab");
								}}>
								<p className="Navbar-Text">Projects</p>
							</Link>
							<Link
								className={
									currSubpage === "Techstack"
										? "Navbar-Link-Active"
										: "Navbar-Link"
								}
								to="/techstack"
								onClick={() => {
									setCurrSubpage("Techstack");
									setThemeColor("#ffc2ad");
								}}>
								<p className="Navbar-Text">Techstack</p>
							</Link>
						</div>
						<hr className="Top-Menu-Line"></hr>
						<hr className="Bottom-Menu-Line"></hr>
					</button>
				</div>
			)}
		</AppContext.Provider>
	);
}

// Wrap in Router
function App() {
	return (
		<Router>
			<UnroutedApp />
		</Router>
	);
}
export default App;
