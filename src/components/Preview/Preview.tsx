import React from "react";
import "./Preview.less";
import { useSpring, animated } from "react-spring";

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
			const [{ scale }, set] = useSpring(() => ({
				scale: 1,
				delay: 50,
			}));
			return (
				<div key={index} className="Preview-image">
					<animated.div style={{ scale }}>
						<img
							onMouseEnter={() => set({ scale: 1.1 })}
							onMouseLeave={() => set({ scale: 1 })}
							src={new URL("./beach.jpg", import.meta.url).href}
						></img>
					</animated.div>
				</div>
			);
		}
	);
	return <div className="Preview-root">{previewContent}</div>;
};

export default Preview;
