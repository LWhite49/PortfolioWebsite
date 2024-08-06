import "./Project-Display.css";
import PropTypes from "prop-types";

export const ProjectDisplay = ({ projectName, completedAt, bulletPoints }) => {
	return (
		<div className="Project-Display">
			<div className="First-Column">
				<p className="Project-Name">{projectName}</p>
				{bulletPoints.map((bulletPoint, index) => (
					<p key={index} className="Bullet-Point">
						&bull;
						{bulletPoint}
					</p>
				))}
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
