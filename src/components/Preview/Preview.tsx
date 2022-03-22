import React from "react";
import "./Preview.less";

type imageArray = Array<string>;

const imageUrls: imageArray = [
	"planet",
	"airbaloon",
	"beach",
	"gradient",
	"paint",
];

const Preview = (): JSX.Element => {
	const previewContent = imageUrls.map(
		(url: string, index: number): JSX.Element => {
			return (
				<div key={index}>
					<img src={new URL("./beach.jpg", import.meta.url).href}></img>
				</div>
			);
		}
	);
	return <div className="Preview-root">{previewContent}</div>;
};

export default Preview;
