import "./App.css";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home/Home";
import { Education } from "./Education/Education";
import { Projects } from "./Projects/Projects";
import { Techstack } from "./Techstack/Techstack";

export const AppContext = createContext();

function App() {
	// Create a windowWidth state
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// Create a navigation menu display state
	const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
	const [currSubpage, setCurrSubpage] = useState("Home");

	// useEffect that sets an event listener on the window object to listen for the resize event
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Router>
			<AppContext.Provider value={{ windowWidth, isMenuDisplayed }}>
				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/education" element={<Education />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/techstack" element={<Techstack />} />
					</Routes>
					<button
						className="Navbar-Expand-Button"
						onMouseEnter={() => {
							setIsMenuDisplayed(true);
						}}
						onMouseLeave={() => {
							setIsMenuDisplayed(false);
						}}>
						{isMenuDisplayed ? (
							<div className="Navbar-Container">
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
									<p>Home</p>
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
									<p>Education</p>
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
									<p>Projects</p>
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
									<p>Techstack</p>
								</Link>
							</div>
						) : null}
						<hr className="Top-Menu-Line"></hr>
						<hr className="Bottom-Menu-Line"></hr>
					</button>
				</div>
			</AppContext.Provider>
		</Router>
	);
}

export default App;
