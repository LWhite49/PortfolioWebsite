import "./Home.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Tooltip } from "react-tooltip";
import ResumeSvg from "../assets/ResumeSvg.svg";
import EmailSvg from "../assets/EmailSvg.svg";
import LinkedInSvg from "../assets/LinkedInSvg.svg";
import GithubSvg from "../assets/GithubSvg.svg";
import Resume from "../assets/Logan_White_resume.pdf";

export const Home = () => {
	// Create style object for Tooltips
	const tooltipStyle = {
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		color: "#75ffca",
		borderColor: "black",
		borderRadius: "10px",
		borderStyle: "solid",
		borderWidth: "2px",
	};
	const { isMenuDisplayed, MemoizedAeroBubbles, homeImages } =
		useContext(AppContext);
	// Source Images from MemoizedHomeImages
	const AltArrowCurve = homeImages[0];
	const Cherries3D = homeImages[1];
	const FrutArrowCurve = homeImages[2];
	const Grapes3D = homeImages[3];
	const LWImg = homeImages[4];
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
					A Full Stack{" "}
					<span style={{ color: "#FFBA4B" }}>
						Software Developer,
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
					src={Cherries3D.src}
					alt="Cherries3D"
				/>
				<img className="Personal-Image" src={LWImg.src} alt="LWImg" />
				<img className="Frut-Aero-Arrow" src={FrutArrowCurve.src} />
				<div className="Home-Contact-Icons">
					<img
						className="Grapes-3D"
						src={Grapes3D.src}
						alt="Grapes3D"
					/>
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
						style={tooltipStyle}
					/>
				</div>
			</div>
			<div className="Current-Work-Wrap">
				<p className="Current-Work-Text">
					I&apos;m Currently Developing:
				</p>
				<a
					target="_blank"
					href="https://www.linkedin.com/posts/lwhite49_after-a-week-of-focused-css-work-im-thrilled-activity-7302115359614984192-k8o4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD63nAoBaF5UJ4Ky_9s_CMQtrLFQ93mvx_s">
					<p className="Current-Work-Text-Instance">
						<span
							style={{
								color: "#B65DD9FF",
								textDecoration: "underline",
								textUnderlineOffset: "3px",
							}}>
							{" "}
							Wardrobe Wizard&#39;s Mobile App{" "}
						</span>
					</p>
				</a>
				<p className="Current-Work-Stack-Prompt">
					Using These Technologies:
				</p>
				<p className="Current-Work-Stack">
					<span
						style={{
							color: "#B65DD9FF",
						}}>
						React Native, Node.js, Azure, PyTorch
					</span>
				</p>
			</div>
			<img
				className={
					isMenuDisplayed ? "Alt-Aero-Arrow-Invis" : "Alt-Aero-Arrow"
				}
				src={AltArrowCurve.src}
			/>
		</div>
	);
};
