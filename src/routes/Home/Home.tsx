import React, { Fragment } from "react";
import Slide from "../../components/Slide";
import lorem from "./lorem.txt?raw";

const images = [...Array(10).keys()].map((i) => {
	return {
		slide: <img src={new URL(`./images/${i}.webp`, import.meta.url).href} />,
		preview: new URL(`./images/${i}.webp`, import.meta.url).href,
	};
});

const content = [...Array(10).keys()].map(() => lorem);

const Home = () => {
	return (
		<Fragment>
			<Slide
				content={content.map((item, index) => (
					<p key={index}>{item}</p>
				))}
				images={images}
			/>
		</Fragment>
	);
};

export default Home;
