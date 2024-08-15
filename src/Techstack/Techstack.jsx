import "./Techstack.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import Apple from "../assets/Apple.gif";
import Bowl from "../assets/Bowl.gif";
export const Techstack = () => {
	const { MemoizedAeroBubbles } = useContext(AppContext);
	return (
		<div className="Techstack">
			<MemoizedAeroBubbles
				background="#FFC2AD"
				node="#000000"
				links="#540552"
			/>
			<div className="Techstack-Header-Wrapper">
				<img className="Apple" src={Apple} />
				<h1 className="Techstack-Header">Techstack</h1>
				<img className="Bowl" src={Bowl} />
			</div>
			<div className="Techstack-Content">
				<div className="Techstack-Segment">
					<p className="Techstack-Segment-Header">Front-end Skills</p>
				</div>
				<div className="Techstack-Segment">
					<p className="Techstack-Segment-Header">Back-end Skills</p>
				</div>
				<div className="Techstack-Segment">
					<p className="Techstack-Segment-Header">Data Skills</p>
				</div>
				<div className="Techstack-Segment">
					<p className="Techstack-Segment-Header">Soft Skills</p>
				</div>
			</div>
		</div>
	);
};
