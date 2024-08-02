import "./Education.css";
import USFBull from "../assets/USFBull.jpg";
import ICPCLogo from "../assets/ICPC-Group.jpg";
import ICPCTag from "../assets/ICPC-Tag.jpg";
import USFLogo from "../assets/USF-Logo.png";
import Strawberry from "../assets/Strawberry.gif";
import { Tooltip } from "react-tooltip";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
export const Education = () => {
	// Define tooltip style object
	const tooltipStype = {
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		color: "ffffff",
		borderColor: "black",
		borderRadius: "10px",
		borderStyle: "solid",
		borderWidth: "2px",
		fontSize: "16pt",
		maxWidth: "300px",
	};
	const { MemoizedAeroBubbles } = useContext(AppContext);
	return (
		<div className="Education">
			<MemoizedAeroBubbles
				background="006c43"
				node="#d0c695"
				links="#ffffff"
			/>
			<div className="Education-Header-Wrapper">
				<img className="Strawberry" src={Strawberry} />

				<h1 className="Education-Header">
					University of South Florida
				</h1>
			</div>
			<div className="Education-Content-Main">
				<div className="Education-Bullets">
					<p className="Education-GPA">
						{" "}
						<span className="Education-Bullet">&bull;</span> Junior
						GPA: 3.91 ={">"} Class of 2026
					</p>
					<p className="Education-Major">
						{" "}
						<span className="Education-Bullet">&bull;</span>{" "}
						Computer Science and Computer Engineering
					</p>
					<p className="Education-Honors">
						{" "}
						<span className="Education-Bullet">&bull;</span>{" "}
						National Merit Scholar + Judy Genshaft Honors Student
					</p>
					<p className="Education-Hackathon">
						{" "}
						<span className="Education-Bullet">&bull;</span>{" "}
						Frequent Webdev Hackathons with USF Google Developer
						Student Club
					</p>
					<p className="Education-Programming">
						{" "}
						<span className="Education-Bullet">&bull;</span> Member
						of USF Competitive Programming Student Organization
						using Python / C++
					</p>
					<p className="Education-ICPC">
						{" "}
						<span className="Education-Bullet">&bull;</span>{" "}
						Competed on USF International Collegiate Programming
						Team in Regional Contest
					</p>
				</div>
			</div>

			<img
				className="USF-Bull"
				data-tooltip-id="usf-bull"
				src={USFBull}
			/>
			<Tooltip
				id="usf-bull"
				effect="solid"
				place="bottom"
				style={tooltipStype}
				content="USF: Tampa Campus"
			/>
			<img
				className="ICPC-Logo"
				data-tooltip-id="icpc-logo"
				src={ICPCLogo}
			/>
			<Tooltip
				id="icpc-logo"
				effect="solid"
				place="right-end"
				style={tooltipStype}
				content="USF Competitive Programming Group Photo"
			/>
			<img
				className="ICPC-Tag"
				data-tooltip-id="icpc-tag"
				src={ICPCTag}
			/>
			<Tooltip
				id="icpc-tag"
				effect="solid"
				place="top-end"
				style={tooltipStype}
				content="International Collegiate Programming Contest Regional Contest Tag 2024"
			/>
			<img
				className="USF-Logo"
				data-tooltip-id="usf-logo"
				src={USFLogo}
			/>
			<Tooltip
				id="usf-logo"
				effect="solid"
				place="bottom-end"
				style={tooltipStype}
				content="USF: Emblem"
			/>
		</div>
	);
};
