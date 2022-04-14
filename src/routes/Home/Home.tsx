import React, { Fragment } from "react";
import Slide from "../../components/Slide";

const images = [...Array(10).keys()].map((i) => {
	return { slide: new URL(`./images/${i}.webp`, import.meta.url).href };
});

const Home = () => {
	return (
		<Fragment>
			<Slide images={images} />
		</Fragment>
	);
};

export default Home;
