import React, { useRef, Fragment } from "react";
import { VideoJsPlayer } from "video.js";
import VideoJS from "../../components/VideoJS";
import caroAmico from "./videos/caro_amico_(teaser).mp4";
import titleImage from "./images/caroAmicoTitle.webp";
import preview from "./images/preview.png";
import Slide from "../../components/Slide";
import classes from "./Projects.module.less";
import contentString from "./content.csv?raw";
import Papa from "papaparse";
import _ from "underscore";

interface shortFilmType {
	index: string;
	title: string;
	description: string;
}

const title = {
	slide: <img src={titleImage}></img>,
	preview: titleImage,
};

const content = _.sortBy(
	Papa.parse(contentString, { header: true, newline: "\n" })
		.data as shortFilmType[],
	["index"]
).map((data, index) => {
	console.log(data);
	return (
		<Fragment key={index}>
			<h2>{data.title}</h2>
			{data.description.split("\\n").map((str, index) => (
				<p key={index}>{str}</p>
			))}
		</Fragment>
	);
});

const ShortFilm = () => {
	console.log(content);
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
				media={[title, ...videos]}
				content={[...content, <h2 key={0}>Caro Amico</h2>]}
				title={
					<Fragment>
						Caro Amico — A short film based on the correspondence between Gustav
						Mahler and Richard Strauss. Full{" "}
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
				subtitle={
					<Fragment>
						Inspired by the friendship of the two composers recorded in{" "}
						<a
							target="_blank"
							rel="noreferrer noopener"
							className={classes.link}
							href="https://www.google.it/books/edition/Carteggio_1888_1911/hP0kuQAACAAJ?hl=it"
						>
							these letters
						</a>
						, I decided to shoot a short film during the first COVID-19
						lockdown. This is a collection of clips from that film.
					</Fragment>
				}
			></Slide>
		</Fragment>
	);
	return <div>Projects</div>;
};

export default ShortFilm;
