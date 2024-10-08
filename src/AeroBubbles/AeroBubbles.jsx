import "./AeroBubbles.css";
import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import PropTypes from "prop-types";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const AeroBubbles = ({
	background = "#ebf2e4",
	node = "#08A973",
	links = "#EF3D3D",
}) => {
	const [init, setInit] = useState(false);
	const particlesRef = useRef(null);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesInit = (main) => {
		particlesRef.current = main;
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	return init ? (
		init ? (
			<Particles
				className="AeroBubbles"
				id="persistent-particles"
				particlesLoaded={particlesLoaded}
				init={particlesInit}
				options={{
					background: {
						color: {
							value: background,
						},
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 40,
								duration: 0.4,
							},
						},
					},
					particles: {
						id: "persistent-particles",
						color: {
							value: node,
						},
						links: {
							color: links,
							distance: 300,
							enable: true,
							opacity: 0.6,
							width: 3,
						},
						move: {
							direction: "nones",
							angle: 90,
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: true,
							speed: 1,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 1200,
							},
							value: 90,
						},
						opacity: {
							value: 0.8,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 4 },
						},
					},
					detectRetina: true,
				}}
			/>
		) : null
	) : null;
};

AeroBubbles.propTypes = {
	background: PropTypes.string,
	node: PropTypes.string,
	links: PropTypes.string,
};
