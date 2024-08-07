import "./Project-Display.css";
import PropTypes from "prop-types";

export const ProjectDisplay = ({ projectName, completedAt, bulletPoints }) => {
	return (
		<div className="Project-Display">
			<div className="First-Column">
				<p className="Project-Name">{projectName}</p>
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
	);
};
ProjectDisplay.propTypes = {
	projectName: PropTypes.string.isRequired,
	completedAt: PropTypes.string.isRequired,
	bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
};
