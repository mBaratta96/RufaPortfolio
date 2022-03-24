import React from "react";
import classes from "./Preview.module.less";
import { useSpring, animated } from "react-spring";

type imageArray = Array<string>;

const imageUrls: imageArray = [
	"planet",
	"airbaloon",
	"beach",
	"gradient",
	"paint",
];

interface previewProps {
	setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const Preview = (props: previewProps): JSX.Element => {
	const { setSlide } = props;
	const previewContent = imageUrls.map(
		(url: string, index: number): JSX.Element => {
			const [{ scale }, set] = useSpring(() => ({
				scale: 1,
				delay: 50,
			}));
			return (
				<div key={index} className={classes.image}>
					<animated.div style={{ scale }} className={classes.imageAnimation}>
						<img
							onMouseEnter={() => set({ scale: 1.1 })}
							onMouseLeave={() => set({ scale: 1 })}
							onClick={() => setSlide(index)}
							src={new URL("./images/planet.jpg", import.meta.url).href}
						></img>
					</animated.div>
				</div>
			);
		}
	);
	return <div className={classes.root}>{previewContent}</div>;
};

export default Preview;
