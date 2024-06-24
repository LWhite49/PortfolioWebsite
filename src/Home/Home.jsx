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
				<h1 className="Home-Intro-Personal-Name">{"I'm Logan 💫"}</h1>
				<h1 className="Home-Intro-Text">
					An Aspiring{" "}
					<span style={{ color: "#FFBA4B" }}>
						Fullstack JavaScript developer,
					</span>{" "}
					studying{" "}
					<span style={{ color: "#FFBA4B" }}>Computer Science</span>{" "}
					at the University of South Florida{" "}
				</h1>
				<h1 className="Home-Intro-Text-Last">
					This is my undergraduate developer portfolio
				</h1>
				<img
					className="Cherries-3D"
					src={Cherries3D}
					alt="Cherries3D"
				/>
				<img className="Personal-Image" src={LWImg} alt="LWImg" />
				<img className="Frut-Aero-Arrow" src={FrutArrowCurve} />
			</div>
			<AeroBubbles />
		</div>
	);
};
