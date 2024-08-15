import "./App.css";
import { useState, useEffect, createContext, memo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home/Home";
import { Education } from "./Education/Education";
import { Projects } from "./Projects/Projects";
import { Techstack } from "./Techstack/Techstack";
import { AeroBubbles } from "./AeroBubbles/AeroBubbles.jsx";

export const AppContext = createContext();

const MemoizedAeroBubbles = memo(AeroBubbles);
const MemoizedHome = memo(Home);
const MemoizedEducation = memo(Education);
const MemoizedProjects = memo(Projects);
const MemoizedTechstack = memo(Techstack);

function UnroutedApp() {
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
			Date.now() - localStorage.getItem("lastLoad") < 60000
		) {
			return localStorage.getItem("subPage");
		}
		return "Home";
	});

	// Create a useEffect that stores the subpage in local storage when it changes, and updates lastLoad on page closing
	useEffect(() => {
		localStorage.setItem("subPage", currSubpage);
		localStorage.setItem("lastLoad", Date.now());
	}, [currSubpage]);

	return (
		<AppContext.Provider
			value={{ windowWidth, isMenuDisplayed, MemoizedAeroBubbles }}>
			<div className="App">
				<Routes>
					<Route path="/" element={<MemoizedHome />} />
					<Route path="/education" element={<MemoizedEducation />} />
					<Route path="/projects" element={<MemoizedProjects />} />
					<Route path="/techstack" element={<MemoizedTechstack />} />
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
							}}>
							<p className="Navbar-Text">Techstack</p>
						</Link>
					</div>
					<hr className="Top-Menu-Line"></hr>
					<hr className="Bottom-Menu-Line"></hr>
				</button>
			</div>
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
