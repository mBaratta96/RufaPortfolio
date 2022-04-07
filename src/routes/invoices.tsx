import React, { useEffect } from "react";

interface InvoicesProps {
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Invoices = (props: InvoicesProps) => {
	const { setTheme } = props;
	useEffect(() => setTheme("invoices"));
	return (
		<main style={{ padding: "1rem 0" }}>
			<h2>Invoices</h2>
		</main>
	);
};

export default Invoices;
