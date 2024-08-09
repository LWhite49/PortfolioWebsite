import "./Project-Display.css";
import PropTypes from "prop-types";
import clockWIP from "../../assets/clockWIP.svg";
import clockFIN from "../../assets/clockFIN.svg";

export const ProjectDisplay = ({
	projectName,
	completedAt,
	bulletPoints,
	bounceStage,
	clockSVG,
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
					<p className={"Project-Name"}>{projectName}</p>
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
};
