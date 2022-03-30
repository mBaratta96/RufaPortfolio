import React from "react";
import Slide from "./components/Slide";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import particlesOptions from "./styles/particleOptions.json";
import classes from "./App.module.less";

function App() {
	const particlesInit = async (engine: Engine): Promise<void> => {
		loadStarsPreset(engine);
		loadFireworksPreset(engine);
	};
	return (
		<div className="App">
			<Particles
				options={particlesOptions as ISourceOptions}
				init={particlesInit}
				className={classes.background}
			/>
			<Slide />
		</div>
	);
}
export default App;
