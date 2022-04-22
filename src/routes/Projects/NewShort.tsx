import React from "react";
import { FountainParser, IParserOptions } from "screenplay-js";
import testScript from "./fountain/test.fountain?raw";
import classes from "./NewShort.module.less";

const scriptClasses = [
	"scene-heading",
	"dialogue",
	"character",
	"action",
	"parenthetical",
];

const script = (() => {
	const parserOptions = {
		script_html: true,
	} as IParserOptions;
	const script = FountainParser.parse(testScript, parserOptions)
		.script_html as string;
	return scriptClasses.reduce(
		(previous, current) =>
			previous.replaceAll(`"${current}"`, classes[current]),
		script
	);
})();

const NewShort = () => {
	console.log(classes);
	console.log(script);
	return (
		<div
			dangerouslySetInnerHTML={{ __html: script }}
			className={classes.root}
		/>
	);
};

export default NewShort;
