import React, { useState } from "react";
import classes from "./Header.module.less";
import { Link } from "react-router-dom";

const Header = () => {
	const [displayProjects, setDisplayProjects] = useState(false);
	const projects = displayProjects && (
		<div className={classes.projects}>
			<Link to="/caroAmico">
				<h4>Caro Amico</h4>
			</Link>
			<Link to="wip">
				<h4>WIP</h4>
			</Link>
		</div>
	);
	return (
		<div className={classes.root}>
			<Link to="/">
				<h3>Home</h3>
			</Link>
			<Link to="/inspiration">
				<h3>Inspiration</h3>
			</Link>
			<div
				onMouseOver={() => setDisplayProjects(true)}
				onMouseLeave={() => setDisplayProjects(false)}
			>
				<h3>Projects</h3>
				{projects}
			</div>
		</div>
	);
};

export default Header;
