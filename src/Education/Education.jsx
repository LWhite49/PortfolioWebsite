import "./Education.css";
import USFBull from "../assets/USFBull.jpg";
import ICPCLogo from "../assets/ICPC-Group.jpg";
import ICPCTag from "../assets/ICPC-Tag.jpg";
import USFLogo from "../assets/USF-Logo.png";
import Strawberry from "../assets/Strawberry.gif";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
export const Education = () => {
	const { MemoizedAeroBubbles } = useContext(AppContext);
	return (
		<div className="Education">
			<div className="Education-Header-Wrapper">
				<img className="Strawberry" src={Strawberry} />

				<h1 className="Education-Header">
					University of South Florida
				</h1>
			</div>
			<MemoizedAeroBubbles
				background="006c43"
				node="#d0c695"
				links="#ffffff"
			/>
			<div className="Education-Content-Main">
				<p>
					Computer Science and Computer Engineering at University of
					South Florida: 2022-2026
				</p>
				<p>GPA: 3.91 </p>
			</div>
			<img className="USF-Bull" src={USFBull} />
			<img className="ICPC-Logo" src={ICPCLogo} />
			<img className="ICPC-Tag" src={ICPCTag} />
			<img className="USF-Logo" src={USFLogo} />
		</div>
	);
};
