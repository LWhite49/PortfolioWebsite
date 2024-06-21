import "./Home.css";
import LWImg from "../assets/LWImg.jpg";

export const Home = () => {
	return (
		<div className="Home">
			<h1 className="Home-Intro-Text">Hello!</h1>
			<img className="Personal-Image" src={LWImg} alt="LWImg" />
		</div>
	);
};
