import "./TechstackMobile.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Tooltip } from "react-tooltip";
import reactStack from "../assets/reactStack.svg";

import UXStack from "../assets/UXStack.svg";
import reactNativeStack from "../assets/reactNativeStack.svg";

import responsiveStack from "../assets/responsiveStack.svg";
import nodeStack from "../assets/nodeStack.svg";
import scraperStack from "../assets/scraperStack.svg";
import APIStack from "../assets/APIStack.svg";

import cookiesStack from "../assets/cookiesStack.svg";

import sqlStack from "../assets/sqlStack.svg";
import mongoStack from "../assets/mongoStack.svg";
import mongooseStack from "../assets/mongooseStack.svg";
import pipelineStack from "../assets/pipelineStack.svg";

export const TechstackMobile = () => {
	const { techstackImages, MemoizedAeroBubbles } = useContext(AppContext);

	// Source Images
	const Apple = techstackImages[0];
	const Bowl = techstackImages[1];

	const tooltipStyle = {
		backgroundColor: "#FF855C",
		color: "#000000",
		width: "100px",
		fontSize: "8pt",
		borderRadius: "18px",
		border: "2px solid #540552",
		fontWeight: "bold",
		lineHeight: "12px",
		borderColor: "#945809",
		borderWidth: "2px",
		borderStyle: "solid",
	};
	return (
		<div className="TechstackMobile">
			<MemoizedAeroBubbles
				background="#FFC2AD"
				node="#000000"
				links="#540552"
			/>
			<div className="Techstack-Header-Wrapper-Mobile">
				<img className="Apple-Mobile" src={Apple.src} />
				<h1 className="Techstack-Header-Mobile">Techstack</h1>
				<img className="Bowl-Mobile" src={Bowl.src} />
			</div>
			<p className="Techstack-Subtitle-Mobile">
				Stack simplified for mobile display
			</p>
			<div className="Techstack-Content-Mobile">
				<div className="Techstack-Segment-Mobile">
					<div className="Segment-Text-Wrap-Mobile">
						<p className="Techstack-Segment-Header-Mobile">
							Front-end Skills
						</p>
						<p className="Techstack-Segment-Subtitle-Mobile">
							Designing stylish, modern websites and user
							interfaces
						</p>
					</div>
					<div className="Techstack-Skills-Wrapper-Mobile">
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="react">
							<p className="Techstack-Skill-Name-Mobile">React</p>
							<img
								className="Techstack-Skill-Img-Mobile"
								src={reactStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="react-native">
							<p className="Techstack-Skill-Name-Mobile">
								React Native
							</p>
							<img
								className="Techstack-Skill-Img-Mobile"
								src={reactNativeStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="ux">
							<p className="Techstack-Skill-Name-Mobile">
								UX Design
							</p>
							<img
								className="Techstack-Skill-Img-Small-Mobile"
								src={UXStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="responsive">
							<p className="Techstack-Skill-Name-Mobile">
								Responsive Design
							</p>
							<img
								className="Techstack-Skill-Img-Small-Mobile"
								src={responsiveStack}
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
							id="ux"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Design process that ensures a seamless and satisfying experience for users"
							style={tooltipStyle}
						/>
						<Tooltip
							id="react-native"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Frontend Framework that enables the development of mobile applications with React"
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
				<div className="Techstack-Segment-Mobile">
					<div className="Segment-Text_Wrap-Mobile">
						<p className="Techstack-Segment-Header-Mobile">
							Back-end Skills
						</p>
						<p className="Techstack-Segment-Subtitle-Mobile">
							Building flexible and efficient server-side systems
						</p>
					</div>
					<div className="Techstack-Skills-Wrapper-Mobile">
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="node">
							<p className="Techstack-Skill-Name-Mobile">
								Node.js
							</p>
							<img
								className="Techstack-Skill-Img-Mobile"
								src={nodeStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="api">
							<p className="Techstack-Skill-Name-Mobile">
								Restful APIs
							</p>
							<img
								className="Techstack-Skill-Img-Mobile"
								src={APIStack}
								alt="React"
							/>
						</div>

						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="scraping">
							<p className="Techstack-Skill-Name-Mobile">
								Web Scraping
							</p>
							<img
								className="Techstack-Skill-Img-Mobile"
								src={scraperStack}
								alt="React"
							/>
						</div>

						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="sessions">
							<p className="Techstack-Skill-Name-Mobile">
								User Sessions
							</p>
							<img
								className="Techstack-Skill-Img-Mobile"
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
							id="scraping"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Extracting data from websites and storing it in a structured format with Puppeteer Module"
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
				<div className="Techstack-Segment-Mobile">
					<div className="Segment-Text_Wrap-Mobile">
						<p className="Techstack-Segment-Header-Mobile">
							Data Skills
						</p>
						<p className="Techstack-Segment-Subtitle-Mobile">
							Creating scalable databases for web applications
						</p>
					</div>
					<div className="Techstack-Skills-Wrapper-Mobile">
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="sql">
							<p className="Techstack-Skill-Name-Mobile">SQL</p>
							<img
								className="Techstack-Skill-Img-Mobile"
								src={sqlStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="mongo">
							<p className="Techstack-Skill-Name-Mobile">
								MongoDB
							</p>
							<img
								className="Techstack-Skill-Img-Mobile"
								src={mongoStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="mongoose">
							<p className="Techstack-Skill-Name-Mobile">
								Mongoose
							</p>
							<img
								className="Techstack-Skill-Img-Mobile"
								src={mongooseStack}
								alt="React"
							/>
						</div>
						<div
							className="Techstack-Skill-Mobile"
							data-tooltip-id="pipeline">
							<p className="Techstack-Skill-Name-Mobile">
								Pipeline Aggregation
							</p>
							<img
								className="Techstack-Skill-Img-Mobile"
								src={pipelineStack}
								alt="React"
							/>
						</div>

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
							id="sql"
							place="top"
							className="Techstack-Skill-Tooltip"
							effect="solid"
							content="Language for managing relational databases and performing complex queries"
							style={tooltipStyle}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
