import "./Project-Display.css";
import PropTypes from "prop-types";
import clockWIP from "../../assets/clockWIP.svg";
import clockFIN from "../../assets/clockFIN.svg";
import { Tooltip } from "react-tooltip";

export const ProjectDisplay = ({
	projectName,
	completedAt,
	bulletPoints,
	bounceStage,
	clockSVG,
	demonstrationLink,
	projectImg,
	projectSkills = [],
}) => {
	// Assign className based on bounceStage state prop
	let bounceClass = "";

	switch (bounceStage) {
		case 0:
			bounceClass = "Invis-Project-Display";
			break;
		case 1:
			bounceClass = "Project-Display";
			break;
		case 2:
			bounceClass = "Invis-Project-Display";
			break;
	}

	const style = {
		transform: "translateY(-30vh)",
	};

	return (
		<div className={bounceClass} style={bounceStage === 2 ? style : {}}>
			<div className="Project-Display-Internal">
				<div className="First-Column">
					<p
						className={"Project-Name"}
						onClick={() => {
							window.open(demonstrationLink, "_blank");
						}}>
						{projectName}
					</p>
					<div className="Feature-Wrapper">
						{bulletPoints.map((bulletPoint, index) => (
							<p key={index} className="Bullet-Point">
								<span className="Bullet">&bull;</span>
								{bulletPoint}
							</p>
						))}
					</div>
					<div className="Clock-Wrapper">
						<img
							className="ClockSvg"
							src={clockSVG === 1 ? clockFIN : clockWIP}
							alt="Clock"
						/>
						<p className="Completed-At">
							Completed:{" "}
							<span className="Completed-At-Emph">
								{completedAt}
							</span>
						</p>
					</div>
				</div>
				<div className="Second-Column">
					<img
						className="Project-Img"
						src={projectImg}
						alt="Project-Img"
						onClick={() => {
							window.open(demonstrationLink, "_blank");
						}}
					/>
					<div className="Project-Skills-Wrapper">
						{projectSkills.map((skill, index) => {
							return (
								<div
									key={index}
									className="Project-Skill"
									data-tooltip-id={`Project-Skill-${index}`}>
									<p key={index} className="Skill-Name">
										{skill.name}
									</p>
									<img
										className="Skill-Img"
										src={skill.svg}
										alt="skill"
									/>
									<Tooltip
										id={`Project-Skill-${index}`}
										place="top"
										effect="solid"
										content={skill.use}
										style={{
											backgroundColor: "#550994",
											fontSize: "12pt",
											borderRadius: "10px",
											width: "220px",
											textShadow: "black 2px 2px 2px",
										}}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

ProjectDisplay.propTypes = {
	projectName: PropTypes.string.isRequired,
	completedAt: PropTypes.string.isRequired,
	bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
	bounceStage: PropTypes.number.isRequired,
	clockSVG: PropTypes.number.isRequired,
	demonstrationLink: PropTypes.string.isRequired,
	projectImg: PropTypes.isRequired,
	projectSkills: PropTypes,
};
