import "./Home.css";
import LWImg from "../assets/LWImg.jpg";
import { AeroBubbles } from "../AeroBubbles/AeroBubbles.jsx";
import FrutArrowCurve from "../assets/FrutigerAeroArrow.png";
import Cherries3D from "../assets/Cherries.gif";

export const Home = () => {
	return (
		<div className="Home">
			<div className="Home-Intro-Text-Wrap">
				<h1 className="Home-Hook">Nice to meet you!</h1>
				<h1 className="Home-Intro-Personal-Name">{"I'm Logan 😁"}</h1>
				<h1 className="Home-Intro-Text">
					Aspiring Fullstack JavaScript developer, studying Computer
					Science at the University of South Florida{" "}
				</h1>
				<img
					className="Cherries-3D"
					src={Cherries3D}
					alt="Cherries3D"
				/>
				<img className="Frut-Aero-Arrow" src={FrutArrowCurve} />
			</div>
			<AeroBubbles />
			<div className="Personal-Image-Container">
				<img className="Personal-Image" src={LWImg} alt="LWImg" />
			</div>
		</div>
	);
};
