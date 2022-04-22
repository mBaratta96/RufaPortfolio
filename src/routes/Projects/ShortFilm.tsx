import React, { useRef, Fragment } from "react";
import { VideoJsPlayer } from "video.js";
import VideoJS from "../../components/VideoJS";
import caroAmico from "./videos/caro_amico_(teaser).mp4";
import preview from "./images/preview.png";
import Slide from "../../components/Slide";

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
			fluid: true,
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
			<Slide images={videos}></Slide>
		</Fragment>
	);
	return <div>Projects</div>;
};

export default ShortFilm;
