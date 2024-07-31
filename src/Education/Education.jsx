import "./Education.css";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
export const Education = () => {
	const { MemoizedAeroBubbles } = useContext(AppContext);
	return (
		<div className="Education">
			<h1 className="Education-Header">Education</h1>
			<MemoizedAeroBubbles
				background="006c43"
				node="#d0c695"
				links="#ffffff"
			/>
		</div>
	);
};
