import React, { Fragment, useEffect } from "react";
import Slide from "../components/Slide";

const images = [...Array(10).keys()].map(
	(i) => new URL(`../styles/images/${i}.webp`, import.meta.url).href
);

interface HomeProps {
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Home = (props: HomeProps) => {
	const { setTheme } = props;
	useEffect(() => setTheme("home"));
	return (
		<Fragment>
			<Slide images={images} />
		</Fragment>
	);
};

export default Home;
