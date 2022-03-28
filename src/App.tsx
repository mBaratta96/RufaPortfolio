import React from "react";
import Slide from "./components/Slide";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

function App() {
	const customInit = async (engine: Engine): Promise<void> => {
		await loadStarsPreset(engine);
	};
	const particlesOptions = {
		preset: "stars",
		background: { color: "" },
		particles: {
			move: {
				speed: 10,
				random: false,
				direction: "bottom",
				vibrate: true,
				straight: true,
			},
			life: { duration: { value: 0.1 }, delay: { value: 0 } },
			number: { density: { enable: false }, value: 5, limit: 10 },
		},
	};

	return (
		<div className="App">
			<Particles options={particlesOptions} init={customInit} />
			<Slide />
		</div>
	);
}
export default App;
