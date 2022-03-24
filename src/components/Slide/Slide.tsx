import React, { useState } from "react";
import Preview from "../Preview";
import classes from "./Slide.module.less";

import { useTransition, animated, config } from "react-spring";

const imageUrls = ["planet", "airbaloon", "beach", "gradient", "paint"];

const Slide = () => {
	const [slideSelected, setSlideSelected] = useState<number>(0);
	const imageTransition = useTransition(slideSelected, {
		config: config.gentle,
		from: { opacity: 0, transform: "translate3d(-20%, 0px, 0px)" },
		enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
		leave: {
			opacity: 0,
			transform: "translate3d(20%, 0px, 0px)",
			gridColumnEnd: 5,
			gridColumnStart: 3,
		},
		exitBeforeEnter: true,
	});
	console.log(classes);
	return (
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
				<div className={classes.mainText}>
					<h2>Text here</h2>
				</div>
			</div>
		</div>
	);
};

export default Slide;
