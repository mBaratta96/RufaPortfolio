import React, { useState } from "react";
import Preview from "../Preview";
import classes from "./Slide.module.less";

const imageUrls = ["planet", "airbaloon", "beach", "gradient", "paint"];

const Slide = () => {
	const [slideSelected, setSlideSelected] = useState<number>(0);
	console.log(classes);
	return (
		<div className={classes.root}>
			<Preview setSlide={setSlideSelected} />
			<div className={classes.main}>
				<div className={classes.mainImage}>
					<img
						src={
							new URL(
								`../../styles/images/${imageUrls[slideSelected]}.jpg`,
								import.meta.url
							).href
						}
					/>
				</div>
				<div className={classes.mainText}>
					<h2>Text here</h2>
				</div>
			</div>
		</div>
	);
};

export default Slide;
