import React from "react";
import classes from "./Header.module.less";

const pages = ["Home", "Projects", "Contact"];

const Header = () => {
	return (
		<div className={classes.root}>
			{pages.map((page, index) => (
				<h3 key={index}>{page}</h3>
			))}
		</div>
	);
};

export default Header;
