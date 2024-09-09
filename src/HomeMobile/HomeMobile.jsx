import "./HomeMobile.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";

export const HomeMobile = () => {
	const { homeImages } = useContext(AppContext);

	// Source Images
	const personalImg = homeImages[4];
	return (
		<>
			<img
				className="Personal-Image-Mobile"
				src={personalImg}
				alt="Personal-Image"
			/>
		</>
	);
};
