import React, { Fragment } from "react";
import Slide from "../../components/Slide";
import filmDataString from "./content.csv?raw";
import Papa from "papaparse";
import _ from "underscore";
import plots from "./plots.json";

interface filmDataType {
	index: string;
	title: string;
	director: string;
	year: string;
}

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

const filmData = _.sortBy(
	Papa.parse(filmDataString, { header: true }).data as Array<filmDataType>,
	["index"]
);

const Inspiration = () => {
	const filmList = filmData.map((data, index) => (
		<Fragment key={index}>
			<h2>{data.title}</h2>
			<h2>{data.director}</h2>
			<h2>{data.year}</h2>
			<p>{plots[index].plot}</p>
		</Fragment>
	));
	return (
		<Fragment>
			<Slide images={images} content={filmList}></Slide>
		</Fragment>
	);
};

export default Inspiration;
