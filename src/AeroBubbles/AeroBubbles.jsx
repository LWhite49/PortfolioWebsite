import "./AeroBubbles.css";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const AeroBubbles = () => {
	const [init, setInit] = useState(false);

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

	const particlesLoaded = (container) => {
		console.log(container);
	};

	return init ? (
		<Particles
			className="AeroBubbles"
			id="tsparticles"
			particlesLoaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: "#ebf2e4",
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
					color: {
						value: "#08A973",
					},
					links: {
						color: "#EF3D3D",
						distance: 220,
						enable: true,
						opacity: 0.6,
						width: 2,
					},
					move: {
						direction: "nones",
						angle: 90,
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: true,
						speed: 2,
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
	) : null;
};
