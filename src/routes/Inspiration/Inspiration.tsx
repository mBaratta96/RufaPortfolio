import React, { Fragment } from "react";
import Slide from "../../components/Slide";

const images = [...Array(10).keys()].map(() => {
	return {
		slide: new URL("./images/immortalStory.webp", import.meta.url).href,
		preview: new URL("./images/immortalStoryPreview.webp", import.meta.url)
			.href,
	};
});

const Inspiration = () => {
	return (
		<Fragment>
			<Slide images={images}></Slide>
		</Fragment>
	);
};

export default Inspiration;
