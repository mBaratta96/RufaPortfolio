import React, { Fragment } from "react";
import { FountainParser, IParserOptions } from "screenplay-js";
import synopsys from "./fountain/synopsys.fountain?raw";
import scene1Script from "./fountain/scene1.fountain?raw";
import scene2Script from "./fountain/scene2.fountain?raw";
import classes from "./Projects.module.less";
import Slide from "../../components/Slide";

const scriptClasses = [
	"scene-heading",
	"dialogue",
	"character",
	"action",
	"parenthetical",
];

const parseScript = (scriptString: string) => {
	const script = FountainParser.parse(scriptString, {
		script_html: true,
	} as IParserOptions).script_html as string;
	return scriptClasses.reduce(
		(previous, current) =>
			classes[current]
				? previous.replaceAll(`"${current}"`, classes[current])
				: previous,
		script
	);
};

const content = [synopsys, scene1Script, scene2Script].map(
	(scriptString, index) => {
		const script = parseScript(scriptString);
		return (
			<div
				key={index}
				className={classes.root}
				dangerouslySetInnerHTML={{ __html: script }}
			></div>
		);
	}
);

const media = ["synopsys", "scene1", "scene2"].map((item) => {
	return {
		slide: <img src={new URL(`./images/${item}.webp`, import.meta.url).href} />,
		preview: new URL(`./images/${item}.webp`, import.meta.url).href,
	};
});

const NewShort = () => {
	return (
		<Slide
			media={media}
			content={content}
			title={
				<Fragment>
					Mirrorland - A collection of shot ideas for my new short film. Follow
					these links for the complete scripts (
					<a
						className={classes.link}
						target="_blank"
						rel="noreferrer noopener"
						href="https://drive.google.com/file/d/1ua87R9Hru6LHG-lzxUMEjm09tn4xXE8A/view?usp=sharing"
					>
						ITA
					</a>
					/
					<a
						className={classes.link}
						target="_blank"
						rel="noreferrer noopener"
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
