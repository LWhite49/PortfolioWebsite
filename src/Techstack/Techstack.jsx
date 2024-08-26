import "./Techstack.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Tooltip } from "react-tooltip";
import Apple from "../assets/Apple.gif";
import Bowl from "../assets/Bowl.gif";
import reactStack from "../assets/reactStack.svg";
import tailwindStack from "../assets/tailwindStack.svg";
import UXStack from "../assets/UXStack.svg";
import contentLayoutStack from "../assets/contentLayoutStack.svg";
import feedManagementStack from "../assets/feedManagementStack.svg";
import responsiveStack from "../assets/responsiveStack.svg";
import nodeStack from "../assets/nodeStack.svg";
import scraperStack from "../assets/scraperStack.svg";
import APIStack from "../assets/APIStack.svg";
import pythonStack from "../assets/pythonStack.svg";
import cppStack from "../assets/cppStack.svg";
import cookiesStack from "../assets/cookiesStack.svg";
import loginStack from "../assets/loginStack.svg";

export const Techstack = () => {
	const { MemoizedAeroBubbles } = useContext(AppContext);
	const tooltipStyle = {
		backgroundColor: "#FF855C",
		color: "#000000",
		width: "320px",
		fontSize: "11pt",
		borderRadius: "18px",
		border: "2px solid #540552",
		fontWeight: "bold",
		borderColor: "#945809",
		borderWidth: "2px",
		borderStyle: "solid",
	};
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
								src={reactStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="tailwind">
							<p className="Techstack-Skill-Name">Tailwind</p>
							<img
								className="Techstack-Skill-Img"
								src={tailwindStack}
								alt="Tailwind"
							/>
						</div>
						<div className="Techstack-Skill" data-tooltip-id="ux">
							<p className="Techstack-Skill-Name">UX Design</p>
							<img
								className="Techstack-Skill-Img-Small"
								src={UXStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="responsive">
							<p className="Techstack-Skill-Name">
								Responsive Design
							</p>
							<img
								className="Techstack-Skill-Img-Small"
								src={responsiveStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="content">
							<p className="Techstack-Skill-Name">
								Content Layout
							</p>
							<img
								className="Techstack-Skill-Img"
								src={contentLayoutStack}
								alt="React"
							/>
						</div>

						<div className="Techstack-Skill" data-tooltip-id="feed">
							<p className="Techstack-Skill-Name">
								Feed Management
							</p>
							<img
								className="Techstack-Skill-Img-Small"
								src={feedManagementStack}
								alt="React"
							/>
						</div>
						<Tooltip
							id="react"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Frontend Framework that prioritizes modular design with a vast developer ecosystem"
							style={tooltipStyle}
						/>
						<Tooltip
							id="tailwind"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="CSS Framework that allows for rapid development with predefined utility classes"
							style={tooltipStyle}
						/>
						<Tooltip
							id="ux"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Design process that ensures a seamless and satisfying experience for users"
							style={tooltipStyle}
						/>
						<Tooltip
							id="content"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Displaying web content in a visually appealing and organized manner"
							style={tooltipStyle}
						/>
						<Tooltip
							id="feed"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Design pattern for managing and displaying dynamic content from a server"
							style={tooltipStyle}
						/>
						<Tooltip
							id="responsive"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Utilizing CSS media queries to ensure a consistent user experience across devices"
							style={tooltipStyle}
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
					<div className="Techstack-Skills-Wrapper">
						<div className="Techstack-Skill" data-tooltip-id="node">
							<p className="Techstack-Skill-Name">Node.js</p>
							<img
								className="Techstack-Skill-Img"
								src={nodeStack}
								alt="React"
							/>
						</div>
						<div className="Techstack-Skill" data-tooltip-id="api">
							<p className="Techstack-Skill-Name">Restful APIs</p>
							<img
								className="Techstack-Skill-Img"
								src={APIStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="python">
							<p className="Techstack-Skill-Name">Python</p>
							<img
								className="Techstack-Skill-Img"
								src={pythonStack}
								alt="React"
							/>
						</div>
						<div className="Techstack-Skill" data-tooltip-id="cpp">
							<p className="Techstack-Skill-Name">C++</p>
							<img
								className="Techstack-Skill-Img"
								src={cppStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="scraping">
							<p className="Techstack-Skill-Name">Web Scraping</p>
							<img
								className="Techstack-Skill-Img"
								src={scraperStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="login">
							<p className="Techstack-Skill-Name">
								User Security
							</p>
							<img
								className="Techstack-Skill-Img"
								src={loginStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="sessions">
							<p className="Techstack-Skill-Name">
								User Sessions
							</p>
							<img
								className="Techstack-Skill-Img"
								src={cookiesStack}
								alt="React"
							/>
						</div>
						<Tooltip
							id="node"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="JavaScript runtime environment that allows for the execution of server-side code"
							style={tooltipStyle}
						/>
						<Tooltip
							id="api"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Creating scalable and efficient server-side applications with Express.js"
							style={tooltipStyle}
						/>
						<Tooltip
							id="python"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Incorperation of Python processes and libraries with child process modules"
							style={tooltipStyle}
						/>
						<Tooltip
							id="cpp"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Implementing data structures and algorithms in C++ for efficient operations"
							style={tooltipStyle}
						/>
						<Tooltip
							id="scraping"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Extracting data from websites and storing it in a structured format with Puppeteer Module"
							style={tooltipStyle}
						/>
						<Tooltip
							id="login"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Implementing secure user authentication and authorization with Bcrypt Module"
							style={tooltipStyle}
						/>
						<Tooltip
							id="sessions"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Design pattern for differentiating concurrent users with express sessions"
							style={tooltipStyle}
						/>
					</div>
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
