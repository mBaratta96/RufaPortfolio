import React, { Fragment } from "react";
import classes from "./Preview.module.less";
import { useSpring, animated } from "react-spring";

const imageUrls: Array<string> = ["planet", "airbaloon", "gradient", "paint"];

interface previewProps {
	setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const Preview = (props: previewProps): JSX.Element => {
	const { setSlide } = props;
	const previewContent = [...Array(10).keys()].map(
		(index: number): JSX.Element => {
			const [{ scale }, set] = useSpring(() => ({
				scale: 1,
				delay: 50,
			}));
			return (
				<div
					key={index}
					className={classes.image}
					onMouseEnter={() => set({ scale: 1.1 })}
					onMouseLeave={() => set({ scale: 1 })}
					onClick={() => setSlide(index)}
					style={{ gridColumnStart: 2 + index }}
				>
					<animated.div style={{ scale }} className={classes.imageAnimation}>
						<img
							src={
								new URL("../../styles/images/airbaloon.jpg", import.meta.url)
									.href
							}
						></img>
					</animated.div>
				</div>
			);
		}
	);
	return <Fragment>{previewContent}</Fragment>;
};

export default Preview;
