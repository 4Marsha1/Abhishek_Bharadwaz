import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import { LINKS } from "./SpeedDial";

const Footer = () => {
	return (
		<div className="py-8 md:py-16 gap-4 w-full bg-gray-300 mt-10 md:mt-40 font-satoshi flex flex-col justify-center items-center">
			<div className="flex gap-4">
				<IconButton onClick={() => window.open(LINKS[0])}>
					<GitHubIcon fontSize="large" />
				</IconButton>
				<IconButton onClick={() => window.open(LINKS[1])}>
					<LinkedInIcon fontSize="large" />
				</IconButton>
				<IconButton onClick={() => window.open(LINKS[2])}>
					<InstagramIcon fontSize="large" />
				</IconButton>
				<IconButton onClick={() => window.open(LINKS[3])}>
					<FacebookIcon fontSize="large" />
				</IconButton>
				<IconButton onClick={() => window.open(LINKS[4])}>
					<TwitterIcon fontSize="large" />
				</IconButton>
			</div>
			<span className="text-xs md:text-base font-semibold">
				Copyright © 2023 Abhishek Bharadwaz. All rights reserved.
			</span>
		</div>
	);
};

export default Footer;
