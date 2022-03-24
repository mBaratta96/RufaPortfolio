import React, { Fragment, useState } from "react";
import Preview from "../Preview";
import classes from "./Slide.module.less";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { useTransition, animated, config } from "react-spring";

const imageUrls = ["planet", "airbaloon", "beach", "gradient", "paint"];
const translationPercentage = "10%";

const Slide = () => {
	const [slideSelected, setSlideSelected] = useState<number>(0);
	const customInit = async (engine: Engine): Promise<void> => {
		await loadStarsPreset(engine);
	};
	const particlesOptions = { preset: "stars" };
	const imageTransition = useTransition(slideSelected, {
		config: config.gentle,
		from: {
			opacity: 0,
			transform: `translate3d(-${translationPercentage}, 0px, 0px)`,
		},
		enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
		leave: {
			opacity: 0,
			transform: `translate3d(${translationPercentage}, 0px, 0px)`,
		},
		exitBeforeEnter: true,
	});
	return (
		<Fragment>
			<Particles />
			<div className={classes.root}>
				<Preview setSlide={setSlideSelected} />
				<div className={classes.main}>
					{imageTransition((style, item) => {
						return (
							<animated.div className={classes.mainImage} style={style}>
								<img
									src={
										new URL(
											`../../styles/images/${imageUrls[item]}.jpg`,
											import.meta.url
										).href
									}
								/>
							</animated.div>
						);
					})}
					{imageTransition((style, item) => {
						return (
							<animated.div style={style} className={classes.mainText}>
								<h2>Name of image is {item}</h2>
							</animated.div>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Slide;
