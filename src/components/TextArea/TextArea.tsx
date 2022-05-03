import React from "react";
import { animated, SpringValue } from "react-spring";
import classes from "./TextArea.module.scss";

interface TextAreaProps {
	children: JSX.Element | string;
	className?: string;
	springStyle?: {
		opacity: SpringValue<number>;
		transform: SpringValue<string>;
	};
}

const TextArea = (props: TextAreaProps) => {
	const { children: content, className, springStyle } = props;
	const rootClass = `${className ? className + " " : ""}${classes.root}`;
	return (
		<animated.div style={springStyle} className={rootClass}>
			<div className={classes.wrapper}>{content}</div>
			<div className={classes.borderLeft} />
			<div className={classes.borderTop} />
			<div className={classes.borderRight} />
			<div className={classes.borderBottom} />
		</animated.div>
	);
};

export default TextArea;
