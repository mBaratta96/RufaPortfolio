import React, { Fragment } from "react";
// import Slide from "../../components/Slide";
// import lorem from "./lorem.txt?raw";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import classes from "./Home.module.less";
/*const images = [...Array(10).keys()].map((i) => {
	return {
		slide: <img src={new URL(`./images/${i}.webp`, import.meta.url).href} />,
		preview: new URL(`./images/${i}.webp`, import.meta.url).href,
	};
});

const content = [...Array(10).keys()].map(() => lorem);*/

const Home = () => {
	return (
		<div className={classes.root}>
			<div className={classes.contact}>
				<div className={classes.social}>
					<a href="https://github.com/mBaratta96">
						<FiGithub size="2em" />
					</a>
					<a href="https://www.linkedin.com/in/mbaratta96/">
						<FiLinkedin size="2em" />
					</a>
					<a href="https://www.instagram.com/marco_baratta_/">
						<FiInstagram size="2em" />
					</a>
				</div>
				<p>marcobaratta96@gmail.com</p>
			</div>
		</div>
	);
};

export default Home;
