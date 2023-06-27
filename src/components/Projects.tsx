import React, { FunctionComponent, ReactElement } from "react";
import { ProjectsData } from "../Data/ProjectsData";
import { OpenInBrowser } from "@mui/icons-material";

type TProps = {
	isMobile: boolean;
};

export const Projects: FunctionComponent<TProps> = ({
	isMobile,
}): ReactElement => {
	return (
		<div className="flex flex-col gap-8 font-satoshi px-6 md:px-40 z-1">
			<div className="h-[100px]" id="projects"></div>
			<span className="text-gray-700 tracking-wide font-bold text-3xl md:text-5xl">
				Projects
			</span>
			<div className="w-full flex flex-col gap-8">
				{ProjectsData.map((project) => (
					<div
						key={project.id}
						className="relative shadow-xl shadow-slate-400 rounded-lg"
					>
						<div className="brightness-50 rounded-lg min-h-[240px] max-h-[700px] ">
							<img
								src={project.images[0]}
								alt=""
								className="max-h-[700px] min-h-[240px] w-full"
							/>
						</div>
						<div className="absolute bottom-0 left-0 flex flex-col gap-2 p-6 md:p-20 rounded-lg">
							<span className="text-lg md:text-5xl text-lightGrey font-bold tracking-wider">
								{project.title}
							</span>
							<span className="text-sm md:text-3xl text-lightGrey font-semibold">
								{project.type} · {project.date}
							</span>
							<span className="text-sm md:text-lg text-lightGrey font-medium tracking-wide">
								Project difficulty: {project.difficulty}
							</span>
							<span className="text-xs md:text-xl text-lightGrey font-medium tracking-wide md:my-4">
								{project.description}
							</span>

							<div className="flex flex-wrap gap-2">
								{project.skills.split(",").map((skill) => (
									<span className="bg-slate-800 text-gray-100 p-1 md:p-2 rounded-lg font-bold text-xs md:text-base shadow-lg">
										{skill}
									</span>
								))}
							</div>
							<button
								onClick={() => {
									if (project.link.url !== "") {
										window.open(project.link.url);
									}
								}}
								className="border flex justify-center items-center gap-2 border-white shadow-xl rounded-lg text-xs md:text-base font-extrabold text-white w-fit py-1 px-2 md:py-2 md:px-4 md:my-4
                                transition transform ease-in delay-50 hover:scale-105 hover:text-orange hover:bg-white "
							>
								{project.link.text} <OpenInBrowser />
							</button>
						</div>
						{!isMobile && (
							<div className="absolute bottom-0 right-0 p-20 flex flex-col gap-4">
								{project.images.slice(1).map((image) => (
									<img
										src={image}
										alt=""
										className="w-[350px] border border-[#eeeeee] rounded-md shadow-xl transition transform ease-in delay-50 hover:scale-105 cursor-pointer"
									/>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
