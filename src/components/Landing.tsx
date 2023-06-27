import React, { FunctionComponent, ReactElement, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { IconButton, Tooltip } from "@mui/material";
import lottie from "lottie-web";
import mouseLottie from "../assets/mouse_scroll.json";

const LOCATION = "https://goo.gl/maps/KcMs5PPu1PLqfkji8";

export const Landing: FunctionComponent = (): ReactElement => {
	const [isLoaded, setIsLoaded] = useState(
		document.querySelector("#mouse")?.childNodes.length
	);
	React.useEffect(() => {
		if (!isLoaded && !document.querySelector("#mouse")?.childNodes.length) {
			setIsLoaded(document.querySelector("#mouse")?.childNodes.length);
			lottie.loadAnimation({
				container: document.querySelector("#mouse") as Element,
				animationData: mouseLottie,
				renderer: "svg",
				loop: true,
				autoplay: true,
			});
		}
	}, [isLoaded]);
	return (
		<div
			className="h-[50vh] md:h-[70vh] flex flex-col gap-4 md:gap-8 justify-end items-center font-satoshi"
			id="landing"
		>
			<span className="text-transparent tracking-wide font-bold text-4xl md:text-7xl bg-clip-text bg-gradient-to-r from-slate-500 to-orange">
				Hi, I'm Abhishek.
			</span>
			<div className="flex items-center justify-center ">
				<Tooltip title="View Location" arrow>
					<IconButton onClick={() => window.open(LOCATION)}>
						<PlaceIcon fontSize="medium" color="primary" />
					</IconButton>
				</Tooltip>
				<span className="font-bold text-sm md:text-lg text-slate-500 leading-5 tracking-wide">
					Bengaluru, KA, IN
				</span>
			</div>
			<span className="font-semibold text-xs md:text-xl w-full md:w-[600px] text-center text-slate-500 leading-6 tracking-wide">
				I am a full stack developer with experience in cloud & devOps having a
				strong obsession for clean & interactive UI 🧸
			</span>
			<div id="mouse" className="h-[70px] w-[70px]"></div>
		</div>
	);
};
