import { ForwardToInboxRounded } from "@mui/icons-material";
import { Avatar, Box, Grow, Slide, Tooltip } from "@mui/material";
import React, { FunctionComponent, ReactElement, useState } from "react";
import avatarSvg from "../assets/avataaars.svg";

export const Navbar: FunctionComponent = (): ReactElement => {
	const [tab, setTab] = useState(0);

	return (
		<div className="fixed top-0 left-0 flex justify-around items-center w-screen mt-8 z-20">
			<Box className="w-16 h-16 bg-white flex justify-center items-center rounded-full shadow-slate-400  shadow-xl">
				<Tooltip
					TransitionComponent={Slide}
					TransitionProps={{ timeout: 500 }}
					title="Namaste"
					arrow
				>
					<Avatar
						src={avatarSvg}
						variant="circular"
						sx={{
							width: "64px",
							height: "64px",
							cursor: "pointer",
						}}
					/>
				</Tooltip>
			</Box>
			<Box className="bg-lightGrey rounded-full px-2 py-2 flex items-center gap-6 shadow-xl shadow-slate-400 border border-[#eeeeee]">
				<a
					href="#landing"
					onClick={() => setTab(0)}
					className={`py-2 px-4 ${
						tab === 0
							? "bg-white shadow-sm shadow-slate-200 border-[#eeeeee] border text-gray-800"
							: "text-gray-500"
					} text-lg rounded-full font-satoshi font-semibold cursor-pointer`}
				>
					Home
				</a>
				<a
					href="#experiences"
					onClick={() => setTab(1)}
					className={`py-2 px-4  ${
						tab === 1
							? "bg-white shadow-sm shadow-slate-200 border-[#eeeeee] border text-gray-800"
							: "text-gray-500"
					} text-lg rounded-full font-satoshi font-semibold cursor-pointer`}
				>
					Experiences
				</a>
				<a
					href="#projects"
					onClick={() => setTab(2)}
					className={`py-2 px-4  ${
						tab === 2
							? "bg-white shadow-sm shadow-slate-200 border-[#eeeeee] border text-gray-800"
							: "text-gray-500"
					} text-lg rounded-full font-satoshi font-semibold cursor-pointer`}
				>
					Projects
				</a>
			</Box>
			<a href="#connect">
				<Box className="w-12 h-12 bg-white flex justify-center items-center rounded-full shadow-slate-400  shadow-xl">
					<Tooltip
						TransitionComponent={Grow}
						TransitionProps={{ timeout: 500 }}
						title="Let's Connect"
						arrow
					>
						<Avatar
							variant="circular"
							sx={{
								width: "48px",
								height: "48px",
								cursor: "pointer",
								background: "transparent",
							}}
						>
							<ForwardToInboxRounded
								fontSize="medium"
								className="text-gray-700"
							/>
						</Avatar>
					</Tooltip>
				</Box>
			</a>
		</div>
	);
};
