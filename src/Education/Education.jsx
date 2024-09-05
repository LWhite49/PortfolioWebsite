import "./Education.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Tooltip } from "react-tooltip";

export const Education = () => {
	const { MemoizedAeroBubbles, educationImages } = useContext(AppContext);

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
	// Source images
	const USFBull = educationImages[0];
	const ICPCLogo = educationImages[1];
	const ICPCTag = educationImages[2];
	const USFLogo = educationImages[3];
	const Strawberry = educationImages[4];
	// const { MemoizedAeroBubbles } = useContext(AppContext);
	return (
		<div className="Education">
			<MemoizedAeroBubbles
				background="#006c43"
				node="#d0c695"
				links="#D0FCD0"
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
						<span className="Education-Bullet">&bull;</span>{" "}
						<span className="Education-Bullet-Emph">
							Junior GPA: 3.91
						</span>{" "}
						={">"} Class of 2026
					</p>
					<p className="Education-Major">
						{" "}
						<span className="Education-Bullet">&bull;</span>{" "}
						Computer Science{" "}
						<span className="Education-Bullet-Emph">and</span>{" "}
						Computer Engineering
					</p>
					<p className="Education-Honors">
						{" "}
						<span className="Education-Bullet">&bull;</span>{" "}
						<span className="Education-Bullet-Emph">
							National Merit Scholar
						</span>{" "}
						+ Judy Genshaft Honors Student
					</p>
					<p className="Education-Hackathon">
						{" "}
						<span className="Education-Bullet">&bull;</span>{" "}
						Frequent Webdev Hackathons with{" "}
						<span className="Education-Bullet-Emph">
							USF Google Student Developer Club
						</span>{" "}
					</p>
					<p className="Education-Programming">
						{" "}
						<span className="Education-Bullet">&bull;</span> Member
						of{" "}
						<span className="Education-Bullet-Emph">
							USF Competetive Programming Student Organization
						</span>{" "}
						using Python / C++
					</p>
					<p className="Education-ICPC">
						{" "}
						<span className="Education-Bullet">&bull;</span>{" "}
						Competed with{" "}
						<span className="Education-Bullet-Emph">
							USF International Collegiate Programming Contest
							Team
						</span>{" "}
						in Regionals
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
