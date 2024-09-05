import "./Loading.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";

export const Loading = () => {
	// Source AeroBubbles component
	const { MemoizedAeroBubbles } = useContext(AppContext);
	return (
		<>
			<MemoizedAeroBubbles />
			<div className="loading">
				<div className="loading__container">
					<div className="loading__text">Loading...</div>
				</div>
			</div>
		</>
	);
};
