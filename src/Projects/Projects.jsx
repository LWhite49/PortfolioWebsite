import "./Projects.css";
import Slider from "react-slick";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useRef } from "react";
import { AppContext } from "../App.jsx";
import Banana from "../assets/Banana.gif";
import { ProjectDisplay } from "./Project-Display/Project-Display.jsx";

export const Projects = () => {
	const { MemoizedAeroBubbles } = useContext(AppContext);

	const slider = useRef(null);
	const sliderSettings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		draggable: false,
	};
	return (
		<div className="Projects">
			<div className="Projects-Header-Wrapper">
				<img className="Banana" src={Banana} />

				<h1 className="Projects-Header">Project Hall</h1>
			</div>
			<MemoizedAeroBubbles
				background="#B47EAB"
				node="#000000"
				links="#000000"
			/>
			<div className="Slider-Wrap">
				<button
					className="Slider-Prev"
					onClick={() => slider?.current?.slickPrev()}>
					<img className="Left-Arrow" src={leftArrow} />
				</button>
				<Slider ref={slider} className="Slider" {...sliderSettings}>
					<ProjectDisplay
						projectName="Outfit Generator"
						completedAt="Ongoing"
						bulletPoints={[
							"Complex Database Management",
							"Responsive Design with React",
						]}
					/>
					<ProjectDisplay
						projectName="Personal Portfolio"
						completedAt="August 2024"
						bulletPoints={[
							"React Router for Navigation",
							"Responsive Design with React",
						]}
					/>
					<ProjectDisplay
						projectName="Album Chart Server"
						completedAt="January 2024"
						bulletPoints={[
							"Express.js for Server",
							"User Authentications with Node Sessions",
						]}
					/>
					<ProjectDisplay
						projectName="Custom News Client"
						completedAt="November 2023"
						bulletPoints={[
							"API Mangament with Axios",
							"Local Storage for User Preferences",
						]}
					/>
					<ProjectDisplay
						projectName="Music Benchmark"
						completedAt="September 2023"
						bulletPoints={[
							"API Mangament with Axios",
							"Local Storage for User Preferences",
						]}
					/>
				</Slider>
				<button
					className="Slider-Next"
					onClick={() => slider?.current?.slickNext()}>
					<img className="Right-Arrow" src={rightArrow} />
				</button>
			</div>
		</div>
	);
};
