import "./Loading.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import loadingSpinner from "../assets/loadingSpinner.svg";
export const Loading = () => {
	// Source AeroBubbles component
	const { windowWidth, MemoizedAeroBubbles } = useContext(AppContext);
	return (
		<>
			<MemoizedAeroBubbles
				background="#e6d6eb"
				node="#e6d6eb"
				links="#e6d6eb"
			/>

			<div className="Loading">
				<div className="Loading-Content">
					<p className="Loading-Text">Just a second!</p>
					<img
						className="Loading-Spinner"
						src={loadingSpinner}
						alt="logo"
					/>
					<p className="Loading-Text">
						Load balancing is important...
					</p>
				</div>
			</div>
		</>
	);
};
