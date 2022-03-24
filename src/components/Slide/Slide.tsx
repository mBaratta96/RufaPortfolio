import React, { useState } from "react";
import Preview from "../Preview";
import classes from "./Slide.module.less";

const Slide = () => {
	const [slideSelected, setSlideSelected] = useState<number>(0);
	console.log(classes);
	return (
		<div className={classes.root}>
			<Preview setSlide={setSlideSelected} />
			<div className={classes.main}>
				<div className={classes.mainImage}>
					<h1>Hello, slide {slideSelected} is selected.</h1>
				</div>
				<div className={classes.mainText}>
					<h2>Text here</h2>
				</div>
			</div>
		</div>
	);
};

export default Slide;
