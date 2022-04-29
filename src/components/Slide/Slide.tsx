import React, { useState, useEffect } from "react";
import Preview from "../Preview";
import classes from "./Slide.module.less";
import { useTransition, animated, config } from "react-spring";
import TextArea from "../TextArea";

const translationPercentage = "50%";

interface SlideProps {
	media: Array<{ slide: JSX.Element; preview: string }>;
	content: Array<JSX.Element>;
	title?: string | JSX.Element;
	subtitle?: string | JSX.Element;
}

const Slide = (props: SlideProps) => {
	const { media, content, title, subtitle } = props;
	const [slideSelected, setSlideSelected] = useState<number>(0);
	const imageTransition = useTransition(slideSelected, {
		config: config.gentle,
		from: {
			opacity: 0,
			transform: `translate3d(-${translationPercentage}, 0px, 0px)`,
		},
		enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
		leave: {
			opacity: 0,
			transform: `translate3d(${translationPercentage}, 0px, 0px)`,
		},
		exitBeforeEnter: false,
	});
	const handleArrowPress = (e: KeyboardEvent) => {
		if (e.code === "ArrowLeft" && slideSelected > 0) {
			setSlideSelected(slideSelected - 1);
		}
		if (e.code === "ArrowRight" && slideSelected < 9) {
			setSlideSelected(slideSelected + 1);
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", handleArrowPress);
		return () => {
			window.removeEventListener("keydown", handleArrowPress);
		};
	});

	return (
		<div className={classes.root}>
			<div className={classes.mainTitle}>
				<h2>{title ?? "Title goes here"}</h2>
				<p>{subtitle}</p>
			</div>
			{imageTransition((style, item) => {
				return (
					item == slideSelected && (
						<animated.div className={classes.mainImage} style={style}>
							{media[slideSelected].slide}
						</animated.div>
					)
				);
			})}
			{imageTransition((style, item) => {
				return (
					item == slideSelected && (
						<TextArea springStyle={style} className={classes.mainText}>
							{content[slideSelected]}
						</TextArea>
					)
				);
			})}
			<Preview setSlide={setSlideSelected}>
				{media.map((image) => image.preview)}
			</Preview>
		</div>
	);
};

export default Slide;
