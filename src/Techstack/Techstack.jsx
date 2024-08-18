import "./Techstack.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Tooltip } from "react-tooltip";
import Apple from "../assets/Apple.gif";
import Bowl from "../assets/Bowl.gif";
import reactSVG from "../assets/reactSkill.svg";
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
					<div className="Segment-Text-Wrap">
						<p className="Techstack-Segment-Header">
							Front-end Skills
						</p>
						<p className="Techstack-Segment-Subtitle">
							Designing stylish, modern websites and user
							interfaces
						</p>
					</div>
					<div className="Techstack-Skills-Wrapper">
						<div
							className="Techstack-Skill"
							data-tooltip-id="react">
							<p className="Techstack-Skill-Name">React</p>
							<img
								className="Techstack-Skill-Img"
								src={reactSVG}
								alt="React"
							/>
						</div>
						<Tooltip
							id="react"
							place="top"
							effect="solid"
							content="Frontend Framework that prioritizes modular design with a vast developer ecosystem"
						/>
					</div>
				</div>
				<div className="Techstack-Segment">
					<div className="Segment-Text_Wrap">
						<p className="Techstack-Segment-Header">
							Back-end Skills
						</p>
						<p className="Techstack-Segment-Subtitle">
							Building flexible and efficient server-side systems
							and tools
						</p>
					</div>
					<div className="Techstack-Skills-Wrapper"></div>
				</div>
				<div className="Techstack-Segment">
					<div className="Segment-Text_Wrap">
						<p className="Techstack-Segment-Header">Data Skills</p>
						<p className="Techstack-Segment-Subtitle">
							Organizing data into scalable structures for website
							architecture
						</p>
					</div>
					<div className="Techstack-Skills-Wrapper"></div>
				</div>
				<div className="Techstack-Segment">
					<div className="Segment-Text_Wrap">
						<p className="Techstack-Segment-Header">Soft Skills</p>
						<p className="Techstack-Segment-Subtitle">
							Passively moving towards project success with
							essential skills{" "}
						</p>
					</div>
					<div className="Techstack-Skills-Wrapper"></div>
				</div>
			</div>
		</div>
	);
};
