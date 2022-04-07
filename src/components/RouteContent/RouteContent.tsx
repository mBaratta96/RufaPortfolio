import React, { Fragment } from "react";
import Home from "../../routes/home";
import Expenses from "../../routes/expenses";
import Invoices from "../../routes/invoices";
import { Routes, Route } from "react-router-dom";

const RouteContent = () => {
	return (
		<Fragment>
			<Routes>
				<Route path="/projects" element={<Expenses />} />
				<Route path="/contact" element={<Invoices />} />
				<Route path="/" element={<Home />} />
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
		</Fragment>
	);
};

export default RouteContent;
