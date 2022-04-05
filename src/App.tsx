import React from "react";
import Slide from "./components/Slide";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import particlesOptions from "./styles/particleOptions.json";
import classes from "./App.module.less";

const images = [...Array(10).keys()].map(
	(i) => new URL(`./styles/images/${i}.webp`, import.meta.url).href
);

function App() {
	const particlesInit = async (engine: Engine): Promise<void> => {
		loadStarsPreset(engine);
	};
	console.log(images);
	return (
		<div className={classes.root}>
			<Header />
			<Particles options={particlesOptions as ISourceOptions}></Particles>
			<Slide images={images} />
		</div>
	);
}
export default App;
