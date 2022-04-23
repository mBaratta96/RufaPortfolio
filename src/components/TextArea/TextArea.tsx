import React, { Fragment } from "react";
import { animated, SpringValue } from "react-spring";
import classes from "./TextArea.module.less";

interface TextAreaProps {
	content: JSX.Element | string;
	className?: string;
	springStyle?: {
		opacity: SpringValue<number>;
		transform: SpringValue<string>;
	};
}

const TextArea = (props: TextAreaProps) => {
	const { content, className, springStyle } = props;
	const children = (
		<Fragment>
			<div className={classes.wrapper}>{content}</div>
			<div className={classes.borderLeft} />
			<div className={classes.borderTop} />
			<div className={classes.borderRight} />
			<div className={classes.borderBottom} />
		</Fragment>
	);
	const rootClass = `${className ? className + " " : ""}${classes.root}`;
	return (
		<animated.div style={springStyle} className={rootClass}>
			{children}
		</animated.div>
	);
};

export default TextArea;
