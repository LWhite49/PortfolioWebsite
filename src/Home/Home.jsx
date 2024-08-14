import "./Home.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Tooltip } from "react-tooltip";
import LWImg from "../assets/LWIMG (2).avif";
import FrutArrowCurve from "../assets/FrutigerAeroArrow.png";
import AltArrowCurve from "../assets/AeroArrow2.png";
import Cherries3D from "../assets/Cherries.gif";
import Grapes3D from "../assets/Grapesgif.gif";
import ResumeSvg from "../assets/ResumeSvg.svg";
import EmailSvg from "../assets/EmailSvg.svg";
import LinkedInSvg from "../assets/LinkedInSvg.svg";
import GithubSvg from "../assets/GithubSvg.svg";
import Resume from "../assets/Resume.pdf";

export const Home = () => {
	// Create style object for Tooltips
	const tooltipStype = {
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		color: "#75ffca",
		borderColor: "black",
		borderRadius: "10px",
		borderStyle: "solid",
		borderWidth: "2px",
	};
	const { isMenuDisplayed, MemoizedAeroBubbles } = useContext(AppContext);
	return (
		<div className="Home">
			<MemoizedAeroBubbles
				background="#E6D6EB"
				node="#7E6B8F"
				links="#8DC97E"
			/>
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
						onClick={() => {
							window.open(
								Resume,
								"_blank",
								"noopener,noreferrer"
							);
						}}
						className="Resume-Svg"
						data-tooltip-id="resume"
						src={ResumeSvg}
						alt="ResumeSvg"
					/>
					<Tooltip
						id="resume"
						place="top"
						effect="solid"
						content="View Resume"
						style={tooltipStype}
					/>
					<img
						className="Email-Svg"
						data-tooltip-id="email"
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
					<Tooltip
						id="email"
						place="top"
						effect="solid"
						content="Email: lwhite4965@outlook.com"
						style={tooltipStype}
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
						data-tooltip-id="linkedin"
						src={LinkedInSvg}
						alt="LinkedInSvg"
					/>
					<Tooltip
						id="linkedin"
						place="top"
						effect="solid"
						content="LinkedIn: lwhite49"
						style={tooltipStype}
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
						data-tooltip-id="github"
						src={GithubSvg}
						alt="GithubSvg"
					/>
					<Tooltip
						id="github"
						place="top"
						effect="solid"
						content="Github: LWhite49"
						style={tooltipStype}
					/>
				</div>
			</div>
			<img
				className={
					isMenuDisplayed ? "Alt-Aero-Arrow-Invis" : "Alt-Aero-Arrow"
				}
				src={AltArrowCurve}
			/>
		</div>
	);
};
