import { Button, IconButton } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LINKS } from "./SpeedDial";
import {
	MailOutlineRounded,
	PhoneAndroidRounded,
	SendRounded,
} from "@mui/icons-material";

const Connect = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-8 font-satoshi px-40">
			<div className="h-[100px]" id="connect"></div>
			<span className="text-gray-700 tracking-widest font-extrabold text-4xl text-center">
				Let's Connect
			</span>
			<div className="border border-[#eeeeee] rounded-lg shadow-lg shadow-slate-400 flex items-stretch">
				<div className="bg-gray-300 w-[400px] flex flex-col items-start gap-2 px-12 py-4">
					<IconButton className="flex gap-2 text-black">
						<MailOutlineRounded fontSize="large" color="inherit" />
						<span className="text-base text-black font-semibold tracking-wider">
							abhishekbharadwaz22@gmail.com
						</span>
					</IconButton>
					<IconButton className="flex gap-2 text-black">
						<PhoneAndroidRounded fontSize="large" color="inherit" />
						<span className="text-base text-black font-semibold tracking-wider">
							+91 76360 12703
						</span>
					</IconButton>
					<IconButton
						onClick={() => window.open(LINKS[0])}
						className="flex gap-2 text-black"
					>
						<GitHubIcon fontSize="large" color="inherit" />
						<span className="text-base text-black font-semibold tracking-wider">
							4Marsha1
						</span>
					</IconButton>
					<IconButton
						className="flex gap-2 text-black"
						onClick={() => window.open(LINKS[1])}
					>
						<LinkedInIcon fontSize="large" />
						<span className="text-base text-black font-semibold tracking-wider">
							Abhishek Bharadwaz
						</span>
					</IconButton>
					<IconButton
						className="flex gap-2 text-black"
						onClick={() => window.open(LINKS[2])}
					>
						<InstagramIcon fontSize="large" />
						<span className="text-base text-black font-semibold tracking-wider">
							bharadwaz_abhishek
						</span>
					</IconButton>
					<IconButton
						className="flex gap-2 text-black"
						onClick={() => window.open(LINKS[3])}
					>
						<FacebookIcon fontSize="large" />
						<span className="text-base text-black font-semibold tracking-wider">
							bharadwaz.abhishek
						</span>
					</IconButton>
					<IconButton
						className="flex gap-2 text-black"
						onClick={() => window.open(LINKS[4])}
					>
						<TwitterIcon fontSize="large" />
						<span className="text-base text-black  font-semibold tracking-wider">
							Abhishek06969
						</span>
					</IconButton>
				</div>
				<div className="bg-white w-[600px] flex flex-col items-start gap-4 px-12 py-8">
					<span className="text-xl font-semibold tracking-widest">Name</span>
					<input
						type="text"
						className="w-full text-lg py-1 px-2 border border-darkGrey rounded-lg shadow-md"
					/>
					<span className="text-xl font-semibold tracking-widest">Email</span>
					<input
						type="email"
						className="w-full text-lg py-1 px-2 border border-darkGrey rounded-lg shadow-md"
					/>
					<span className="text-xl font-semibold tracking-widest">Message</span>
					<textarea
						name=""
						id=""
						className="w-full text-lg py-1 px-2 border border-darkGrey rounded-lg shadow-md"
					/>
					<button
						className="w-full rounded-lg shadow-lg shadow-slate-400 flex justify-center items-center gap-4 bg-gray-400 py-2 text-white
                        transition transform  delay-50 hover:scale-105
                    "
					>
						<span className="text-lg font-bold">Send</span>
						<SendRounded />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Connect;
