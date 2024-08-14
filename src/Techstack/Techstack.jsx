import "./Techstack.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import Apple from "../assets/Apple.gif";
export const Techstack = () => {
	const { MemoizedAeroBubbles } = useContext(AppContext);
	return (
		<div className="Techstack">
			<MemoizedAeroBubbles
				background="#DCF9F5"
				node="#000000"
				links="#5CAB7D"
			/>
			<div className="Techstack-Header-Wrapper">
				<img className="Apple" src={Apple} />

				<h1 className="Techstack-Header">Techstack Map</h1>
			</div>
		</div>
	);
};
