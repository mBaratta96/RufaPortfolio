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
	};

	return (
		<div className="App">
			<Particles options={particlesOptions} init={customInit} />
			<Slide />
		</div>
	);
}
export default App;
