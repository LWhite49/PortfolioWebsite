import "./Project-Display.css";
import PropTypes from "prop-types";

export const ProjectDisplay = ({
	projectName,
	completedAt,
	bulletPoints,
	bounceStage,
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
			bounceClass = "Bounce-Out-Up";
			break;
	}

	return (
		<div className={bounceClass}>
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
					<p className="Completed-At">Completed: {completedAt}</p>
				</div>
			</div>
		</div>
	);
};
ProjectDisplay.propTypes = {
	projectName: PropTypes.string.isRequired,
	completedAt: PropTypes.string.isRequired,
	bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
	bounceStage: PropTypes.string.isRequired,
};
