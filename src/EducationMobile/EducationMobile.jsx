import "./EducationMobile.css";
import { useContext } from "react";
import { AppContext } from "../App.jsx";

export const EducationMobile = () => {
	const { educationImages, MemoizedAeroBubbles } = useContext(AppContext);

	const strawberryImg = educationImages[4];
	const USFBull = educationImages[0];

	return (
		<div className="EducationMobile">
			<MemoizedAeroBubbles
				background="#006c43"
				node="#d0c695"
				links="#D0FCD0"
			/>
			<div className="Education-Hook-Wrap-Mobile">
				<img
					className="Strawberry-Img-Mobile"
					src={strawberryImg.src}
					alt="Strawberry-Img"
				/>
				<h1 className="Education-Hook-Mobile">
					University of South Florida
				</h1>
			</div>
			<img className="Mobile-Bull" src={USFBull.src} alt="USFBull" />
			<div className="Education-Content-Main-Mobile">
				<div className="Education-Bullets-Mobile">
					<p className="Education-GPA-Mobile">
						{" "}
						<span className="Education-Bullet-Mobile">
							&bull;
						</span>{" "}
						<span className="Education-Bullet-Emph-Mobile">
							Junior GPA: 3.91
						</span>{" "}
						={">"} Class of 2026
					</p>
					<p className="Education-Major-Mobile">
						{" "}
						<span className="Education-Bullet-Mobile">
							&bull;
						</span>{" "}
						Computer Science{" "}
						<span className="Education-Bullet-Emph-Mobile">
							and
						</span>{" "}
						Computer Engineering
					</p>
					<p className="Education-Honors-Mobile">
						{" "}
						<span className="Education-Bullet-Mobile">
							&bull;
						</span>{" "}
						<span className="Education-Bullet-Emph-Mobile">
							National Merit Scholar
						</span>{" "}
						+ Judy Genshaft Honors Student
					</p>
					<p className="Education-Hackathon-Mobile">
						{" "}
						<span className="Education-Bullet-Mobile">
							&bull;
						</span>{" "}
						Frequent Webdev Hackathons with{" "}
						<span className="Education-Bullet-Emph-Mobile">
							USF Google Student Developer Club
						</span>{" "}
					</p>
					<p className="Education-ICPC-Mobile">
						{" "}
						<span className="Education-Bullet-Mobile">
							&bull;
						</span>{" "}
						Competed with{" "}
						<span className="Education-Bullet-Emph-Mobile">
							USF International Collegiate Programming Contest
							Team
						</span>{" "}
						in Regionals
					</p>
				</div>
			</div>
		</div>
	);
};
