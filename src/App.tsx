import React, { useEffect, useState, useMemo } from "react";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions, Container } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import particlesOptions from "./styles/particleOptions.json";
import classes from "./App.module.less";
import RouteContent from "./components/RouteContent";

function App() {
	const [container, setContainer] = useState<Container>();
	const [theme, setTheme] = useState("home");

	const particlesInit = async (engine: Engine): Promise<void> => {
		loadStarsPreset(engine);
	};
	const particlesLoaded = (container: Container) => {
		console.log(container);
		setContainer(container);
	};

	const particles = useMemo(
		() => (
			<Particles
				init={particlesInit}
				options={particlesOptions as ISourceOptions}
				className={classes.particles}
				loaded={particlesLoaded}
			></Particles>
		),
		[]
	);

	useEffect(() => {
		if (container) {
			container.loadTheme(theme);
		}
	}, [theme, container]);

	return (
		<div className={classes.root}>
			{particles}
			<Header />
			<RouteContent handleChange={setTheme} />
		</div>
	);
}
export default App;
