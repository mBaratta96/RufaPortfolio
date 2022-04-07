import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Home from "./routes/home";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
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
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
