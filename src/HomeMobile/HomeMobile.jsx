import "./HomeMobile.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Tooltip } from "react-tooltip";
import ResumeSvg from "../assets/ResumeSvg.svg";
import EmailSvg from "../assets/EmailSvg.svg";
import LinkedInSvg from "../assets/LinkedInSvg.svg";
import Resume from "../assets/Logan_White_resume.pdf";

export const HomeMobile = () => {
	const { homeImages, MemoizedAeroBubbles, isMenuDisplayed } =
		useContext(AppContext);

	const tooltipStyle = {
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		color: "#75ffca",
		borderColor: "black",
		borderRadius: "10px",
		borderStyle: "solid",
		borderWidth: "2px",
	};

	// Source Images
	const personalImg = homeImages[4];
	const Grapes3D = homeImages[3];
	const AltArrowCurve = homeImages[0];

	return (
		<div className="HomeMobile">
			<MemoizedAeroBubbles
				background="#E6D6EB"
				node="#7E6B8F"
				links="#8DC97E"
			/>
			<div className="Home-Intro-Text-Wrap-Mobile">
				<h1 className="Home-Hook-Mobile">Nice to meet you!</h1>
				<h1 className="Home-Intro-Personal-Name-Mobile">
					{"I'm Logan 💫"}
				</h1>
				<h1 className="Home-Intro-Text-Mobile">
					A Full Stack{" "}
					<span style={{ color: "#FFBA4B" }}>Software Developer</span>{" "}
				</h1>
				<h1 className="Home-Intro-Text-Last-Mobile">
					This is my undergraduate developer portfolio!
				</h1>
			</div>
			<img
				className="Personal-Image-Mobile"
				src={personalImg.src}
				alt="Personal-Image"
			/>
			<div className="Home-Contact-Icons-Mobile">
				<img
					className="Grapes-3D-Mobile"
					src={Grapes3D.src}
					alt="Grapes3D"
				/>
				<img
					onClick={() => {
						window.open(Resume, "_blank", "noopener,noreferrer");
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
					style={tooltipStyle}
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
					style={tooltipStyle}
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
					style={tooltipStyle}
				/>
			</div>
			<img
				className={
					isMenuDisplayed
						? "Alt-Aero-Arrow-Invis-Mobile"
						: "Alt-Aero-Arrow-Mobile"
				}
				src={AltArrowCurve.src}
			/>
		</div>
	);
};
