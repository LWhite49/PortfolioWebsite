import "./Home.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import LWImg from "../assets/LWImg.jpg";
import { memo } from "react";
import { AeroBubbles } from "../AeroBubbles/AeroBubbles.jsx";
import FrutArrowCurve from "../assets/FrutigerAeroArrow.png";
import AltArrowCurve from "../assets/AeroArrow2.png";
import Cherries3D from "../assets/Cherries.gif";
import Grapes3D from "../assets/Grapesgif.gif";
import EmailSvg from "../assets/EmailSvg.svg";
import LinkedInSvg from "../assets/LinkedInSvg.svg";
import GithubSvg from "../assets/GithubSvg.svg";

const MemoizedAeroBubbles = memo(AeroBubbles);

export const Home = () => {
	const { isMenuDisplayed } = useContext(AppContext);
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
					This is my undergraduate developer portfolio!
				</h1>
				<img
					className="Cherries-3D"
					src={Cherries3D}
					alt="Cherries3D"
				/>
				<img className="Personal-Image" src={LWImg} alt="LWImg" />
				<img className="Frut-Aero-Arrow" src={FrutArrowCurve} />
				<div className="Home-Contact-Icons">
					<img className="Grapes-3D" src={Grapes3D} alt="Grapes3D" />
					<img
						className="Email-Svg"
						src={EmailSvg}
						alt="EmailSvg"
						onClick={() => {
							window.open(
								"mailto:lwhite4965@outlook.com",
								"_blank",
								"noopener,noreferrer"
							);
						}}
					/>
					<img
						onClick={() => {
							window.open(
								"https://www.linkedin.com/in/lwhite49",
								"_blank",
								"noopener,noreferrer"
							);
						}}
						className="LinkedIn-Svg"
						src={LinkedInSvg}
						alt="LinkedInSvg"
					/>
					<img
						onClick={() => {
							window.open(
								"https://github.com/LWhite49",
								"_blank",
								"noopener,noreferrer"
							);
						}}
						className="Github-Svg"
						src={GithubSvg}
						alt="GithubSvg"
					/>
				</div>
			</div>
			<img
				className={
					isMenuDisplayed ? "Alt-Aero-Arrow-Invis" : "Alt-Aero-Arrow"
				}
				src={AltArrowCurve}
			/>
			<MemoizedAeroBubbles />
		</div>
	);
};
