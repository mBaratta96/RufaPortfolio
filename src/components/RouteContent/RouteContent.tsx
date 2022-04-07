import React from "react";
import Home from "../../routes/home";
import Expenses from "../../routes/expenses";
import Invoices from "../../routes/invoices";
import { Routes, Route } from "react-router-dom";
import classes from "./RouteContent.module.less";

interface RouteContentProps {
	handleChange: React.Dispatch<React.SetStateAction<string>>;
}

const RouteContent = (props: RouteContentProps) => {
	return (
		<div className={classes.root}>
			<Routes>
				<Route
					path="/projects"
					element={<Expenses setTheme={props.handleChange} />}
				/>
				<Route
					path="/contact"
					element={<Invoices setTheme={props.handleChange} />}
				/>
				<Route path="/" element={<Home setTheme={props.handleChange} />} />
				<Route
					path="*"
					element={
						<div
							style={{
								display: "flex",
								height: "100%",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<h3>Oops... seems you are in the wrong place</h3>
						</div>
					}
				/>
			</Routes>
		</div>
	);
};

export default RouteContent;
