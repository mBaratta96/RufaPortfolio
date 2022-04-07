import React, { useEffect } from "react";

interface ExpensesProps {
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Expenses = (props: ExpensesProps) => {
	const { setTheme } = props;
	useEffect(() => setTheme("expenses"));
	return (
		<main style={{ padding: "1rem 0" }}>
			<h2>Expenses</h2>
		</main>
	);
};

export default Expenses;
