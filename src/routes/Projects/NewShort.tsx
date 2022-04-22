import React, { Fragment } from "react";
import { FountainParser, IParserOptions } from "screenplay-js";
import testScript from "./fountain/test.fountain?raw";
import classes from "./NewShort.module.less";
import Slide from "../../components/Slide";

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
			classes[current]
				? previous.replaceAll(`"${current}"`, classes[current])
				: previous,
		script
	);
})();

const NewShort = () => {
	return (
		<Slide
			media={[
				{
					slide: (
						<img src={new URL("./images/joined.webp", import.meta.url).href} />
					),
					preview: new URL("./images/joined.webp", import.meta.url).href,
				},
			]}
			content={[
				<div
					className={classes.root}
					dangerouslySetInnerHTML={{ __html: script }}
					key={0}
				/>,
			]}
			title={
				<Fragment>
					Mirrorland - A collection of shot ideas for my new short film. Follow
					these links for full scripts (
					<a
						className={classes.scriptLink}
						href="https://drive.google.com/file/d/1ua87R9Hru6LHG-lzxUMEjm09tn4xXE8A/view?usp=sharing"
					>
						ITA
					</a>
					/
					<a
						className={classes.scriptLink}
						href="https://drive.google.com/file/d/1sHXwyvsPBU8TkDXmcrVFqGqJHewbjSqo/view?usp=sharing"
					>
						ENG
					</a>
					)
				</Fragment>
			}
		/>
	);
};

export default NewShort;
