import React, { useRef, Fragment } from "react";
import { VideoJsPlayer } from "video.js";
import VideoJS from "../../components/VideoJS";
import caroAmico from "./videos/caro_amico_(teaser).mp4";
import preview from "./images/preview.png";
import Slide from "../../components/Slide";
import classes from "./Projects.module.less";

const ShortFilm = () => {
	const playerRef = useRef<null | VideoJsPlayer>(null);

	const handlePlayerReady = (player: VideoJsPlayer) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on("waiting", () => {
			console.log("player is waiting");
		});

		player.on("dispose", () => {
			console.log("player will dispose");
		});
	};

	const videos = [caroAmico].map((path) => {
		const videoJsOptions = {
			controls: true,
			responsive: true,
			fill: true,
			sources: [
				{
					src: path,
					type: "video/mp4",
				},
			],
		};
		return {
			slide: <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />,
			preview: preview,
		};
	});
	return (
		<Fragment>
			<Slide
				media={videos}
				content={[<h2 key={0}>Caro Amico</h2>]}
				title={
					<Fragment>
						Some clips from my short film Caro Amico, inspired by the
						correspondence between Gustav Mahler and Richard Strauss. Full movie{" "}
						<a
							target="_blank"
							rel="noreferrer noopener"
							className={classes.link}
							href="https://vimeo.com/401617585"
						>
							here
						</a>
						.
					</Fragment>
				}
			></Slide>
		</Fragment>
	);
	return <div>Projects</div>;
};

export default ShortFilm;
