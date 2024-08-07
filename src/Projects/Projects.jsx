import "./Projects.css";
import Slider from "react-slick";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Banana from "../assets/Banana.gif";
import { ProjectDisplay } from "./Project-Display/Project-Display.jsx";

export const Projects = () => {
	// const { MemoizedAeroBubbles } = useContext(AppContext);

	const slider = useRef(null);
	const sliderSettings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 12000,
		draggable: false,
		pauseOnHover: true,
	};
	return (
		<div className="Projects">
			<div className="Projects-Header-Wrapper">
				<img className="Banana" src={Banana} />

				<h1 className="Projects-Header">Project Hall</h1>
			</div>

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
							"Fullstack Application that generates second-hand outfits based on user preferences by utilizing Mach",
							"",
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
