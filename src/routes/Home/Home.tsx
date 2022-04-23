import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import classes from "./Home.module.less";
import TextArea from "../../components/TextArea";

const Home = () => {
	const content = (
		<div>
			<h1 style={{ textAlign: "center" }}>Marco Baratta</h1>
			<h2 style={{ textAlign: "center" }}>
				RUFA - MA in Film Arts 2022 - Portfolio
			</h2>

			<p>
				<span className={classes.textHeader}>My inspirations: </span>A list of
				work that has inspired me to become a filmaker.
			</p>
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
	return (
		<div className={classes.root}>
			<div className={classes.textWrapper}>
				<TextArea content={content} />
			</div>
		</div>
	);
};

export default Home;
