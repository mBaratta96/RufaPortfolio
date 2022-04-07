import React from "react";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import particlesOptions from "./styles/particleOptions.json";
import classes from "./App.module.less";
import { Outlet } from "react-router-dom";

function App() {
	const particlesInit = async (engine: Engine): Promise<void> => {
		loadStarsPreset(engine);
	};

	return (
		<div className={classes.root}>
			<Header />
			<Particles
				init={particlesInit}
				options={particlesOptions as ISourceOptions}
			></Particles>
			<Outlet />
		</div>
	);
}
export default App;
