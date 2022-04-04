import React, { useState } from "react";
import Preview from "../Preview";
import classes from "./Slide.module.less";
import { useTransition, animated, config } from "react-spring";

const imageUrls = ["planet", "airbaloon", "beach", "gradient", "paint"];
const translationPercentage = "50%";

const Slide = () => {
	const [slideSelected, setSlideSelected] = useState<number>(0);
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
		<div className={classes.root}>
			<div className={classes.mainImage}>
				{imageTransition((style, item) => {
					return (
						item == slideSelected && (
							<animated.img
								style={style}
								src={
									new URL("../../styles/images/fruit.jpg", import.meta.url).href
								}
							></animated.img>
						)
					);
				})}
			</div>
			{imageTransition((style, item) => {
				return (
					<animated.div style={style} className={classes.mainText}>
						<h2>Name of image is {item}</h2>
					</animated.div>
				);
			})}
			<Preview setSlide={setSlideSelected} />
		</div>
	);
};

export default Slide;
