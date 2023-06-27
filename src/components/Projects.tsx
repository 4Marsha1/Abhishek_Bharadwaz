import React, { FunctionComponent, ReactElement } from "react";
import { ProjectsData } from "../Data/ProjectsData";
import { OpenInBrowser } from "@mui/icons-material";

export const Projects: FunctionComponent = (): ReactElement => {
	return (
		<div className="flex flex-col gap-8 font-satoshi px-40">
			<div className="h-[100px]" id="projects"></div>
			<span className="text-gray-700 tracking-wide font-bold text-5xl">
				Projects
			</span>
			<div className="w-full flex flex-col gap-8">
				{ProjectsData.map((project) => (
					<div
						key={project.id}
						className="relative shadow-xl shadow-slate-400 rounded-lg"
					>
						<div className="brightness-50 rounded-lg max-h-[700px] ">
							<img
								src={project.images[0]}
								alt=""
								className="max-h-[700px] w-full"
							/>
						</div>
						<div className="absolute bottom-0 left-0 flex flex-col gap-2 p-20 rounded-lg">
							<span className="text-5xl text-lightGrey font-bold tracking-wider">
								{project.title}
							</span>
							<span className="text-3xl text-lightGrey font-semibold">
								{project.type} · {project.date}
							</span>
							<span className="text-lg text-lightGrey font-medium tracking-wide">
								Project difficulty: {project.difficulty}
							</span>
							<span className="text-xl text-lightGrey font-medium tracking-wide my-4">
								{project.description}
							</span>

							<div className="flex flex-wrap gap-2">
								{project.skills.split(",").map((skill) => (
									<span className="bg-slate-800 text-gray-100 px-2 py-2 rounded-lg font-bold text-base shadow-lg">
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
								className="border flex justify-center items-center gap-2 border-white shadow-xl rounded-lg text-base font-extrabold text-white w-fit py-2 px-4 my-4
                                transition transform ease-in delay-50 hover:scale-105 hover:text-orange hover:bg-white "
							>
								{project.link.text} <OpenInBrowser />
							</button>
						</div>
						<div className="absolute bottom-0 right-0 p-20 flex flex-col gap-4">
							{project.images.slice(1).map((image) => (
								<img
									src={image}
									alt=""
									className="w-[350px] border border-[#eeeeee] rounded-md shadow-xl transition transform ease-in delay-50 hover:scale-105 cursor-pointer"
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
