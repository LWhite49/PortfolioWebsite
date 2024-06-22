import "./Home.css";
import LWImg from "../assets/LWImg.jpg";
import { AeroBubbles } from "../AeroBubbles/AeroBubbles.jsx";

export const Home = () => {
	return (
		<div className="Home">
			<h1 className="Home-Intro-Text">Developer Portfolio</h1>
			<AeroBubbles />
			<img className="Personal-Image" src={LWImg} alt="LWImg" />
		</div>
	);
};
