import React from "react";
import { allProjects } from "../Data/ProjectsData";
import { ChevronLeftRounded, OpenInNewRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const AllProjects = () => {
	return (
		<div className="w-full flex flex-col gap-8 md:gap-16 px-4 md:px-60 mt-32 md:mt-40">
			<Link
				to="/"
				className="text-xl md:text-3xl font-bold text-slate-600 tracking-widest flex items-center hover:underline hover:decoration-orange hover:underline-offset-8"
			>
				<ChevronLeftRounded fontSize="large" />
				Home
			</Link>
			{allProjects.map((project) => (
				<div
					key={project.id}
					className="relative shadow-xl shadow-slate-400 rounded-lg"
				>
					<div className="brightness-50 rounded-lg min-h-[350px] max-h-[700px] ">
						<img
							src={project.image}
							alt=""
							className="max-h-[700px] min-h-[350px] w-full"
						/>
					</div>
					<div className="absolute bottom-0 left-0 flex flex-col gap-2 p-6 md:p-20 rounded-lg">
						<span className="text-lg md:text-5xl text-lightGrey font-bold tracking-wider">
							{project.title}
						</span>
						<span className="text-sm md:text-3xl text-lightGrey font-semibold">
							{project.type}
						</span>

						<div className="md:my-4 flex flex-col gap-2">
							{project.description.map((description) => (
								<span className="text-xs md:text-xl text-lightGrey font-medium tracking-wide">
									{description}
								</span>
							))}
						</div>

						<div className="flex flex-wrap gap-2">
							{project.skills.map((skill) => (
								<span className="bg-slate-800 text-gray-100 p-1 md:p-2 rounded-lg font-bold text-xs md:text-base shadow-lg">
									{skill}
								</span>
							))}
						</div>
						<div className="flex gap-8">
							<button
								onClick={() => {
									if (project.sourceCode !== "") {
										window.open(project.sourceCode);
									}
								}}
								className="border flex justify-center items-center gap-2 border-white shadow-xl rounded-lg text-xs md:text-base font-extrabold text-white w-fit py-1 px-2 md:py-2 md:px-4 md:my-4
                                transition transform ease-in delay-50 hover:scale-105 hover:text-orange hover:bg-white "
							>
								Source Code <OpenInNewRounded />
							</button>
							{project.live !== "#" && (
								<button
									onClick={() => {
										if (project.live !== "#") {
											window.open(project.live);
										}
									}}
									className="border flex justify-center items-center gap-2 border-white shadow-xl rounded-lg text-xs md:text-base font-extrabold text-white w-fit py-1 px-2 md:py-2 md:px-4 md:my-4
                                transition transform ease-in delay-50 hover:scale-105 hover:text-orange hover:bg-white "
								>
									Live Project <OpenInNewRounded />
								</button>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
