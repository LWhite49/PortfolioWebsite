import "./App.css";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Education } from "./Education/Education";
import { Projects } from "./Projects/Projects";
import { Techstack } from "./Techstack/Techstack";

export const AppContext = createContext();

function App() {
	// Create a windowWidth state
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// useEffect that sets an event listener on the window object to listen for the resize event
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<AppContext.Provider value={{ windowWidth }}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/education" element={<Education />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/techstack" element={<Techstack />} />
				</Routes>
			</Router>
		</AppContext.Provider>
	);
}

export default App;
