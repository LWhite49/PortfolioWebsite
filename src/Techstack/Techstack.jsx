import "./Techstack.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Tooltip } from "react-tooltip";
import typescriptStack from "../assets/typescriptStack.svg";
import reactStack from "../assets/reactStack.svg";
import socketioStack from "../assets/socketioStack.svg";
import reactNativeStack from "../assets/reactNativeStack.svg";
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
import mongoStack from "../assets/mongoStack.svg";
import sqlStack from "../assets/sqlStack.svg";
import mongooseStack from "../assets/mongooseStack.svg";
import pipelineStack from "../assets/pipelineStack.svg";
import tllStack from "../assets/ttlStack.svg";
import envStack from "../assets/envStack.svg";
import projectStack from "../assets/projectStack.svg";
import teamStack from "../assets/teamStack.svg";
import documentationStack from "../assets/documentationStack.svg";
import solvingStack from "../assets/solvingStack.svg";
import creativityStack from "../assets/creativityStack.svg";
import detailStack from "../assets/detailStack.svg";

export const Techstack = () => {
	const { MemoizedAeroBubbles, windowWidth, techstackImages } =
		useContext(AppContext);
	const tooltipStyle = {
		backgroundColor: "#FF855C",
		color: "#000000",
		width: "360px",
		fontSize: windowWidth > 2000 ? "11pt" : "12pt",
		borderRadius: "18px",
		border: "2px solid #540552",
		fontWeight: "bold",
		borderColor: "#945809",
		borderWidth: "2px",
		borderStyle: "solid",
	};
	// Source Images
	const Apple = techstackImages[0];
	const Bowl = techstackImages[1];
	return (
		<div className="Techstack">
			<MemoizedAeroBubbles
				background="#FFC2AD"
				node="#000000"
				links="#540552"
			/>
			<div className="Techstack-Header-Wrapper">
				<img className="Apple" src={Apple.src} />
				<h1 className="Techstack-Header">Techstack</h1>
				<img className="Bowl" src={Bowl.src} />
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
							data-tooltip-id="typescript">
							<p className="Techstack-Skill-Name">TypeScript</p>
							<img
								className="Techstack-Skill-Img"
								src={typescriptStack}
								alt="React"
							/>
						</div>
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
							data-tooltip-id="react-native">
							<p className="Techstack-Skill-Name">React Native</p>
							<img
								className="Techstack-Skill-Img"
								src={reactNativeStack}
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
							id="react-native"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Frontend Framework enables the development of mobile applications with React"
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
						<Tooltip
							id="typescript"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Writing higher quality code with static typing and modern JavaScript features"
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
							data-tooltip-id="socketio">
							<p className="Techstack-Skill-Name">Socket.io</p>
							<img
								className="Techstack-Skill-Img"
								src={socketioStack}
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
						<Tooltip
							id="socketio"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Establishing real-time communication between client and server with WebSockets"
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
					<div className="Techstack-Skills-Wrapper">
						<div className="Techstack-Skill" data-tooltip-id="sql">
							<p className="Techstack-Skill-Name">SQL</p>
							<img
								className="Techstack-Skill-Img"
								src={sqlStack}
								alt="SQL"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="mongo">
							<p className="Techstack-Skill-Name">MongoDB</p>
							<img
								className="Techstack-Skill-Img"
								src={mongoStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="mongoose">
							<p className="Techstack-Skill-Name">Mongoose</p>
							<img
								className="Techstack-Skill-Img"
								src={mongooseStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="pipeline">
							<p className="Techstack-Skill-Name">
								Pipeline Aggregation
							</p>
							<img
								className="Techstack-Skill-Img"
								src={pipelineStack}
								alt="React"
							/>
						</div>
						<div className="Techstack-Skill" data-tooltip-id="ttl">
							<p className="Techstack-Skill-Name">TTL Indexing</p>
							<img
								className="Techstack-Skill-Img"
								src={tllStack}
								alt="React"
							/>
						</div>
						<div className="Techstack-Skill" data-tooltip-id="env">
							<p className="Techstack-Skill-Name">ENV Files</p>
							<img
								className="Techstack-Skill-Img"
								src={envStack}
								alt="React"
							/>
						</div>
						<Tooltip
							id="sql"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Language for managing relational databases and performing complex queries"
							style={tooltipStyle}
						/>
						<Tooltip
							id="mongo"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Designing and implementing flexible NoSQL databases for efficient data storage"
							style={tooltipStyle}
						/>
						<Tooltip
							id="mongoose"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Node module that interacts with MongoDB to create schemas and complete data operations"
							style={tooltipStyle}
						/>
						<Tooltip
							id="pipeline"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Data processing pipeline for MongoDB that allows for complex data operations"
							style={tooltipStyle}
						/>
						<Tooltip
							id="ttl"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Special indexing method to keep data fresh via document expiration"
							style={tooltipStyle}
						/>
						<Tooltip
							id="env"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Enviornmental variables for secure and flexible configuration of server-side applications"
							style={tooltipStyle}
						/>
					</div>
				</div>
				<div className="Techstack-Segment">
					<div className="Segment-Text_Wrap">
						<p className="Techstack-Segment-Header">Soft Skills</p>
						<p className="Techstack-Segment-Subtitle">
							Passively moving towards project success with
							essential skills{" "}
						</p>
					</div>
					<div className="Techstack-Skills-Wrapper">
						<div
							className="Techstack-Skill"
							data-tooltip-id="project">
							<p className="Techstack-Skill-Name">
								Project Management
							</p>
							<img
								className="Techstack-Skill-Img"
								src={projectStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="solving">
							<p className="Techstack-Skill-Name">
								Problem Solving
							</p>
							<img
								className="Techstack-Skill-Img"
								src={solvingStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="teamwork">
							<p className="Techstack-Skill-Name">Teamwork</p>
							<img
								className="Techstack-Skill-Img"
								src={teamStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="creativity">
							<p className="Techstack-Skill-Name">Creativity</p>
							<img
								className="Techstack-Skill-Img"
								src={creativityStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="documentation">
							<p className="Techstack-Skill-Name">Note Taking</p>
							<img
								className="Techstack-Skill-Img"
								src={documentationStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill"
							data-tooltip-id="detail">
							<p className="Techstack-Skill-Name">
								Detail Oriented
							</p>
							<img
								className="Techstack-Skill-Img"
								src={detailStack}
								alt="React"
							/>
						</div>
						<Tooltip
							id="project"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Planning, organizing, and executing projects to meet specific goals and success criteria"
							style={tooltipStyle}
						/>
						<Tooltip
							id="solving"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Developing creative solutions to programming problems in innovative ways"
							style={tooltipStyle}
						/>
						<Tooltip
							id="teamwork"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Collaborative development to combine individual strengths across programming"
							style={tooltipStyle}
						/>
						<Tooltip
							id="creativity"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Creative thinking for unique and inspired web design and development"
							style={tooltipStyle}
						/>
						<Tooltip
							id="documentation"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Documenting projects and boiler plate code for continual improvement and reference"
							style={tooltipStyle}
						/>
						<Tooltip
							id="detail"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Detail oriented design and development for high quality and efficient code"
							style={tooltipStyle}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
