import React, { Fragment } from "react";
import Slide from "../../components/Slide";
import filmData from "./content.csv";

const images = [
	"aparajito",
	"barryLyndon",
	"brazil",
	"heavensGate",
	"immortalStory",
	"journeyItaly",
	"sacrifice",
	"sevenSamurai",
	"silverGlobe",
	"womanUnderInfluence",
].map((title) => {
	return {
		slide: new URL(`./images/${title}Slide.webp`, import.meta.url).href,
		preview: new URL(`./images/${title}Preview.webp`, import.meta.url).href,
	};
});

const Inspiration = () => {
	console.log(filmData);
	return (
		<Fragment>
			<Slide images={images}></Slide>
		</Fragment>
	);
};

export default Inspiration;
