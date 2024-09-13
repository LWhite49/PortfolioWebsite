import "./TechstackMobile.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";
import { Tooltip } from "react-tooltip";
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
import mongoStack from "../assets/mongoStack.svg";
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

export const TechstackMobile = () => {
	const { techstackImages, MemoizedAeroBubbles } = useContext(AppContext);

	// Source Images
	const Apple = techstackImages[0];
	const Bowl = techstackImages[1];

	return (
		<div className="TechstackMobile">
			<MemoizedAeroBubbles
				background="#FFC2AD"
				node="#000000"
				links="#540552"
			/>
			<img className="Apple" src={Apple.src} alt="Apple" />
			<img className="Bowl" src={Bowl.src} alt="Bowl" />
		</div>
	);
};
