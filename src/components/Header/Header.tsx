import React, { useState } from "react";
import classes from "./Header.module.less";
import HeaderLink from "./HeaderLink";

const Header = () => {
	const [displayProjects, setDisplayProjects] = useState(false);
	const projects = displayProjects && (
		<div className={classes.projects}>
			<HeaderLink title="Caro Amico" submenu={true} />
			<HeaderLink title="WIP" submenu={true} />
		</div>
	);
	return (
		<div className={classes.root}>
			<HeaderLink title="Home" route="" />
			<HeaderLink title="Inspiration" />
			<div
				onMouseOver={() => setDisplayProjects(true)}
				onMouseLeave={() => setDisplayProjects(false)}
			>
				<h3 style={{ marginLeft: "10px" }}>Projects</h3>
				{projects}
			</div>
		</div>
	);
};

export default Header;
