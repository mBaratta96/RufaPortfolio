import React from "react";
import classes from "./Header.module.less";
import { Link } from "react-router-dom";

const pages = ["Home", "Projects", "Contact"];

const Header = () => {
	return (
		<div className={classes.root}>
			{pages.map((page, index) => (
				<Link to={page !== "Home" ? `/${page}` : "/"} key={index}>
					<h3>{page}</h3>
				</Link>
			))}
		</div>
	);
};

export default Header;
