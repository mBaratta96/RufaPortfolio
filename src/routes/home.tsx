import React, { Fragment } from "react";
import Slide from "../components/Slide";

const images = [...Array(10).keys()].map(
	(i) => new URL(`../styles/images/${i}.webp`, import.meta.url).href
);

const Home = () => {
	return (
		<Fragment>
			<Slide images={images} />
		</Fragment>
	);
};

export default Home;
